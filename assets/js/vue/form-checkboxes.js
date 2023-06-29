import Tools from '../tools';

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
    groupId() {
      return this.uuid ? this.uuid + this.field?.checkboxes[0].id : this.field?.checkboxes[0].id;
    },
  },
  props: {
    field: Object,
    uuid: {
      default: null,
    },
  },
  template: `
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <template v-for="checkbox in field?.checkboxes">
      <form-checkbox :checkbox="checkbox" :group="groupId" :id="field.id + checkbox.id" />
    </template>
  `,
};
