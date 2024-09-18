import Tools from "../assets/js/tools.js";
import State from "../assets/js/state.js";

export default {
  tagName: "text-animation",
  props: {
    sequence: Object,
    fixed: Boolean,
    cta: Object,
  },
  data() {
    return {
      defaultTextSize: "font-size-6",
      defaultSublineSize: "font-size-2",
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
      textValue: "",
      currentSubline: "",
      currentSublineSize: null,
      currentTextSize: "",
      currentText: "",
      isEnded: false,
      isSecondLast: false,
      showSubline: false,
      sublineValue: null,
      isCalculated: false,
      calculationStep: 0,
      calculatedMaxHeight: 0,
    };
  },
  computed: {
    classList() {
      return [
        "text-animation vue-component",
        this.isCalculated ? "" : State.INVISIBLE,
        this.isEnded ? State.END : "",
        this.isFixed ? "text-animation--fixed" : "",
      ];
    },
    isFixed() {
      return Tools.isTrue(this.fixed);
    },
    textClassList() {
      return ["text-animation__text", this.currentTextSize];
    },
    sublineClassList() {
      return [
        "text-animation__subline",
        this.currentSublineSize,
        this.showSubline ? "" : State.INVISIBLE,
      ];
    },
    placeholderSublineClassList() {
      return ["text-animation__subline", this.currentSublineSize];
    },
    placeholderTextClassList() {
      return ["text-animation__text", this.currentTextSize];
    },
    placeholderCtaClassList() {
      return [
        "text-animation__cta",
        this.isSecondLast || this.isEnded ? "" : State.INVISIBLE,
      ];
    },
    ctaClassList() {
      return ["text-animation__cta", this.isEnded ? "" : State.INVISIBLE];
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
      this.currentTextSize =
        this.currentSequenceStep.textSize || this.defaultTextSize;

      const textSizeValue = parseInt(this.currentTextSize.match(/\d+/)[0]);

      this.getDelayByValue(textSizeValue);

      this.currentSubline = this.currentSequenceStep?.subline || "";
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

      this.$emit("text-animation-ended", this.isEnded);

      window.clearTimeout(this.timeout);
    },
    next() {
      if (this.step >= this.sequenceData.length - 1) return;

      this.step++;

      this.animate();
    },
    animateText() {
      this.currentSublineSize =
        this.currentSequenceStep.sublineSize || this.defaultSublineSize;
      this.sublineValue = this.currentSubline;

      if (this.step + 1 !== this.sequenceData.length) {
        this.isEnded = false;
      }

      if (this.step === this.sequenceData.length - 1) {
        this.isSecondLast = true;
      }

      this.$emit("text-animation-state", {
        step: this.step,
        isSecondLast: this.isSecondLast,
      });

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
      this.textValue = "";
      this.sublineValue = "";
      this.showSubline = false;

      this.oldStep = this.sequenceData[this.step - 1];
      this.nextStep = this.sequenceData[this.step + 1] || this.sequenceData[0];

      this.currentTextSize = this.nextStep.textSize || this.defaultTextSize;
      this.currentSublineSize =
        this.nextStep.sublineSize || this.defaultSublineSize;
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

      const updateTextValue = () => {
        this.textValue = this.textValue + letter;
      };

      updateTextValue();
    },
    calculateNextMaxHeight() {
      const step = this.sequenceData[this.calculationStep];

      if (!step) return (this.isCalculated = true);

      this.currentText = null;
      this.sublineValue = null;
      this.ctaData = null;

      this.currentTextSize = step.textSize || this.defaultTextSize;
      this.currentText = step.text;

      if (step.subline) {
        this.currentSublineSize = step.sublineSize || this.defaultSublineSize;
        this.sublineValue = step.subline;
      }

      this.calculationStep++;
    },
    handleResize() {
      this.calculatedMaxHeight = null;

      const placeholder = this.$refs.placeholder;

      this.calculatedMaxHeight = placeholder.offsetHeight;
    },
  },
  updated() {
    if (!this.isCalculated) {
      const placeholder = this.$refs.placeholder;

      this.$refs.placeholderCta.style.display = "none";

      this.calculatedMaxHeight =
        placeholder.offsetHeight > this.calculatedMaxHeight
          ? placeholder.offsetHeight
          : this.calculatedMaxHeight;

      this.calculateNextMaxHeight();

      this.$refs.placeholderCta.style.display = "";
    }
  },
  created() {
    this.text = this.$refs.text;

    this.sizeBasedDelay = this.letterDelay;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);

    this.calculateNextMaxHeight();
  },
  watch: {
    isCalculated(newValue) {
      if (!newValue) return;

      this.$refs.placeholder.style.minHeight = this.calculatedMaxHeight + "px";

      this.animate();
    },
  },
  template: `
    <div :class="classList">
      <div class="text-animation__placeholder" ref="placeholder">
        <span :class="placeholderTextClassList" ref="placeholderText" v-html="currentText"></span>
        <div :class="placeholderSublineClassList" v-html="sublineValue"></div>
        <div :class="placeholderCtaClassList" ref="placeholderCta" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
      <div class="text-animation__visible">
        <span :class="textClassList" ref="text" v-html="textValue"></span>
        <div :class="sublineClassList" v-html="sublineValue"></div>
        <div :class="ctaClassList" v-if="ctaData">
          <cta v-bind="ctaData"></cta>
        </div>
      </div>
    </div>
  `,
};
