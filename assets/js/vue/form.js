import Tools from '../tools.js';

export default {
  tagName: 'formular',
  computed: {
    classList() {
      return [
        'form',
        `${Tools.isTrue(this.light) === true ? 'is-light' : ''}`,
        `${Tools.isTrue(this.ajax) === true ? 'form--ajax' : ''}`,
        `${Tools.isTrue(this.container) === true ? 'container' : ''}`,
        `${Tools.isTrue(this.customValidation) === true ? 'form--custom-validation' : ''}`,
        'vue-component',
      ];
    },
    rowClassList() {
      return ['form__row', `${this.container ? 'row' : ''}`];
    },
    wrapperClassList() {
      return [`${this.container ? 'col-md-11 col-lg-10' : ''}`];
    },
    headlineClassList() {
      return ['container headline-row', `${this.space ? this.space : 'space-top-2'}`];
    },
    sublineClassList() {
      return ['text-center', `${this.form.sublineClasses ? this.form.sublineClasses : ''}`];
    },
    formClassList() {
      return ['form__submit mt-5', `${this.uncentered ? '' : 'justify-content-center'}`];
    },
    method() {
      return this.form.method ? this.form.method : 'post';
    },
    preparedBlocks() {
      const blocks = [];

      let index = 0;
      let tempBlock = [];

      this.form.fields.forEach((field) => {
        if (field.rowStart) {
          blocks[index] = tempBlock;

          tempBlock.push(field);
        } else if (field.rowEnd) {
          tempBlock.push(field);

          tempBlock = [];
          index++;
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
  methods: {
    getOptions(field) {
      return typeof field.options === 'string' ? this.options[field.options] : field.options;
    },
    getBlockClassList(block) {
      return ['row mx-n3', `${block?.rowClass ? block.rowClass : ''}`];
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
  },
  template: `
    <div :class="classList">
      <div :class="rowClassList">
        <div :class="wrapperClassList">
          <div v-if="form.headline" :class="headlineClassList" >
            <div class="row">
              <div class="col-sm-12">
                <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
                <p :class="sublineClassList" v-html="form.subline"></p>
              </div>
            </div>
          </div>
          <form class="form__form js-validate mt-6" :method="method" :action="form.action">
            <template v-for="block in preparedBlocks">
              <div :class="getBlockClassList(block[0])" v-if="block.length > 1">
                <div :class="['px-3', 'col-md-' + field.col]" v-for="field in block">
                  <form-fields :field='field' :options="getOptions(field)" :replace-value="replaceValue" />
                </div>
              </div>
              <template v-else>
                <form-fields :field='block[0]' :options="getOptions(block[0])" :replace-value="replaceValue" />
              </template>
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
