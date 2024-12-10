import State from '../state.js';

export default {
  tagName: 'survey',
  data() {
    return {
      resetTimeout: null,
      resetWaitTimeout: null,
      resetDelay: 300,
      resetWaitDelay: 300,
      isReady: false,
      showResult: false,
      slickElement: null,
      currentStepIndex: 0,
      options: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        // nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: false,
        centerMode: false,
        draggable: false,
        // dotsClass: 'slick-pagination is-default',
        responsive: [
          // {
          //   breakpoint: 1200,
          //   settings: {
          //     slidesToShow: 3,
          //     slidesToScroll: 3,
          //   },
          // },
          // {
          //   breakpoint: 992,
          //   settings: {
          //     centerMode: true,
          //     infinite: false,
          //     centerPadding: centerPadding ? centerPadding : '30px',
          //     slidesToShow: 1,
          //     slidesToScroll: 1,
          //     dots: false,
          //   },
          // },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
    };
  },
  computed: {
    classList() {
      return [
        'survey has-background',
        this.isReady ? 'survey--is-ready' : '',
        this.showResult ? 'survey--show-result' : '',
        this.resetTimeout ? State.IN_TRANSITION : '',
      ];
    },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy)';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : 'var(--color-black-4)';
    },
    style() {
      return `--color-survey-background: ${this.backgroundColor}; --color-survey-color: ${this.copyColor};`;
    },
    prevButtonClass() {
      return ['survey__prev survey__arrow', { [State.DISABLED]: this.isStartPosition }];
    },
    resetButtonClass() {
      return ['survey__reset', { [State.INVISIBLE]: !this.showResult }];
    },
    isEndPosition() {
      return this.currentStepIndex === this.steps.length - 1;
    },
    isStartPosition() {
      return this.currentStepIndex === 0;
    },
  },
  mounted() {
    // TODO get rid of slick
    const steps = this.$refs.steps;
    const carousel = steps?.querySelector('.js-slick-carousel');

    if (!carousel) return;

    this.slickElement = $(carousel);
    this.isReady = true;
  },
  methods: {
    formData(step) {
      const data = {};

      data.form = step.form;

      return data;
    },
    handleResult() {
      this.showResult = true;
    },
    handleReset() {
      this.showResult = false;
      this.currentStepIndex = 0;

      this.resetTimeout = setTimeout(() => {
        this.slickElement.slick('slickGoTo', 0);

        this.resetWaitTimeout = setTimeout(() => {
          this.handleResetTimeout();
        }, this.resetWaitDelay);
      }, this.resetDelay);
    },
    handleResetTimeout() {
      console.log('reset survey');
      clearTimeout(this.resetTimeout);
      clearTimeout(this.resetWaitTimeout);

      this.resetWaitTimeout = this.resetTimeout = null;
    },
    handleNext() {
      if (this.isEndPosition) return this.handleResult();

      this.slickElement.slick('slickNext');

      this.currentStepIndex++;
    },
    handlePrev() {
      this.slickElement.slick('slickPrev');

      if (!this.isStartPosition) this.currentStepIndex--;
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
    <div :class="classList" :style="style">
      <div class="container">
        <div class="survey__row row">
          <div class="survey__col col">
            <div class="survey__header">
              <headline :text="headline?.text" :level="headline?.level" classes="survey__headline" />
              <div class="survey__subline font-size-2" v-if="subline">{{ subline }}</div>
            </div>
            <div class="survey__status-bar">BAR</div>
            <div class="survey__steps" ref="steps">
              <slider :options="options" :hide-background="true" :hide-container="true">
                <div class="survey__step" v-for="(step, index) in steps" :key="index">
                  <div class="survey__step-question">{{ step.question }}</div>
                  <formular v-bind="formData(step)" :column="true" />
                </div>
              </slider>
            </div>
            <div class="survey__controls">
              <div :class="prevButtonClass" @click="handlePrev">
                <icon icon="arrow" direction="left" :circle="true" :hover="true" />
              </div>
              <div class="survey__next survey__arrow" @click="handleNext">
                <icon icon="arrow" :circle="true" :hover="true" />
              </div>
              <div :class="resetButtonClass">
                <icon icon="reload" :circle="true" :hover="true" @click="handleReset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
