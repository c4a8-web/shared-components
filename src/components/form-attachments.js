import Tools from '../assets/js/tools.js';
import State from '../assets/js/state.js';
import Events from '../assets/js/events.js';

export default {
  tagName: 'form-attachments',
  data() {
    return {
      isDragging: false,
      hasError: false,
      filesLength: 0,
      files: new DataTransfer(),
    };
  },
  computed: {
    filesList() {
      if (!this.files.files) return null;

      const filesArray = Array.from(this.files.files);

      if (this.filesLength > this.maxFilesValue) return filesArray.slice(0, this.maxFilesValue);

      return filesArray;
    },
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
    extensionList() {
      const capitalized = this.extensions.map((extension) => {
        return Tools.capitalize(extension);
      });

      return capitalized?.join(', ');
    },
    extensionListText() {
      return `${this.extensionList} max. ${this.maxSizeMb} MB`;
    },
    acceptList() {
      return this.extensions.map((extension) => `.${extension}`).join(',');
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
    extensions: Array,
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

    window.i18n?.loader?.then(() => {
      this.wrongTypeText = window.i18n?.translate('formAttachmentsWrongType');
      this.maxFilesText = window.i18n?.translate('formAttachmentsMaxFiles', this.maxFilesValue);
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

      document.addEventListener(Events.FORM_ATTACHMENT_ERROR, this.handleFormAttachmentError.bind(this));

      const parent = Tools.getParent(this.root, 'form');

      if (!parent) return;

      parent.addEventListener('reset', this.reset.bind(this));
    },
    handleFormAttachmentError(e) {
      this.showError(this.maxSizeText);
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

      return allowedExtensions.includes(`.${fileExtension}`);
    },
    isUnderMaxSize(file) {
      if (!file || !file.size) return;

      return file.size <= this.maxSize;
    },
    handleDroppedFiles(files) {
      const errors = this.getErrors(files);

      if (errors) return this.showError(errors);

      this.appendDroppedFiles(files);
    },
    handleAddAttachment() {
      this.file.click();
    },
    restoreDataTransfer() {
      this.file.files = this.files.files;
    },
    showError(text) {
      this.restoreDataTransfer();
      this.setErrorText(text);

      this.hasError = true;
    },
    setErrorText(text) {
      if (!this.error) return;

      this.error.innerText = text;
    },
    reset() {
      this.file.files = null;
      this.files = new DataTransfer();

      this.resetError();
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

      this.appendFiles(droppedFiles);
    },
    areFilesAllowed(files) {
      return Array.from(files).every((file) => this.isAllowedFileExtension(file));
    },
    getErrors(files) {
      if (!this.areFilesAllowed(files)) return this.wrongTypeText;

      if (this.files.files.length + files.length > this.maxFilesValue) return this.maxFilesText;

      if (!Array.from(files).every((file) => this.isUnderMaxSize(file))) return this.maxSizeText;

      return;
    },
    appendFiles(files) {
      if (this.files.files.length >= this.maxFilesValue) return this.showError(this.maxFilesText);

      Array.from(files).forEach((file) => {
        this.files.items.add(file);
      });

      this.syncFiles();
    },
    syncFiles() {
      this.filesLength = this.files.items.length;
      this.file.files = this.files.files;

      this.resetError();
    },
    handleChange(event) {
      const files = event?.target?.files;
      const errors = this.getErrors(files);

      if (errors) return this.showError(errors);

      this.appendFiles(files);
    },
    handleClick(index) {
      const file = this.files.files[index];

      if (!file) return;

      this.files.items.remove(index);

      this.syncFiles();
    },
    toSize(size) {
      return Tools.toSize(size);
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
          :accept="acceptList"
          @change="handleChange"
        >
        <input type="hidden" class="form-attachments__base64" ref="base64">
        <div class="form-attachments__files-list">
          <div class="form-attachments__files-list-item" v-for="(file, index) in filesList">
            <span class="form-attachments__file-details">{{ file.name }}</span>
            <span class="form-attachments__file-size">({{ toSize(file.size) }})</span>
            <icon class="form-attachments__delete" size="small" icon="bin" @click="handleClick(index)" />
          </div>
        </div>
      </div>
    </div>
  `,
};
