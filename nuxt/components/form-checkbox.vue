<template>
  <div class="form__checkbox-control custom-control custom-checkbox mb-1 vue-component">
    <template v-if="checkbox?.placeholder">
      <input
        class="form__checkbox form-check-input custom-control-input"
        type="checkbox"
        :data-form-group="group"
        :required="required"
        :name="otherId"
        :id="otherId"
        @change="handleChange"
      />
      <label class="form__checkbox-label custom-control-label" :for="otherId"></label>
      <input
        class="form__input form-control form-control-sm"
        type="text"
        :name="idValue"
        :id="idValue"
        :placeholder="checkbox?.placeholder"
        :data-form-group="group"
      />
    </template>
    <template v-else>
      <input
        class="form__checkbox form-check-input custom-control-input"
        type="checkbox"
        :name="idValue"
        :id="idValue"
        :data-form-group="group"
        :required="required"
        @change="handleChange"
      />
      <label class="form__checkbox-label custom-control-label" :for="idValue" v-html="checkbox?.label"></label>
    </template>
  </div>
</template>
<script>
import Events from '../assets/js/events.js';

export default {
  tagName: 'form-checkbox',
  computed: {
    otherId() {
      return `${this.idValue}_checkbox`;
    },
    required() {
      return this.checkbox?.required ? 'required' : null;
    },
    idValue() {
      return this.id ? this.id : this.checkbox.id;
    },
  },
  methods: {
    handleChange(e) {
      const currentTarget = e.currentTarget;
      const value = currentTarget.value;

      this.$emit(Events.FORM_FIELD_UPDATED, { value, id: this.id });
    },
  },
  props: {
    checkbox: Object,
    group: String,
    id: String,
  },
};
</script>
