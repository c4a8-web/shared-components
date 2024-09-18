import ShapeElements from "../assets/js/shape-elements.js";

const defaultStart = "0s";
const animationDelay = "6s";
const animationStepDelay = "0.3s";

const tagName = "shape-four-squares";

export default {
  tagName: tagName,
  computed: {
    begin() {
      return this.start ? this.start : defaultStart;
    },
    squareUpperLeftFirstColor() {
      return this.firstColor ? this.firstColor : "var(--color-blue-light)";
    },
    squareUpperRightFirstColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    squareBottomLeftFirstColor() {
      return this.secondColor ? this.secondColor : "var(--color-white)";
    },
    squareBottomRightFirstColor() {
      return this.firstColor ? this.firstColor : "var(--color-blue-light)";
    },
    squareUpperLeftSecondColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-orange)";
    },
    squareUpperRightSecondColor() {
      return this.fourthColor ? this.fourthColor : "var(--color-gigas)";
    },
    squareBottomLeftSecondColor() {
      return this.fourthColor ? this.fourthColor : "var(--color-gigas)";
    },
    squareBottomRightSecondColor() {
      return this.thirdColor ? this.thirdColor : "var(--color-orange)";
    },
    squareUpperLeftFirst() {
      return this.sequence.squareUpperLeftFirst;
    },
    squareUpperRightFirst() {
      return this.sequence.squareUpperRightFirst;
    },
    squareBottomLeftFirst() {
      return this.sequence.squareBottomLeftFirst;
    },
    squareBottomRightFirst() {
      return this.sequence.squareBottomRightFirst;
    },
    squareUpperLeftSecond() {
      return this.sequence.squareUpperLeftSecond;
    },
    squareUpperRightSecond() {
      return this.sequence.squareUpperRightSecond;
    },
    squareBottomLeftSecond() {
      return this.sequence.squareBottomLeftSecond;
    },
    squareBottomRightSecond() {
      return this.sequence.squareBottomRightSecond;
    },
    squareUpperLeftReset() {
      return this.sequence.squareUpperLeftReset;
    },
    squareUpperRightReset() {
      return this.sequence.squareUpperRightReset;
    },
    squareBottomLeftReset() {
      return this.sequence.squareBottomLeftReset;
    },
    squareBottomRightReset() {
      return this.sequence.squareBottomRightReset;
    },
    overall() {
      const duration = "0.8s";

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
              from: "0 -200",
              to: "0 0",
              dur: "",
              type: "translate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo2",
              from: "400 0",
              to: "200 0",
              dur: "",
              type: "translate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo3",
              from: "-200 200",
              to: "0 200",
              dur: "",
              type: "translate",
            },
          ],
        },
        {
          steps: [
            {
              name: "moveTo4",
              from: "200 400",
              to: "200 200",
              dur: "",
              type: "translate",
            },
          ],
        },
      ],
      elements: [
        {
          name: "squareUpperLeftFirst",
          moveTo1: {
            start: true,
            delay: animationStepDelay,
            waitFor: "squareUpperLeftSecond.reset",
          },
          reset: {
            waitFor: "squareUpperLeftSecond.moveTo1",
            delay: animationStepDelay,
            dur: "0.01s",
          },
        },
        {
          name: "squareUpperRightFirst",
          moveTo2: {
            start: true,
            delay: animationStepDelay,
            waitFor: "squareUpperLeftSecond.reset",
          },
          reset: {
            waitFor: "squareUpperRightSecond.moveTo2",
            delay: animationStepDelay,
            dur: "0.01s",
          },
        },
        {
          name: "squareBottomLeftFirst",
          moveTo3: {
            start: true,
            delay: animationStepDelay,
            waitFor: "squareUpperLeftSecond.reset",
          },
          reset: {
            waitFor: "squareBottomLeftSecond.moveTo3",
            delay: animationStepDelay,
            dur: "0.01s",
          },
        },
        {
          name: "squareBottomRightFirst",
          moveTo4: {
            start: true,
            delay: animationStepDelay,
            waitFor: "squareUpperLeftSecond.reset",
          },
          reset: {
            waitFor: "squareBottomRightSecond.moveTo4",
            delay: animationStepDelay,
            dur: "0.01s",
          },
        },
        {
          name: "squareUpperLeftSecond",
          moveTo1: {
            delay: animationStepDelay,
            waitFor: "squareUpperLeftFirst.moveTo1",
          },
          reset: {
            waitFor: "squareUpperLeftSecond.moveTo1",
            delay: animationDelay,
            dur: "1s",
          },
        },
        {
          name: "squareUpperRightSecond",
          moveTo2: {
            delay: animationStepDelay,
            waitFor: "squareUpperRightFirst.moveTo2",
          },
          reset: {
            waitFor: "squareUpperRightSecond.moveTo2",
            delay: animationDelay,
            dur: "1s",
          },
        },
        {
          name: "squareBottomLeftSecond",
          moveTo3: {
            delay: animationStepDelay,
            waitFor: "squareBottomLeftFirst.moveTo3",
          },
          reset: {
            waitFor: "squareBottomLeftSecond.moveTo3",
            delay: animationDelay,
            dur: "1s",
          },
        },
        {
          name: "squareBottomRightSecond",
          moveTo4: {
            delay: animationStepDelay,
            waitFor: "squareBottomRightFirst.moveTo4",
          },
          reset: {
            waitFor: "squareBottomRightSecond.moveTo4",
            delay: animationDelay,
            dur: "1s",
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
            <template v-for="stepData in getStepData('squareUpperLeftFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperRightFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomLeftFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomRightFirst', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperLeftSecond', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperRightSecond', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomLeftSecond', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomRightSecond', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperLeftReset', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareUpperRightReset', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomLeftReset', animation?.steps)">
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
            <template v-for="stepData in getStepData('squareBottomRightReset', animation?.steps)">
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
            :id="squareUpperLeftFirst?.reset?.id"
            :href="squareUpperLeftFirst?.href"
            :begin="squareUpperLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightFirst?.reset?.id"
            :href="squareUpperRightFirst?.href"
            :begin="squareUpperRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftFirst?.reset?.id"
            :href="squareBottomLeftFirst?.href"
            :begin="squareBottomLeftFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightFirst?.reset?.id"
            :href="squareBottomRightFirst?.href"
            :begin="squareBottomRightFirst?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightFirst?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperLeftSecond.reset?.id"
            :href="squareUpperLeftSecond?.href"
            :begin="squareUpperLeftSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightSecond?.reset?.id"
            :href="squareUpperRightSecond?.href"
            :begin="squareUpperRightSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftSecond?.reset?.id"
            :href="squareBottomLeftSecond?.href"
            :begin="squareBottomLeftSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightSecond?.reset?.id"
            :href="squareBottomRightSecond?.href"
            :begin="squareBottomRightSecond?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightSecond?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperLeftReset?.reset?.id"
            :href="squareUpperLeftReset?.href"
            :begin="squareUpperLeftReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 0"
            to="0 -200"
            :dur="squareUpperLeftReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareUpperRightReset?.reset?.id"
            :href="squareUpperRightReset?.href"
            :begin="squareUpperRightReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 0"
            to="400 0"
            :dur="squareUpperRightReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomLeftReset?.reset?.id"
            :href="squareBottomLeftReset?.href"
            :begin="squareBottomLeftReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="0 200"
            to="-200 200"
            :dur="squareBottomLeftReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

          <shape-animation
            :id="squareBottomRightReset?.reset?.id"
            :href="squareBottomRightReset?.href"
            :begin="squareBottomRightReset?.reset?.begin"
            attributeName="transform"
            type="translate"
            calcMode="paced"
            from="200 200"
            to="200 400"
            :dur="squareBottomRightReset?.reset?.dur"
            fill="freeze"
            calcMode="spline"
          ></shape-animation>

        </g>

        <g :id="squareUpperLeftFirst?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperLeftFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightFirst?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftFirst?.id" transform="translate(-200, 200)">
          <rect :fill="squareBottomLeftFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightFirst?.id" transform="translate(200, 400)">
          <rect :fill="squareBottomRightFirstColor"
            width="200" height="200" />
        </g>

        <g :id="squareUpperLeftSecond?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperLeftSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightSecond?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftSecond?.id" transform="translate(-200, 200)">
          <rect :fill="squareBottomLeftSecondColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightSecond?.id" transform="translate(200, 400)">
          <rect :fill="squareBottomRightSecondColor"
            width="200" height="200" />
        </g>

        <g :id="squareUpperLeftReset?.id" transform="translate(0, -200)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareUpperRightReset?.id" transform="translate(400, 0)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomLeftReset?.id" transform="translate(-200, 200)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>
        <g :id="squareBottomRightReset?.id" transform="translate(200, 400)">
          <rect :fill="squareUpperRightFirstColor"
            width="200" height="200" />
        </g>

      </g>
    </g>`,
};
