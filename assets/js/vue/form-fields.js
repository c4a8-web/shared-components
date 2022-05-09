export default {
  tagName: 'form-fields',
  computed: {
    classList() {
      return [
        'form-field js-form-message',
        `${this.field.type !== 'select' ? 'form-group' : ''}`,
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
    rowClassList() {
      return ['row mx-n3 ', this.field.rowClass];
    },
    value() {
      return this.replaceValue && this.field.value === '#form-field-replace-value#'
        ? this.replaceValue
        : this.field.value;
    },
  },
  props: {
    options: Array,
    field: Object,
    replaceValue: {
      default: null,
    },
  },
  template: `
    <template v-if="field.id !== '_gotcha'">
      <div :class="classList">
        <template v-if="field.type === 'textarea'">
          <label class="input-label" :for="field.id">{{field.label}}</label>
          <textarea class="form-control form-textarea" :id="field.id" :name="field.id" rows="4" :placeholder="placeholder" :required="required" :readonly="readonly"></textarea>
        </template>
        <template v-else-if="field.type ==='checkbox'">
          <form-checkbox :checkbox="field" />
        </template>
        <template v-else-if="field.type ==='hidden'">
          <input type="hidden" :name="field.id" :value="value">
        </template>
        <template v-else-if="field.checkboxes">
          <form-checkboxes :field="field" />
        </template>
        <template v-else-if="field.type === 'file'">
          <form-attachments
            :description="field.formAttachments?.description"
            :text="field.formAttachments?.text"
            :extensions="field.formAttachments?.extensions"
            :maxSize="field.formAttachments?.maxSize"
            :id="field.formAttachments?.id"
            :required="field.formAttachments?.required"
            :required-msg="field.formAttachments?.requiredMsg"
          />
        </template>
        <template v-else-if="field.type === 'select'">
          <form-select :field="field" :options="options" />
        </template>
        <template v-else-if="field.type">
          <label class="input-label" :for="field.id">{{field.label}}</label>
          <input :type="field.type" :id="field.id" :name="field.id" class="form-control" :data-msg="field?.requiredMsg" :value="value" :placeholder="placeholder" :required="required" :readonly="readonly">
        </template>
      </div>
    </template>`,
};
