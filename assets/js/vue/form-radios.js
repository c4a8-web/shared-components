import Tools from '../tools.js';

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
      return Tools.isTrue(this.uuid) ? this.uuid + this.field?.radios[0].id : this.field?.radios[0].id;
    },
  },
  props: {
    field: Object,
    id: {
      default: null,
    },
  },
  template: `
    <label class="form__label input-label" :data-msg="message" >{{ field?.label }}</label>
    <div class="d-flex flex-wrap">
      <template v-for="radio in field?.radios">
        <form-radio class="pr-10" :radio="radio" :group="id" :name="id" :id="field.id + radio.id" />
      </template>
    </div>
  `,
};
