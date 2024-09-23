import Tools from '../assets/js/tools.js';
import Form from '../assets/js/components/form.js';

export default {
  tagName: 'formular',
  data() {
    return {
      originalAction: '',
      formAction: '',
    };
  },
  computed: {
    classList() {
      return [
        'form',
        `${Tools.isTrue(this.light) === true ? 'is-light' : ''}`,
        `${Tools.isTrue(this.ajax) === true ? 'form--ajax' : ''}`,
        `${Tools.isTrue(this.container) === true ? 'container' : ''}`,
        `${Tools.isTrue(this.customValidation) === true ? 'form--custom-validation' : ''}`,
        this.form?.noCustomSubmit === true ? Form.noCustomSubmitClass : '',
        'vue-component',
      ];
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

      this.form.fields.forEach((field) => {
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
  beforeMount() {
    this.originalAction = this.formAction = this.form.action;
  },
  methods: {
    getOptions(field) {
      return typeof field.options === 'string' ? this.options[field.options] : field.options;
    },
    getBlockClassList(block) {
      return ['row mx-n3', `${block?.rowClass ? block.rowClass : ''}`];
    },
    getFieldClassList(field) {
      return ['px-3', `${field.col ? 'col-md-' + field.col : 'col-md-12'}`];
    },
    getId(field) {
      const groupField = field?.radios || field?.checkboxes;
      const fieldId = groupField ? groupField[0].id : field?.id;

      if (!Tools.isTrue(this.hasUuid)) return fieldId;

      return Form.getId(fieldId);
    },
    updateAction(newAction) {
      if (newAction) {
        this.formAction = newAction;
      } else {
        this.formAction = this.originalAction;
      }
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
    hasUuid: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
  },
  template: `
    <div :class="classList">
      <div :class="rowClassList">
        <div :class="wrapperClassList">
          <div v-if="form.headline" :class="headlineClassList" data-utility-animation-step="1">
            <div class="row">
              <div class="col-sm-12">
                <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
                <p :class="sublineClassList" v-html="form.subline"></p>
              </div>
            </div>
          </div>
          <form class="form__form js-validate mt-6" :method="method" :action="formAction">
            <template v-for="block in preparedBlocks">
              <div :class="getBlockClassList(block[0])" v-if="block.length > 0">
                <div :class="getFieldClassList(field)" v-for="field in block">
                  <form-fields :field='field' :options="getOptions(field)" :replace-value="replaceValue" :id="getId(field)" :has-animation="hasAnimationValue" @action-changed="updateAction" />
                </div>
              </div>
            </template>
            <div :class="formClassList">
              <cta :text="form.ctaText" type="submit" :button="true" :skin="form.cta.skin" :width="form.cta.width" :analytics="analytics" />
            </div>
            <input type="text" class="form__super-field" name="_gotcha">
          </form>
        </div>
      </div>
    </div>
  `,
};
