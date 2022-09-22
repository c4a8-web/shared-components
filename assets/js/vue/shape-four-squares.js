import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'shape-four-squares';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    // begin() {
    //   return this.start ? this.start : defaultStart;
    // },
    squareUpperLeftFirst() {
      return this.firstColor ? this.firstColor : '#fcd116';
    },
    squareBottomRightFirst() {
      return this.secondColor ? this.secondColor : '#ffffff';
    },
    squareUpperLeftSecond() {
      return this.thirdColor ? this.thirdColor : '#0072c6';
    },
    squareBottomRightSecond() {
      return this.fourthColor ? this.fourthColor : '#0072c6';
    },
    squareUpperRight() {
      return this.fifthColor ? this.fifthColor : '#0072c6';
    },
    squareBottomLeft() {
      return this.sixthColor ? this.sixthColor : '#0072c6';
    },
    squareUpperLeftFirst() {
      return this.sequence.squareUpperLeftFirst;
    },
    squareBottomRightFirst() {
      return this.sequence.squareBottomRightFirst;
    },
    squareUpperLeftSecond() {
      return this.sequence.squareUpperLeftSecond;
    },
    squareBottomRightSecond() {
      return this.sequence.squareBottomRightSecond;
    },
    squareUpperRight() {
      return this.sequence.squareUpperRight;
    },
    squareBottomLeft() {
      return this.sequence.squareBottomLeft;
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
              from: '100.146 99.916',
              to: '100.146 99.916',
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
          name: 'squareUpperLeftFirst',
          moveTo1: {
            delay: 0,
            values: '100.146 99.916;100.146 99.916',
          },
          motion: {
            path: 'M100 -100 C100,-100 100,100 100,100 C100,100 100,100 100,100',
            keyPoints: '0;1;1',
            keyTimes: '0;0.0333333;1',
            keySplines: '0.167 0.167 0.153 0.153;0 0 0 0',
            delay: '0s',
          },
        },
        {
          name: 'squareBottomRightFirst',
          motion2: {
            delay: 0,
            keyTimes: '0;0.0333333;1',
            path: 'M300 500 C300,500 300,500 300,300 C300,300 300,300 300,300',
            keySplines: '0.167 0.167 0.153 0.153;0 0 0 0',
            keyPoints: '0;1;1',
          },
          moveTo1: {
            delay: 0,
            values: '100.146 99.916;100.146 99.916',
          },
        },
        {
          name: 'squareUpperLeftSecond',
          moveTo1: {
            delay: 0,
            values: '100.146 99.916;100.146 99.916',
          },
          motion2: {
            delay: 0,
            keyTimes: '0;0.0333333;0.0666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M100 -100 C100,-100 100,-100 100,-100 C100,-100 100,100 100,100 C100,100 100,100 100,100',
            keyPoints: '0;0;1;1',
          },
        },
        {
          name: 'squareBottomRightSecond',
          moveTo1: {
            delay: 0,
            values: '100.146 99.916;100.146 99.916',
          },
          motion2: {
            delay: 0,
            keyTimes: '0;0.0333333;0.0666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M300 500 C300,500 300,500 300,500 C300,500 300,500 300,300 C300,300 300,300 300,300',
            keyPoints: '0;0;1;1',
          },
        },
        {
          name: 'squareUpperRight',
          moveTo1: {
            delay: 0,
            values: '100.146 99.916;100.146 99.916',
          },
          motion2: {
            delay: 0,
            keyTimes: '0;0.0333333;0.0666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M500 100 C500,100 500,100 500,100 C500,100 500,100 300,100 C300,100 300,100 300,100',
            keyPoints: '0;0;1;1',
          },
        },
        {
          name: 'squareBottomLeft',
          moveTo1: {
            delay: 0,
            values: '100.146 99.916;100.146 99.916',
          },
          motion2: {
            delay: 0,
            keyTimes: '0;0.0333333;0.0666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M-100 300 C-100,300 -100,300 -100,300 C-100,300 100,300 100,300 C100,300 100,300 100,300',
            keyPoints: '0;0;1;1',
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
    fifthColor: String,
    sixthColor: String,
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
            <template v-for="stepData in getStepData('squareUpperLeftFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomRightFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperLeftSecond', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomRightSecond', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperRight', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomLeft', animation?.steps)">
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

        <g :id="squareUpperLeftFirst?.id">
          <path :fill="firstColor"
            d=" M-0.15 -200 C-0.15,-200 -0.15,-0.15 -0.15,-0.15 C-0.15,-0.15 -200,-0.15 -200,-0.15 C-200,-0.15 -200,-200 -200,-200 C-200,-200 -0.15,-200 -0.15,-200z " />
        </g>
        <g :id="squareBottomRightFirst?.id">
          <path :fill="secondColor"
            d=" M-0.15 -200 C-0.15,-200 -0.15,-0.15 -0.15,-0.15 C-0.15,-0.15 -200,-0.15 -200,-0.15 C-200,-0.15 -200,-200 -200,-200 C-200,-200 -0.15,-200 -0.15,-200z " />
        </g>
        <g :id="squareUpperLeftSecond?.id">
          <path :fill="thirdColor"
            d=" M-0.15 -200 C-0.15,-200 -0.15,-0.15 -0.15,-0.15 C-0.15,-0.15 -200,-0.15 -200,-0.15 C-200,-0.15 -200,-200 -200,-200 C-200,-200 -0.15,-200 -0.15,-200z " />
        </g>
        <g :id="squareBottomRightSecond?.id">
          <path :fill="fourthColor"
            d=" M-0.15 -200 C-0.15,-200 -0.15,-0.15 -0.15,-0.15 C-0.15,-0.15 -200,-0.15 -200,-0.15 C-200,-0.15 -200,-200 -200,-200 C-200,-200 -0.15,-200 -0.15,-200z " />
        </g>
        <g :id="squareUpperRight?.id">
          <path :fill="fifthColor"
            d=" M-0.15 -200 C-0.15,-200 -0.15,-0.15 -0.15,-0.15 C-0.15,-0.15 -200,-0.15 -200,-0.15 C-200,-0.15 -200,-200 -200,-200 C-200,-200 -0.15,-200 -0.15,-200z " />
        </g>
        <g :id="squareBottomLeft?.id">
          <path :fill="sixthColor"
            d=" M-0.15 -200 C-0.15,-200 -0.15,-0.15 -0.15,-0.15 C-0.15,-0.15 -200,-0.15 -200,-0.15 C-200,-0.15 -200,-200 -200,-200 C-200,-200 -0.15,-200 -0.15,-200z " />
        </g>
      </g>
    </g>`,
};
