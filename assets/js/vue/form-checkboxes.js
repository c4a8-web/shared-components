export default {
  tagName: 'form-checkboxes',
  computed: {
    otherId() {
      return `${this.checkbox.id}_checkbox`;
    },
    required() {
      return this.checkbox?.required ? 'required' : null;
    },
  },
  props: {
    checkbox: Object,
    group: String,
    id: String,
  },
  template: `
   TODO integrate form checkboxses markup
    `,
};
