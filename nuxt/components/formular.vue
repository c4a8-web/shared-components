<template>
  <div
    :class="[classList, hasLoading ? loaderClasses : '']"
    ref="root"
    class="d-flex align-items-center justify-content-center"
  >
    <div class="form__loader position-absolute mr-5 mr-lg-10 h-50" ref="loader"></div>
    <div :class="rowClassList">
      <div :class="['form__wrapper', wrapperClassList, hasLoading ? 'loading' : '']" v-if="form">
        <div v-if="form.headline" :class="headlineClassList" data-utility-animation-step="1" ref="headline">
          <div class="row">
            <div class="col-sm-12">
              <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
              <p :class="sublineClassList" v-html="form.subline"></p>
            </div>
          </div>
        </div>
        <form
          class="form__form mt-6"
          :method="method"
          :action="formAction"
          :novalidate="novalidate"
          @submit="handleSubmit"
          ref="form"
        >
          <template v-for="block in preparedBlocks">
            <div :class="getBlockClassList(block[0])" v-if="block.length > 0">
              <div :class="getFieldClassList(field)" v-for="field in block">
                <form-fields
                  :field="field"
                  :options="getOptions(field)"
                  :replace-value="replaceValue"
                  :id="getId(field)"
                  :name="getName(field)"
                  :form-id="formId"
                  :has-animation="hasAnimationValue"
                  @action-changed="updateAction"
                  :has-error="hasError(field)"
                  @form-field-updated="handleFormFieldUpdate($event)"
                />
              </div>
            </div>
          </template>
          <div v-if="hasRecaptcha" class="form__recaptcha-infos">
            <NuxtTurnstile v-if="turnstileReady" ref="turnstile" />
          </div>
          <div :class="formClassList">
            <cta
              :text="getTranslatedText(form.ctaText)"
              type="submit"
              :button="true"
              :skin="form.cta?.skin"
              :width="form.cta?.width"
              :analytics="analytics"
              @click="handleSubmit"
            />
          </div>
          <input type="text" class="form__super-field" name="_gotcha" />
          <input v-if="reCaptchaField" name="g-recaptcha-response" type="hidden" v-bind="reCaptchaField" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useId } from 'vue';

import useConfig from '../composables/useConfig';
import State from '../utils/state.js';
import { whenVisible } from '../utils/when-visible.js';
import Tools from '../utils/tools.js';
import Form from '../utils/components/form.js';
import UtilityAnimation from '../utils/utility-animation.js';

import Loading from '../utils/loading.js';

