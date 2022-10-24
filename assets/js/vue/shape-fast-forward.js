import ShapeElements from '../shape-elements.js';

const defaultStart = '1s';
const animationDelay = '7';
const animationStepDelay = '0.05';

const tagName = 'shape-fast-forward';

export default {
  tagName: tagName,
  computed: {
    classList() {
      return ['shape-square-forward', 'vue-component'];
    },
    begin() {
      return this.start ? this.start : defaultStart;
    },
    rectColor() {
      return this.backgroundColor ? this.backgroundColor : 'var(--color-primary-accent)';
    },
    pathColor() {
      return this.firstColor ? this.firstColor : 'var(--color-primary-accent-light)';
    },
    secondArrowColor() {
      return this.secondColor ? this.secondColor : 'var(--color-secondary)';
    },
    firstArrow() {
      return this.sequence.firstArrow;
    },
    secondArrow() {
      return this.sequence.secondArrow;
    },
    thirdArrow() {
      return this.sequence.thirdArrow;
    },
    overall() {
      // const duration = `${animationDelay - 0.3}s`;
      const duration = '1.3s';

      return {
        keySplines: '0.19 1 0.2 1',
        dur: duration,
      };
    },
    internalWidth() {
      return this.width ? this.width : 400;
    },
    internalHeight() {
      return this.internalWidth;
    },
    halfWidth() {
      return this.internalWidth / 2;
    },
    halfHeight() {
      return this.internalHeight / 2;
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
    points() {
      const width = this.internalWidth;
      const halfWidth = this.halfWidth;
      const height = this.internalHeight;
      const heightHalf = this.halfHeight;

      return {
        firstArrow: `0,0 0,${height} ${heightHalf},${halfWidth}`,
        secondArrow: `${halfWidth},0, ${halfWidth},${height}, ${width},${heightHalf}`,
        thirdArrow: `${-halfWidth},0, ${-halfWidth},${height}, ${0},${halfWidth}`,
      };
    },
  },
  data() {
    // TODO connect these numbers to innerWidth so 400 and 200 are relative

    return {
      animations: [
        {
          steps: [
            {
              name: 'moveTo1',
              from: '0',
              to: '-400',
              dur: '0.01s',
            },
          ],
        },
        {
          steps: [
            {
              name: 'show',
              from: '0.5',
              to: '1',
              dur: '0.01s',
              attributeName: 'opacity',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo2',
              to: '-200',
              from: '-400',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo3',
              by: '200',
            },
          ],
        },
        {
          steps: [
            {
              name: 'hide',
              from: '1',
              to: '0.5',
              dur: '0.01s',
              attributeName: 'opacity',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo4',
            },
            {
              name: 'shrink',
              type: 'scale',
              additive: true,
              from: '1 1',
              to: '0.1 0.1',
            },
          ],
        },
      ],
      elements: [
        {
          name: 'firstArrow',
          moveTo3: {
            start: true,
            waitFor: 'firstArrow.reset',
            delay: animationDelay,
          },
          shrink: {
            waitFor: 'firstArrow.moveTo3',
            delay: animationDelay,
          },
          moveTo4: {
            waitFor: 'firstArrow.moveTo3',
            from: '200',
            to: '400',
            delay: animationDelay,
          },
          hide: {
            waitFor: 'firstArrow.moveTo4',
            delay: animationStepDelay,
          },
          moveTo1: {
            waitFor: 'firstArrow.hide',
            delay: animationStepDelay,
            from: '-400',
            to: '-200',
          },
          show: {
            waitFor: 'firstArrow.moveTo1',
            delay: animationStepDelay,
          },
          reset: {
            waitFor: 'firstArrow.show',
            delay: animationDelay - animationStepDelay * 3.5,
          },
        },
        {
          name: 'secondArrow',
          moveTo4: {
            start: true,
            waitFor: 'secondArrow.reset',
            delay: animationDelay,
            from: '0',
            to: '200',
          },
          shrink: {
            start: true,
            waitFor: 'secondArrow.reset',
            delay: animationDelay,
          },
          hide: {
            waitFor: 'secondArrow.shrink',
            delay: animationStepDelay,
          },
          moveTo1: {
            waitFor: 'secondArrow.hide',
            delay: animationStepDelay,
          },
          show: {
            waitFor: 'secondArrow.moveTo1',
            delay: animationStepDelay,
          },
          moveTo2: {
            waitFor: 'secondArrow.show',
            delay: animationDelay - animationStepDelay * 3.5,
          },
          reset: {
            waitFor: 'secondArrow.moveTo2',
            delay: animationDelay,
          },
        },
        {
          name: 'thirdArrow',
          moveTo2: {
            start: true,
            waitFor: 'thirdArrow.show',
            delay: animationDelay - animationStepDelay * 3.5,
            from: '0',
            to: '200',
          },
          moveTo3: {
            waitFor: 'thirdArrow.moveTo2',
            delay: animationDelay,
          },
          shrink: {
            waitFor: 'thirdArrow.moveTo3',
            delay: animationDelay,
          },
          moveTo4: {
            waitFor: 'thirdArrow.moveTo3',
            from: '0',
            to: '200',
            additive: true,
            delay: animationDelay,
          },
          hide: {
            waitFor: 'thirdArrow.moveTo4',
            delay: animationStepDelay,
          },
          reset: {
            waitFor: 'thirdArrow.hide',
            delay: animationStepDelay,
            dur: '0.01s',
          },
          show: {
            waitFor: 'thirdArrow.reset',
            delay: animationStepDelay,
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    backgroundColor: String,
    firstColor: String,
    secondColor: String,
    start: String,
    width: String,
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

        if (!newStep.dur) newStep.dur = this.overall.dur;
        if (!newStep.keySplines) newStep.keySplines = this.overall.keySplines;

        const stepItem = { step: newStep, data: elementStepData };

        steps.push(stepItem);
      });

      return steps;
    },
  },
  template: `
    <g :class="classList">
      <clipPath :id="clipPathId">
        <rect x="0" y="0" :width="internalWidth" :height="internalHeight" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="internalWidth" :height="internalHeight" x="0" y="0" />
        <polygon :fill="pathColor" :points="points?.firstArrow" :id="firstArrow?.id" style="transform-origin: 0px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('firstArrow', animation?.steps)">
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
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="firstArrow?.reset?.id"
            :href="firstArrow?.href"
            :begin="firstArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          ></shape-animation>
        </polygon>
        <polygon :fill="secondArrowColor" aafill="#ff0000" :points="points?.secondArrow" :id="secondArrow?.id" style="transform-origin: 200px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('secondArrow', animation?.steps)">
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
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="secondArrow?.reset?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          ></shape-animation>
        </polygon>
        <polygon :fill="pathColor" aafill="#00ff00" :points="points?.thirdArrow" :id="thirdArrow?.id" style="transform-origin: -200px 200px;">
          <template v-for="animation in animations">
            <template v-for="stepData in getStepData('thirdArrow', animation?.steps)">
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
                :attributeName="stepData?.step?.attributeName"
              ></shape-animation>
            </template>
          </template>

          <shape-animation
            :id="thirdArrow?.reset?.id"
            :href="thirdArrow?.href"
            :begin="thirdArrow?.reset?.begin"
            attributeName="transform"
            from="-200"
            to="0"
            :dur="thirdArrow?.reset?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          ></shape-animation>
        </polygon>
      </g>
    </g>`,
};
