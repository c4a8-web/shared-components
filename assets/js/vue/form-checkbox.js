export default {
  tagName: 'form-checkbox',
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
    <div class="form__checkbox-control custom-control custom-checkbox mb-1 vue-component">
      <template v-if="checkbox?.placeholder">
        <input class="form__checkbox form-check-input custom-control-input" type="checkbox" :data-form-group="group" :required="required" :name="otherId" :id="otherId">
        <label class="form__checkbox-label custom-control-label" :for="otherId"></label>
        <input class="form__input form-control form-control-sm" type="text" :name="checkbox?.id" :id="checkbox?.id" :placeholder="checkbox?.placeholder" :data-form-group="group">
      </template>
      <template v-else>
        <input class="form__checkbox form-check-input custom-control-input" type="checkbox" :name="checkbox?.id" :id="checkbox?.id" :data-form-group="group" :required="required">
        <label class="form__checkbox-label custom-control-label" :for="checkbox?.id" v-html="checkbox?.label">
        </label>
      </template>
    </div>
    `,
};
