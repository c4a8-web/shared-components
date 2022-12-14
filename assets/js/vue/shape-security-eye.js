import ShapeElements from '../shape-elements.js';

const defaultStart = '1s';
const animationDelay = '7';
const animationStepDelay = '0.05';

const tagName = 'shape-security-eye';

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
        <g id="_R_G" style="transform:scale(0.46) translate(-106px, -90px)">
          <defs>
            <linearGradient id="sonar" >
              <stop offset="0" stop-color="#000"/>
              <stop offset="0" stop-color="#000"/>
              <stop offset="0.5" stop-color="#000"/>
              <stop offset="0.6" stop-color="#ddd"/>
              <stop offset="1" stop-color="#fff"/>
            </linearGradient>
            <mask id="sonarMask">
              <path d="M 128,128 L 48,0 L 188,0 z" stroke="none" fill="url(#sonar)"/>
            </mask>

            <aaanimate
              repeatCount="indefinite"
              dur="8.008008s"
              begin="0s"
              xlink:href="#_R_G_L_1_G_M"
              ddfill="freeze"
              attributeName="opacity"
              from="0"
              to="1"
              keyTimes="0;0.875;0.8750004;1"
              values="0;0;1;1"
              keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
              calcMode="spline"
            />
          </defs>
          <g id="background">
            <rect fill="#543b9c" width="1080" height="1080" />
          </g>
          <g id="eyeForm">
            <path
              fill="#5cbbff"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M530.2 321.91 C343.96,321.91 118.52,537.66 118.52,537.66 C118.52,537.66 961.48,537.66 961.48,537.66 C888.78,468.09 716.43,321.91 530.2,321.91z "
            />
            <path
              fill="#ffffff"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M551.43 758.09 C705,758.09 961.48,537.66 961.48,537.66 C961.48,537.66 118.52,537.66 118.52,537.66 C205.92,621.29 397.87,758.09 551.43,758.09z "
            />
          </g>
          <g
            style="display:none"
            id="_R_G_L_12_G"
            transform=" translate(541, 540.5) scale(3.23, 3.23) translate(0, 0)"
          >
            <path
              id="_R_G_L_12_G_D_0_P_0"
              fill="#543b9c"
              fill="#ff0000"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisRing1"
            ddstyle="display:none"
            transform=" translate(540, 540.5) scale(0.47, 0.47) translate(0, 0)"
          >
            <path
              stroke="#543b9c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="332"
              stroke-opacity="1"
              d=" M0 -176.5 C97.41,-176.5 176.5,-97.41 176.5,0 C176.5,97.41 97.41,176.5 0,176.5 C-97.41,176.5 -176.5,97.41 -176.5,0 C-176.5,-97.41 -97.41,-176.5 0,-176.5z "
            />
          </g>
          <g
            id="irisLine4"
            transform=" translate(543, 540.5) scale(0.77, 0.77) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              fill="#ff0000"
              stroke-width="2"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine3"
            transform=" translate(543, 540.5) scale(1.55, 1.55) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine2"
            transform=" translate(543, 540.5) scale(2.2, 2.2) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="irisLine1"
            transform=" translate(543, 540.5) scale(2.72, 2.72) translate(0, 0)"
          >
            <path
              stroke="#f8842c"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="1"
              stroke-opacity="1"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="centerDot"
            transform=" translate(543, 540.5) scale(0.29, 0.29) translate(0, 0)"
          >
            <path
              fill="#f8842c"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M0 -50 C27.6,-50 50,-27.59 50,0 C50,27.6 27.6,50 0,50 C-27.59,50 -50,27.6 -50,0 C-50,-27.59 -27.59,-50 0,-50z "
            />
          </g>
          <g
            id="_R_G_L_5_G"
            style="display: none"
            transform=" translate(540, 540.5) scale(0.47, 0.47) translate(0, 0)"
          >
            <path
              id="_R_G_L_5_G_D_0_P_0"
              aastroke="#f8842c"

              stroke="#999900"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="332"
              stroke-opacity="1"
              d=" M0 -176.5 C97.41,-176.5 176.5,-97.41 176.5,0 C176.5,97.41 97.41,176.5 0,176.5 C-97.41,176.5 -176.5,97.41 -176.5,0 C-176.5,-97.41 -97.41,-176.5 0,-176.5z "
            />
          </g>

          <g id="_R_G_L_3_G" transform=" translate(648, 420) translate(-108, 120)">
            <path
              id="_R_G_L_3_G_D_0_P_0"
              aafill="#ffffff"
              fill="#777700"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
            />
            <path
              id="_R_G_L_3_G_D_1_P_0"
              aastroke="#ffffff"

              stroke="#aa00aa"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              stroke-width="25"
              stroke-opacity="1"
              d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
            />
          </g>
          <g id="leftBottomSonar">
            <g
              id="_R_G_L_2_G"
              transform=" translate(454, 629) scale(0.76375, 0.76375) translate(-108, 120)"
            >
              <path
                id="_R_G_L_2_G_D_0_P_0"
                fill="#ffffff"
                fill-opacity="1"
                fill-rule="nonzero"
                d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
              />
              <path
                id="_R_G_L_2_G_D_1_P_0"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                stroke-width="25"
                stroke-opacity="1"
                d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
              />
            </g>
            <animate
              repeatCount="indefinite"
              dur="8.008008s"
              begin="0s"
              xlink:href="#leftBottomSonar"
              fill="freeze"
              attributeName="opacity"
              from="0"
              to="1"
              keyTimes="0;0.6666667;0.6666671;1"
              values="0;0;1;1"
              keySplines="0 0 0 1;0 0 0 1;0 0 0 1"
              calcMode="spline"
            />
          </g>
          <g id="_R_G_L_1_G_M">
            <g
              id="_R_G_L_1_G"
              transform=" translate(502, 476) scale(0.76375, 0.76375) translate(-108, 120)"
            >
              <path
                id="_R_G_L_1_G_D_0_P_0"
                aafill="#ffffff"
                fill="#ff0000"
                fill-opacity="1"
                fill-rule="nonzero"
                d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
              />
              <path
                id="_R_G_L_1_G_D_1_P_0"
                aastroke="#ffffff"
                stroke="#ff0000"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                stroke-width="25"
                stroke-opacity="1"
                d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
              />
            </g>
          </g>
          <g id="rightBottomSonar">
            <g
              id="_R_G_L_0_G"
              transform=" translate(676, 620) scale(0.76375, 0.76375) translate(-108, 120)"
            >
              <path
                id="_R_G_L_0_G_D_0_P_0"
                fill="#ffffff"
                fill-opacity="1"
                fill-rule="nonzero"
                d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
              />
              <path
                id="_R_G_L_0_G_D_1_P_0"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                stroke-width="25"
                stroke-opacity="1"
                d=" M107.73 -149.63 C123.43,-149.63 136.17,-136.89 136.17,-121.19 C136.17,-105.49 123.43,-92.75 107.73,-92.75 C92.04,-92.75 79.29,-105.49 79.29,-121.19 C79.29,-136.89 92.04,-149.63 107.73,-149.63z "
              />
            </g>
            <animate
              repeatCount="indefinite"
              dur="8.008008s"
              begin="0s"
              xlink:href="#rightBottomSonar"
              ddfill="freeze"
              attributeName="opacity"
              from="0"
              to="1"
              keyTimes="0;0.3333333;0.3333337;1"
              values="0;0;1;1"
              keySplines="0 0 0 0;0 0 0 0;0 0 0 0"
              calcMode="spline"
            />
          </g>

          <g transform="translate(375, 375) scale(1.3, 1.3)">
            <path xmlns="http://www.w3.org/2000/svg" d="M 128,128 L 48,0 L 188,0 z" stroke="none" fill="#f8842c" mask="url(#sonarMask)" >
              <animateTransform attributeName="transform" type="rotate" dur="10.0" from="0,128,128" to="360,128,128" repeatCount="indefinite"/>
            </path>
          </g>

          <g id="yellowIris">
            <path
              fill="#fcd116"
              fill-opacity="1"
              fill-rule="nonzero"
              d=" M540 318.99 C418.03,318.99 319.17,417.95 319.17,540.02 C319.17,662.09 418.03,761.01 540,761.01 C661.97,761.01 760.83,662.05 760.83,539.98 C760.83,417.91 661.97,318.99 540,318.99z  M540.05 701.37 C447.56,701.45 373.17,623.67 378.9,529.91 C383.8,449.58 449.12,384.13 529.45,379.07 C623.2,373.15 701.13,447.4 701.21,539.9 C701.21,539.95 701.21,540 701.21,540.05 C701.23,629.08 629.08,701.27 540.05,701.32 C540.05,701.32 540.05,701.37 540.05,701.37z "
            />
          </g>
        </g>
      </g>
    </g>`,
};
