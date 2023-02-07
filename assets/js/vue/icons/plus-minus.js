export default {
  tagName: 'plus-minus',
  computed: {
    effectiveKeySplines() {
      return '0.19 1 0.2 1';
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  updated() {
    this.animate(this.closed);
  },
  mounted() {
    this.animate(this.closed, true);
  },
  methods: {
    animate(mode, start) {
      const animations = [];

      this.$refs['svg'].querySelectorAll('animate, animateTransform').forEach((animation) => {
        if (!mode && !animation.classList.contains('closed')) {
          animations.push(animation);
        } else if (mode && animation.classList.contains('closed')) {
          animations.push(animation);
        }
      });

      const animationFunction = start ? 'beginElementAt' : 'beginElement';

      animations.forEach((animation) => {
        animation[animationFunction](1000);
      });
    },
  },
  props: {
    settings: Object,
    color: String,
    closed: Boolean,
  },
  data() {
    return {
      duration: '0.35s',
      begin: 'indefinite',
      keyTimes: '0;1',
    };
  },
  template: `
    <svg v-bind="settings" :style="style" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref="svg" >
      <g id="plus-minus__group" style="transform-origin: 12px 12px">
        <animateTransform attributeName="transform" type="rotate" :begin="begin" :dur="duration" from="0" to="90" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animateTransform attributeName="transform" type="rotate" :begin="begin" :dur="duration" from="90" to="0" fill="freeze" calcMode="spline" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" class="closed" />
        <path d="M12 1V23" stroke-linecap="round" />
        <path d="M23 12H1" stroke-linecap="round" style="transition-duration: 0s">
          <animate attributeName="stroke-width" :begin="begin" dur="0.01s" from="1" to="0" fill="freeze" />
          <animate attributeName="stroke-width" :begin="begin" dur="0.01s" to="1" from="0" fill="freeze" class="closed" />
        </path>
      </g>
    </svg>
  `,
};
