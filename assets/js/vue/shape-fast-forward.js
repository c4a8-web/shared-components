import ShapeElements from '../shape-elements.js';

// const defaultStart = '7s';
const defaultStart = '1s';
const testDelay = '6s';

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
      return this.backgroundColor ? this.backgroundColor : '#f8842c';
    },
    pathColor() {
      return this.circleColor ? this.circleColor : '#fcd116';
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
      return {
        keySplines: '0.19 1 0.2 1',
        // keySplines: '0 0.35 0.85 1',
        // keySplines: '0 0.25 0.5 1',
        dur: '6.7s',
      };
    },
    width() {
      return 400;
    },
    height() {
      return this.width;
    },
    halfWidth() {
      return this.width / 2;
    },
    halfHeight() {
      return this.height / 2;
    },
    clipPathId() {
      return `${this.shapeElements?.getStepId('clip-path')}`;
    },
    clipPathUrl() {
      return `clip-path: url(#${this.clipPathId})`;
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
      const width = this.width;
      const halfWidth = this.halfWidth;
      const height = this.height;
      const heightHalf = this.halfHeight;

      return {
        firstArrow: `0,0 0,${height} ${heightHalf},${halfWidth}`,
        secondArrow: `${halfWidth},0, ${halfWidth},${height}, ${width},${heightHalf}`,
        thirdArrow: `${-halfWidth},0, ${-halfWidth},${height}, ${0},${halfWidth}`,
      };
    },
    animationSteps() {},
  },
  data() {
    return {
      animations: [
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
              to: '0',
              dur: '0.01s',
              attributeName: 'opacity',
            },
          ],
        },
        {
          steps: [
            {
              name: 'moveTo4',
              by: '200',
            },
            {
              name: 'shrink',
              type: 'scale',
              additive: true,
              from: '1 1',
              to: '0 0',
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
            delay: testDelay,
          },
          moveTo4: {
            waitFor: 'firstArrow.moveTo3',
            delay: '2.05s',
          },
          shrink: {
            waitFor: 'firstArrow.moveTo3',
            delay: testDelay,
          },
          // moveTo1: {},
          reset: {
            waitFor: 'firstArrow.moveTo4',
            delay: testDelay,
          },
        },
        {
          name: 'secondArrow',
          moveTo4: {
            start: true,
            waitFor: 'secondArrow.reset',
            delay: testDelay,
          },
          shrink: {
            start: true,
            waitFor: 'secondArrow.reset',
            delay: testDelay,
          },
          hide: {
            waitFor: 'secondArrow.moveTo4',
            delay: '0.01s',
          },
          moveTo1: {
            waitFor: 'secondArrow.hide',
            delay: '0.3s',
          },
          show: {
            waitFor: 'secondArrow.moveTo1',
            delay: '0.3s',
          },
          moveTo2: {
            waitFor: 'secondArrow.show',
            delay: testDelay,
          },
          reset: {
            waitFor: 'secondArrow.moveTo2',
            delay: testDelay,
          },
        },
        {
          name: 'thirdArrow',
          moveTo2: {
            start: true,
            waitFor: 'thirdArrow.moveTo2',
            delay: testDelay,
          },
          moveTo3: {
            // waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          moveTo4: {
            // waitFor: 'smallCircle.grow',
            delay: '0.01s',
          },
          reset: {
            // waitFor: 'smallCircle.shrink',
            delay: '0.01s',
          },
        },
      ],
      shapeElementsInstance: null,
    };
  },
  props: {
    backgroundColor: String,
    circleColor: String,
    start: String,
  },
  methods: {
    getStepData(elementName, stepList) {
      const element = this.sequence[elementName];

      if (!element) return;

      const steps = [];

      stepList.forEach((step) => {
        const elementStepData = element[step?.name];

        if (!elementStepData) return;

        elementStepData.href = element.href;

        if (!step.dur) step.dur = this.overall.dur;
        if (!step.keySplines) step.keySplines = this.overall.keySplines;

        const stepItem = { step, data: elementStepData };

        steps.push(stepItem);
      });

      return steps;
    },
    getAnimation(elementName, stepName) {
      const element = this[elementName];

      if (!element) return;

      const moveToStep = element[stepName];

      let additionalStep;
      let additionalData;

      switch (stepName) {
        case 'moveTo4':
          additionalStep = element.shrink;
          additionalData.type = 'scale';
          additionalData.additive = true;
          break;
        default:
          break;
      }

      if (!moveToStep) return;

      let animation = '';
      let attribute;

      switch (stepName) {
        default:
        case 'moveTo4':
          animationData.attribute = 'transform';
          break;
      }

      animation = `
        <animateTransform
          id="${moveToStep?.id}"
          href="${element?.href}"
          begin="${moveToStep?.begin}"
          attributeName="${animationData?.attribute}"
          by="200"
          fill="freeze"
          dur="${overall?.dur}"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="${overall?.keySplines}"
        />
      `;

      if (additionalStep) {
        animation += `
          <animateTransform
            id="${additionalStep?.id}"
            href="${element?.href}"
            begin="${additionalStep?.begin}"
            attributeName="${additionalData?.attribute}"
            type="${additionalData?.type}"
            ${additionalData?.additive ? 'additive="sum"' : ''}
            ${additionalData?.from ? 'from="sum"' : ''}
            fill="freeze"
            dur="${overall?.dur}"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="${overall?.keySplines}"
          />
        `;
      }
    },
    getAnimationMoveTo4(elementName, stepName) {
      const element = this[elementName];

      if (!element) return;

      const moveToStep = element[stepName];
      const shrinkStep = element.shrink;

      if (!moveToStep || !shrinkStep) return;

      const overall = this.overall;

      return `
        <animateTransform
          id="${moveToStep?.id}"
          href="${element?.href}"
          begin="${moveToStep?.begin}"
          attributeName="transform"
          aafrom="0"
          aato="200"
          by="200"
          fill="freeze"
          dur="${overall?.dur}"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="${overall?.keySplines}"
        />
        <animateTransform
          id="${shrinkStep?.id}"
          href="${element?.href}"
          begin="${shrinkStep?.begin}"
          attributeName="transform"
          additive="sum"
          type="scale"
          from="1 1"
          to="0 0"
          dur="${overall?.dur}"
          fill="freeze"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="${overall?.keySplines}"
        />
        <shape-animation id="test" ></shape-animation>
      `;
    },
  },
  template: `
    <g :class="classList">
      <clipPath :iddd="clipPathId">
        <rect x="0" y="0" :width="width" :height="height" />
      </clipPath>
      <g :style="clipPathUrl">
        <rect :fill="rectColor" :width="width" :height="height" x="0" y="0" />
        <polygon :fill="pathColor" :points="points?.firstArrow" :id="firstArrow?.id" style="transform-origin: 200px 200px">
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

          <aaaanimateTransform
            :id="firstArrow?.moveTo3?.id"
            :href="firstArrow?.href"
            :begin="firstArrow?.moveTo3?.begin"
            attributeName="transform"
            aaby="200"
            from="0"
            to="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          />
        </polygon>
        <polygon :aafill="pathColor" fill="#ff0000" :points="points?.secondArrow" :id="secondArrow?.id" style="transform-origin: 200px 200px; aadisplay: none;">
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



          <animateTransform
            :id="secondArrow?.moveTo1?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.moveTo1?.begin"
            attributeName="transform"
            from="0"
            to="-400"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          />
          <animate
            :id="secondArrow?.show?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.show?.begin"
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.01s"
            fill="freeze"
          />
          <animateTransform
            :id="secondArrow?.moveTo2?.id"
            :href="secondArrow?.href"
            :begin="secondArrow?.moveTo2?.begin"
            attributeName="transform"
            from="-400"
            to="-200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          />
          <animateTransform
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
          />
        </polygon>
        <polygon :aafill="pathColor" fill="#00ff00" :points="points?.thirdArrow" :id="thirdArrow?.id" style="display: none;">
          <animateTransform
            :id="thirdArrow?.moveTo2?.id"
            :href="thirdArrow?.href"
            :begin="thirdArrow?.moveTo2?.begin"
            attributeName="transform"
            from="0"
            to="200"
            :dur="overall?.dur"
            fill="freeze"
            calcMode="spline"
            keyTimes="0;1"
            :keySplines="overall?.keySplines"
          />


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
        </polygon>
      </g>
    </g>`,
};
