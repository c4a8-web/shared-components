import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '1s';
const animationStepDelay = '2s';

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
      return this.firstColor ? this.firstColor : 'var(--color-orange)';
    },
    triangleUpperLeftColor() {
      return this.secondColor ? this.secondColor : 'var(--color-secondary)';
    },
    triangleUpperRightColor() {
      return this.firstColor ? this.firstColor : 'var(--color-orange)';
    },
    triangleBottomRightColor() {
      return this.secondColor ? this.secondColor : 'var(--color-secondary)';
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
      const duration = '4s';

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
            },
          ],
        },
        {
          steps: [
            {
              name: 'transformRotate',
              dur: '',
              type: 'rotate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo1',
              dur: '',
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
            from: '-200 0',
            to: '-200 0',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-200 0;-200 0',
          },
          motion: {
            delay: 0,
            path: 'M200 400 C200,400 200,200 200,200 C200,200 200,200 200,200',
            keyPoints: '0;1;1',
            keyTimes: '0;0.333333;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
          },
          transformRotate: {
            delay: 0,
            from: '90',
            to: '0',
            values: '90;90;0;0',
            keyTimes: '0;0.333333;0.666667;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
          },
          reset: {
            waitFor: 'triangleBottomLeft.transformRotate',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: 'triangleUpperLeft',
          moveTo1: {
            delay: 0,
            from: '-200 0',
            to: '-200 0',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-200 0;-200 0',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.666667;0.95;1',
            path: 'M200 200 C200,200 200,200 200,200 C200,200 400,200 400,200 C400,200 400,200 400,200',
            keySplines: '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            keyPoints: '0;0;1;1',
          },
          transformRotate: {
            delay: 0,
            from: '90',
            to: '0',
            values: '90;90;0;0',
            keyTimes: '0;0.333333;0.666667;1',
            keySplines: '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
          },
          reset: {
            waitFor: 'triangleUpperLeft.transformRotate',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: 'triangleUpperRight',
          moveTo1: {
            delay: 0,
            from: '-100 -100',
            to: '-100 -100',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-100 -100;-100 -100',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.522222;0.855556;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M300 100 C300,100 300,100 300,100 C300,100 100,100 100,100 C100,100 100,100 100,100',
            keyPoints: '0;0;1;1',
          },
          reset: {
            waitFor: 'triangleUpperRight.moveTo1',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: 'triangleBottomRight',
          moveTo1: {
            delay: 0,
            from: '-100 -100',
            to: '-100 -100',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '-100 -100;-100 -100',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.333333;1',
            keySplines: '0.167 0.167 0.833 0.833;0 0 0 0',
            path: 'M300 300 C300,300 300,100 300,100 C300,100 300,100 300,100',
            keyPoints: '0;1;1',
          },
          reset: {
            waitFor: 'triangleBottomRight.moveTo1',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    firstColor: String,
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
            :id="triangleBottomLeft?.reset?.id"
            :sshref="triangleBottomLeft?.href"
            :begin="triangleBottomLeft?.reset?.begin"
            attributeName="transform"
            type="rotate"
            calcMode="paced"
            from="-270"
            to="-180"
            dby="-90"
            :dur="triangleBottomLeft?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            transform-origin="0 90"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperLeft?.reset?.id"
            :ddhref="triangleUpperLeft?.href"
            :begin="triangleUpperLeft?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-200 0"
            to="-600 0"
            :dur="triangleUpperLeft?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperRight?.reset?.id"
            :aahref="triangleUpperRight?.href"
            :begin="triangleUpperRight?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-100 -100"
            to="100 -100"
            :dur="triangleUpperRight?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="triangleBottomRight?.reset?.id"
            :aahref="triangleBottomRight?.href"
            :begin="triangleBottomRight?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-100 -100"
            to="-100 100"
            :dur="triangleBottomRight?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="triangleBottomLeft?.id">
            <polygon height="200" width="200" points="200,0 200,200 0,200" fill="#A9903D" />
        </g>
        <g :id="triangleUpperLeft?.id" ddstyle="transform-origin: top">
          <path fill="#71A93D"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperRight?.id">
          <path fill="#3DA999"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="triangleBottomRight?.id">
          <path fill="#3D5AA9"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
      </g>
    </g>`,
};
