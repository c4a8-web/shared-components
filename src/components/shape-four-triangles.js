import ShapeElements from "../assets/js/shape-elements.js";

const defaultStart = "0s";
const animationDelay = "1s";
const animationResetDelay = "0.01s";
const animationResetDuration = "0.01s";

const tagName = "shape-four-triangles";

export default {
  tagName: tagName,
  computed: {
    begin() {
      return this.start ? this.start : defaultStart;
    },
    triangleBottomLeftColor() {
      return this.firstColor ? this.firstColor : "var(--color-orange)";
    },
    triangleUpperLeftColor() {
      return this.secondColor ? this.secondColor : "var(--color-secondary)";
    },
    triangleUpperRightColor() {
      return this.firstColor ? this.firstColor : "var(--color-orange)";
    },
    triangleBottomRightColor() {
      return this.secondColor ? this.secondColor : "var(--color-secondary)";
    },
    squareColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-white)";
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
    square() {
      return this.sequence.square;
    },
    overall() {
      const duration = "4s";

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
              name: "motion",
              attributeName: "motion",
              motion: true,
              dur: "",
            },
          ],
        },
        {
          steps: [
            {
              name: "transformRotate",
              dur: "",
              type: "rotate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo1",
              dur: "",
              type: "translate",
              additive: true,
            },
          ],
        },
      ],
      elements: [
        {
          name: "triangleBottomLeft",
          moveTo1: {
            start: true,
            delay: animationDelay,
            from: "-200 0",
            to: "-200 0",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-200 0;-200 0",
            waitFor: "triangleBottomLeft.reset",
          },
          motion: {
            start: true,
            delay: animationDelay,
            path: "M200 400 C200,400 200,200 200,200 C200,200 200,200 200,200",
            keyPoints: "0;1;1",
            keyTimes: "0;0.333333;1",
            keySplines: "0.333 0 0.667 1;0 0 0 0",
            waitFor: "triangleBottomLeft.reset",
          },
          transformRotate: {
            start: true,
            delay: animationDelay,
            from: "90",
            to: "0",
            values: "90;90;0;0",
            keyTimes: "0;0.333333;0.666667;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",
            waitFor: "triangleBottomLeft.reset",
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: animationResetDelay,
            dur: animationResetDuration,
          },
        },
        {
          name: "triangleUpperLeft",
          moveTo1: {
            start: true,
            delay: animationDelay,
            from: "-200 0",
            to: "-200 0",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-200 0;-200 0",
            waitFor: "triangleUpperLeft.reset",
          },
          motion: {
            start: true,
            delay: animationDelay,
            keyTimes: "0;0.666667;0.95;1",
            path: "M200 200 C200,200 200,200 200,200 C200,200 400,200 400,200 C400,200 400,200 400,200",
            keySplines:
              "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",
            keyPoints: "0;0;1;1",
            waitFor: "triangleUpperLeft.reset",
          },
          transformRotate: {
            start: true,
            delay: animationDelay,
            from: "90",
            to: "0",
            values: "90;90;0;0",
            keyTimes: "0;0.333333;0.666667;1",
            keySplines:
              "0.167 0.167 0.833 0.833;0.167 0.167 0.833 0.833;0 0 0 0",
            waitFor: "triangleUpperLeft.reset",
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: animationResetDelay,
            dur: animationResetDuration,
          },
        },
        {
          name: "triangleUpperRight",
          moveTo1: {
            start: true,
            delay: animationDelay,
            from: "-100 -100",
            to: "-100 -100",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-100 -100;-100 -100",
            waitFor: "triangleUpperRight.reset",
          },
          motion: {
            start: true,
            delay: animationDelay,
            keyTimes: "0;0.522222;0.855556;1",
            keySplines: "0.333 0 0.667 1;0.333 0 0.667 1;0 0 0 0",
            path: "M300 100 C300,100 300,100 300,100 C300,100 100,100 100,100 C100,100 100,100 100,100",
            keyPoints: "0;0;1;1",
            waitFor: "triangleUpperRight.reset",
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: animationResetDelay,
            dur: animationResetDuration,
          },
        },
        {
          name: "triangleBottomRight",
          moveTo1: {
            start: true,
            delay: animationDelay,
            from: "-100 -100",
            to: "-100 -100",
            keyTimes: "0;1",
            keySplines: "0 0 1 1",
            values: "-100 -100;-100 -100",
            waitFor: "triangleBottomRight.reset",
          },
          motion: {
            start: true,
            delay: animationDelay,
            keyTimes: "0;0.333333;1",
            keySplines: "0.167 0.167 0.833 0.833;0 0 0 0",
            path: "M300 300 C300,300 300,100 300,100 C300,100 300,100 300,100",
            keyPoints: "0;1;1",
            waitFor: "triangleBottomRight.reset",
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: animationResetDelay,
            dur: animationResetDuration,
          },
        },
        {
          name: "square",
          moveTo1: {
            delay: "14s",
            dur: "0.5s",
            from: "0 0",
            to: "-400 0",
            waitFor: "triangleBottomRight.moveTo1",
          },
          reset: {
            waitFor: "square.moveTo1",
            delay: "1s",
            dur: "0.5s",
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
            <template v-for="stepData in getStepData('square', animation?.steps)">
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
            :begin="triangleBottomLeft?.reset?.begin"
            :dur="triangleBottomLeft?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperLeft?.reset?.id"
            :begin="triangleUpperLeft?.reset?.begin"
            :dur="triangleUpperLeft?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleUpperRight?.reset?.id"
            :begin="triangleUpperRight?.reset?.begin"
            :dur="triangleUpperRight?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="triangleBottomRight?.reset?.id"
            :begin="triangleBottomRight?.reset?.begin"
            :dur="triangleBottomRight?.reset?.dur"
          ></shape-animation>

          <shape-animation
            :id="square?.reset?.id"
            :href="square?.href"
            :begin="square?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="400 0"
            :dur="square?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="triangleBottomLeft?.id">
          <path :fill="triangleBottomLeftColor"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperLeft?.id">
          <path :fill="triangleUpperLeftColor"
            d=" M0 0 C0,0 200,200 200,200 C200,200 200,0 200,0 C200,0 0,0 0,0z " />
        </g>
        <g :id="triangleUpperRight?.id">
          <path :fill="triangleUpperRightColor"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="triangleBottomRight?.id">
          <path :fill="triangleBottomRightColor"
            d=" M 0 200 C 0 200 200 200 200 200 C 200 200 200 0 200 0 C 200 0 200 0 200 0 z " />
        </g>
        <g :id="square?.id" transform="translate(400, 0)">
          <rect :fill="squareColor"
            width="400" height="400" />
        </g>
      </g>
    </g>`,
};
