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
  static regularExpression =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,6})+$/;

  constructor(root, options, vueValidate, hasRecaptcha, siteKey) {
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
    this.vueValidate = vueValidate;
    this.hasRecaptcha = hasRecaptcha;
    this.recaptchaName = 'g-recaptcha-response';
    this.siteKey = siteKey;
    this.hasSubmitHandling = false;

    if (!this.form) return console.debug('From root has no form', this.root);

    this.addCustomValidationRules();

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

  addCustomValidationRules() {
    // TODO remove this or incorporate in the new validation logic
    if (window.$ && $.validator) {
      $.validator.methods.email = function (value, element) {
        return this.optional(element) || Form.regularExpression.test(value);
      };
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

  isOdooForm() {
    return this.root.classList.contains('form--odoo');
  }
  bindEvents() {
    if (
      Object.keys(this.groups).length ||
      this.isOdooForm() ||
      this.hasCustomValidation() ||
      this.hasAjaxSubmit() ||
      this.isCompanyForm()
    ) {
      this.form.addEventListener('submit', this.handleSubmit.bind(this));
      this.form.addEventListener('reset', this.handleReset.bind(this));
      this.hasSubmitHandling = true;
    }
  }

  addSubjectListener() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.hasSubmitHandling = true;
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

  handleDefaultSubmit(e) {
    e.preventDefault();
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

  handleRecaptcha() {
    const recaptcha = window.grecaptcha;

    return new Promise((resolve) => {
      if (!this.hasRecaptcha) {
        resolve(true);
      } else {
        if (!recaptcha) return resolve(true);

        recaptcha.ready(() => {
          recaptcha
            .execute(this.siteKey, {
              action: 'submit',
            })
            .then((token) => {
              this.reCaptchaField = { value: token };

              resolve(true);
            });
        });
      }
    });
  }

  addRecaptchaField() {
    if (!this.hasRecaptcha) return;

    const recpatchaField = this.form.querySelector(`.${this.recaptchaName}`);

    if (recpatchaField) return;

    const input = document.createElement('input');

    input.type = 'hidden';
    input.name = this.recaptchaName;
    input.value = this.reCaptchaField?.value;

    this.form.appendChild(input);
  }

  submit(e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    this.handleRecaptcha().then(() => {
      const url = window.location.pathname;
      const urlSegments = url.split('/').filter(Boolean);
      const page = urlSegments[urlSegments.length - 1];
      const lang = urlSegments[0];
      const date = new Date().toISOString();
      const formData = {
        name: this.form.querySelector('input[name="name"]')?.value || '',
        company: this.form.querySelector('input[name="company"]')?.value || '',
        email: this.form.querySelector('input[name="email"]')?.value || '',
        message: this.form.querySelector('textarea[name="message"]')?.value || '',
        dataprotection: this.form.querySelector('input[name="dataprotection"]')?.checked || false,
        _subject: page,
        submit_date: date,
        language: lang,
        url: url,
      };

      // TODO formData is only used for ajax requests and they should not validate the recaptcha
      // if (this.reCaptchaField) {
      //   formData[this.recaptchaName] = this.reCaptchaField.value;
      // }

      this.addRecaptchaField();

      const jsonDataInput = this.form.querySelector('input[name*="jsonData"]');

      if (jsonDataInput) {
        jsonDataInput.value = JSON.stringify(formData);
        /*
        const jsonFile = new File([JSON.stringify(formData, null, 2)], 'form-data.json', { type: 'application/json' });

        const fileInput =
          this.form.querySelector('#jsonFileAttachment') ||
          (() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.id = 'jsonFileAttachment';
            input.name = 'jsonFileAttachment';
            this.form.appendChild(input);
            return input;
          })();

        if (fileInput) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(jsonFile);
          fileInput.files = dataTransfer.files;
        }
          */
      }

      this.updateSubject();

      if (this.isOdooForm()) {
        this.submitOdooForm();
      } else if (this.customSubmit) {
        this.customSubmit(e);
      } else if (this.hasAjaxSubmit()) {
        this.ajaxSubmit();
      } else {
        this.form.submit();
      }
    });
  }

  // Scopes ids per form instance so two forms on one page cannot collide. Names stay
  // unscoped, since that is what the backend receives.
  static getScopedId(prefix, fieldId) {
    if (!prefix || !fieldId) return fieldId;

    return `${prefix}${this.delimiter}${fieldId}`;
  }

  static getName(string) {
    if (string.includes(this.delimiter)) {
      const delimiterIndex = string.indexOf(this.delimiter);

      return string.slice(delimiterIndex + this.delimiter.length);
    }

    return string;
  }

  // TODO for some reason this is duplicated. figure out if this is needed somewhere else or which code is used normally
  // static getFormData(form) {
  //   const formData = new FormData(form);
  //   const data = [];

  //   for (let fieldData of formData) {
  //     data.push(encodeURIComponent(fieldData[0]) + '=' + encodeURIComponent(fieldData[1]));
  //   }

  //   return data.join('&');
  // }

  submitOdooForm() {
    const payload = {};
    Form.getFormData(this.form).forEach((item) => {
      if (item.input && item.input.name) {
        const cleanName = Form.getName(item.input.name);
        payload[cleanName] = item.value;
      }
    });

    payload.eventId = Number(this.form.querySelector('input[name*="eventId"]')?.value) || '';

    fetch('https://webinar-prod-function.azurewebsites.net/api/events/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => {
      if (response.status === 200 || response.status === 302) {
        if (this.root.closest('.modal')) {
          this.root.closest('.modal')?.classList.add(State.SUCCESS);
        } else {
          window.location.href = this.form.action;
        }
      } else {
        // TODO handle error
      }
    });
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
    })
      .then((response) => {
        if (response.ok || response.status === 302) {
          this.ajaxSubmitCompleted();
        } else {
          this.ajaxSubmitFailed(response);
        }
      })
      .catch((error) => {
        this.ajaxSubmitFailed(error);
      });
  }

  ajaxSubmitFailed(error) {
    this.onAjaxError?.(error);

    document.dispatchEvent(
      new CustomEvent(Events.FORM_AJAX_ERROR, {
        detail: { target: this.root, error },
      })
    );
  }

  ajaxSubmitCompleted() {
    this.onAjaxSuccess?.();

    document.dispatchEvent(
      new CustomEvent(Events.FORM_AJAX_SUBMIT, {
        detail: { target: this.root },
      })
    );
  }

  validate(e) {
    let result = typeof this.vueValidate === 'function' ? this.vueValidate() : true;

    if (!this.isValid(e)) {
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
    return group ? group.filter((obj) => obj.getAttribute('type') === type) : null;
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

      if (!group) return;

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

  static isOptionalInputInvisible(input) {
    return input?.parentNode?.classList.contains('form-field--show-in') && input.offsetParent === null;
  }

  static getFormData(form) {
    if (form === null || form === undefined) return [];

    const data = [];
    let isNewsletter = false;

    if (form instanceof HTMLFormElement) {
      const inputs = new FormData(form);

      for (let fieldData of inputs) {
        data.push(encodeURIComponent(fieldData[0]) + '=' + encodeURIComponent(fieldData[1]));
      }

      isNewsletter = data.some((item) => item === 'newsletterModal=true');

      if (isNewsletter) {
        return data.join('&');
      } else {
        this.getFields(form, data);
      }
    } else {
      this.getFields(form, data);
    }
    return data;
  }

  static getFields(form, data) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];

      if (this.isOptionalInputInvisible(input)) continue;

      let value;

      if (input.type === 'text' || input.type === 'email' || input.tagName === 'TEXTAREA') {
        value = input.value;
      } else {
        // TODO handle select
      }

      data.push({
        input,
        value,
      });
    }
  }
}

export default Form;
