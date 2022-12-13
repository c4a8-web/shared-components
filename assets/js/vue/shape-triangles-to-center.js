import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '6s';
const animationStepDelay = '1s';

const tagName = 'shape-triangles-to-center';

export default {
  tagName: tagName,
  computed: {
    begin() {
      return this.start ? this.start : defaultStart;
    },
    triangleUpperStaticColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleBottomStaticColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleLeftStaticColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-yellow)';
    },
    triangleRightStaticColor() {
      return this.thirdColor ? this.thirdColor : 'var(--color-yellow)';
    },
    triangleUpperFirstColor() {
      return this.secondColor ? this.secondColor : 'var(--color-white)';
    },
    triangleBottomFirstColor() {
      return this.secondColor ? this.secondColor : 'var(--color-white)';
    },
    triangleLeftFirstColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleRightFirstColor() {
      return this.firstColor ? this.firstColor : 'var(--color-green-blue)';
    },
    triangleUpperFirst() {
      return this.sequence.triangleUpperFirst;
    },
    triangleBottomFirst() {
      return this.sequence.triangleBottomFirst;
    },
    triangleLeftFirst() {
      return this.sequence.triangleLeftFirst;
    },
    triangleRightFirst() {
      return this.sequence.triangleRightFirst;
    },
    overall() {
      const duration = '1s';

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
              name: 'moveTo1',
              from: '0 -200',
              to: '0 0',
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo2',
              from: '0 400',
              to: '0 200',
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo3',
              from: '-200 0',
              to: '0 0',
              dur: '',
              type: 'translate',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo4',
              from: '400 0',
              to: '200 0',
              dur: '',
              type: 'translate',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'triangleUpperFirst',
          moveTo1: {
            delay: animationStepDelay,
            start: true,
            waitFor: 'triangleUpperFirst.reset',
          },
          reset: {
            waitFor: 'triangleUpperFirst.moveTo1',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: 'triangleBottomFirst',
          moveTo2: {
            delay: animationStepDelay,
            start: true,
            waitFor: 'triangleBottomFirst.reset',
          },
          reset: {
            waitFor: 'triangleBottomFirst.moveTo2',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: 'triangleLeftFirst',
          moveTo3: {
            delay: animationStepDelay,
            start: true,
            waitFor: 'triangleLeftFirst.reset',
          },
          reset: {
            waitFor: 'triangleLeftFirst.moveTo3',
            delay: animationDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: 'triangleRightFirst',
          moveTo4: {
            delay: animationStepDelay,
            start: true,
            waitFor: 'triangleRightFirst.reset',
          },
          reset: {
            waitFor: 'triangleRightFirst.moveTo4',
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
            <template v-for="stepData in getStepData('triangleUpperFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('triangleBottomFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('triangleLeftFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('triangleRightFirst', animation?.steps)">
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
            :id="triangleUpperFirst?.reset?.id"
            :href="triangleUpperFirst?.href"
            :begin="triangleUpperFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="triangleUpperFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleBottomFirst?.reset?.id"
            :href="triangleBottomFirst?.href"
            :begin="triangleBottomFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="0 400"
            :dur="triangleBottomFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleLeftFirst?.reset?.id"
            :href="triangleLeftFirst?.href"
            :begin="triangleLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="-200 0"
            :dur="triangleLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>

          <shape-animation
            :id="triangleRightFirst?.reset?.id"
            :href="triangleRightFirst?.href"
            :begin="triangleRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="triangleRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            ></shape-animation>
        </g>


        <g :id="triangleUpperFirstStatic" transform=" translate(0, 0)">
          <polygon height="200" width="400" points="200,200 400,0 0,0" :fill="triangleUpperStaticColor" />
        </g>
        <g :id="triangleBottomStatic" transform=" translate(0, 200)">
          <polygon height="200" width="400" points="200,0 400,200 0,200" :fill="triangleBottomStaticColor" />
        </g>
        <g :id="triangleLeftStatic" transform=" translate(0, 0)">
          <polygon height="400" width="200" points="0,400 200,200 0,0" :fill="triangleLeftStaticColor" />
        </g>
        <g :id="triangleRightStatic" transform=" translate(200, 0)">
          <polygon height="400" width="200" points="200,400 0,200 200,0" :fill="triangleRightStaticColor" />
        </g>

        <g :id="triangleUpperFirst?.id" transform=" translate(0, -200)">
          <polygon height="200" width="400" points="200,200 400,0 0,0" :fill="triangleUpperFirstColor" />
        </g>
        <g :id="triangleBottomFirst?.id" transform=" translate(0, 400)">
          <polygon height="200" width="400" points="200,0 400,200 0,200" :fill="triangleBottomFirstColor" />
        </g>
        <g :id="triangleLeftFirst?.id" transform=" translate(-200, 0)">
          <polygon height="400" width="200" points="0,400 200,200 0,0" :fill="triangleLeftFirstColor" />
        </g>
        <g :id="triangleRightFirst?.id" transform=" translate(400, 0)">
          <polygon height="400" width="200" points="200,400 0,200 200,0" :fill="triangleRightFirstColor" />
        </g>

      </g>
    </g>`,
};
