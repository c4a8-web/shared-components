import BaseComponent from './base-component.js';
import Tools from '../tools.js';
import State from '../state.js';

class FormAttachments extends BaseComponent {
  static rootSelector = '.form-attachments';
  static base64Selector = '.form-attachments__base64';

  constructor(root, options) {
    super(root, options);

    this.buttonSelector = '.form-attachments__button';
    this.textSelector = '.form-attachments__text';
    this.fileSelector = '.form-attachments__file';
    this.errorSelector = '.form-attachments__error';

    this.button = this.root.querySelector(this.buttonSelector);
    this.text = this.root.querySelector(this.textSelector);
    this.file = this.root.querySelector(this.fileSelector);
    this.error = this.root.querySelector(this.errorSelector);
    this.base64 = this.root.querySelector(FormAttachments.base64Selector);

    this.isRequired = this.file.required;
    this.requiredMsg = this.error?.innerText;

    this.bindEvents();

    this.text.dataset.text = this.text.innerText.trim();

    window.i18n?.loader?.then(() => {
      this.wrongTypeText = window.i18n?.translate('formAttachmentsWrongType');
    });
  }

  bindEvents() {
    this.root.addEventListener('drag', this.handleDragStart.bind(this));
    this.root.addEventListener('dragstart', this.handleDragStart.bind(this));

    this.root.addEventListener('dragover', this.handleDragOver.bind(this));
    this.root.addEventListener('dragenter', this.handleDragOver.bind(this));

    this.root.addEventListener('drop', this.handleDrop.bind(this));
    this.root.addEventListener('dragleave', this.handleDrop.bind(this));
    this.root.addEventListener('dragend', this.handleDrop.bind(this));

    this.root.addEventListener('click', this.handleAddAttachment.bind(this));
    this.file?.addEventListener('change', this.handleChange.bind(this));

    const parent = Tools.getParent(this.root, 'form');

    parent?.addEventListener('reset', this.resetText.bind(this));
  }

  handleDragStart(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    window.clearTimeout(this.dropTimeout);

    this.root.classList.add(State.DRAGGING);
  }

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e?.dataTransfer?.files;

    this.dropTimeout = window.setTimeout(() => {
      this.root.classList.remove(State.DRAGGING);

      if (e.type !== 'drop') return;

      this.handleDroppedFiles(droppedFiles);
    }, 50);
  }

  isAllowedFileExtension(file) {
    const accept = this.file.getAttribute('accept')?.toLowerCase();
    const allowedExtensions = accept?.split(',') || [];
    const fileExtension = Tools.getExtension(file.name);

    return allowedExtensions.includes(`.${fileExtension}`);
  }

  handleDroppedFiles(droppedFiles) {
    const droppedFile = droppedFiles[0];

    if (!this.isAllowedFileExtension(droppedFile)) return this.showError(this.wrongTypeText);

    Tools.toBase64(droppedFile).then((data) => {
      this.appendDroppedFile(data, droppedFile.name);
      this.switchText(droppedFiles);
    });
  }

  handleAddAttachment() {
    this.file.click();
  }

  showError(text) {
    this.resetFile();
    this.setErrorText(text);

    this.root.classList.add(State.HAS_ERROR);
  }

  setErrorText(text) {
    if (!this.error) return;

    this.error.innerText = text;
  }

  resetText() {
    this.text.innerText = this.text.dataset.text;
  }

  resetError() {
    this.setErrorText(this.requiredMsg);

    this.root.classList.remove(State.HAS_ERROR);
  }

  appendDroppedFile(data, name) {
    if (!this.base64) return;

    if (this.isRequired) {
      this.file.required = false;
    }

    this.file.value = null;
    this.base64.dataset.fileName = name;
    this.base64.value = data;
  }

  resetFile() {
    this.file.value = null;

    this.resetText();
    this.resetDroppedFile();
  }

  resetDroppedFile() {
    if (!this.base64) return;

    if (this.isRequired) {
      this.file.required = true;
    }

    this.base64.removeAttribute('data-file-name');
    this.base64.value = null;
  }

  switchText(files) {
    const file = files[0];
    const fileName = file?.name ?? null;

    if (fileName) {
      this.text.innerHTML = `${fileName} <nobr>( ${Tools.toSize(file.size)} )</nobr>`;
      this.resetError();
    } else {
      this.resetText();
    }
  }

  handleChange(event) {
    if (!this.isAllowedFileExtension(event?.target?.files[0])) return this.showError(this.wrongTypeText);

    this.resetDroppedFile();

    if (this.file.value === '') {
      this.resetText();
    } else {
      this.switchText(event?.target?.files);
    }
  }
}

export default FormAttachments;
