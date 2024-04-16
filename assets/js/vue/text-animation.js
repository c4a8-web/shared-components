import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'text-animation',
  props: {
    sequence: Object,
    fixed: Boolean,
    cta: Object,
  },
  data() {
    return {
      defaultTextSize: 'font-size-6',
      defaultSublineSize: 'font-size-2',
      timeout: null,
      textTimeout: null,
      letterDelay: 120,
      sizeBasedDelay: null,
      minDelay: 800,
      currentDelay: 0,
      lastDelay: 0,
      delayOffset: 1600,
      sublineDelay: 1150,
      buttonDelay: 800,
      step: 0,
      textValue: '',
      currentSubline: '',
      currentSublineSize: null,
      currentTextSize: '',
      isEnded: false,
      showSubline: false,
    };
  },
  computed: {
    classList() {
      return ['text-animation vue-component', this.isEnded ? State.END : ''];
    },
    textClassList() {
      return ['text-animation__text', this.currentTextSize];
    },
    sublineClassList() {
      return ['text-animation__subline', this.currentSublineSize, this.showSubline ? '' : State.INVISIBLE];
    },
    placeholderSublineClassList() {
      return ['text-animation__subline', this.currentSublineSize];
    },
    placeholderTextClassList() {
      return ['text-animation__text', this.currentTextSize];
    },
    placeholderCtaClassList() {
      return ['text-animation__cta', !this.isEnded ? State.INVISIBLE : ''];
    },
    ctaClassList() {
      return ['text-animation__cta', this.isEnded ? '' : State.INVISIBLE];
    },
    sequenceData() {
      return Tools.getJSON(this.sequence);
    },
    ctaData() {
      return Tools.getJSON(this.cta);
    },
  },
  methods: {
    getDelayByValue(value) {
      const fontSize6Value = 6;
      const fontSize7Value = 7;

      switch (value) {
        case fontSize6Value:
          this.sizeBasedDelay = this.letterDelay / 1.8;
          this.sizeBasedOffset = this.delayOffset;
          break;
        case fontSize7Value:
        default:
          this.sizeBasedDelay = this.letterDelay / 10;
          this.sizeBasedOffset = this.minDelay;
          break;
      }
    },
    calculateDelay() {
      this.currentSequenceStep = this.sequenceData[this.step];
      this.currentText = this.currentSequenceStep.text;
      this.currentTextSize = this.currentSequenceStep.textSize || this.defaultTextSize;

      const textSizeValue = parseInt(this.currentTextSize.match(/\d+/)[0]);

      this.getDelayByValue(textSizeValue);

      this.currentSubline = this.currentSequenceStep?.subline || '';
      this.currentDelay =
        this.currentText.length * this.sizeBasedDelay +
        this.sizeBasedOffset +
        (this.currentSubline.length > 0 ? this.sublineDelay : 0);

      if (this.currentDelay < this.minDelay) this.currentDelay = this.minDelay;

      this.lastDelay = this.lastDelay + this.currentDelay;
    },
    showButtonAtLastRun(timeout) {
      if (this.step + 1 < this.sequenceData.length) return;

      setTimeout(() => {
        this.end();
      }, timeout + this.buttonDelay);
    },
    end() {
      this.isEnded = true;

      window.clearTimeout(this.timeout);
    },
    next() {
      if (this.step >= this.sequenceData.length - 1) return;

      this.step++;

      this.animate();

      if (!this.icon) return;

      // this.icon.classList.remove(`icon--step-${this.step - 1}`);
      // this.icon.classList.add(`icon--step-${this.step}`);

      // this.startIconSteps();
    },
    animateText() {
      this.currentSublineSize = this.currentSequenceStep.sublineSize || this.defaultSublineSize;
      this.sublineValue = this.currentSubline;

      if (this.step + 1 === this.sequenceData.length) {
        // this.icon.classList.add(State.END);
        console.log('ADD ICON END');
        // EMIT EVENT TO parent to update icon??
      } else {
        this.isEnded = false;
      }

      // TOdO requestanimation frame

      for (let i = 0; i < this.currentText.length; i++) {
        this.textTimeout = i * this.sizeBasedDelay + this.sizeBasedDelay;

        setTimeout(() => {
          this.typeLetter(this.currentText[i]);
        }, this.textTimeout);
      }

      if (this.currentSubline.length) {
        this.textTimeout = this.textTimeout + this.sublineDelay;

        setTimeout(() => {
          this.sublineValue = this.currentSubline;

          this.showSubline = true;
        }, this.textTimeout);
      }

      this.showButtonAtLastRun(this.textTimeout);
    },
    resetText() {
      this.textValue = '';
      this.sublineValue = '';
      this.showSubline = false;

      this.oldStep = this.sequenceData[this.step - 1];
      this.nextStep = this.sequenceData[this.step + 1] || this.sequenceData[0];

      this.currentTextSize = this.nextStep.textSize || this.defaultTextSize;

      this.currentSublineSize = this.nextStep.sublineSize || this.defaultSublineSize;
    },
    animate() {
      this.calculateDelay();
      this.animateText();

      this.timeout = setTimeout(() => {
        this.resetText();
        this.next();
      }, this.currentDelay);
    },
    typeLetter(letter) {
      if (!letter) return;

      this.textValue = this.textValue + letter;
    },
  },
  created() {
    this.text = this.$refs.text;

    this.sizeBasedDelay = this.letterDelay;
  },
  mounted() {
    this.animate();
  },
  template: `
    <div :class="classList">
      <div class="text-animation__placeholder">
        <span :class="placeholderTextClassList" ref="placeholderText">{{ textValue }}</span>
        <div :class="placeholderSublineClassList">{{ sublineValue }}</div>
        <div :class="placeholderCtaClassList" ref="placeholderCta" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
      <div class="text-animation__visible">
        <span :class="textClassList" ref="text">{{ textValue }}</span>
        <div :class="sublineClassList">{{ sublineValue }}</div>
        <div :class="ctaClassList" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
    </div>
  `,
};
