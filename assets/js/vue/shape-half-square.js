import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'shape-half-square';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    // begin() {
    //   return this.start ? this.start : defaultStart;
    // },
    backgroundSquareColor() {
      return this.backgroundColor ? this.backgroundColor : '#5cbbff';
    },
    firstSquareColor() {
      return this.firstColor ? this.firstColor : '#fcd116';
    },
    secondSquareColor() {
      return this.secondColor ? this.secondColor : '#ffffff';
    },
    thirdSquareColor() {
      return this.thirdColor ? this.thirdColor : '#0072c6';
    },
    firstSquare() {
      return this.sequence.firstSquare;
    },
    secondSquare() {
      return this.sequence.secondSquare;
    },
    thirdSquare() {
      return this.sequence.thirdSquare;
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
              from: '-200 -200',
              to: '-200 -200',
              dur: '30s',
              type: 'scale',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo1',
              from: '-200 -200',
              to: '-200 -200',
              dur: '30s',
              type: 'translate',
              additive: true,
            },
          ],
        },
        {
          steps: [
            {
              name: 'motion2',
              attributeName: 'motion2',
              motion: true,
              dur: '30s',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'firstSquare',
          moveTo1: {
            delay: 0,
            values: '-200 -200;-200 -200',
          },
          transform: {
            delay: 0,
            values: '0.505 1;0.505 1',
            additive: true,
          },
          motion: {
            delay: 0,
            path: 'M504 200 C470.17,200 383.17,200 301,200 C218.83,200 78,200 11,200 C-56,200 -82.33,200 -101,200 C-101,200 -101,200 -101,200',
            keyPoints: '0;0.34;0.81;1;1',
            keyTimes: '0;0.0177778;0.0344444;0.0544444;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
          },
        },
        {
          name: 'secondSquare',
          motion2: {
            delay: 0,
            keyTimes: '0;0.0177778;0.0344444;0.0544444;1',
            path: 'M805 200 C771.17,200 684.17,200 602,200 C519.83,200 379,200 312,200 C245,200 218.67,200 200,200 C200,200 200,200 200,200 ',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            keyPoints: '0;0.34;0.81;1;1',
          },
          moveTo1: {
            delay: 0,
            values: '-200 -200;-200 -200',
          },
        },
        {
          name: 'thirdSquare',
          moveTo1: {
            delay: 0,
            values: '-200 -200;-200 -200',
          },
          motion2: {
            delay: 0,
            keyTimes: '0;0.0333333;0.0544444;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M602 200 C602,200 602,200 602,200 C568.33,200 433.67,200 400,200 C400,200 400,200 400,200',
            keyPoints: '0;0;1;1',
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    secondColor: String,
    thirdColor: String,
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
            <template v-for="stepData in getStepData('firstSquare', animation?.steps)">
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
            <template v-for="stepData in getStepData('secondSquare', animation?.steps)">
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
            <template v-for="stepData in getStepData('thirdSquare', animation?.steps)">
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




      <g :id="staticSquare">
        <rect :fill="backgroundSquareColor" width="400" height="400" />
      </g>
      <g :id="firstSquare?.id" >
        <rect :fill="firstSquareColor" width="400" height="400" />
      </g>
      <g :id="secondSquare?.id">
        <rect :fill="secondSquareColor" width="400" height="400" />
      </g>
      <g :id="thirdSquare?.id">
        <rect :fill="thirdSquareColor" width="400" height="400" />
      </g>
    </g>`,
};
