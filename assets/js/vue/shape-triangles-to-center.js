import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'shape-triangles-to-center';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    // begin() {
    //   return this.start ? this.start : defaultStart;
    // },
    triangleUpperStaticColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleUpperColor() {
      return this.secondColor ? this.secondColor : 'var(--color-white)';
    },
    triangleRightStaticColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-yellow)';
    },
    triangleRightColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleLeftStaticColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-yellow)';
    },
    triangleLeftColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleBottomStaticColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleBottomColor() {
      return this.secondColor ? this.secondColor : 'var(--color-white)';
    },
    triangleUpper() {
      return this.sequence.triangleUpper;
    },
    triangleRight() {
      return this.sequence.triangleRight;
    },
    triangleLeft() {
      return this.sequence.triangleLeft;
    },
    triangleBottom() {
      return this.sequence.triangleBottom;
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
              from: '1 1',
              to: '1 1',
              dur: '',
              type: 'scale',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo1',
              from: '90',
              to: '90',
              dur: '',
              type: 'rotate',
              additive: true,
            },
          ],
        },
      ],
      elements: [
        {
          name: 'triangleUpper',
          transform: {
            delay: 0,
            values: '1 1;1 1',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
          motion: {
            delay: 0,
            path: 'M200 -0 C200,200 200,200 200,200 C200,200 200,200 200,200',
            keyPoints: '0;1;1',
            keyTimes: '0;0.344444;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
          },
        },
        {
          name: 'triangleRight',
          transform: {
            delay: 0,
            values: '1 1;1 1',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.344444;1',
            path: 'M400 200 C400,200 200,200 200,200 C200,200 200,200 200,200',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
            keyPoints: '0;1;1',
          },
          moveTo1: {
            delay: 0,
            values: '90;90',
            keySplines: '0 0 1 1',
          },
        },
        {
          name: 'triangleLeft',
          moveTo1: {
            delay: 0,
            from: '270',
            to: '270',
            values: '270;270',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.344444;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
            path: 'M0 200 C200,200 200,200 200,200 C200,200 200,200 200,200',
            keyPoints: '0;1;1',
          },
          transform: {
            delay: 0,
            values: '1 1;1 1',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
        },
        {
          name: 'triangleBottom',
          moveTo1: {
            delay: 0,
            from: '180',
            to: '180',
            values: '180;180',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.344444;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
            path: 'M200 400 C200,400 200,200 200,200 C200,200 200,200 200,200',
            keyPoints: '0;1;1',
          },
          transform: {
            delay: 0,
            values: '1 1;1 1',
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
            <template v-for="stepData in getStepData('triangleUpper', animation?.steps)">
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
            <template v-for="stepData in getStepData('triangleRight', animation?.steps)">
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
            <template v-for="stepData in getStepData('triangleLeft', animation?.steps)">
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
            <template v-for="stepData in getStepData('triangleBottom', animation?.steps)">
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


        <g :id="triangleUpperStatic" transform=" translate(200, 200) ">
          <path :fill="triangleUpperStaticColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleUpper?.id">
          <path :fill="triangleUpperColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleRightStatic" transform=" translate(200, 200) rotate(90) ">
          <path :fill="triangleRightStaticColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleRight?.id">
          <path :fill="triangleRightColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleLeftStatic" transform=" translate(200, 200) rotate(270) ">
          <path :fill="triangleLeftStaticColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleLeft?.id">
          <path :fill="triangleLeftColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleBottomStatic" transform=" translate(200, 200) rotate(180) ">
          <path :fill="triangleBottomStaticColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
        <g :id="triangleBottom?.id">
          <path :fill="triangleBottomColor"
            d=" M200 -200 C200,-200 -200,-200 -200,-200 C-200,-200 0,-0 0,-0 C0,-0 200,-200 200,-200z " />
        </g>
      </g>
    </g>`,
};
