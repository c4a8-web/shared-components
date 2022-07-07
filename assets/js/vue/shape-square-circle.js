import ShapeElements from '../shape-elements.js';

const defaultStart = '1s';
const smallCircleRadius = 70;
const smallCircleDuration = '0.8s';
const bigCircleRadius = 155;

const tagName = 'shape-square-circle';

export default {
  tagName: tagName,
  computed: {
    classList() {
      return ['shape-square-circle', 'vue-component'];
    },
    begin() {
      return this.start ? this.start : defaultStart;
    },
    rectColor() {
      return this.backgroundColor ? this.backgroundColor : '#673ab7';
    },
    pathColor() {
      return this.circleColor ? this.circleColor : '#fcd116';
    },
    bigCircle() {
      return this.sequence.bigCircle;
    },
    smallCircle() {
      return this.sequence.smallCircle;
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    clipPathId() {
      return `${this.shapeElements?.getStepId('clip-path')}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId})`;
    },
    sequence() {
      return this.shapeElements?.getSequence();
    },
    shapeElements() {
      if (!this.shapeElementsInstance)
        this.shapeElementsInstance = new ShapeElements({ tagName, elements: this.elements, begin: this.begin });

      return this.shapeElementsInstance;
    },
  },
  data() {
    return {
      elements: [
        {
          name: 'smallCircle',
          grow: {
            start: true,
            waitFor: 'bigCircle.reset',
            delay: '20s',
          },
          shrink: {
            waitFor: 'bigCircle.shrink',
            delay: '0.1s',
          },
          reset: {
            waitFor: 'bigCircle.shrink',
            delay: '0.8s',
          },
        },
        {
          name: 'bigCircle',
          shrink: {
            waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          reset: {
            waitFor: 'smallCircle.shrink',
            delay: '0.01s',
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    backgroundColor: String,
    circleColor: String,
    start: String,
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <circle :fill="pathColor" :id="bigCircle?.id" cx="200" cy="200" r="${bigCircleRadius}">
          <animate
            :id="bigCircle?.shrink?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.shrink?.begin"
            attributeName="r"
            from="${bigCircleRadius}"
            to="0"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="bigCircle?.reset?.id"
            :href="bigCircle?.href"
            :begin="bigCircle?.reset?.begin"
            attributeName="r"
            from="0"
            to="${bigCircleRadius}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${bigCircleRadius / 1.1};${bigCircleRadius / 1.15};${bigCircleRadius / 1.1};${bigCircleRadius}"
          />
        </circle>
        <circle :fill="rectColor" :id="smallCircle?.id" cx="200" cy="200" r="${smallCircleRadius}">
          <animate
            :id="smallCircle?.grow?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.grow?.begin"
            attributeName="r"
            from="${smallCircleRadius}"
            :to="width"
            dur="${smallCircleDuration}"
            fill="freeze"
          />
          <animate
            :id="smallCircle?.shrink?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.shrink?.begin"
            attributeName="r"
            :from="width"
            to="0"
            dur="0.2s"
            fill="freeze"
          />
          <animate
            :id="smallCircle?.reset?.id"
            :href="smallCircle?.href"
            :begin="smallCircle?.reset?.begin"
            attributeName="r"
            from="0"
            to="${smallCircleRadius}"
            dur="0.6s"
            fill="freeze"
            keyTimes="0; 0.35; 0.70; 0.85; 1"
            values="0;${smallCircleRadius / 1.1};${smallCircleRadius / 1.15};${
    smallCircleRadius / 1.1
  };${smallCircleRadius}"
          />
        </circle>
      </g>
    </g>`,
};
