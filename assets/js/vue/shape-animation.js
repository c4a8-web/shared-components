export default {
  tagName: 'shape-animation',
  computed: {
    tag() {
      return this.isAnimate ? 'animate' : 'animateTransform';
    },
    isAnimate() {
      let result = false;

      switch (this.attributeName) {
        case 'opacity':
          result = true;
          break;
        default:
          break;
      }

      return result;
    },
    defaultCalcMode() {
      return this.isAnimate ? null : 'spline';
    },
    defaultKeyTimes() {
      return this.isAnimate ? null : '0;1';
    },
    effectiveKeySplines() {
      return this.isAnimate ? null : this.keySplines;
    },
  },
  props: {
    id: String,
    href: String,
    begin: String,
    attributeName: String,
    by: String,
    from: String,
    to: String,
    dur: String,
    fill: String,
    calcMode: String,
    keyTimes: String,
    keySplines: String,
    type: String,
    additive: Boolean,
  },
  template: `
    <component :is="tag"
      :id="id"
      :href="href"
      :begin="begin"
      :attributeName="attributeName ? attributeName : 'transform'"
      :by="by"
      :from="from"
      :to="to"
      :dur="dur"
      :fill="fill ? fill : 'freeze'"
      :calcMode="calcMode ? calcMode : defaultCalcMode"
      :keyTimes="keyTimes ? keyTimes : defaultKeyTimes"
      :keySplines="effectiveKeySplines"
      :type="type"
      :additive="additive ? 'sum': null"
    />
  `,
};
