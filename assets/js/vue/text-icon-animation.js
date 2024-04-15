import Tools from '../tools.js';

export default {
  tagName: 'text-icon-animation',
  props: {
    animation: Object,
    fixed: Boolean,
    cta: Object,
  },
  computed: {
    animationData() {
      return Tools.getJSON(this.animation);
    },
    sequence() {
      return this.animationData.sequence;
    },
  },
  template: `
    <div class="text-icon-animation vue-component">
      text-icon-animation
      <text-animation
        :sequence="sequence"
        :fixed="fixed"
        :cta="cta"
      >
      </text-animation>
    </div>
  `,
};
