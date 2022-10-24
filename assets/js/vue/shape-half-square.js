import ShapeElements from '../shape-elements.js';

const defaultStart = '0.3s';
const animationDelay = '7';
const animationStepDelay = '0.2';

const tagName = 'shape-half-square';

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
      return this.backgroundColor ? this.backgroundColor : 'var(--color-blue-light)';
    },
    firstSquareColor() {
      return this.firstColor ? this.firstColor : 'var(--color-page-detail-shape)';
    },
    secondSquareColor() {
      return this.secondColor ? this.secondColor : 'var(--color-background)';
    },
    thirdSquareColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-primary-accent)';
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
      const duration = '0.8s';

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
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform2',
              from: '200',
              to: '-80',
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'transform3',
              from: '-80',
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
              dur: '',
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
            delay: animationStepDelay,
            start: true,
            waitFor: 'fourthSquare.reset',
            keySplines: '0.2, 0.8, 0.7, 1',
          },
          transform2: {
            delay: animationStepDelay,
            waitFor: 'squareGroup.transform1',
            keySplines: '0.2, 0.7, 0.8, 1',
          },
          transform3: {
            delay: animationStepDelay,
            waitFor: 'squareGroup.transform2',
            keySplines: '0.2, 0.7, 0.8, 1',
          },
          reset: {
            waitFor: 'fourthSquare.transform4',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'secondSquare',
          animate: {
            delay: animationStepDelay,
            waitFor: 'squareGroup.transform2',
            keySplines: '0.2, 0.8, 0.7, 1',
          },
          reset: {
            waitFor: 'fourthSquare.transform4',
            delay: animationStepDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'fourthSquare',
          transform4: {
            delay: animationDelay,
            waitFor: 'squareGroup.transform3',
            keySplines: '0.2, 0.8, 0.7, 1',
          },
          reset: {
            waitFor: 'fourthSquare.transform4',
            delay: animationStepDelay,
            dur: '0.1s',
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

          <shape-animation
            :id="squareGroup?.reset?.id"
            :href="squareGroup?.href"
            :begin="squareGroup?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-400"
            to="400"
            :dur="squareGroup?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="secondSquare?.reset?.id"
            :href="secondSquare?.href"
            :begin="secondSquare?.reset?.begin"
            attributeName="width"
            type="animate"
            calcMode="paced"
            from="200"
            to="300"
            :dur="secondSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            :isAnimate
          ></shape-animation>

          <shape-animation
            :id="fourthSquare?.reset?.id"
            :href="fourthSquare?.href"
            :begin="fourthSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-400"
            to="0"
            :dur="fourthSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>


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
