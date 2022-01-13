import State from './state.js';
import Form from './components/form.js';
import FormAttachments from './components/form-attachments.js';
import RecruiterBox from './recruiter-box.js';
import Tools from './tools.js';
// import { initComponentList } from './index.js';

class Modal {
  static rootSelector = '.modal';
  static instances = [];

  constructor(root, options) {
    this.root = root;
    this.options = options;

    this.closeSelector = '.modal__close';
    this.successCloseSelector = '.modal__success-close .cta';
    this.applicationSelector = '.modal__application';
    this.formSelector = '.form';

    this.close = this.root.querySelector(this.closeSelector);
    this.successClose = this.root.querySelector(this.successCloseSelector);
    this.application = this.root.querySelector(this.applicationSelector);
    this.form = this.root.querySelector(this.formSelector);

    this.root.classList.add(State.READY);

    if (this.application) {
      this.clientName = this.root.dataset.clientName;
      this.apiUrl = this.root.dataset.apiUrl;
      this.jobId = this.root.dataset.jobId;

      this.api = new RecruiterBox({
        ...(this.jobId && { jobId: this.jobId }),
        ...(this.apiUrl && { apiUrl: this.apiUrl }),
        client_name: this.clientName,
      });
    }

    this.bindEvents();
  }

  bindEvents() {
    this.close?.addEventListener('click', this.handleClose.bind(this));
    this.successClose?.addEventListener('click', this.handleClose.bind(this));

    if (this.application) {
      const formInstance = Form.getInstance(this.form);

      if (formInstance) {
        formInstance.customSubmit = this.handleApplicationSubmit.bind(this);
      }
    }
  }

  handleApplicationSubmit(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const base64 = this.form.querySelector(FormAttachments.base64Selector);
    const base64Value = base64?.value;
    let fields = this.api.getFormData(this.form);

    let fileData;

    if (base64Value) {
      fileData = {
        name: base64.dataset.fileName,
      };
    } else {
      const fileInput = this.form.querySelector('input[type="file"]');

      fileData = fileInput?.files[0];
    }

    if (fileData) {
      if (base64Value) {
        fields = this.api.applyFileData(fileData, base64Value, fields);
        this.handleApplicationRequest(fields);
      } else {
        Tools.toBase64(fileData).then((data) => {
          fields = this.api.applyFileData(fileData, data, fields);
          this.handleApplicationRequest(fields);
        });
      }
    } else {
      console.log('handle generic error no files');

      // this.handleApplyError({
      //   errors: 'no files',
      // });
    }
  }

  handleApplicationRequest(fields) {
    this.api.handleApply(fields).then().catch();
  }

  handleClose(e) {
    e.preventDefault();

    Modal.close(this.root);
  }

  static initElement(element, options) {
    const instance = new this(element, options);

    this.instances.push(instance);

    return instance;
  }

  static open(element) {
    if (window.$) {
      // TODO replace with custom event trigger ?
      $(element).modal('show');
    }
  }

  static close(element) {
    if (window.$) {
      $(element).modal('hide');

      Modal.resetModal(element);
    }
  }

  static resetModal(element) {
    setTimeout(function () {
      const form = element.querySelector('form');

      form?.reset();

      element.classList.remove(State.SUCCESS);
    }, 200);
  }

  static init(element) {
    this.instances = [];

    const selectedElement = element || document;
    const notReadySelector = `${this.rootSelector}:not(.${State.READY})`;

    [].forEach.call(selectedElement.querySelectorAll(notReadySelector), (element) => {
      this.initElement(element);
    });
  }
}

export default Modal;
