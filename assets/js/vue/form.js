export default {
  tagName: 'formular',
  computed: {
    classList() {
      return [
        'form',
        `${this.light ? 'is-light' : ''}`,
        `${this.ajax ? 'form--ajax' : ''}`,
        `${this.container ? 'container' : ''}`,
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
  },
  template: `
    <div :class="classList" v-bind="settings">
      <div :class="rowClassList">
        <div :class="wrapperClassList">
          <div v-if="form.headline" :class="headlineClassList" >
            <div class="row">
              <div class="col-sm-12">
                <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
                <p :class="sublineClassList">
                  {{form.subline}}
                </p>
              </div>
            </div>
          </div>
          <form class="form__form js-validate mt-6" :method="method" :action="form.action">
            // TODO FORM FIELDS + additionalfields
            <div :class="formClassList">
              <cta :text="form.ctaText" type="submit" :button="true" :skin="form.cta.skin" :width="form.cta.width" :analytics="analytics" />
            </div>
            <input type="text" class="form__super-field" name="_gotcha">
          </form>
        </div>
      </div>
    </div>`,
};
