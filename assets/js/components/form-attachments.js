import BaseComponent from './base-component.js';
import Tools from '../tools.js';

class FormAttachments extends BaseComponent {
  static rootSelector = '.form-attachments';

  constructor(root, options) {
    super(root, options);

    this.buttonSelector = '.form-attachments__button';
    this.textSelector = '.form-attachments__text';
    this.fileSelector = '.form-attachments__file';

    this.button = this.root.querySelector(this.buttonSelector);
    this.text = this.root.querySelector(this.textSelector);
    this.file = this.root.querySelector(this.fileSelector);

    this.bindEvents();
  }

  bindEvents() {
    this.button?.addEventListener('click', this.handleAddAttachment.bind(this));
    this.text?.addEventListener('click', this.handleAddAttachment.bind(this));
    this.file?.addEventListener('change', this.handleChange.bind(this));
  }

  handleAddAttachment() {
    this.file.click();
  }

  resetText() {
    this.text.innerText = this.text.dataset.text;
  }

  switchText(files) {
    const file = files[0];
    const fileName = file?.name ?? null;

    if (fileName) {
      this.text.dataset.text = this.text.innerText;

      this.text.innerText = `${fileName} ( ${Tools.toSize(file.size)} )`;
    } else {
      this.resetText();
    }
  }

  handleChange(event) {
    if (this.file.value === '') {
      this.resetText();
    } else {
      this.switchText(event?.target?.files);
    }
  }
}

export default FormAttachments;
