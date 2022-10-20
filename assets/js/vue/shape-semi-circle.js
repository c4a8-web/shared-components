import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'shape-semi-circle';

export default {
  tagName: tagName,
  computed: {
    // classList() {
    //   return ['shape-square-forward', 'vue-component'];
    // },
    // begin() {
    //   return this.start ? this.start : defaultStart;
    // },
    squareColor() {
      return this.backgroundColor ? this.backgroundColor : '#5cbbff';
    },
    circleColor() {
      return this.firstColor ? this.firstColor : '#fcd116';
    },
    semiCircle() {
      return this.sequence.semiCircle;
    },
    overall() {
      // const duration = `${animationDelay - 0.3}s`;
      const duration = '30s';

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
              from: '2 2',
              to: '2 2',
              dur: '',
              type: 'scale',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'semiCircle',
          transform: {
            delay: 0,
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '2 2;2 2',
            additive: true,
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.0322222;0.0655556;0.1011111;1',
            keySplines: '0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0',
            path: 'M514.55 -450.18 C457.29,-402.77 280.8,-270.64 170.98,-165.67 C61.15,-60.7 -41.67,66.05 -144.39,179.65 C-247.11,293.25 -395.18,459.89 -445.34,515.94 C-445.34,515.94 -445.34,515.94 -445.34,515.94 ',
            keyPoints: '0;0.33;0.67;1;1',
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
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
            <template v-for="stepData in getStepData('semiCircle', animation?.steps)">
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




   <defs >
    <animateMotion repeatCount="indefinite" dur="30.03003s" begin="0s"
      xlink:href="#semiCircle" fill="freeze" keyTimes="0;0.0322222;0.0655556;0.1011111;1"
      path="M514.55 -450.18 C457.29,-402.77 280.8,-270.64 170.98,-165.67 C61.15,-60.7 -41.67,66.05 -144.39,179.65 C-247.11,293.25 -395.18,459.89 -445.34,515.94 C-445.34,515.94 -445.34,515.94 -445.34,515.94 "
      keyPoints="0;0.33;0.67;1;1" keySplines="0.333 0 0.667 1;0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0"
      calcMode="spline" />
    <animateTransform repeatCount="indefinite" dur="30.03003s" begin="0s"
      xlink:href="#semiCircle" fill="freeze" attributeName="transform" from="2 2" to="2 2" type="scale"
      additive="sum" keyTimes="0;1" values="2 2;2 2" keySplines="0 0 1 1" calcMode="spline" />
    <animate attributeType="XML" attributeName="opacity" dur="30s" from="0" to="1" />
  </defs>

  <g>
     <g id="static-square" transform=" translate(201, 200) translate(0, 0)">
      <path :fill="squareColor" fill-opacity="1" fill-rule="nonzero"
        d=" M199 -201 C199,-201 199,201.26 199,201.26 C199,201.26 -201.17,201.26 -201.17,201.26 C-201.17,201.26 -201.17,-201 -201.17,-201 C-201.17,-201 199,-201 199,-201z " />
    </g>
    <g transform=" translate(200, 200) translate(0, 0)">
      <g id="semiCircle">
        <path :fill="circleColor" fill-opacity="1" fill-rule="nonzero"
          d=" M0 -198.32 C109.45,-198.32 198.32,-109.45 198.32,0 C198.32,109.45 109.45,198.32 0,198.32 C-109.45,198.32 -198.32,109.45 -198.32,0 C-198.32,-109.45 -109.45,-198.32 0,-198.32z " />
      </g>
    </g>
  </g>






      </g>
    </g>`,
};
