export default {
  tagName: 'form-fields',
  computed: {
    classList() {
      return [
        'form-field js-form-message form-group',
        `${this.field.type === 'hidden' ? 'd-none' : ''}`,
        this.groupClass,
        'vue-component',
      ];
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
      return this.replaceValue && this.field.value === '#form-field-replace-value#'
        ? this.replaceValue
        : this.field.value;
    },
  },
  methods: {
    setFieldId(id){
      const fieldId = id ? id : this.field.id;
      return this.hasUuid ? this.hasUuid + '-glk-' + fieldId : fieldId;
    },
    getRequiredMsg(element) {
      return element.requiredMsg ? element.requiredMsg : '';
    },
  },
  props: {
    options: Array,
    field: Object,
    hasUuid: {
      default: null,
    },
    replaceValue: {
      default: null,
    },
  },
  template: `
    <template v-if="field.id !== '_gotcha'">
      <div :class="classList">
        <template v-if="field.type === 'textarea'">
          <label class="input-label" :for="setFieldId()">{{ field.label }}</label>
          <textarea class="form-control form-textarea" :id="setFieldId()" :name="setFieldId()" rows="4" :placeholder="placeholder" :required="required" :readonly="readonly"></textarea>
        </template>
        <template v-else-if="field.type ==='checkbox'">
          <form-checkbox :checkbox="field" :id="setFieldId()" />
        </template>
        <template v-else-if="field.type ==='hidden'">
          <input type="hidden" :name="setFieldId()" :value="value">
        </template>
        <template v-else-if="field.checkboxes">
          <form-checkboxes :field="field" :id="setFieldId(field?.checkboxes[0])" />
        </template>
        <template v-else-if="field.type === 'radio' ">
          <form-radio :radio="field" :id="setFieldId()" />
        </template>
        <template v-else-if="field.radios">
          <form-radios :field="field" :id="setFieldId(field?.radios[0].id)" />
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
          <form-select :field="field" :options="options" :id="setFieldId()" />
        </template>
        <template v-else-if="field.type">
          <label class="input-label" :for="setFieldId()">{{ field.label }}</label>
          <input :type="field.type" :id="setFieldId()" :name="setFieldId()" class="form-control" :data-msg="getRequiredMsg(field)" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly">
        </template>
      </div>
    </template>`,
};
