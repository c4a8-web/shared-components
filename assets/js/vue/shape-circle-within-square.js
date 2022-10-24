import ShapeElements from '../shape-elements.js';

const defaultStart = '0.1s';
const animationDelay = '7s';
const animationStepDelay = '0.05s';

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
      return this.firstColor ? this.firstColor : 'var(--color-orange)';
    },
    firstCircleColor() {
      return this.secondColor ? this.secondColor : 'var(--color-white)';
    },
    secondSquareColor() {
      return this.secondColor ? this.secondColor : 'var(--color-white)';
    },
    secondCircleColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-gigas)';
    },
    thirdSquareColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-gigas)';
    },
    thirdCircleColor() {
      return this.firstColor ? this.firstColor : 'var(--color-orange)';
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
    fourthSquare() {
      return this.sequence.fourthSquare;
    },
    overall() {
      // const duration = `${animationDelay - 0.3}s`;
      const duration = '1.8s';

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
              name: 'transform2',
              // delay: '',
              from: '400 0',
              to: '0 0',
              dur: '0.3s',
              // begin: '0s',
              type: 'translate',
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
      ],
      elements: [
        {
          name: 'firstCircle',
          transform: {
            delay: animationStepDelay,
            values: '0 0;1 1;1 -1',
            keyTimes: '0;0.5;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1',
            start: true,
            waitFor: 'fourthSquare.transform2',
          },
          reset: {
            waitFor: 'secondSquare.transform2',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'secondSquare',
          transform2: {
            delay: animationDelay,
            waitFor: 'firstCircle.transform',
          },
          reset: {
            waitFor: 'thirdSquare.transform2',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'secondCircle',
          transform: {
            delay: animationStepDelay,
            values: '0 0;1 1;1 -1',
            keyTimes: '0;0.5;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1',
            waitFor: 'secondSquare.transform2',
          },
          reset: {
            waitFor: 'thirdSquare.transform2',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'thirdSquare',
          transform2: {
            delay: animationDelay,
            waitFor: 'secondCircle.transform',
          },
          reset: {
            waitFor: 'fourthSquare.transform2',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'thirdCircle',
          transform: {
            delay: animationStepDelay,
            values: '0 0;1 1;1 -1',
            keyTimes: '0;0.5;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1',
            waitFor: 'thirdSquare.transform2',
          },
          reset: {
            waitFor: 'fourthSquare.transform2',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'fourthSquare',
          transform2: {
            delay: animationDelay,
            waitFor: 'thirdCircle.transform',
          },
          reset: {
            waitFor: 'fourthSquare.transform2',
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
            </template>
            <template v-for="stepData in getStepData('fourthSquare', animation?.steps)">
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
            :id="firstCircle?.reset?.id"
            :href="firstCircle?.href"
            :begin="firstCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="firstCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
             ></shape-animation>

          <shape-animation
            :id="secondSquare?.reset?.id"
            :href="secondSquare?.href"
            :begin="secondSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="secondSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="secondCircle?.reset?.id"
            :href="secondCircle?.href"
            :begin="secondCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="secondCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="thirdSquare?.reset?.id"
            :href="thirdSquare?.href"
            :begin="thirdSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="thirdSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="thirdCircle?.reset?.id"
            :href="thirdCircle?.href"
            :begin="thirdCircle?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1 1"
            to="0 0"
            :dur="thirdCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
            values="1 -1;1 -1;1 1;0 0"
          ></shape-animation>

          <shape-animation
            :id="fourthSquare?.reset?.id"
            :href="fourthSquare?.href"
            :begin="fourthSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="fourthSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g>
          <g dstyle="display:none">
            <rect :fill="firstSquareStaticColor"
              width="400" height="400" />
          </g>
          <g transform="translate(200, 200) rotate(990) ">
            <circle :id="firstCircle?.id" transform="scale(0, 0)" :fill="firstCircleColor"
              r="150" />
          </g>
         <g transform="translate(400, 0)" :id="secondSquare?.id">
            <rect :fill="secondSquareColor"
              width="400" height="400" />
          </g>
          <g transform="translate(200, 200) rotate(990) ">
            <circle :id="secondCircle?.id" transform="scale(0, 0)" :fill="secondCircleColor"
              r="150" />
          </g>
          <g transform="translate(400, 0)" :id="thirdSquare?.id">
            <rect :fill="thirdSquareColor"
              width="400" height="400" />
          </g>
            <g transform="translate(200, 200) rotate(990) ">
            <circle :id="thirdCircle?.id" transform="scale(0, 0)" :fill="thirdCircleColor"
              r="150" />
          </g>
          <g transform="translate(400, 0)" :id="fourthSquare?.id">
            <rect :fill="firstSquareStaticColor"
              width="400" height="400" />
          </g>
        </g>
      </g>`,
};
