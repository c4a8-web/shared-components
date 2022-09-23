import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '1s';
const animationStepDelay = '0.05';

const tagName = 'shape-circle-within-square';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    begin() {
      return this.start ? this.start : defaultStart;
    },
    firstSquareStaticColor() {
      return this.firstColor ? this.firstColor : '#fcd116';
    },
    firstCircleColor() {
      return this.secondColor ? this.secondColor : '#ffffff';
    },
    secondSquareColor() {
      return this.thirdColor ? this.thirdColor : '#0072c6';
    },
    secondCircleColor() {
      return this.fourthColor ? this.fourthColor : '#0072c6';
    },
    thirdSquareColor() {
      return this.fifthColor ? this.fifthColor : '#0072c6';
    },
    thirdCircleColor() {
      return this.sixthColor ? this.sixthColor : '#0072c6';
    },
    firstCircle() {
      return this.sequence.firstCircle;
    },
    secondSquare() {
      return this.sequence.secondSquare;
    },
    secondCircle() {
      return this.sequence.secondCircle;
    },
    thirdSquare() {
      return this.sequence.thirdSquare;
    },
    thirdCircle() {
      return this.sequence.thirdCircle;
    },
    overall() {
      // const duration = `${animationDelay - 0.3}s`;
      const duration = '3s';

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
              dur: '',
              begin: '0s',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform',
              dur: '',
              from: '0 0',
              to: '1 1',
              type: 'scale',
            },
          ],
        },
        {
          steps: [
            {
              name: 'hide',
              // from: '1',
              // to: '0',
              dur: '0.01s',
              // attributeName: 'opacity',
              from: '1 1',
              to: '0 0',
              type: 'scale',
            },
          ],
        },
        {
          steps: [
            {
              name: 'show',
              // from: '0',
              // to: '1',
              // dur: '0.01s',
              // attributeName: 'opacity',
              // from: '-200 200',
              // to: '200 200',
              // type: 'transform',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'firstCircle',
          transform: {
            delay: 1,
            values: '0 0;1 1;1 -1;1 -1',
            keyTimes: '0;0.344444;0.666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            additive: true,
            // dur: '20s',
            start: true,
            waitFor: 'thirdCircle.reset',
          },
          reset: {
            waitFor: 'firstCircle.transform',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'secondSquare',
          motion: {
            delay: '-3',
            keyTimes: '0;0.633333;0.722222;1',
            path: 'M 800 400 C 800 400 800 400 800 400 C 800 400 400 400 400 400 C 400 400 400 400 400 400',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            keyPoints: '0;0;1;1',
            // additive: true,
            waitFor: 'firstCircle.transform',
          },
          reset: {
            waitFor: 'secondCircle.transform',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'secondCircle',
          transform: {
            delay: '-0.99',
            values: '0 0;1 1;1 -1;1 -1',
            keyTimes: '0;0.344444;0.666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            additive: true,
            waitFor: 'secondSquare.motion',
          },
          show: {
            delay: '-1',
            dur: '0.01s',
            from: '0 0',
            to: '0 400',
            additive: true,
            waitFor: 'secondSquare.motion',
          },
          reset: {
            waitFor: 'secondCircle.transform',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'thirdSquare',
          motion: {
            delay: '-3',
            keyTimes: '0;0.633333;0.722222;1',
            path: 'M 800 400 C 800 400 800 400 800 400 C 800 400 400 400 400 400 C 400 400 400 400 400 400',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            keyPoints: '0;0;1;1',
            // additive: true,
            waitFor: 'secondCircle.transform',
          },
          reset: {
            waitFor: 'thirdCircle.transform',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'thirdCircle',
          transform: {
            delay: '-0.95',
            values: '0 0;1 1;1 -1;1 -1',
            keyTimes: '0;0.344444;0.666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            additive: true,
            waitFor: 'thirdSquare.motion',
          },
          show: {
            delay: '-0.96',
            dur: '0.01s',
            from: '0 0',
            to: '0 400',
            additive: true,
            waitFor: 'thirdSquare.motion',
          },
          reset: {
            waitFor: 'thirdCircle.transform',
            delay: animationStepDelay,
            dur: '0.01s',
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
            <template v-for="stepData in getStepData('firstCircle', animation?.steps)">
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
              <shape-animation
                :id="firstCircle?.reset?.id"
                :href="firstCircle?.href"
                :begin="firstCircle?.reset?.begin"
                attributeName="transform"
                from="1 1"
                to="0 0"
                :dur="firstCircle?.reset?.dur"
                fill="freeze"
                calcMode="paced"
                additive="true"
                type="scale"
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
              <shape-animation
                :id="secondSquare?.reset?.id"
                :href="secondSquare?.href"
                :begin="secondSquare?.reset?.begin"
                attributeName="transform"
                type="translate"
                calcMode="paced"
                from="0 0"
                to="0 0"
                :dur="secondSquare?.reset?.dur"
                fill="freeze"
                calcMode="spline"
                additive="true"
            ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('secondCircle', animation?.steps)">
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
              <shape-animation
                :id="secondCircle?.reset?.id"
                :href="secondCircle?.href"
                :begin="secondCircle?.reset?.begin"
                attributeName="transform"
                from="1 1"
                to="0 0"
                :dur="secondCircle?.reset?.dur"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                additive="true"
                type="scale"
                :keySplines="overall?.keySplines"
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
              <shape-animation
                :id="thirdSquare?.reset?.id"
                :href="thirdSquare?.href"
                :begin="thirdSquare?.reset?.begin"
                attributeName="transform"
                type="translate"
                calcMode="paced"
                from="0 0"
                to="0 0"
                :dur="secondSquare?.reset?.dur"
                fill="freeze"
                calcMode="spline"
                additive="true"
             ></shape-animation>
            </template>
            <template v-for="stepData in getStepData('thirdCircle', animation?.steps)">
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
              <shape-animation
                :id="thirdCircle?.reset?.id"
                :href="thirdCircle?.href"
                :begin="thirdCircle?.reset?.begin"
                attributeName="transform"
                from="1 1"
                to="0 0"
                :dur="thirdCircle?.reset?.dur"
                fill="freeze"
                calcMode="spline"
                keyTimes="0;1"
                additive="true"
                type="scale"
                :keySplines="overall?.keySplines"
            ></shape-animation>
            </template>

          </template>


        </g>

        <g>
          <g dstyle="display:none" transform=" translate(200, 200) translate(0, 0)">
            <path :fill="firstSquareStaticColor"
              d=" M200 -200 C200,-200 200,200 200,200 C200,200 -200,200 -200,200 C-200,200 -200,-200 -200,-200 C-200,-200 200,-200 200,-200 " />
          </g>
          <g dstyle="display:none" :id="firstCircle?.id" transform=" translate(200, 200) rotate(990)">
            <path :fill="firstCircleColor"
              d=" M-1 -153.15 C81.32,-153.15 148.15,-86.32 148.15,-4 C148.15,78.32 81.32,145.15 -1,145.15 C-83.32,145.15 -150.15,78.32 -150.15,-4 C-150.15,-86.32 -83.32,-153.15 -1,-153.15z " />
          </g>
          <g dstyle="display:none" :id="secondSquare?.id">
            <path :fill="secondSquareColor"
              d="M 0 -400 C 0 -400 0 0 0 0 C 0 0 -400 0 -400 0 C -400 0 -400 -400 -400 -400 C -400 -400 0 -400 0 -400" />
          </g>
          <g dstyle="display:none" :id="secondCircle?.id" transform=" translate(-200, 200) rotate(990)">
            <path :fill="secondCircleColor"
              d=" M-1 -153.15 C81.32,-153.15 148.15,-86.32 148.15,-4 C148.15,78.32 81.32,145.15 -1,145.15 C-83.32,145.15 -150.15,78.32 -150.15,-4 C-150.15,-86.32 -83.32,-153.15 -1,-153.15z " />
          </g>
          <g dstyle="display:none" :id="thirdSquare?.id">
            <path :fill="thirdSquareColor"
              d="M 0 -400 C 0 -400 0 0 0 0 C 0 0 -400 0 -400 0 C -400 0 -400 -400 -400 -400 C -400 -400 0 -400 0 -400" />
          </g>
          <g dstyle="display:none" :id="thirdCircle?.id" transform="translate(-200, 200) rotate(990)">
            <path :fill="thirdCircleColor"
              d=" M-1 -153.15 C81.32,-153.15 148.15,-86.32 148.15,-4 C148.15,78.32 81.32,145.15 -1,145.15 C-83.32,145.15 -150.15,78.32 -150.15,-4 C-150.15,-86.32 -83.32,-153.15 -1,-153.15z " />
          </g>
        </g>
      </g>`,
};
