export default {
  tagName: 'survey',
  // data() {
  //   return Tools.validateVueProps(this);
  // },
  computed: {
    // lowerLang() {
    //   return this.lang.toLowerCase();
    // },
    // classList() {
    //   return [
    //     `tags__btn btn btn-xs btn-soft-secondary btn-pill mb-2 vue-component`,
    //     this.variant ? 'tag--' + this.variant : `mx-sm-${this.props?.spacing}`,
    //     this.classes ? this.classes : null,
    //   ];
    // },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy)';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : 'var(--color-yellow)';
    },
    style() {
      return `--color-survey-background: ${this.backgroundColor}; --color-survey-color: ${this.copyColor};`;
    },
  },
  methods: {
    formData(step) {
      const data = {};

      data.form = step.form;

      return data;
    },
    handleNext() {
      // TODO validate that one item is selected

      console.log('NEXT STEP');
    },
  },
  props: {
    steps: {
      type: Array,
      required: true,
    },
    bgColor: {
      default: null,
    },
    headline: Object,
    subline: String,
  },
  template: `
    <div class="survey has-background" :style="style">
      <div class="container">
        <div class="survey__row row">
          <div class="survey__col col">
            <div class="survey__header">
              <headline :text="headline?.text" :level="headline?.level" classes="survey__headline" />
              <div class="survey__subline" v-if="subline">{{ subline }}</div>
            </div>
            <div class="survey__status-bar">BAR</div>
            <div class="survey__steps">
              <slider>
                <div class="survey__step" v-for="(step, index) in steps" :key="index">
                  <span class="survey__step-question">{{ step.question }}</span>
                  <formular v-bind="formData(step)" :column="true" />
                </div>
              </slider>
            </div>
            <div class="survey__submit" @click="handleNext">Next</div>
          </div>
        </div>
      </div>
    </div>
  `,
};
