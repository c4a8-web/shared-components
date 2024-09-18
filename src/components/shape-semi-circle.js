import ShapeElements from "../assets/js/shape-elements.js";

const defaultStart = "0s";
const animationDelay = "6s";
const animationStepDelay = "0.05s";

const tagName = "shape-semi-circle";

export default {
  tagName: tagName,
  computed: {
    begin() {
      return this.start ? this.start : defaultStart;
    },
    squareColor() {
      return this.backgroundColor
        ? this.backgroundColor
        : "var(--color-green-blue)";
    },
    circleColor() {
      return this.firstColor ? this.firstColor : "var(--color-yellow)";
    },
    semiCircle() {
      return this.sequence.semiCircle;
    },
    resetSquare() {
      return this.sequence.resetSquare;
    },
    overall() {
      const duration = "1s";

      return {
        keySplines: "0 0 1 1",
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
      return `${this.shapeElements?.getStepId("clip-path")}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId});`;
    },
    sequence() {
      return this.shapeElements?.getSequence();
    },
    shapeElements() {
      if (!this.shapeElementsInstance)
        this.shapeElementsInstance = new ShapeElements({
          tagName,
          elements: this.elements,
          begin: this.begin,
        });

      return this.shapeElementsInstance;
    },
  },
  data() {
    return {
      animations: [
        {
          steps: [
            {
              name: "moveTo1",
              from: "700 -300",
              to: "350 50",
              dur: "",
              type: "translate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo2",
              from: "350 50",
              to: "50 350",
              dur: "",
              type: "translate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo3",
              from: "50 350",
              to: "-300 700",
              dur: "",
              type: "translate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo4",
              from: "400 0",
              to: "0 0",
              dur: "",
              type: "translate",
            },
          ],
        },
      ],
      elements: [
        {
          name: "semiCircle",
          moveTo1: {
            start: true,
            delay: animationDelay,
            keySplines: "0.5, 0.6, 0.8, 1",
            waitFor: "resetSquare.reset",
          },
          moveTo2: {
            delay: animationStepDelay,
            keySplines: "0.5, 0.7, 0.8, 1",
            waitFor: "semiCircle.moveTo1",
          },
          moveTo3: {
            delay: animationStepDelay,
            waitFor: "semiCircle.moveTo2",
          },
          reset: {
            waitFor: "resetSquare.moveTo4",
            delay: animationStepDelay,
            dur: animationStepDelay,
          },
        },
        {
          name: "resetSquare",
          moveTo4: {
            delay: animationStepDelay,
            waitFor: "semiCircle.moveTo3",
          },
          reset: {
            waitFor: "resetSquare.moveTo4",
            delay: "1s",
            dur: animationStepDelay,
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
        if (elementStepData.by) newStep.by = elementStepData.by;
        if (elementStepData.from) newStep.from = elementStepData.from;
        if (elementStepData.to) newStep.to = elementStepData.to;
        if (elementStepData.additive)
          newStep.additive = elementStepData.additive;
        if (elementStepData.dur) newStep.dur = elementStepData.dur;
        if (elementStepData.motion) newStep.motion = elementStepData.motion;
        if (elementStepData.keyTimes)
          newStep.keyTimes = elementStepData.keyTimes;

        if (!newStep.dur) newStep.dur = this.overall.dur;
        if (!newStep.keySplines)
          newStep.keySplines = elementStepData.keySplines
            ? elementStepData.keySplines
            : this.overall.keySplines;

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
            <template v-for="stepData in getStepData('resetSquare', animation?.steps)">
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
            :id="semiCircle?.reset?.id"
            :href="semiCircle?.href"
            :begin="semiCircle?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="-300 700"
            to="700 -300"
            :dur="semiCircle?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="resetSquare?.reset?.id"
            :href="resetSquare?.href"
            :begin="resetSquare?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="resetSquare?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>


      <g>
        <g id="staticSquare">
          <rect :fill="squareColor" width="400" height="400"/>
        </g>
        <g :id="semiCircle?.id" transform="translate(700, -300)">
          <circle :fill="circleColor" r="380" />
        </g>
        <g :id="resetSquare?.id" transform="translate(400, 0)">
          <rect :fill="squareColor" width="400" height="400"/>
        </g>
      </g>
    </g>`,
};
