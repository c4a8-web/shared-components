import State from '../state.js';
import Tools from '../tools.js';

export default {
  tagName: 'survey',
  data() {
    return {
      resetTimeout: null,
      resetWaitTimeout: null,
      translationData: {},
      resetDelay: 300,
      resetWaitDelay: 300,
      isReady: false,
      showResult: false,
      slickElement: null,
      currentStepIndex: 0,
      currentScore: 0,
      options: {
        dots: false,
        centerMode: false,
        draggable: false,
        touchMove: false,
        swipe: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              adaptiveHeight: true,
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
    progressText() {
      if (this.showResult) return this.translationData['evaluation'];

      const question = this.translationData['question'];

      if (!question) return '';

      return question + ` ${this.normalizedStep} / ${this.steps.length}`;
    },
    normalizedStep() {
      return this.currentStepIndex + 1;
    },
    progressStyle() {
      return `width: ${(this.normalizedStep / this.steps.length) * 100}%`;
    },
    rule() {
      const firstRuleIndex = 0;
      const fallbackRule = this.rules[firstRuleIndex];

      let selectedRule = null;

      for (let i = 0; i < this.rules.length; i++) {
        const currentRule = this.rules[i];
        const nextRule = this.rules[i + 1];

        if (!nextRule && !selectedRule) {
          selectedRule = currentRule;
        } else if (!selectedRule) {
          if (this.currentScore <= currentRule.maxPercentage) {
            selectedRule = currentRule;
          }
        }
      }

      return selectedRule ? selectedRule : fallbackRule;
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
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData(['question', 'evaluation']);
      });
    }
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
      this.calculateScoring();

      this.showResult = true;

      setTimeout(() => {
        this.scrollIntoView(this.$refs['status-bar']);
      }, 500);
    },
    resetForms() {
      const steps = this.$refs.steps;

      if (!steps) return;

      const forms = steps.querySelectorAll('form');

      forms.forEach((form) => {
        form.reset();

        form.querySelector('input[type="radio"]').setAttribute('checked', true);
      });
    },
    handleReset() {
      this.showResult = false;
      this.currentStepIndex = 0;

      this.resetTimeout = setTimeout(() => {
        this.slickElement.slick('slickGoTo', 0);
        this.resetForms();

        this.resetWaitTimeout = setTimeout(() => {
          this.handleResetTimeout();
          this.scrollIntoView(this.$refs['subline']);
        }, this.resetWaitDelay);
      }, this.resetDelay);
    },
    scrollIntoView(element) {
      if (Tools.isUpperBreakpoint()) return;

      Tools.scrollIntoView(element, true);
    },
    handleResetTimeout() {
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
    calculatePercentage(points) {
      const maxPoints = this.maxPoints;

      if (!maxPoints) return 0;

      return (points / maxPoints) * 100;
    },
    calculateScoring() {
      const steps = this.$refs.steps;

      if (!steps) return;

      const radios = steps.querySelectorAll('input[type="radio"]:checked');

      if (!radios.length) return;

      let totalPoints = 0;

      radios.forEach((radio) => {
        const values = radio.id.split('_');
        const points = parseInt(values[values.length - 1], 10);

        if (!isNaN(points)) {
          totalPoints += points;
        }
      });

      this.currentScore = this.calculatePercentage(totalPoints);
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
    maxPoints: {
      type: Number,
      required: true,
    },
    rules: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
    },
  },
  template: `
    <div :class="classList" :style="style">
      <div class="container">
        <div class="survey__row row">
          <div class="survey__col mx-auto col-lg-9">
            <div class="survey__header" :id="id">
              <headline :text="headline?.text" :level="headline?.level" classes="survey__headline" />
              <div class="survey__subline font-size-3 thin" v-if="subline" ref="subline">{{ subline }}</div>
            </div>
            <div class="survey__status-bar" ref="status-bar">
              <span class="survey__progress-text font-size-sm">{{ progressText }}</span>
              <div class="survey__progress-bar">
                <div class="survey__progress-bar-fill" :style="progressStyle"></div>
              </div>
            </div>
            <Transition name="survey__fade">
              <div class="survey__steps slick--no-offset" ref="steps" v-show="!showResult">
                <slider :options="options" :hide-background="true" :hide-container="true">
                  <div class="survey__step" v-for="(step, index) in steps" :key="index">
                    <div class="survey__step-question font-size-2">{{ step.question }}</div>
                    <formular v-bind="formData(step)" :column="true" classes="font-size-2" :light="true" />
                  </div>
                </slider>
              </div>
            </Transition>
            <Transition name="survey__fade">
              <div class="survey__result" v-show="showResult">
                <div class="survey__result-image">
                  <v-img v-bind="rule?.image" v-if="showResult" />
                </div>
                <div class="survey__result-content">
                  currentScore: {{ currentScore }}
                  <headline :text="rule?.headline?.text" :level="rule?.headline?.level || 'h4'" classes="survey__result-headline bold" />
                  <div class="survey__result-text font-size-2">{{ rule?.text }}</div>
                  <cta v-bind="rule?.cta" />
                </div>
              </div>
            </Transition>
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
