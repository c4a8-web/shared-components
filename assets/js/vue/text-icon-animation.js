import Tools from '../tools.js';

export default {
  tagName: 'text-icon-animation',
  props: {
    animation: Object,
    icon: String,
    fixed: Boolean,
    cta: Object,
    classes: String,
  },
  data() {
    return {
      textAnimationStep: 0,
      isEnded: false,
      isSecondLast: false,
    };
  },
  computed: {
    animationData() {
      return Tools.getJSON(this.animation);
    },
    sequence() {
      return this.animationData.sequence;
    },
    classList() {
      return [
        'text-icon-animation row vue-component',
        this.classes,
        this.isFixed ? 'text-icon-animation--fixed' : '',
        this.isEnded ? 'text-icon-animation--ended' : '',
        this.isSecondLast ? 'text-icon-animation--is-second-last' : '',
      ];
    },
    isFixed() {
      return Tools.isTrue(this.fixed);
    },
    iconClassList() {
      return `text-icon-animation__icon icon--step-${this.textAnimationStep}`;
    },
  },
  methods: {
    handleTextAnimationState(state) {
      this.textAnimationStep = state?.step;
      this.isSecondLast = state?.isSecondLast;
    },
    handleTextAnimationEnded(event) {
      this.isEnded = event;
    },
  },
  template: `
    <div :class="classList">
      <div class="text-icon-animation__animation col-lg-8">
        <text-animation
          :sequence="sequence"
          :fixed="fixed"
          :cta="cta"
          @text-animation-state="handleTextAnimationState"
          @text-animation-ended="handleTextAnimationEnded"
        >
        </text-animation>
      </div>
      <div class="text-icon-animation__icon-container col-lg-4">
        <icon :icon="icon" :classes="iconClassList" :animation="animationData" :step="textAnimationStep"></icon>
      </div>
    </div>
  `,
};
