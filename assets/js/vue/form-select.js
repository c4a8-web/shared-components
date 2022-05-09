export default {
  tagName: 'form-select',
  computed: {
    required() {
      return this.field?.required ? 'required' : null;
    },
  },
  props: {
    options: Array,
    field: Object,
    label: String,
    id: String,
  },
  template: `
    <label class="input-label" :for="id">{{label}}</label>
    <select class="form-control custom-select text-muted" :name="id" :required="required">
      <option value>{{field.placeholder}}</option>
      <template v-for="option in options">
        <option :value="option.value">{{option.text}}</option>
      </template>
    </select>
  `,
};
