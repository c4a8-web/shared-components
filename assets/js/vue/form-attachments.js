import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'form-attachments',
  data() {
    return {
      isDragging: false,
      hasError: false,
    };
  },
  computed: {
    classList() {
      return [
        'form-attachments',
        this.hasError === true ? 'has-error' : '',
        this.isDragging ? State.DRAGGING : '',
        'vue-component',
      ];
    },
    interactableClassList() {
      return ['form-attachments__interactable', this.hasErrors ? State.HAS_ERROR : ''];
    },
    required() {
      return this.required ? 'required' : null;
    },
    maxSizeMb() {
      return this.maxSize / 1000000;
    },
    maxFilesValue() {
      const defaultMaxFiles = 5;

      return this.maxFiles ? this.maxFiles : defaultMaxFiles;
    },
    extensionCollection() {
      return this.extensions.split ? this.extensions.split(',') : this.extensions;
    },
    extensionList() {
      const capitalized = this.extensionCollection.map((extension) => {
        return Tools.capitalize(extension);
      });

      return capitalized?.join(', ');
    },
    extensionListText() {
      return `${this.extensionList} max. ${this.maxSizeMb} MB`;
    },
    acceptList() {
      return this.extensionCollection.map((extension) => `.${extension}`).join(',');
    },
  },
  props: {
    hasError: {
      default: null,
    },
    maxSize: Number,
    description: String,
    text: String,
    requiredMsg: {
      default: null,
    },
    required: {
      default: null,
    },
    extensions: String,
    id: String,
    maxFiles: Number,
  },
  mounted() {
    this.root = this.$refs['root'];
    this.interactable = this.$refs['interactable'];
    this.button = this.$refs['button'];
    this.textElement = this.$refs['text'];
    this.file = this.$refs['file'];
    this.error = this.$refs['error'];
    this.base64 = this.$refs['base64'];

    this.bindEvents();

    // this.text.dataset.text = this.text.innerText.trim();

    window.i18n?.loader?.then(() => {
      this.wrongTypeText = window.i18n?.translate('formAttachmentsWrongType');
      this.maxFilesText = window.i18n?.translate('formAttachmentsMaxFiles', this.maxFiles);
      this.maxSizeText = window.i18n?.translate('formAttachmentsMaxSize');
    });
  },
  methods: {
    bindEvents() {
      this.interactable.addEventListener('drag', this.handleDragStart.bind(this));
      this.interactable.addEventListener('dragstart', this.handleDragStart.bind(this));

      this.interactable.addEventListener('dragover', this.handleDragOver.bind(this));
      this.interactable.addEventListener('dragenter', this.handleDragOver.bind(this));

      this.interactable.addEventListener('drop', this.handleDrop.bind(this));
      this.interactable.addEventListener('dragleave', this.handleDrop.bind(this));
      this.interactable.addEventListener('dragend', this.handleDrop.bind(this));

      this.interactable.addEventListener('click', this.handleAddAttachment.bind(this));
      this.file?.addEventListener('change', this.handleChange.bind(this));

      const parent = Tools.getParent(this.root, 'form');

      parent?.addEventListener('reset', this.resetText.bind(this));
    },
    handleDragStart(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    handleDragOver(e) {
      e.preventDefault();
      e.stopPropagation();

      window.clearTimeout(this.dropTimeout);

      this.isDragging = true;
    },
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      const droppedFiles = e?.dataTransfer?.files;

      this.dropTimeout = window.setTimeout(() => {
        this.isDragging = false;

        if (e.type !== 'drop') return;

        this.handleDroppedFiles(droppedFiles);
      }, 50);
    },
    isAllowedFileExtension(file) {
      if (!file) return;

      const accept = this.file.getAttribute('accept')?.toLowerCase();
      const allowedExtensions = accept?.split(',') || [];
      const fileExtension = Tools.getExtension(file.name);

      console.log(
        '🚀 ~ file: form-attachments.js:137 ~ isAllowedFileExtension ~ allowedExtensions.includes(`.${fileExtension}`):',
        allowedExtensions.includes(`.${fileExtension}`)
      );
      return allowedExtensions.includes(`.${fileExtension}`);
    },
    isUnderMaxSize(file) {
      if (!file || !file.size) return;

      return file.size <= this.maxSize;
    },
    handleDroppedFiles(droppedFiles) {
      const errors = this.getErrors(droppedFiles);

      if (errors) return this.showError(errors);

      this.appendDroppedFiles(droppedFiles);
      this.switchText(droppedFiles);
    },
    handleAddAttachment() {
      this.file.click();
    },
    showError(text) {
      this.resetFile();
      this.setErrorText(text);

      this.hasError = true;
    },
    setErrorText(text) {
      if (!this.error) return;

      this.error.innerText = text;
    },
    resetText() {
      this.textElement.innerText = this.textElement.dataset.text;
    },
    resetError() {
      this.setErrorText(this.requiredMsg);

      this.hasError = false;
    },
    appendDroppedFiles(droppedFiles) {
      if (!this.base64) return;

      if (this.isRequired) {
        this.file.required = false;
      }

      let dataTransfer = new DataTransfer();

      Array.from(droppedFiles).forEach((droppedFile) => {
        dataTransfer.items.add(droppedFile);
      });

      this.file.files = dataTransfer.files;
    },
    resetFile() {
      this.file.value = null;

      this.resetText();
      this.resetDroppedFile();
    },
    resetDroppedFile() {
      if (!this.base64) return;

      if (this.isRequired) {
        this.file.required = true;
      }

      this.base64.removeAttribute('data-file-name');
      this.base64.value = null;
    },
    switchText(files) {
      if (files[0].name) {
        let text = '';

        Array.from(files).forEach((file) => {
          text += `${file.name} <nobr>( ${Tools.toSize(file.size)} )</nobr><br/>`;
        });

        this.textElement.innerHTML = text;
        this.resetError();
      } else {
        this.resetText();
      }
    },
    areFilesAllowed(files) {
      return Array.from(files).every((file) => this.isAllowedFileExtension(file));
    },
    getErrors(files) {
      if (!this.areFilesAllowed(files)) return this.wrongTypeText;

      if (files.length > this.maxFiles) return this.maxFilesText;

      if (!Array.from(files).every((file) => this.isUnderMaxSize(file))) return this.maxSizeText;

      return;
    },
    handleChange(event) {
      const files = event?.target?.files;
      const errors = this.getErrors(files);

      if (errors) return this.showError(errors);

      this.resetDroppedFile();

      if (this.file.value === '') {
        this.resetText();
      } else {
        this.switchText(files);
      }
    },
  },
  template: `
    <div :class="classList" :data-max-size="maxSize" :data-max-files="maxFilesValue" ref="root">
      <div :class="interactableClassList" ref="interactable">
        <div class="form-attachments__button" ref="button">
          <icon
            icon='close'
            circle=true
            hover=true
            padding=10
          />
        </div>
        <div class="form-attachments__content">
          <div class="form-attachments__description">
            {{ description }}
          </div>
          <div class="form-attachments__text" ref="text">
            {{ text }}
          </div>
          <div class="form-attachments__error is-error" ref="error">
            {{ requiredMsg }}
          </div>
          <div class="form-attachments__extensions">
            {{ extensionListText }}
          </div>
        </div>
      </div>
      <div class="form-attachments__files">
        <input type="file" class="form-attachments__file" ref="file"
          multiple
          :required="required"
          :id="id"
          :name="id"
          :accept="acceptList">
        <input type="hidden" class="form-attachments__base64" ref="base64">
        <div class="form-attachments__files-list"></div>
      </div>
    </div>
  `,
};
