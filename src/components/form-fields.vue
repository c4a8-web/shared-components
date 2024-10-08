<template>
  <template v-if="field.id !== '_gotcha'">
    <div :class="classList" data-utility-animation-step="1" ref="root">
      <template v-if="field.type === 'textarea'">
        <label class="input-label" :for="id">{{ field.label }}</label>
        <textarea
          class="form-control form-textarea"
          :id="id"
          :name="id"
          rows="4"
          :placeholder="placeholder"
          :required="required"
          :readonly="readonly"
          :data-msg="getRequiredMsg(field)"
        ></textarea>
      </template>
      <template v-else-if="field.type === 'checkbox'">
        <form-checkbox :checkbox="field" :id="id" />
      </template>
      <template v-else-if="field.type === 'hidden'">
        <input type="hidden" :name="id" :value="value" />
      </template>
      <template v-else-if="field.checkboxes">
        <form-checkboxes :field="field" :id="id" />
      </template>
      <template v-else-if="field.type === 'radio'">
        <form-radio :radio="field" :id="id" />
      </template>
      <template v-else-if="field.radios">
        <form-radios :field="field" :id="id" @action-changed="$emit('action-changed', $event)" />
      </template>
      <template v-else-if="field.type === 'file'">
        <form-attachments
          :description="field.formAttachments?.description"
          :text="field.formAttachments?.text"
          :extensions="field.formAttachments?.extensions"
          :maxSize="field.formAttachments?.maxSize"
          :id="field.formAttachments?.id"
          :required="field.formAttachments?.required"
          :required-msg="getRequiredMsg(field.formAttachments)"
        />
      </template>
      <template v-else-if="field.type === 'select'">
        <form-select :field="field" :options="options" :id="id" />
      </template>
      <template v-else-if="field.type">
        <label class="input-label" :for="id">{{ field.label }}</label>
        <input
          ref="input"
          @change="handleChange"
          @keyup="handleChange"
          :type="field.type"
          :id="id"
          :name="id"
          class="form-control"
          :data-msg="getRequiredMsg(field)"
          :value="value"
          :placeholder="placeholder"
          :required="required"
          :readonly="readonly"
        />
      </template>
    </div>
  </template>
</template>
<script>
import UtilityAnimation from '../assets/js/utility-animation.js';
// import Events from '../assets/js/events.js';

export default {
  tagName: 'form-fields',
  data() {
    return {
      edited: false,
      userValue: null,
    };
  },
  computed: {
    classList() {
      return [
        'form-field js-form-message form-group',
        `${this.field.type === 'hidden' ? 'd-none' : ''}`,
        this.groupClass,
        this.hasAnimation ? 'utility-animation utility-animation--small-offset fade-in-bottom' : '',
        `${this.field.showIn ? 'd-none form-field--show-in ' + this.showInClasses : ''}`,
        'vue-component',
      ];
    },
    showInClasses() {
      return this.field?.showIn?.map((id) => 'show-in-' + id).join(' ');
    },
    groupClass() {
      if (this.field.type === 'checkbox') {
        return 'mb-3';
      } else if (this.field.type === 'file') {
        return 'mb-8';
      } else {
        return '';
      }
    },
    readonly() {
      return this.field.readonly ? 'readonly' : null;
    },
    required() {
      return this.field.required ? 'required' : null;
    },
    placeholder() {
      return this.field.placeholder ? this.field.placeholder : null;
    },
    value() {
      if (this.edited) return this.userValue;

      const fieldValue =
        this.replaceValue && this.field.value === '#form-field-replace-value#'
          ? this.replaceValue
          : this.field.value
          ? this.field.value
          : null;

      return fieldValue;
    },
  },
  mounted() {
    if (this.$refs.root) {
      UtilityAnimation.init([this.$refs.root]);
    }

    const parent = this.$parent;

    if (!parent) return;

    const parentElement = parent.$el;

    if (!parentElement) return;

    parentElement.addEventListener('reset', this.handleReset);
  },
  methods: {
    getRequiredMsg(element) {
      return element.requiredMsg ? element.requiredMsg : '';
    },
    handleChange(e) {
      const currentTarget = e.currentTarget;
      const value = currentTarget.value;

      this.edited = true;
      this.userValue = value;
    },
    handleReset() {
      this.edited = false;
      this.userValue = null;
    },
  },
  props: {
    options: Array,
    field: Object,
    id: {
      default: null,
    },
    replaceValue: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
  },
};
</script>
