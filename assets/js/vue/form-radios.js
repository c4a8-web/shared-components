export default {
  tagName: 'form-radios',
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      return this.radio?.required ? 'required' : null;
    },
    message() {
      return this.field.required ? this.field.requiredMsg : null;
    },
    groupId() {
      return this.field?.radios[0].id;
    },
  },
  props: {
    field: Object,
  },
  template: `
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <template v-for="radio in field?.radios">
      <form-radio :radio="radio" :group="groupId" :id="field.id + radio.id" />
    </template>
  `,
};
