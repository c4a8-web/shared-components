export default {
  tagName: 'form-checkboxes',
  computed: {
    otherId() {
      return `${this.checkbox.id}_checkbox`;
    },
    required() {
      return this.checkbox?.required ? 'required' : null;
    },
    message() {
      return this.field.required ? this.field.requiredMsg : null;
    },
  },
  props: {
    field: Object,
  },
  template: `
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <template v-for="checkbox in field?.checkboxes">
      <form-checkbox :checkbox="checkbox" :group="checkbox?.id" :id="field.id + checkbox.id" />
    </template>
  `,
};
