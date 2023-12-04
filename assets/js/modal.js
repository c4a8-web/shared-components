import State from './state.js';
import Events from './events.js';
import Form from './components/form.js';
import FormAttachments from './components/form-attachments.js';
import JobListings from './job-listings.js';
import Tools from './tools.js';

class Modal {
  static rootSelector = '.modal';
  static instances = [];

  constructor(root, options) {
    this.root = root;
    this.options = options;

    this.closeSelector = '.modal__close';
    this.successCloseSelector = '.modal__success-close .cta';
    this.applicationSelector = '.modal__application';
    this.modalSuccessHeadlineSelector = '.modal__success-headline > *';
    this.buttonSelector = '[data-trigger="modal"]';
    this.formSelector = '.form';

    this.close = this.root.querySelector(this.closeSelector);
    this.successClose = this.root.querySelector(this.successCloseSelector);
    this.application = this.root.querySelector(this.applicationSelector);
    this.form = this.root.querySelector(this.formSelector);
    this.modalId = this.root.dataset.modalId;

    this.root.classList.add(State.READY);

    if (this.application) {
      this.clientName = this.root.dataset.clientName;
      this.apiUrl = this.root.dataset.apiUrl;
      this.jobId = this.root.dataset.jobId;

      this.api = new JobListings({
        ...(this.jobId && { jobId: this.jobId }),
        ...(this.apiUrl && { apiUrl: this.apiUrl }),
        client_name: this.clientName,
      });
    }

    this.bindEvents();
  }

  isNotVueApp(parent) {
    return parent.getAttribute('data-v-app') === null;
  }

  bindEvents() {
    this.close?.addEventListener('click', this.handleClose.bind(this));
    this.successClose?.addEventListener('click', this.handleClose.bind(this));

    if (this.application) {
      const parent = this.root.parentNode;
      const formInstance = Form.getInstance(this.form);

      if (parent && this.isNotVueApp(parent)) {
        const button = parent.querySelector(this.buttonSelector);

        button?.addEventListener('click', this.handleOpen.bind(this));
      } else if (parent) {
        const buttons = document.querySelectorAll(`[data-trigger-id='${this.modalId}']`);

        buttons.forEach((button) => button.addEventListener('click', this.handleOpen.bind(this)));
      }

      if (formInstance && formInstance.canHaveCustomSubmit()) {
        formInstance.customSubmit = this.handleApplicationSubmit.bind(this);
      }
    }

    document.addEventListener(Events.OPEN_MODAL, this.handleModalOpen.bind(this));
  }

  handleModalOpen(e) {
    e.stopImmediatePropagation();

    const id = e?.detail?.id;

    if (!id || id !== this.modalId) return;

    this.handleOpen(e);
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

    console.log('🚀 ~ file: modal.js:107 ~ Modal ~ handleApplicationSubmit ~ fileData:', fileData);
    if (fileData) {
      if (base64Value) {
        // fields = this.api.applyFileData(fileData, base64Value, fields);
        this.handleApplicationRequest(fields, fileData, base64Value);
      } else {
        Tools.toBase64(fileData).then((data) => {
          // fields = this.api.applyFileData(fileData, data, fields);
          this.handleApplicationRequest(fields, fileData, data);
        });
      }
    } else {
      console.error('handle generic error no files');

      this.handleError();
    }
  }

  handleApplicationRequest(fields, fileData, base64Value) {
    this.api
      .applyFileData(fileData, base64Value, fields)
      .then((newFields) => {
        this.api
          .handleApply(newFields)
          .then(() => {
            this.handleApplicationSuccess(newFields);
          })
          .catch((e) => {
            this.handleError(e);
          });
      })
      .catch((e) => {
        this.handleError(e);
      });
  }

  handleApplicationSuccess(fields) {
    this.root.classList.add(State.SUCCESS);

    const modalSuccessHeadline = this.root.querySelector(this.modalSuccessHeadlineSelector);
    if (modalSuccessHeadline) {
      if (!modalSuccessHeadline.dataset.text) {
        modalSuccessHeadline.dataset.text = modalSuccessHeadline.innerText;
      }

      const firstName = fields[0];
      modalSuccessHeadline.innerText = `${modalSuccessHeadline.dataset.text} ${firstName.value}`;
    }
  }

  handleError(e) {
    const message = typeof e === 'string' ? e : e.message;

    console.error(`Error ${message}`);
    // TODO add the generic error message here
  }

  handleClose(e) {
    e.preventDefault();

    Modal.close(this.root);
  }

  handleOpen(e) {
    e.preventDefault();

    Modal.open(this.root);
  }

  static initElement(element, options) {
    const instance = new this(element, options);

    this.instances.push(instance);

    return instance;
  }

  static open(element) {
    if (element && window.$) {
      // TODO replace with custom event trigger ?
      $(element).modal('show');
    }
  }

  static close(element) {
    if (element && window.$) {
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
