import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0';
const animationStepDelay = '0.05';

const tagName = 'shape-half-square';

export default {
  tagName: tagName,
  computed: {
    classList() {
      return ['shape-square-forward', 'vue-component'];
    },
    begin() {
      return this.start ? this.start : defaultStart;
    },
    backgroundSquareColor() {
      return this.backgroundColor ? this.backgroundColor : '#f8842c';
    },
    firstSquareColor() {
      return this.firstColor ? this.firstColor : '#fcd116';
    },
    secondSquareColor() {
      return this.secondColor ? this.secondColor : '#fcd116';
    },
    thirdSquareColor() {
      return this.thirdColor ? this.thirdColor : '#fcd116';
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
    points() {
      const width = this.width;
      const halfWidth = this.halfWidth;
      const height = this.height;
      const heightHalf = this.halfHeight;

      return {
        firstSquare: `0,0 0,${height} ${heightHalf},${halfWidth}`,
        secondSquare: `${halfWidth},0, ${halfWidth},${height}, ${width},${heightHalf}`,
        thirdSquare: `${-halfWidth},0, ${-halfWidth},${height}, ${0},${halfWidth}`,
      };
    },
  },
  data() {
    return {
      animations: [
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
              name: 'scale',
              from: '0.5',
              to: '1',
              dur: '0.01s',
              attributeName: 'opacity',
            },
          ],
        },
        {
          steps: [
            {
              name: 'motion',
              to: '-200',
              from: '-400',
              motion: true,
            },
          ],
        },
        // {
        //   steps: [
        //     {
        //       name: 'reset',
        //       by: '200',
        //     },
        //   ],
        // },
      ],
      elements: [
        {
          name: 'firstSquare',
          moveTo1: {
            start: true,
            // waitFor: 'firstSquare.reset',
            delay: animationDelay,
          },
          scale: {
            waitFor: 'firstSquare.moveTo3',
            delay: animationDelay,
          },
          motion: {
            keyPoints: '0;0.34;0.81;1;1',
            path: 'M504 200 C470.17,200 383.17,200 301,200 C218.83,200 78,200 11,200 C-56,200 -82.33,200 -101,200 C-101,200 -101,200 -101,200',
          },
        },
        {
          name: 'secondSquare',
          moveTo4: {
            start: true,
            waitFor: 'secondSquare.reset',
            delay: animationDelay,
            from: '0',
            to: '200',
          },
          hide: {
            waitFor: 'secondSquare',
            delay: animationStepDelay,
          },
          moveTo1: {
            waitFor: 'secondSquare.hide',
            delay: animationStepDelay,
          },
          show: {
            waitFor: 'secondSquare.moveTo1',
            delay: animationStepDelay,
          },
          moveTo2: {
            waitFor: 'secondSquare.show',
            delay: animationDelay - animationStepDelay * 3.5,
          },
          reset: {
            waitFor: 'secondSquare.moveTo2',
            delay: animationDelay,
          },
        },
        {
          name: 'thirdSquare',
          moveTo2: {
            start: true,
            waitFor: 'thirdSquare.show',
            delay: animationDelay - animationStepDelay * 3.5,
            from: '0',
            to: '200',
          },
          moveTo3: {
            waitFor: 'thirdSquare.moveTo2',
            delay: animationDelay,
          },
          shrink: {
            waitFor: 'thirdSquare.moveTo3',
            delay: animationDelay,
          },
          moveTo4: {
            waitFor: 'thirdSquare.moveTo3',
            from: '0',
            to: '200',
            additive: true,
            delay: animationDelay,
          },
          hide: {
            waitFor: 'thirdSquare.moveTo4',
            delay: animationStepDelay,
          },
          reset: {
            waitFor: 'thirdSquare.hide',
            delay: animationStepDelay,
            dur: '0.01s',
          },
          show: {
            waitFor: 'thirdSquare.reset',
            delay: animationStepDelay,
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    backgroundColor: String,
    foregroundColor: String,
    secondColor: String,
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

        if (!newStep.dur) newStep.dur = this.overall.dur;
        if (!newStep.keySplines) newStep.keySplines = this.overall.keySplines;

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
        <g id="first">
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
            from="-200"
            to="0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          ></shape-animation>
        </g>


      <defs>
        <animateMotion repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#firstSquare" fill="freeze"
          keyTimes="0;0.0177778;0.0344444;0.0544444;1"
          path="M504 200 C470.17,200 383.17,200 301,200 C218.83,200 78,200 11,200 C-56,200 -82.33,200 -101,200 C-101,200 -101,200 -101,200 "
          keyPoints="0;0.34;0.81;1;1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
          calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#firstSquare" fill="freeze"
          attributeName="transform" from="-200 -200" to="-200 -200" type="scale" additive="sum" keyTimes="0;1"
          values="0.505 1;0.505 1" keySplines="0 0 1 1" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#firstSquare" fill="freeze"
          attributeName="transform" from="-200 -200" to="-200 -200" type="translate" additive="sum" keyTimes="0;1"
          values="-200 -200;-200 -200" keySplines="0 0 1 1" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#secondSquare" fill="freeze"
          keyTimes="0;0.0177778;0.0344444;0.0544444;1"
          path="M805 200 C771.17,200 684.17,200 602,200 C519.83,200 379,200 312,200 C245,200 218.67,200 200,200 C200,200 200,200 200,200 "
          keyPoints="0;0.34;0.81;1;1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
          calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#secondSquare" fill="freeze"
          attributeName="transform" from="-200 -200" to="-200 -200" type="translate" additive="sum" keyTimes="0;1"
          values="-200 -200;-200 -200" keySplines="0 0 1 1" calcMode="spline" />
        <animateMotion repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#thirdSquare" fill="freeze"
          keyTimes="0;0.0333333;0.0544444;1"
          path="M602 200 C602,200 602,200 602,200 C568.33,200 433.67,200 400,200 C400,200 400,200 400,200 "
          keyPoints="0;0;1;1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0" calcMode="spline" />
        <animateTransform repeatCount="indefinite" dur="30.03003s" begin="0s" xlink:href="#thirdSquare" fill="freeze"
          attributeName="transform" from="-200 -200" to="-200 -200" type="translate" additive="sum" keyTimes="0;1"
          values="-200 -200;-200 -200" keySplines="0 0 1 1" calcMode="spline" />
        <animate attributeType="XML" attributeName="opacity" dur="30s" from="0" to="1" xlink:href="#time_group" />
      </defs>

      <g id="staticSquare">
        <rect fill="#5cbbff" width="400" height="400" />
      </g>
      <g id="firstSquare" :testid="firstSquare?.href" >
        <rect fill="#fcd116" width="400" height="400" />
      </g>
      <g id="secondSquare">
        <rect fill="#ffffff" width="400" height="400" />
      </g>
      <g id="thirdSquare">
        <rect fill="#0072c6" width="400" height="400" />
      </g>
    </g>`,
};
