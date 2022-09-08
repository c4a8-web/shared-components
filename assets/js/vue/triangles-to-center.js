import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'triangles-to-center';

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
      return this.firstColor ? this.firstColor : '#5cbbff';
    },
    triangleUpperColor() {
      return this.secondColor ? this.secondColor : '#fcd116';
    },
    triangleRightStaticColor() {
      return this.thirdColor ? this.thirdColor : '#ffffff';
    },
    triangleRightColor() {
      return this.fourthColor ? this.fourthColor : '#0072c6';
    },
    triangleLeftStaticColor() {
      return this.fifthColor ? this.fifthColor : '#5cbbff';
    },
    triangleLeftColor() {
      return this.sixthColor ? this.sixthColor : '#fcd116';
    },
    triangleBottomStaticColor() {
      return this.seventhColor ? this.seventhColor : '#ffffff';
    },
    triangleBottomColor() {
      return this.eighthColor ? this.eighthColor : '#0072c6';
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
              from: '0.9925700000000001 1',
              to: '0.9925700000000001 1',
              dur: '30s',
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
              dur: '30s',
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
            values: '0.9925700000000001 1;0.9925700000000001 1',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
          motion: {
            delay: 0,
            path: 'M199 -5.5 C199,29 199,167 199,201.5 C199,201.5 199,201.5 199,201.5',
            keyPoints: '0;1;1',
            keyTimes: '0;0.0344444;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
          },
        },
        {
          name: 'triangleRight',
          transform: {
            delay: 0,
            values: '0.9925700000000001 1;0.9925700000000001 1',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            additive: true,
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.0344444;1',
            path: 'M398 198.5 C364.67,198.5 231.33,198.5 198,198.5 C198,198.5 198,198.5 198,198.5',
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
            keyTimes: '0;0.0344444;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
            path: 'M1.5 199 C34.83,199 168.17,199 201.5,199 C201.5,199 201.5,199 201.5,199',
            keyPoints: '0;1;1',
          },
          transform: {
            delay: 0,
            values: '0.9925700000000001 1;0.9925700000000001 1',
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
            keyTimes: '0;0.0344444;1',
            keySplines: '0.333 0 0.667 1;0 0 0 0',
            path: 'M201 395 C201,361.83 201,229.17 201,196 C201,196 201,196 201,196',
            keyPoints: '0;1;1',
          },
          transform: {
            delay: 0,
            values: '0.9925700000000001 1;0.9925700000000001 1',
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
    fifthColor: String,
    sixthColor: String,
    seventhColor: String,
    eighthColor: String,
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


        <g :id="triangleUpperStatic" transform=" translate(199, 201.693) ">
          <path :fill="firstColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleUpper?.id">
          <path :fill="secondColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleRightStatic" transform=" translate(198, 198.5) rotate(90) ">
          <path :fill="thirdColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleRight?.id">
          <path :fill="fourthColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleLeftStatic" transform=" translate(201.5, 199) rotate(270) ">
          <path :fill="fifthColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleLeft?.id">
          <path :fill="sixthColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleBottomStatic" transform=" translate(201, 196) rotate(180) ">
          <path :fill="seventhColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
        <g :id="triangleBottom?.id">
          <path :fill="eighthColor"
            d=" M202 -202 C202,-202 -200,-202 -200,-202 C-200,-202 1,-1 1,-1 C1,-1 202,-202 202,-202z " />
        </g>
    </g>`,
};
