export default {
  tagName: 'form-fields',
  data() {
    return {
      fieldValue: null,
      crazyValueNobodyKnows: 'ggggg',
    };
  },
  computed: {
    classList() {
      return [
        'form-field js-form-message form-group',
        `${this.field.type === 'hidden' ? 'd-none' : ''}`,
        this.groupClass,
        this.hasAnimation ? 'utility-animation utility-animation--small-offset fade-in-bottom' : '',
        `${this.field.showIn ? 'd-none form-field--show-in ' + this.showInClasses : ''}`,
        'vue-component',
      ];
    },
    fieldValueComputed() {
      return this.fieldValue;
    },
    showInClasses() {
      return this.field?.showIn?.map((id) => 'show-in-' + id).join(' ');
    },
    groupClass() {
      if (this.field.type === 'checkbox') {
        return 'mb-3';
      } else if (this.field.type === 'file') {
        return 'mb-8';
      } else {
        return '';
      }
    },
    readonly() {
      return this.field.readonly ? 'readonly' : null;
    },
    required() {
      return this.field.required ? 'required' : null;
    },
    placeholder() {
      return this.field.placeholder ? this.field.placeholder : null;
    },
    value() {
      const fieldValue =
        this.replaceValue && this.field.value === '#form-field-replace-value#'
          ? this.replaceValue
          : this.fieldValue
            ? this.fieldValue
            : this.field.value;

      console.log('value my ass');

      this.fieldValue = fieldValue;

      return fieldValue;
    },
  },
  updated() {
    // console.log('updated element', this.$refs['input']);

    this.checkForReset();
  },
  mounted() {
    // console.log('mounted element', this.$refs['input']);
  },
  methods: {
    checkForReset() {
      const input = this.$refs['input'];

      if (!input) return;

      if (input.dataset.reset) {
        console.log('reset i n form field', input);
        input.removeAttribute('data-reset');
        this.fieldValue = null;
      }
    },
    getRequiredMsg(element) {
      return element.requiredMsg ? element.requiredMsg : '';
    },
    handleChange(e) {
      const currentTarget = e.currentTarget;
      const value = currentTarget.value;

      this.fieldValue = value;
      console.log('🚀 ~ handleChange ~ this.fieldValue:', this.fieldValue);
    },
    handleReset() {
      console.log('HANDLE RESET HIER');
    },
  },
  props: {
    options: Array,
    field: Object,
    id: {
      default: null,
    },
    replaceValue: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
  },
  template: `
    <template v-if="field.id !== '_gotcha'">
      <div :class="classList" data-utility-animation-step="1">
        <template v-if="field.type === 'textarea'">
          <label class="input-label" :for="id">{{ field.label }}</label>
          <textarea class="form-control form-textarea" :id="id" :name="id" rows="4" :placeholder="placeholder" :required="required" :readonly="readonly" :data-msg="getRequiredMsg(field)"></textarea>
        </template>
        <template v-else-if="field.type ==='checkbox'">
          <form-checkbox :checkbox="field" :id="id" />
        </template>
        <template v-else-if="field.type ==='hidden'">
          <input type="hidden" :name="id" :value="value">
        </template>
        <template v-else-if="field.checkboxes">
          <form-checkboxes :field="field" :id="id" />
        </template>
        <template v-else-if="field.type === 'radio' ">
          <form-radio :radio="field" :id="id" />
        </template>
        <template v-else-if="field.radios">
          <form-radios :field="field" :id="id" />
        </template>
        <template v-else-if="field.type === 'file'">
          <form-attachments
            :description="field.formAttachments?.description"
            :text="field.formAttachments?.text"
            :extensions="field.formAttachments?.extensions"
            :maxSize="field.formAttachments?.maxSize"
            :id="field.formAttachments?.id"
            :required="field.formAttachments?.required"
            :required-msg="getRequiredMsg(field.formAttachments)"
          />
        </template>
        <template v-else-if="field.type === 'select'">
          <form-select :field="field" :options="options" :id="id" />
        </template>
        <template v-else-if="field.type">
          <label class="input-label" :for="id">{{ field.label }}###{{ fieldValueComputed }}</label>
          <input :data-field-value="fieldValue" ref="input" @change="handleChange" @keyup="handleChange" :type="field.type" :id="id" :name="id" class="form-control" :data-msg="getRequiredMsg(field)" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly">
        </template>
      </div>
    </template>`,
};
