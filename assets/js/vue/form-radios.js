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
    wrapperClasses() {
      return ['d-flex flex-wrap', this.column ? 'flex-column' : ''];
    },
    radioClasses() {
      return ['pr-10', this.column ? 'mb-3' : ''];
    },
  },
  props: {
    field: Object,
    id: {
      default: null,
    },
    column: {
      type: Boolean,
      default: false,
    },
  },
  template: `
    <label class="form__label input-label" :data-msg="message" v-if="field.label">{{ field.label }}</label>
    <div :class="wrapperClasses">
      <template v-for="radio in field?.radios">
        <form-radio :class="radioClasses" :radio="radio" :group="id" :name="id" :id="field.id + radio.id" @action-changed="$emit('action-changed', $event)" />
      </template>
    </div>
  `,
};
