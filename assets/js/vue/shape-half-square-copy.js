import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0.5s';
const animationStepDelay = '0.05';

const tagName = 'shape-half-square-copy';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    begin() {
      return this.start ? this.start : defaultStart;
    },
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
    squareGroup() {
      return this.sequence.squareGroup;
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
    fourthSquare() {
      return this.sequence.fourthSquare;
    },
    overall() {
      // const duration = `${animationDelay - 0.3}s`;
      const duration = '1.7s';

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
              name: 'transform1',
              from: '400',
              to: '200',
              dur: '1s',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform2',
              from: '200',
              to: '-100',
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform3',
              from: '-100',
              to: '-200',
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform4',
              from: '0',
              to: '-400',
              dur: '2s',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'animate',
              animate: true,
              attributeName: 'width',
              from: '300',
              to: '200',
              dur: '',
              type: 'animate',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'squareGroup',
          transform1: {
            delay: 0,
            start: true,
            waitFor: 'fourthSquare.transform4',
          },
          transform2: {
            delay: '0.3s',
            waitFor: 'squareGroup.transform1',
          },
          transform3: {
            delay: '0.3s',
            waitFor: 'squareGroup.transform2',
          },
        },
        {
          name: 'secondSquare',
          animate: {
            delay: '0.3s',
            waitFor: 'squareGroup.transform2',
          },
        },
        {
          name: 'fourthSquare',
          transform4: {
            delay: '6s',
            waitFor: 'squareGroup.transform3',
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
        if (elementStepData.animate) newStep.animate = elementStepData.animate;
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
            <template v-for="stepData in getStepData('squareGroup', animation?.steps)">
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
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
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
                :isAnimate="stepData?.step?.animate"
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
                :isAnimate="stepData?.step?.animate"
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
                :isAnimate="stepData?.step?.animate"
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
                :isAnimate="stepData?.step?.animate"
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>



        <g :id="staticSquare">
          <rect :fill="backgroundSquareColor" width="400" height="400" />
        </g>

        <g transform="translate(400, 0)" :id="squareGroup?.id" >
          <g ><rect :id="firstSquare?.id" :fill="firstSquareColor" width="200" height="400"  /></g>
          <g transform="translate(400, 0)" ><rect :fill="thirdSquareColor" width="200" height="400" /></g>
          <g transform="translate(200, 0)" ><rect :id="secondSquare?.id" :fill="secondSquareColor" width="300" height="400"/></g>

        </g>
          <g transform="translate(400, 0)" ><rect :id="fourthSquare?.id" :fill="backgroundSquareColor" width="400" height="400"/></g>


      </g>
    </g>`,
};
