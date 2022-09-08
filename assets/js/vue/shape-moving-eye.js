import ShapeElements from '../shape-elements.js';

const defaultStart = '0s';
const animationDelay = '0s';
const animationStepDelay = '0.05';

const tagName = 'shape-moving-eye';

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
      return this.squareColor ? this.squareColor : '#5cbbff';
    },
    eyeColor() {
      return this.eyeColor ? this.eyeColor : '#fcd116';
    },
    upperSquare() {
      return this.sequence.upperSquare;
    },
    bottomSquare() {
      return this.sequence.bottomSquare;
    },
    eyeCircle() {
      return this.sequence.eyeCircle;
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
              from: '1.3 1.01',
              to: '1.3 1.01',
              dur: '30s',
              type: 'scale',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'upperSquare',
          transform: {
            delay: 0,
            values: '1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01',
            keyTimes: '0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1',
            keySplines:
              '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            additive: true,
          },
        },
        {
          name: 'bottomSquare',
          transform: {
            delay: 0,
            values: '1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01',
            keyTimes: '0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1',
            keySplines:
              '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            additive: true,
          },
        },
        {
          name: 'eyeCircle',
          transform: {
            delay: 0,
            from: '0.47346 0.47346',
            to: '0.47346 0.47346',
            keyTimes: '0;1',
            keySplines: '0 0 1 1',
            values: '0.47346 0.47346;0.47346 0.47346',
            additive: true,
          },
          motion: {
            delay: 0,
            keyTimes: '0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1',
            keySplines:
              '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0',
            path: 'M263 168 C263,168 263,168 263,168 C237.37,167.88 109.22,167.28 109.22,167.28 C109.22,167.28 212.54,167.88 263,168 C283.68,168.05 239.48,168.01 263,168 C296.88,167.99 397.34,168 412,168 C436.83,168 287.83,168 263,168 C238.17,168 263,168.17 263,168 C263,168 263,168 263,168',
            keyPoints: '0;0;0.23;0.47;0.51;0.73;0.97;1;1',
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    squareColor: String,
    eyeColor: String,
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
            <template v-for="stepData in getStepData('upperSquare', animation?.steps)">
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
            <template v-for="stepData in getStepData('bottomSquare', animation?.steps)">
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
            <template v-for="stepData in getStepData('eyeCircle', animation?.steps)">
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

        <g :id="eyeCircle?.id">
          <path :fill="eyeColor"
            d=" M-135.63 -128.87 C-32.47,-128.87 51.29,-45.11 51.29,58.05 C51.29,161.22 -32.47,244.98 -135.63,244.98 C-238.8,244.98 -322.56,161.22 -322.56,58.05 C-322.56,-45.11 -238.8,-128.87 -135.63,-128.87z " />
        </g>
        <g :id="upperSquare?.id" transform=" translate(199, 198)">
          <path :fill="squareColor"
            d=" M154.3 -399 C154.3,-399 -176.42,-399 -176.42,-399 C-176.42,-399 -198,-1 -198,-1 C-198,-1 -172.13,-152.23 -3,-151 C168.15,-150.24 198,4 198,4 C198,4 154.3,-399 154.3,-399z " />
        </g>
        <g :id="bottomSquare?.id" transform=" translate(199.01, 199) rotate(180)">
          <path :fill="squareColor"
            d=" M199 -197 C199,-197 152.6,-447 152.6,-447 C152.6,-447 -153.36,-445 -153.36,-445 C-153.36,-445 -198,-197 -198,-197 C-198,-197 -198,-1 -198,-1 C-198,-1 -172.13,-152.23 -3,-151 C168.15,-150.24 198,4 198,4 C198,4 199,-197 199,-197z " />
        </g>
    </g>`,
};
