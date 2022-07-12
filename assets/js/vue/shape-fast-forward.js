import ShapeElements from '../shape-elements.js';

// const defaultStart = '7s';
const defaultStart = '0s';
const testDelay = '2s';

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
        // keySpline: '0 0.35 0.85 1',
        // keySpline: '0 0.25 0.5 1',
        dur: '0.7s',
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    halfWidth() {
      return this.width / 2;
    },
    halfHeight() {
      return this.height / 2;
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
      const halfWidth = this.halfWidth;
      const height = this.height;
      const heightHalf = this.halfHeight;

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
            waitFor: 'firstArrow.reset',
            delay: testDelay,
          },
          moveTo4: {
            waitFor: 'firstArrow.moveTo3',
            delay: testDelay,
          },
          shrink: {
            waitFor: 'firstArrow.moveTo3',
            delay: testDelay,
          },
          // moveTo1: {},
          reset: {
            waitFor: 'firstArrow.shrink',
            delay: '10.8s',
          },
        },
        {
          name: 'secondArrow',
          moveTo4: {
            start: true,
            waitFor: 'secondArrow.reset',
            delay: testDelay,
          },
          shrink: {
            start: true,
            waitFor: 'secondArrow.reset',
            delay: testDelay,
          },
          hide: {
            waitFor: 'secondArrow.moveTo4',
            delay: '0.01s',
          },
          moveTo1: {
            waitFor: 'secondArrow.hide',
            delay: '0.3s',
          },
          show: {
            waitFor: 'secondArrow.moveTo1',
            delay: '0.3s',
          },
          moveTo2: {
            waitFor: 'secondArrow.show',
            delay: testDelay,
          },
          reset: {
            waitFor: 'secondArrow.moveTo2',
            delay: testDelay,
          },
        },
        {
          name: 'thirdArrow',
          moveTo2: {
            start: true,
            waitFor: 'thirdArrow.moveTo2',
            delay: testDelay,
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
  methods: {
    getAnimationMoveTo4(elementName, stepName) {
      // <g v-html="getAnimationMoveTo4('firstArrow', 'moveTo4')"></g>

      /**

                <animateTransform
            :id="secondArrow?.moveTo4?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.moveTo4?.begin"
            attributeName="transform"
            by="200"
            :dur="overall?.dur"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
          <animateTransform
            :id="secondArrow?.shrink?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.shrink?.begin"
            attributeName="transform"
            additive="sum"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />

          */

      const element = this[elementName];

      if (!element) return;

      const moveToStep = element[stepName];
      const shrinkStep = element.shrink;

      if (!moveToStep || !shrinkStep) return;

      const overall = this.overall;

      return `
        <animateTransform
          id="${moveToStep?.id}"
          href="${element?.href}"
          begin="${moveToStep?.begin}"
          attributeName="transform"
          from="0"
          to="200"
          aaby="200"
          fill="freeze"
          dur="${overall?.dur}"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="${overall?.keySpline}"
        />
        <animateTransform
          id="${shrinkStep?.id}"
          href="${element?.href}"
          begin="${shrinkStep?.begin}"
          attributeName="transform"
          additive="sum"
          type="scale"
          from="1 1"
          to="0 0"
          dur="${overall?.dur}"
          fill="freeze"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="${overall?.keySpline}"
        />
      `;
    },
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <polygon :fill="pathColor" :points="points?.firstArrow" :id="firstArrow?.id" style="transform-origin: 200px 200px">
          <animateTransform
            :id="firstArrow?.moveTo3?.id"
            :href="firstArrow?.href"
            :begin="firstArrow?.moveTo3?.begin"
            attributeName="transform"
            aaby="200"
            from="0"
            to="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
          <g v-html="getAnimationMoveTo4('firstArrow', 'moveTo4')"></g>
        </polygon>
        <polygon :fill="pathColor" aafill="#ff0000" :points="points?.secondArrow" :id="secondArrow?.id" style="transform-origin: 200px 200px">
          <g v-html="getAnimationMoveTo4('secondArrow', 'moveTo4')"></g>
          <animate
            :id="secondArrow?.hide?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.hide?.begin"
            attributeName="opacity"
            from="1"
            to="0"
            dur="0.01s"
            fill="freeze"
          />
          <animateTransform
            :id="secondArrow?.moveTo1?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.moveTo1?.begin"
            attributeName="transform"
            from="0"
            to="-400"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
          <animate
            :id="secondArrow?.show?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.show?.begin"
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.01s"
            fill="freeze"
          />
          <animateTransform
            :id="secondArrow?.moveTo2?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.moveTo2?.begin"
            attributeName="transform"
            from="-400"
            to="-200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
          <animateTransform
            :id="secondArrow?.reset?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySpline"
          />
        </polygon>
        <polygon :fill="pathColor" aafill="#00ff00" :points="points?.thirdArrow" :id="thirdArrow?.id">
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
