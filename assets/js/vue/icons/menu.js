export default {
  tagName: 'menu',
  computed: {
    effectiveKeySplines() {
      return '0.19 1 0.2 1';
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
    lineData() {
      return {
        line1: {
          from: {
            x1: '8.5',
            x2: '44.5',
            y1: '5.5',
            y2: '5.5',
          },
          to: {
            x1: '13',
            x2: '38.4558',
            y1: '31.8787',
            y2: '6.42284',
          },
        },
        line2: {
          from: {
            x1: '8.5',
            x2: '44.5',
            y1: '25.5',
            y2: '25.5',
          },
          to: {
            x1: '15.1213',
            x2: '40.5772',
            y1: '6',
            y2: '31.4558',
          },
        },
        line3: {
          from: {
            x1: '19.5',
            x2: '44.5',
            y1: '15.5',
            y2: '15.5',
          },
          to: {
            x1: '19.5',
            x2: '19.5',
            y1: '15.5',
            y2: '15.5',
          },
        },
      };
    },
  },
  updated() {
    console.log('change');
    if (this.closed) {
      // this.keyPoints = '0;1';
    } else {
      // this.keyPoints = '1;0';
    }
    this.animateLines();
  },
  methods: {
    animateLines() {
      this.$refs['line1'].querySelectorAll('animate').forEach((animation) => {
        animation.beginElement();
      });
      this.$refs['line2'].querySelectorAll('animate').forEach((animation) => {
        animation.beginElement();
      });
      this.$refs['line3'].querySelectorAll('animate').forEach((animation) => {
        animation.beginElement();
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
      duration: '0.75s',
      begin: 'indefinite',
      keyTimes: null,
      keyPoints: '0;1',
    };
  },
  template: `
    <svg v-bind="settings" :style="style" width="46" height="33" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line id="line1" :x1="lineData.line1.from.x1" :x2="lineData.line1.from.x2" :y1="lineData.line1.from.y1" :y2="lineData.line1.from.y2" stroke-width="3" stroke-linecap="round" ref="line1" >
        <animate attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line1.from.x1" :to="lineData.line1.to.x1" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line1.from.x2" :to="lineData.line1.to.x2" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line1.from.y1" :to="lineData.line1.to.y1" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line1.from.y2" :to="lineData.line1.to.y2" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
      <line style="transition: all linear 10.7s" id="line2" :x1="lineData.line2.from.x1" :x2="lineData.line2.from.x2" :y1="lineData.line2.from.y1" :y2="lineData.line2.from.y2" stroke-width="3" stroke-linecap="round" ref="line2" >
        <animate attributeName="x1" :begin="begin" :dur="duration" :from="lineData.line2.from.x1" :to="lineData.line2.to.x1" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="x2" :begin="begin" :dur="duration" :from="lineData.line2.from.x2" :to="lineData.line2.to.x2" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y1" :begin="begin" :dur="duration" :from="lineData.line2.from.y1" :to="lineData.line2.to.y1" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
        <animate attributeName="y2" :begin="begin" :dur="duration" :from="lineData.line2.from.y2" :to="lineData.line2.to.y2" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
      <line style="transition: all linear 0.05s" id="line3" :x1="lineData.line3.from.x1" :x2="lineData.line3.from.x2" :y1="lineData.line3.from.y1" :y2="lineData.line3.from.y2" stroke-width="3" stroke-linecap="round" ref="line3" >
        <animate attributeName="stroke-width" :begin="begin" dur="0.01s" from="3" to="0" fill="freeze" calcMode="spline" :keyPoints="keyPoints" :keyTimes="keyTimes" :keySplines="effectiveKeySplines" />
      </line>
    </svg>
  `,
};
