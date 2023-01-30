export default {
  tagName: 'form-radio',
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      return this.radio?.required ? 'required' : null;
    },
    idValue() {
      return this.id ? this.id : this.radio.id;
    },
  },
  props: {
    radio: Object,
    group: String,
    id: String,
    name: String,
  },
  template: `
  <div class="form__radio-control mb-1 vue-component">
    <template v-if="radio?.placeholder">
      <input class="form__radio" type="radio" :data-form-group="group" :required="required" :name="otherId" :id="otherId">
      <label class="form__radio-label" :for="otherId"></label>
      <input class="" type="text" :name="name" :id="idValue" :placeholder="radio?.placeholder" :data-form-group="group">
    </template>
    <template v-else>
      <input class="form__radio" type="radio" :name="name" :id="idValue" :data-form-group="group" :required="required">
      <label class="form__radio-label" :for="idValue" v-html="radio?.label">
      </label>
    </template>
  </div>
`,
};
