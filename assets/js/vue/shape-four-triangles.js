import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'shape-four-triangles';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    // begin() {
    //   return this.start ? this.start : defaultStart;
    // },
    triangleBottomLeftColor() {
      return this.firstColor ? this.firstColor : '#fcd116';
    },
    triangleUpperLeftColor() {
      return this.secondColor ? this.secondColor : '#ffffff';
    },
    triangleUpperRightColor() {
      return this.thirdColor ? this.thirdColor : '#0072c6';
    },
    triangleBottomRightColor() {
      return this.fourthColor ? this.fourthColor : '#0072c6';
    },
    triangleBottomLeft() {
      return this.sequence.triangleBottomLeft;
    },
    triangleUpperLeft() {
      return this.sequence.triangleUpperLeft;
    },
    triangleUpperRight() {
      return this.sequence.triangleUpperRight;
    },
    triangleBottomRight() {
      return this.sequence.triangleBottomRight;
    },
    overall() {
      // const duration = `${animationDelay - 0.3}s`;
      const duration = '1.3s';

      return {
        keySplines: '0 0 1 1',
        dur: duration,
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
      return `clip-path: url(#${this.clipPathId});`;
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
      animations: [
        {
          steps: [
            {
              name: 'motion',
              attributeName: 'motion',
              motion: true,
              dur: '30s',
              begin: '0s',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform',
              dur: '30s',
              type: 'rotate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo1',
              dur: '30s',
              type: 'translate',
              additive: true,
            },
          ],
        },
      ],
      elements: [
        {
          name: 'triangleBottomLeft',
          moveTo1: {
            delay: 0,
            from: '-198.346 0.415',
            to: '-198.346 0.415',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-198.346 0.415;-198.346 0.415',
          },
          motion: {
            path: 'M200.19 395.6 C200.04,362.68 199.48,231.01 199.34,198.1 C199.34,198.1 199.34,198.1 199.34,198.1',
            keyPoints: '0;1;1',
            keyTimes: '0;0.0333333;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
            delay: '0s',
          },
          transform: {
            delay: 0,
            from: '450',
            to: '360',
            values: '450;450;360;360',
            keyTimes: '0;0.0333333;0.0666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            additive: true,
          },
        },
        {
          name: 'triangleUpperLeft',
          moveTo1: {
            delay: 0,
            from: '-200.346 0.415',
            to: '-200.346 0.415',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-200.346 0.415;-200.346 0.415',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.0666667;0.1;1',
            path: 'M200.1 199.34 C200.1,199.34 200.1,199.34 200.1,199.34 C233.1,199.34 365.1,199.34 398.1,199.34 C398.1,199.34 398.1,199.34 398.1,199.34',
            keySplines: '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            keyPoints: '0;0;1;1',
          },
          transform: {
            delay: 0,
            from: '450',
            to: '360',
            values: '450;450;360;360',
            keyTimes: '0;0.0333333;0.0666667;1',
            keySplines: '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            additive: true,
          },
        },
        {
          name: 'triangleUpperRight',
          moveTo1: {
            delay: 0,
            from: '-100.346 -99.585',
            to: '-100.346 -99.585',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-100.346 -99.585;-100.346 -99.585',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.0522222;0.0855556;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M300.1 99.34 C300.1,99.34 300.1,99.34 300.1,99.34 C266.64,99.46 132.79,99.97 99.34,100.1 C99.34,100.1 99.34,100.1 99.34,100.1',
            keyPoints: '0;0;1;1',
          },
          transform: {
            delay: 0,
            from: '450',
            to: '450',
            values: '450;450',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
        },
        {
          name: 'triangleBottomRight',
          moveTo1: {
            delay: 0,
            from: '-100.346 -99.585',
            to: '-100.346 -99.585',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-100.346 -99.585;-100.346 -99.585',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.0333333;1',
            keySplines: '0.167 0.167 0.833 0.833;0 0 0 0',
            path: 'M300.19 297.6 C299.93,264.68 298.92,133.01 298.67,100.1 C298.67,100.1 298.67,100.1 298.67,100.1',
            keyPoints: '0;1;1',
          },
          transform: {
            delay: 0,
            from: '450',
            to: '450',
            values: '450;450',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    firstColor: String,
    secondColor: String,
    thirdColor: String,
    fourthColor: String,
    start: String,
  },
  methods: {
    getStepData(elementName, stepList) {
      const element = this.sequence[elementName];

      if (!element) return;

      const steps = [];

      stepList.forEach((step) => {
        const newStep = { ...step };
        const elementStepData = element[newStep?.name];

        if (!elementStepData) return;

        elementStepData.href = element.href;

        // TODO overwrite property in step with elementStepData if it exists

        if (elementStepData.by) newStep.by = elementStepData.by;
        if (elementStepData.from) newStep.from = elementStepData.from;
        if (elementStepData.to) newStep.to = elementStepData.to;
        if (elementStepData.additive) newStep.additive = elementStepData.additive;
        if (elementStepData.dur) newStep.dur = elementStepData.dur;
        if (elementStepData.motion) newStep.motion = elementStepData.motion;
        if (elementStepData.keyTimes) newStep.keyTimes = elementStepData.keyTimes;

        if (!newStep.dur) newStep.dur = this.overall.dur;
        if (!newStep.keySplines)
          newStep.keySplines = elementStepData.keySplines ? elementStepData.keySplines : this.overall.keySplines;

        const stepItem = { step: newStep, data: elementStepData };

        steps.push(stepItem);
      });

      return steps;
    },
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <g id="squares" >
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('triangleBottomLeft', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleUpperLeft', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleUpperRight', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('triangleBottomRight', animation?.steps)">
              <shape-animation
                :id="stepData?.data?.id"
                :href="stepData?.data?.href"
                :begin="stepData?.data?.begin"
                :fill="stepData?.step?.fill"
                :dur="stepData?.step?.dur"
                :calcMode="stepData?.step?.calcMode"
                :keyTimes="stepData?.step?.keyTimes"
                :keySplines="stepData?.step?.keySplines"
                :type="stepData?.step?.type"
                :additive="stepData?.step?.additive"
                :from="stepData?.step?.from"
                :to="stepData?.step?.to"
                :by="stepData?.step?.by"
                :keyPoints="stepData?.data?.keyPoints"
                :values="stepData?.data?.values"
                :path="stepData?.data?.path"
                :isMotion="stepData?.step?.motion"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="firstSquare?.reset?.id"
            :href="firstSquare?.href"
            :begin="firstSquare?.reset?.begin"
            attributeName="transform"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          ></shape-animation>
        </g>

        <g :id="triangleBottomLeft?.id">
          <path :fill="triangleBottomLeftColor"
            d=" M0.25 0.25 C0.25,0.25 200.44,198.92 200.44,198.92 C200.44,198.92 200.44,0.25 200.44,0.25 C200.44,0.25 0.25,0.25 0.25,0.25z " />
        </g>
        <g :id="triangleUpperLeft?.id">
          <path :fill="triangleUpperLeftColor"
            d=" M0.25 0.25 C0.25,0.25 200.44,198.92 200.44,198.92 C200.44,198.92 200.44,0.25 200.44,0.25 C200.44,0.25 0.25,0.25 0.25,0.25z " />
        </g>
        <g :id="triangleUpperRight?.id">
          <path :fill="triangleUpperRightColor"
            d=" M0.25 0.25 C0.25,0.25 200.44,198.92 200.44,198.92 C200.44,198.92 200.44,0.25 200.44,0.25 C200.44,0.25 0.25,0.25 0.25,0.25z " />
        </g>
        <g :id="triangleBottomRight?.id">
          <path :fill="triangleBottomRightColor"
            d=" M0.25 0.25 C0.25,0.25 200.44,198.92 200.44,198.92 C200.44,198.92 200.44,0.25 200.44,0.25 C200.44,0.25 0.25,0.25 0.25,0.25z " />
        </g>
      </g>
    </g>`,
};
