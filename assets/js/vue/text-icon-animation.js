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
  computed: {
    animationData() {
      return Tools.getJSON(this.animation);
    },
    sequence() {
      return this.animationData.sequence;
    },
    classList() {
      return ['text-icon-animation row vue-component', this.classes, this.isFixed ? 'text-icon-animation--fixed' : ''];
    },
    isFixed() {
      return Tools.isTrue(this.fixed);
    },
  },
  template: `
    <div :class="classList">
      <div class="text-icon-animation__animation col-lg-8">
        <text-animation
          :sequence="sequence"
          :fixed="fixed"
          :cta="cta"
        >
        </text-animation>
      </div>
      <div class="text-icon-animation__icon col-lg-4">
        <icon :icon="icon" :animation="animationData"></icon>
      </div>
    </div>
  `,
};
