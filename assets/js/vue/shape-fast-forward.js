import ShapeElements from '../shape-elements.js';

const defaultStart = '7s';
const smallCircleRadius = 70;
const smallCircleDuration = '0.8s';
const bigCircleRadius = 155;

const tagName = 'shape-fast-forward';

export default {
  tagName: tagName,
  computed: {
    classList() {
      return ['shape-square-forward', 'vue-component'];
    },
    begin() {
      return this.start ? this.start : defaultStart;
    },
    rectColor() {
      return this.backgroundColor ? this.backgroundColor : '#f8842c';
    },
    pathColor() {
      return this.circleColor ? this.circleColor : '#fcd116';
    },
    firstArrow() {
      return this.sequence.firstArrow;
    },
    secondArrow() {
      return this.sequence.secondArrow;
    },
    thirdArrow() {
      return this.sequence.thirdArrow;
    },
    overall() {
      return {
        keySpline: '0.19 1 0.2 1',
        dur: '0.7s',
      };
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
    points() {
      const width = this.width;
      const halfWidth = this.width / 2;
      const height = this.height;
      const heightHalf = height / 2;

      return {
        firstArrow: `0,0 0,${height} ${heightHalf},${halfWidth}`,
        secondArrow: `${halfWidth},0, ${halfWidth},${height}, ${width},${heightHalf}`,
        thirdArrow: `${-halfWidth},0, ${-halfWidth},${height}, ${0},${halfWidth}`,
      };
    },
  },
  data() {
    return {
      elements: [
        {
          name: 'firstArrow',
          moveTo3: {
            start: true,
            // waitFor: 'bigCircle.reset',
            delay: '1s',
          },
          moveTo4: {
            // waitFor: 'bigCircle.shrink',
            delay: '0.1s',
          },
          moveTo1: {},
          reset: {
            // waitFor: 'bigCircle.shrink',
            delay: '0.8s',
          },
        },
        {
          name: 'secondArrow',
          moveTo4: {
            start: true,
            // waitFor: 'smallCircle.grow',
            delay: '1s',
          },
          moveTo1: {
            // waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          moveT2: {
            // waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          reset: {
            // waitFor: 'smallCircle.shrink',
            delay: '0.01s',
          },
        },
        {
          name: 'thirdArrow',
          moveTo2: {
            start: true,
            // waitFor: 'smallCircle.grow',
            delay: '1s',
          },
          moveTo3: {
            // waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          moveTo4: {
            // waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          reset: {
            // waitFor: 'smallCircle.shrink',
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
      <clipPath :iddd="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <polygon :fill="pathColor" :points="points?.firstArrow" :id="firstArrow?.id">
          <animateTransform
            :id="firstArrow?.moveTo3?.id"
            :href="firstArrow?.href"
            :begin="firstArrow?.moveTo3?.begin"
            attributeName="transform"
            from="0"
            to="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
        </polygon>
        <polygon :aafill="pathColor" fill="#ff0000" :points="points?.secondArrow" :id="secondArrow?.id">
          <animateTransform
            :id="secondArrow?.moveTo4?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.moveTo4?.begin"
            attributeName="transform"
            from="0"
            to="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
        </polygon>
        <polygon :aafill="pathColor" fill="#00ff00" :points="points?.thirdArrow" :id="thirdArrow?.id">
          <animateTransform
            :id="thirdArrow?.moveTo2?.id"
            :href="thirdArrow?.href"
            :begin="thirdArrow?.moveTo2?.begin"
            attributeName="transform"
            from="0"
            to="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
        </polygon>
      </g>
    </g>`,
};
