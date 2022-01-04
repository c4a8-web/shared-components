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

    this.button = this.root.querySelector(this.buttonSelector);
    this.text = this.root.querySelector(this.textSelector);
    this.file = this.root.querySelector(this.fileSelector);
    this.base64 = this.root.querySelector(FormAttachments.base64Selector);

    this.isRequired = this.file.required;

    this.bindEvents();
  }

  bindEvents() {
    this.root.addEventListener('drag', this.handleDragStart.bind(this));
    this.root.addEventListener('dragstart', this.handleDragStart.bind(this));

    this.root.addEventListener('dragover', this.handleDragOver.bind(this));
    this.root.addEventListener('dragenter', this.handleDragOver.bind(this));

    this.root.addEventListener('drop', this.handleDrop.bind(this));
    this.root.addEventListener('dragleave', this.handleDrop.bind(this));
    this.root.addEventListener('dragend', this.handleDrop.bind(this));

    this.button?.addEventListener('click', this.handleAddAttachment.bind(this));
    this.text?.addEventListener('click', this.handleAddAttachment.bind(this));
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
    const fileExtension = file.name.split('.')[1];

    return allowedExtensions.includes(`.${fileExtension}`);
  }

  handleDroppedFiles(droppedFiles) {
    const droppedFile = droppedFiles[0];

    if (!this.isAllowedFileExtension(droppedFile)) return;

    Tools.toBase64(droppedFile).then((data) => {
      this.appendDroppedFile(data, droppedFile.name);
      this.switchText(droppedFiles);
    });
  }

  handleAddAttachment() {
    this.file.click();
  }

  resetText() {
    this.text.innerText = this.text.dataset.text;
  }

  resetError() {
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
      if (!this.text.dataset.text) {
        this.text.dataset.text = this.text.innerText;
      }

      this.text.innerHTML = `${fileName} <nobr>( ${Tools.toSize(file.size)} )</nobr>`;
      this.resetError();
    } else {
      this.resetText();
    }
  }

  handleChange(event) {
    this.resetDroppedFile();

    if (this.file.value === '') {
      this.resetText();
    } else {
      this.switchText(event?.target?.files);
    }
  }
}

export default FormAttachments;
