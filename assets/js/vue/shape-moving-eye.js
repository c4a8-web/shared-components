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
    begin() {
      return this.start ? this.start : defaultStart;
    },
    squareColor() {
      return this.backgroundColor ? this.backgroundColor : 'var(--color-green-blue)';
    },
    circleColor() {
      return this.firstColor ? this.firstColor : 'var(--color-yellow)';
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
      const duration = '20s';

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
              name: 'transform',
              from: '1.3 1.01',
              to: '1.3 1.01',
              dur: '',
              type: 'scale',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'upperSquare',
          transform: {
            start: true,
            delay: 0,
            values: '1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01',
            keyTimes: '0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1',
            keySplines:
              '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            additive: true,
            waitFor: 'eyeCircle.reset',
          },
          reset: {
            waitFor: 'eyeCircle.motion',
            delay: animationDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'bottomSquare',
          transform: {
            start: true,
            delay: 0,
            values: '1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01',
            keyTimes: '0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1',
            keySplines:
              '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0',
            additive: true,
            waitFor: 'eyeCircle.reset',
          },
          reset: {
            waitFor: 'eyeCircle.motion',
            delay: animationDelay,
            dur: '0.01s',
          },
        },
        {
          name: 'eyeCircle',
          motion: {
            start: true,
            delay: 0,
            keyTimes: '0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1',
            keySplines:
              '0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.333 0 0.667 1;0.167 0.167 0.833 0.833;0.167 0.167 0.667 1;0 0 0 0',
            path: 'M 263 168 C 263 168 263 168 263 168 C 237 167 109 167 109 167 C 109 167 212 167 263 168 C 283 168 239 168 263 168 C 296 167 397 168 412 168 C 436 168 287 168 263 168 C 238 168 263 168 263 168 C 263 168 263 168 263 168',
            keyPoints: '0;0;0.23;0.47;0.51;0.73;0.97;1;1',
            waitFor: 'eyeCircle.reset',
          },
          reset: {
            waitFor: 'eyeCircle.motion',
            delay: animationDelay,
            dur: '0.01s',
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
            :id="upperSquare?.reset?.id"
            :href="upperSquare?.href"
            :begin="upperSquare?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="upperSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            additive="true"
            keyTimes="0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1"
            values="1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01"
          ></shape-animation>

          <shape-animation
            :id="bottomSquare?.reset?.id"
            :href="bottomSquare?.href"
            :begin="bottomSquare?.reset?.begin"
            attributeName="transform"
            type="scale"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="bottomSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            additive="true"
            keyTimes="0;0.0133333;0.0511111;0.0833333;0.1166667;0.1522222;0.1855555;0.2144444;1"
            values="1.3 1.01;1.3 1.01;1.29756 0.5;1.3 1.01015;1.3 1.01;1.3 0.5;1.3 1.01;1.3 1.01;1.3 1.01"
          ></shape-animation>

          <shape-animation
            :id="eyeCircle?.reset?.id"
            :href="eyeCircle?.href"
            :begin="eyeCircle?.reset?.begin"
            attributeName="motion"
            from="1.3 1.01"
            to="1.3 1.01"
            :dur="eyeCircle?.reset?.dur"
            fill="freeze"
            calcMode="paced"
          ></shape-animation>

        </g>

        <g :id="eyeCircle?.id" transform="translate(-62, 32)">
          <circle :fill="circleColor" r="90" />
        </g>

        <g :id="upperSquare?.id" transform=" translate(200, 200)">
          <path :fill="squareColor"
            d=" M 150 -400 C 150 -400 -175 -400 -175 -400 C -175 -400 -200 0 -200 0 C -200 0 -175 -150 0 -150 C 175 -150 200 0 200 0 C 200 0 150 -400 150 -400 z " />
        </g>

        <g :id="bottomSquare?.id" transform=" translate(200, 200) rotate(180)">
          <path :fill="squareColor"
            d=" M 200 -200 C 200 -200 150 -450 150 -450 C 150 -450 -150 -450 -150 -450 C -150 -450 -200 -200 -200 -200 C -200 -200 -200 0 -200 0 C -200 0 -170 -150 0 -150 C 170 -150 200 0 200 0 C 200 0 200 -200 200 -200 z " />
        </g>
      </g>
    </g>`,
};
