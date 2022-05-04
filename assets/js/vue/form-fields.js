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
    // rowClassList() {
    //   return ['form__row', `${this.container ? 'row' : ''}`];
    // },
    /*


    */
    value() {
      //   {% if formFieldReplaceValue and formField.value == '#form-field-replace-value#' %}
      //   {% assign formFieldValue = formFieldReplaceValue %}
      // {% else %}
      //   {% assign formFieldValue = formField.value %}
      // {% endif %}

      return this.replaceValue && this.field.value === '#form-field-replace-value#'
        ? this.replaceValue
        : this.field.value;
    },
  },
  props: {
    field: Object,
    replaceValue: {
      default: null,
    },
  },
  template: `
    <template v-if="field.id !== '_gotcha'">
      <div :class="classList">
        FormField
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
          <form-checkboxes :field="field.checkboxes" />
        </template>
      </div>
    </template>`,
};

/*----------------------------------------------------------------


        {% elsif formField.checkboxes %}
          {%
            include form-checkboxes.html
            field=field
          %}
        {% elsif formField.type == 'file' %}
          {%
            include form-attachments.html
            description=formField.formAttachments.description
            text=formField.formAttachments.text
            extensions=formField.formAttachments.extensions
            maxSize=formField.formAttachments.maxSize
            id=formField.formAttachments.id
            required=formField.formAttachments.required
            requiredMsg=formField.formAttachments.requiredMsg
          %}
        {% elsif formField.type == 'select' %}
          {%- if formField.options.first -%}
            {%- assign options = formField.options -%}
          {%- else -%}
            {%- assign options = site.data[formField.options].list -%}
          {%- endif -%}
          <label class="input-label" for="{{ formField.id }}">{{ formField.label }}</label>
          <select class="form-control custom-select text-muted" name="{{ formField.id }}" {{ required }}>
            <option value>{{ formField.placeholder }}</option>
            {% for option in options %}
              <option value="{{ option.value }}">{{ option.text }}</option>
            {% endfor %}
          </select>
        {% else %}
          <label class="input-label" for="{{ formField.id }}">{{ formField.label }}</label>
          <input type="{{ formField.type }}" id="{{ formField.id }}" name="{{ formField.id }}" class="form-control" data-msg="{{ formField.requiredMsg }}" value="{{ formFieldValue }}" {{ placeholder }} {{ required }} {{ readonly }}>
        {% endif %}

*/
