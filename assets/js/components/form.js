import BaseComponent from './base-component.js';
import FormAttachments from './form-attachments.js';
import Tools from '../tools.js';
import State from '../state.js';
import Events from '../events.js';

class Form extends BaseComponent {
  static rootSelector = '.form';
  static instances = [];
  static delimiter = '-formHelper-';
  static noCustomSubmitClass = 'form--no-custom-submit';

  constructor(root, options) {
    super(root, options);

    if (!root) return;

    this.root = root;

    this.formSelector = '.form__form';
    this.gotchaSelector = '.form__super-field';
    this.attachmentSelector = 'input[type="file"][required]';
    this.subjectSelector = 'input[name="_subject"]';
    this.companySelector = 'input[id="company"]';
    this.form = root.querySelector(this.formSelector);
    this.subject = root.querySelector(this.subjectSelector);
    this.company = root.querySelector(this.companySelector);

    this.groups = {};
    this.minLengthOther = 1;
    this.options = options;

    this.updateGotcha();
    this.addValidation();

    if (this.form && this.subject && this.hasUrlParameter()) {
      this.prefillFormValues();
    }

    if (!this.options?.noEvents) {
      this.bindEvents();
    } else if (this.isCompanyForm()) {
      this.addSubjectListener();
    }
  }

  isCompanyForm() {
    return this.form && this.subject && this.company ? true : false;
  }

  hasUrlParameter() {
    if (window.location.search === '') return;

    return true;
  }