export default {
  emits: ['submit', 'error'],
  tagName: 'formular',
  data() {
    return {
      originalAction: '',
      formAction: '',
      formInstance: null,
      novalidateValue: null,
      errors: [],
      siteKey: null,

      loadingDelay: 300,
      sleepDelay: 1300,
      loading: {},
      hasLoading: false,
      hasLoader: true,
      turnstileReady: false,
    };
  },
  setup() {
    const config = useConfig();

    const formId = useId();

    return {
      config,
      formId,
    };
  },
  computed: {
    loaderClasses() {
      return [`${this.hasLoading ? State.LOADING : ''}`, `${this.hasLoader ? 'loading' : ''}`, 'vue-component'];
    },

    classList() {
      return [
        'form',
        `${Tools.isTrue(this.light) === true ? 'is-light' : ''}`,
        `${Tools.isTrue(this.ajax) === true ? 'form--ajax' : ''}`,
        `${Tools.isTrue(this.odoo) === true ? 'form--odoo' : ''}`,
        `${Tools.isTrue(this.container) === true ? 'container' : ''}`,
        `${Tools.isTrue(this.customValidation) === true ? 'form--custom-validation' : ''}`,
        this.form?.noCustomSubmit === true ? Form.noCustomSubmitClass : '',
        'vue-component',
      ];
    },
    reCaptchaField() {
      return this.formInstance?.reCaptchaField;
    },
    novalidate() {
      return this.novalidateValue;
    },
    hasAnimationValue() {
      return Tools.isTrue(this.hasAnimation);
    },
    rowClassList() {
      return ['form__row', `${this.container ? 'row' : ''}`];
    },
    wrapperClassList() {
      return [`${this.container ? 'col-md-11 col-lg-10' : ''}`];
    },
    headlineClassList() {
      return [
        'container headline-row',
        `${this.space ? this.space : 'space-top-2'}`,
        this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '',
      ];
    },
    sublineClassList() {
      return ['text-center', `${this.form.sublineClasses ? this.form.sublineClasses : ''}`];
    },
    formClassList() {
      return ['form__submit mt-5', `${this.positionValue}`];
    },
    positionValue() {
      return this.form.ctaPosition ? this.form.ctaPosition : Tools.isTrue(this.uncentered) ? '' : 'justify-content-end';
    },
    method() {
      return this.form.method ? this.form.method : 'post';
    },
    preparedBlocks() {
      const blocks = [];

      let index = 0;
      let tempBlock = [];

      this.form?.fields?.forEach((sourceField) => {
        const field = this.useTranslation
          ? {
              ...sourceField,
              ...(sourceField.label && { label: this.$t(sourceField.label) }),
              ...(sourceField.requiredMsg && { requiredMsg: this.$t(sourceField.requiredMsg) }),
            }
          : sourceField;

        if (field.rowStart || field.rowEnd) {
          if (field.rowStart) {
            blocks[index] = tempBlock;

            tempBlock.push(field);

            if (field.rowEnd) {
              tempBlock = [];
              index++;
            }
          } else if (field.rowEnd) {
            tempBlock.push(field);

            tempBlock = [];
            index++;
          }
        } else {
          tempBlock.push(field);

          if (blocks[index]) return;

          blocks[index] = tempBlock;

          tempBlock = [];
          index++;
        }
      });

      return blocks;
    },
  },

  mounted() {
    this.originalAction = this.formAction = this.form?.action;
    this.formInstance = new Form(this.$refs.root, null, this.validate.bind(this), this.hasRecaptcha, this.siteKey);

    Form.expose(this.formInstance);

    this.novalidateValue = 'novalidate';

    if (this.hasRecaptcha) {
      this.turnstileObserver = whenVisible(
        this.$refs.root,
        () => {
          this.turnstileReady = true;
        },
        '200% 0px'
      );
    }

    if (!this.$refs.headline) return;

    UtilityAnimation.init([this.$refs.headline]);
  },
  beforeUnmount() {
    this.turnstileObserver?.disconnect();
  },

  methods: {
    startLoading() {
      if (!this.loading?.root) {
        this.loading = new Loading(this.$refs['loader'], () => {
          this.hasLoader = true;
        });
      }
      this.hasLoading = true;
      this.loading.on(true);
    },
    stopLoading() {
      this.hasLoading = false;
      this.loading.on(false);
    },

    getTranslatedText(text) {
      return this.useTranslation ? this.$t(text) : text;
    },
    hasError(field) {
      return this.errors[this.getId(field)];
    },
    getOptions(field) {
      if (!field.options) return null;

      if (typeof field.options === 'string') {
        console.error('Invalid options format for field' + field.id);

        return null;
      }

      return typeof field.options === 'object' && field.options.list ? field.options.list : field.options;
    },
    getBlockClassList(block) {
      return ['row mx-n3', `${block?.rowClass ? block.rowClass : ''}`];
    },
    getFieldClassList(field) {
      return ['px-3', `${field.col ? 'col-md-' + field.col : 'col-md-12'}`];
    },
    getFieldId(field) {
      const groupField = field?.radios || field?.checkboxes;

      if (groupField) return groupField[0].id;

      return field?.formAttachments?.id || field?.id;
    },
    getId(field) {
      return Form.getScopedId(this.formId, this.getFieldId(field));
    },
    getName(field) {
      return this.getFieldId(field);
    },
    updateAction(newAction) {
      if (newAction) {
        this.formAction = newAction;
      } else {
        this.formAction = this.originalAction;
      }
    },
    handleSubmit(e) {
      this.startLoading();
      if (!this.validate()) {
        this.stopLoading();
        e.preventDefault();
      } else {
        if (this.formInstance.hasSubmitHandling) return;

        e.preventDefault();

        this.formInstance.handleRecaptcha().then(() => {
          const form = this.$refs['form'];

          if (!form) return console.debug('Form reference missing');
          form.submit();
        });
      }
    },
    handleFormFieldUpdate(e) {
      if (!e.id) return;

      const field = document.getElementById(e.id);

      if (!field) return;

      this.validateField(field);
    },
    validateField(field) {
      const value = field.value;
      const type = field.getAttribute('type');
      const isRequired = field.hasAttribute('required');

      this.removeFieldError(field);

      if (type === 'checkbox') {
        const isChecked = field.checked;

        if (isRequired && !isChecked) {
          this.addFieldError(field);

          return false;
        }
      } else {
        if (isRequired && !value) {
          this.addFieldError(field);

          return false;
        }

        const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

        if (type === 'email' && !isValidEmail(value)) {
          this.addFieldError(field);

          return false;
        }
      }

      this.addFieldValid(field);

      return true;
    },
    addFieldValid(field) {
      field.classList.add(State.VALID);
    },
    removeFieldError(field) {
      delete this.errors[field.id];

      field.classList.remove(State.ERROR);
    },
    addFieldError(field) {
      this.errors[field.id] = true;

      field.classList.remove(State.VALID);
      field.classList.add(State.ERROR);
    },
    validate() {
      const formFields = this.$refs.root.querySelectorAll(
        `.form-field:not(.${State.HIDDEN}) .form-control[required],
        .form-field:not(.${State.HIDDEN}) .form__checkbox[required]`
      );

      let allValid = true;

      for (const formField of formFields) {
        if (!this.validateField(formField)) {
          allValid = false;
        }
      }

      return allValid;
    },
  },
  props: {
    form: Object,
    light: {
      default: null,
    },
    analytics: {
      default: null,
    },
    space: String,
    container: {
      default: null,
    },
    ajax: {
      default: null,
    },
    uncentered: {
      default: null,
    },
    replaceValue: {
      default: null,
    },
    customValidation: {
      default: null,
    },
    options: Object,
    // Deprecated no-op, still declared so configs passing it do not leak it to the DOM.
    hasUuid: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
    useTranslation: {
      type: Boolean,
      default: false,
    },
    hasRecaptcha: {
      type: Boolean,
      default: true,
    },
    odoo: {
      type: Boolean,
      default: false,
    },
    showLoader: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
$form-background-color: var(--color-form-background);
$form-background-color-light: var(--color-form-background-light);
$form-error-color: var(--color-form-error);
$form-success-color: var(--color-form-success);
$form-border-hover-color: var(--color-form-border-hover);
$form-checkbox-size: 2em;
$form-checkbox-spacing: 1em;
$form-checkbox-offset: $form-checkbox-size + $form-checkbox-spacing;
$form-radio-size: $form-checkbox-size;

.shared-components {
  .custom-control-input,
  .form-control {
    border-radius: 0;
  }

  .form {
    &.is-light {
      textarea.form-textarea,
      input[type=''].form-control,
      input[type='text'].form-control,
      input[type='phone'].form-control,
      input[type='number'].form-control,
      input[type='email'].form-control,
      .form__input {
        background-color: $form-background-color-light;
        border-color: $form-background-color-light;

        &:hover {
          border-color: $form-border-hover-color;
        }
      }

      .custom-checkbox label.custom-control-label,
      .form__checkbox-label {
        &::before {
          background-color: $form-background-color-light;
        }
      }

      .form__checkbox:checked ~ .form__checkbox-label::before {
        background-color: var(--color-bg-checkbox);
      }
    }

    .invalid-feedback {
      color: $form-error-color;
    }

    .form__checkbox:checked ~ .form__checkbox-label::before {
      background-color: var(--color-bg-checkbox);
    }

    .form__radio.is-invalid {
      border-color: $form-error-color;
    }

    .form__radio.is-invalid ~ .form__radio-label {
      color: $form-error-color;
    }

    .was-validated .form-control:invalid,
    .form-control.is-invalid {
      border-color: $form-error-color;
      background-repeat: no-repeat;
      background-position: right calc(0.4em + 0.375rem) center;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23e44418' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23ed4c78' stroke='none'/%3e%3c/svg%3e");
    }

    .was-validated .form-control:valid,
    .form-control.is-valid,
    .was-validated .form-control:valid:focus,
    .form-control.is-valid:focus {
      border-color: $form-success-color;
      background-repeat: no-repeat;
      background-position: right calc(0.4em + 0.375rem) center;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23008774' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    }

    .is-valid ~ {
      .form__checkbox-label {
        color: var(--contact-copy-color, var(--color-copy));
      }
    }

    .is-valid:checked ~ {
      .form__checkbox-label {
        &::before {
          border-color: var(--color-bg-checkbox);
        }
      }
    }
  }
}

.form__row {
  overflow: hidden;

  @include media-breakpoint-up(md) {
    justify-content: center;
  }
}

.form-textarea {
  resize: none;
}

input {
  &[readonly] {
    pointer-events: none;
  }
}

label.input-label,
.form__label {
  color: var(--color-products-dark-blue);
  opacity: 0.7;

  + .invalid-feedback {
    margin-bottom: 0.5em;
  }
}

textarea.form-textarea,
input[type=''].form-control,
input[type='text'].form-control,
input[type='email'].form-control,
input[type='phone'].form-control,
input[type='number'].form-control,
input[type='radio'],
.form__input {
  background-color: $form-background-color;
  border-color: $form-background-color;

  &:hover {
    border-color: $form-border-hover-color;
  }
}

.is-light {
  textarea.form-textarea,
  input[type=''].form-control,
  input[type='text'].form-control,
  input[type='email'].form-control,
  input[type='phone'].form-control,
  input[type='number'].form-control,
  input[type='radio'],
  .form__input {
    background-color: var(--color-gk-white);
    border-color: $form-background-color;

    &:hover {
      border-color: $form-border-hover-color;
    }
  }
}

input[type='checkbox'].custom-control-input,
.form__checkbox {
  position: absolute;
  left: 0;
  z-index: -1;
  width: $form-checkbox-size;
  height: $form-checkbox-size;
  opacity: 0;

  &:checked ~ {
    .form__checkbox-label {
      &::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
      }
    }
  }
}

.custom-checkbox label.custom-control-label,
.form__checkbox-label {
  position: relative;
  padding-top: 3px;
  margin-bottom: 0;
  vertical-align: top;
  cursor: pointer;

  &::before {
    background-color: $form-background-color;
    border: 1px solid var(--color-form-border);
    border-radius: 0;
    pointer-events: none;
  }

  &::after {
    background: no-repeat 50% / 50% 50%;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: $form-checkbox-size;
    height: $form-checkbox-size;
    top: 0;
    left: -#{$form-checkbox-offset};
  }

  + .form__input {
    display: inline-block;
    margin-left: -4px;
    flex: 1;

    @include media-breakpoint-up(lg) {
      flex-basis: 50%;
      flex-grow: 0;
    }
  }

  &:hover {
    &::before {
      border-color: $form-border-hover-color;
    }
  }
}

div.custom-control,
.form__checkbox-control {
  padding-left: $form-checkbox-offset;
  min-height: $form-checkbox-size;
  display: flex;

  + .invalid-feedback {
    display: none !important;
  }

  .custom-control-input {
    width: $form-checkbox-size;
    height: $form-checkbox-size;
  }
}

.form__submit {
  display: flex;
  margin-bottom: spacing(2);
}

.form__form {
  margin-top: spacing(10);
}

.form__super-field {
  opacity: 0.0001;
  position: absolute;
  pointer-events: none;
  z-index: -1;
  border: 0;
  padding: 0;
  margin: 0;
  transform: translateY(-100%);
}

.form__radio-control {
  display: flex;
  flex-direction: row;

  input[type='radio'],
  .form__radio {
    appearance: none;
    width: $form-radio-size;
    height: $form-radio-size;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
    border-color: var(--color-form-border);

    &:checked {
      background-color: $form-background-color;
      border: 0.6em solid var(--color-primary);
      box-shadow: 0 0 0 1px var(--color-form-border);
    }

    &:hover {
      box-shadow: 0 0 0 1px $form-border-hover-color;
    }
  }

  .form__radio-label {
    margin: auto 0;
    margin-left: spacing(4);
  }

  .form__radio,
  .form__radio-label {
    cursor: pointer;
  }
}

.form-field {
  @include utility-animation-options($distance: 15%, $delay: 200ms, $duration: 0.8s, $selector: '&');
}

.form__recaptcha-infos {
  @include font-size-xs;
}

.grecaptcha-badge {
  visibility: hidden !important;
}

.form__wrapper {
  &.loading {
    opacity: 0.6;
    pointer-events: none;
  }
}
.form__loader {
  z-index: 2;
}
</style>
