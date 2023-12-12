import Tools from '../tools.js';

export default {
  tagName: 'form-attachments',
  computed: {
    classList() {
      return ['form-attachments', `${this.hasError === true ? 'has-error' : ''}`, 'vue-component'];
    },
    required() {
      return this.required ? 'required' : null;
    },
    maxSizeMb() {
      return this.maxSize / 1000000;
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
  },
  template: `
    <div :class="classList" :data-max-size="maxSize">
      <div class="form-attachments__button">
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
        <div class="form-attachments__text">
          {{ text }}
        </div>
        <div v-if="requiredMsg" class="form-attachments__error is-error">
          {{ requiredMsg }}
        </div>
        <div class="form-attachments__extensions">
          {{ extensionListText }}
        </div>
      </div>
      <div class="form-attachments__files">
        <input type="file" class="form-attachments__file"
          :required="required"
          :id="id"
          :name="id"
          :accept="acceptList">
        <input type="hidden" class="form-attachments__base64">
      </div>
    </div>
  `,
};
