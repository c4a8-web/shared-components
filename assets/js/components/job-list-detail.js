import BaseComponent from './base-component.js';
import RecruiterBox from '../recruiter-box.js';
import State from '../state.js';
import Modal from '../modal.js';
import Tools from '../tools.js';
import Form from './form.js';
import FormAttachments from './form-attachments.js';
import Loading from '../loading.js';

class JobListDetail extends BaseComponent {
  static rootSelector = '.job-list__detail';

  constructor(root, options) {
    super(root, options);

    this.containerSelector = '.job-list__detail-container';
    this.headlineSelector = '.job-list__detail-headline';
    this.ctaSelector = '.job-list__detail-cta .cta';
    this.introSelector = '.job-list__detail-intro';
    this.descriptionSelector = '.job-list__detail-description';
    this.backSelector = '.job-list__detail-back';
    this.hasBackClass = 'job-list__detail--has-back';

    this.modal = this.root.querySelector('.modal');
    this.modalForm = this.modal?.querySelector('.form');

    this.loadingDelay = 300;
    this.base = this.root.dataset.base ? JSON.parse(this.root.dataset.base) : undefined;
    this.apiUrl = this.root.dataset.apiUrl;

    this.templates = window.Templates;

    this.loading = new Loading(this.root);

    this.preInit();
    this.init();
  }

  preInit() {
    this.root.dataset.jobId = this.getJobId();
  }

  showBackButton() {
    // TODO check why referrer is empty on staging. propably due to content security policy

    if (document.referrer.indexOf(document.location.host) !== -1) {
      this.root.classList.add(this.hasBackClass);
    }
  }

  getJobId() {
    let jobId = '';

    const hash = window.location.hash;

    if (hash) {
      if (hash.indexOf('-') !== -1) {
        const splitHash = hash.split('-');

        jobId = splitHash[splitHash.length - 1];
      } else {
        jobId = hash.substr(1);
      }
    }

    return jobId;
  }

  init() {
    this.loading.on();

    this.jobId = this.root.dataset.jobId;

    this.api = new RecruiterBox({
      ...this.options,
      ...(this.jobId && { jobId: this.jobId }),
      ...(this.apiUrl && { apiUrl: this.apiUrl }),
      client_name: this.root.dataset.id,
    });

    this.showBackButton();

    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.loadJob();
      });
    } else {
      this.loadJob();
    }
  }

  stopLoading() {
    setTimeout(() => {
      this.root.classList.remove(State.LOADING);
    }, this.loadingDelay);
  }

  queryElements() {
    this.back = this.root.querySelector(this.backSelector);
    this.cta = this.root.querySelector(this.ctaSelector);
  }

  bindEvents() {
    this.queryElements();

    this.back?.addEventListener('click', this.handleBack.bind(this));
    this.cta?.addEventListener('click', this.handleCta.bind(this));

    const modalFormInstance = Form.getInstance(this.modalForm);

    if (modalFormInstance) {
      modalFormInstance.customSubmit = this.handleSubmit.bind(this);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const base64 = this.modalForm.querySelector(FormAttachments.base64Selector);
    const base64Value = base64?.value;
    const fields = this.api.getFormData(this.modalForm);

    let fileData;

    if (base64Value) {
      fileData = {
        name: base64.dataset.fileName,
      };
    } else {
      const fileInput = this.modalForm.querySelector('input[type="file"]');

      fileData = fileInput?.files[0];
    }

    if (fileData) {
      if (base64Value) {
        this.applyFileData(fileData, base64Value, fields);
      } else {
        Tools.toBase64(fileData).then((data) => {
          this.applyFileData(fileData, data, fields);
        });
      }
    } else {
      this.handleApplyError({
        errors: 'no files',
      });
    }
  }

  applyFileData(fileData, data, fields) {
    const file = {
      key: 'resume',
      value: {
        encoded_data: data,
        file_name: fileData.name,
      },
    };

    fields.push(file);

    this.handleApply(fields);
  }

  handleApply(fields) {
    this.api
      .apply({ fields })
      .then((response) => {
        if (response.status === 201 || response.status === 204) return this.handleApplySuccess(fields);

        response.json().then((jsonResponse) => {
          // console.log('JobListDetail ~ .then ~ jsonResponse', jsonResponse);
          if (jsonResponse.errors && this.handleApplyError(jsonResponse.errors)) return null;
        });
      })
      .catch((error) => {
        this.handleApplyError(error);
      });
  }

  handleApplySuccess(response) {
    this.modal.classList.add(State.SUCCESS);

    const modalSuccessHeadline = this.modal.querySelector('.modal__success-headline > *');

    if (modalSuccessHeadline) {
      if (!modalSuccessHeadline.dataset.text) {
        modalSuccessHeadline.dataset.text = modalSuccessHeadline.innerText;
      }

      const firstName = response[0];

      modalSuccessHeadline.innerText = `${modalSuccessHeadline.dataset.text} ${firstName.value}`;
    }
  }

  handleApplyError(errors) {
    // console.log('JobListDetail ~ handleApplyError ~ errors', errors);
    // TODO define error case with kristin
  }

  handleCta() {
    Modal.open(this.modal);
  }

  handleBack() {
    window.history.back();
  }

  loadJob() {
    setTimeout(() => {
      this.api
        ?.getOpening()
        .then((response) => response.json())
        .then((data) => {
          this.handleJob(data);
        })
        .catch((error) => {
          console.error('Job-list Error:', error);
        });
    }, this.loadingDelay);
  }

  handleJob(entry) {
    const localEntry = entry.objects ? entry.objects[0] : entry;

    if (localEntry && localEntry.location) {
      const gender = window.i18n?.translate('gender');

      const { city } = localEntry?.location || {};
      const { title, position_type, team, description } = localEntry;

      const entryData = {
        city,
        description,
        title,
        gender,
        team,
        positionType: position_type !== '' ? window.i18n?.translate(position_type) : null,
        isInvisible: this.maxItems > 0 && i > this.maxItems - 1 ? true : false,
        ...(this.base && { ...this.base }),
      };

      this.templates.setPreRender(() => {
        this.root.classList.add(State.HIDE_LOADING);
        this.loading.off(true);
      });

      this.templates?.load('job-list-detail', entryData).then((html) => {
        this.appendHtml(html);
        this.bindEvents();
        this.stopLoading();
      });
    } else {
      console.error('handleJob has no entry');
    }
  }

  appendHtml(html) {
    const container = this.root.querySelector(this.containerSelector);
    const fullHtml = document.createElement('div');

    fullHtml.innerHTML = html;

    const newContainer = fullHtml.querySelector(this.containerSelector);

    if (container && newContainer) {
      Tools.replace(container.querySelector(this.introSelector), newContainer.querySelector(this.introSelector));
      Tools.replace(
        container.querySelector(this.descriptionSelector),
        newContainer.querySelector(this.descriptionSelector)
      );
    }
  }
}

export default JobListDetail;