  prefillFormValues() {
    const searchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of searchParams.entries()) {
      this.prefillFormValue(key, value);
    }
  }

  prefillFormValue(name, value) {
    const form = this.form;

    if (!form) return;

    const input = form.querySelector(`input[name="${name}"],textarea[name="${name}"]`);

    if (!input) return;

    input.value = value;
  }

  hasCustomValidation() {
    return this.root.classList.contains('form--custom-validation');
  }

  hasAjaxSubmit() {
    return this.root.classList.contains('form--ajax');
  }

  bindEvents() {
    if (Object.keys(this.groups).length || this.hasCustomValidation() || this.hasAjaxSubmit() || this.isCompanyForm()) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      this.form.addEventListener('reset', this.handleReset.bind(this));
    }
  }

  addSubjectListener() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleReset() {
    Form.reset(this.form);
  }

  static reset(form) {
    if (!form || !form.reset) return;

    form.reset();

    [].forEach.call(form.querySelectorAll(`.${State.VALID}`), (element) => {
      element.classList.remove(State.VALID);
    });

    [].forEach.call(form.querySelectorAll(`.${State.ERROR}`), (element) => {
      element.classList.remove(State.ERROR);
    });
  }

  handleSubmit(e) {
    if (this.validate(e)) {
      this.submit(e);
    }
  }

  updateSubject() {
    if (!this.subject || !this.company) return;

    this.subject.value = this.subject.value + ': ' + this.company.value;
  }

  submit(e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    this.updateSubject();

    if (this.customSubmit) {
      this.customSubmit(e);
    } else if (this.hasAjaxSubmit()) {
      this.ajaxSubmit();
    } else {
      this.form.submit();
    }
  }

  static getId(fieldId) {
    const uuidWithDelimiter = Tools.uuid() + this.delimiter + fieldId;

    return uuidWithDelimiter;
  }

  static getName(string) {
    if (string.includes(this.delimiter)) {
      const delimiterIndex = string.indexOf(this.delimiter);

      return string.slice(delimiterIndex + this.delimiter.length);
    }

    return string;
  }

  static getFormData(form) {
    const formData = new FormData(form);
    const data = [];

    for (let fieldData of formData) {
      data.push(encodeURIComponent(fieldData[0]) + '=' + encodeURIComponent(fieldData[1]));
    }

    return data.join('&');
  }

  ajaxSubmit() {
    const data = Form.getFormData(this.form);

    fetch(this.form.action, {
      method: this.form.method || 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow',
      body: data,
    }).then((response) => {
      if (response.status === 200 || response.status === 302) {
        this.ajaxSubmitCompleted();
      } else {
        // TODO handle error
      }
    });
  }

  ajaxSubmitCompleted() {
    document.dispatchEvent(new CustomEvent(Events.FORM_AJAX_SUBMIT, { detail: { target: this.root } }));
  }

  triggerExternalValidation() {
    let result = false;

    if (window.$) {
      const form = $(this.form);

      if (typeof form.validate !== 'function') {
        console.error('form.validate is not a function');

        return true;
      }

      result = form.validate().form();
    }

    return result;
  }

  validate(e) {
    let result = this.triggerExternalValidation();

    if (!this.isValid(e) || result === false) {
      e.stopImmediatePropagation();
      e.preventDefault();

      result = false;
    }

    return result;
  }

  isValid(e) {
    e.stopImmediatePropagation();

    let result = true;
    let isFirstError = true;

    if (this.hasAttachments()) {
      result = this.validateAttachments();
    }

    for (const [_, group] of Object.entries(this.groups)) {
      if (!this.isValidGroup(group)) {
        result = false;

        this.addGroupError(group, isFirstError);

        isFirstError = false;
      }
    }

    return result;
  }

  validateAttachments() {
    let result = true;

    [].forEach.call(this.form.querySelectorAll(FormAttachments.base64Selector), (base64) => {
      if (!base64.value) {
        result = false;
      }
    });

    if (result) return result;

    result = true;

    [].forEach.call(this.form.querySelectorAll(this.attachmentSelector), (attachment) => {
      if (attachment.files.length === 0) {
        result = false;

        this.addAttachmentError(attachment);
      }
    });

    return result;
  }

  addAttachmentError(attachment) {
    const parent = Tools.getParent(attachment, FormAttachments.rootSelector);

    if (parent === null) return;

    parent.classList.add(State.HAS_ERROR);
  }

  hasAttachments() {
    return this.form.querySelector(this.attachmentSelector);
  }

  addGroupError(group, isFirst) {
    for (let i = 0; i < group.length; i++) {
      const parent = this.getGroupParent(group[i]);
      group[i].classList.add(State.ERROR);

      if (parent) {
        if (isFirst) {
          Tools.scrollIntoView(parent);
        }

        this.addErrorMessage(parent);
      }
    }
  }

  addErrorMessage(element) {
    if (element && !element.classList.contains(State.ERROR)) {
      element.classList.add(State.ERROR);

      const error = document.createElement('div');

      error.innerHTML = element.dataset.msg;
      error.classList.add('invalid-feedback');

      element.parentNode.insertBefore(error, element.nextSibling);
    }
  }

  delErrorMessage(element) {
    if (element && element.classList.contains(State.ERROR)) {
      element.classList.remove(State.ERROR);

      const error = element.nextSibling;
      error.remove();
    }
  }

  delGroupError(group) {
    for (let i = 0; i < group.length; i++) {
      const parent = this.getGroupParent(group[i]);
      group[i].classList.remove(State.ERROR);

      if (parent) {
        this.delErrorMessage(parent);
      }
    }
  }

  isValidGroup(group) {
    const length = group.length;

    let isValid = false;

    for (let i = 0; i < length; i++) {
      const element = group[i];

      if (element.type === 'checkbox' && element.checked) {
        isValid = true;
      } else if (element.type === 'radio' && element.checked) {
        isValid = true;
      } else {
        const otherField = element.closest('input[type="text"]');

        if (otherField && !isValid && otherField.value.length >= this.minLengthOther) {
          isValid = true;
        }
      }
    }

    return isValid;
  }

  getGroupByName(name) {
    return this.groups[name];
  }

  addValidation() {
    if (!this.form) return;

    [].forEach.call(this.form.querySelectorAll('[data-form-group]'), (input) => {
      if (input.dataset.formGroup) {
        this.addGroupValidation(input);
        this.addLiveValidation(input);
      }
    });
  }

  isRadio(element) {
    return element?.getAttribute('type') === 'radio' ? true : false;
  }

  isCheckbox(element) {
    return element?.getAttribute('type') === 'checkbox' ? true : false;
  }

  addLiveValidation(element) {
    if (element) {
      if (this.isCheckbox(element) || this.isRadio(element)) {
        element.addEventListener('change', this.handleLiveValidation.bind(this));
      } else {
        element.addEventListener('keyup', this.handleLiveValidation.bind(this));
      }
    }
  }

  groupFilter(group, type) {
    return group.filter((obj) => obj.getAttribute('type') === type);
  }

  handleGroupError(element, group) {
    if (element.checked) {
      this.delGroupError(group);
    } else if (!this.isValidGroup(group)) {
      this.addGroupError(group);
    }
  }

  handleLiveValidation(event) {
    const element = event.currentTarget;

    if (element) {
      const group = this.getGroupByName(element.dataset.formGroup);
      const checkboxes = this.groupFilter(group, 'checkbox');
      const radios = this.groupFilter(group, 'radio');

      if (element.getAttribute('type') === 'checkbox') {
        this.handleGroupError(element, checkboxes);
      } else if (element.getAttribute('type') === 'radio') {
        this.handleGroupError(element, radios);
      } else {
        if (this.isValidGroup(group)) {
          this.delGroupError(group);
        } else {
          this.addGroupError(group);
        }
      }
    }
  }

  getGroupParent(element) {
    return element.closest('.js-form-message')?.querySelector('[data-msg]');
  }

  addGroupValidation(element) {
    const parent = this.getGroupParent(element);

    if (parent) {
      const group = element.dataset.formGroup;

      if (!this.groups[group]) {
        this.groups[group] = [];
      }

      this.groups[group].push(element);
    }
  }

  updateGotcha() {
    const gotcha = this.root.querySelector(this.gotchaSelector);

    gotcha?.classList.add(State.HIDDEN);
  }

  canHaveCustomSubmit() {
    return this.root.classList.contains(Form.noCustomSubmitClass) ? false : true;
  }
}

export default Form;
