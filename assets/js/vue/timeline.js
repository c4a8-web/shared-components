import State from '../state.js';
import Tools from '../tools.js';

export default {
  tagName: 'timeline',
  computed: {
    classList() {
      return [
        'timeline',
        'has-background',
        this.isReady ? State.READY : '',
        this.expanded ? State.EXPANDED : '',
        'vue-component',
      ];
    },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy-light)';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : 'var(--color-blue-dark)';
    },
    style() {
      return `--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`;
    },
    headlineClasses() {
      return `timeline__headline h3-font-size light ${this.headline?.classes ? this.headline.classes : ''}`;
    },
    lineEndStyle() {
      return `--timeline-line-position: ${this.entries?.length}`;
    },
  },
  mounted() {
    this.bindEvents();
    this.handleScroll();
  },
  data() {
    return {
      lastIndex: null,
      isReady: false,
      startDelay: 500,
      isVisible: false,
      percentageInViewport: 40,
      // minPercentage: 0,
      minPercentage: -10,
      maxPercentage: 100,
      entryContainerStates: [],
      entryContainerStyles: [],
    };
  },
  methods: {
    bindEvents() {
      document.addEventListener('scroll', this.handleScroll);
    },
    startAnimation() {
      setTimeout(() => {
        this.isReady = true;
      }, this.startDelay);
    },
    getEntryLineStyle(index) {
      return `--timeline-line-position: ${index}`;
    },
    handleScroll() {
      if (this.expanded) {
        this.isInViewport();
      } else {
        this.updateAnimation();
      }
    },
    updateAnimation() {
      const percentage = this.getScrollPercentage();

      console.log('updateAnimation ~ percentage <= this.minPercentage', percentage <= this.minPercentage);
      console.log('updateAnimation ~ percentage', percentage);
      if (percentage <= this.minPercentage) return this.setAnimationStart();
      if (percentage >= this.maxPercentage) return this.setAnimationEnd();
      console.log('updateAnimation ~ percentage', percentage);

      if (!this.isReady) {
        this.startAnimation();
      }

      this.showEntryByPercent(percentage);
    },
    setAnimationStart() {
      console.log('start again');
      this.isReady = false;
    },
    setAnimationEnd() {
      console.log('end again');
      const fullPercentage = 0;

      for (let i = 0; i < this.entries.length; i++) {
        this.entryContainerStyles[i] = `${fullPercentage}`;
        this.entryContainerStates[i] = [State.SHOW, State.IS_FULL];
      }
    },
    showEntryByPercent(percentage) {
      const minIndex = 0;
      const stepSize = this.maxPercentage / this.entries.length;

      let index = Math.floor(percentage / stepSize);

      if (index < minIndex) {
        index = minIndex;
      }

      for (let i = 0; i < this.entries.length; i++) {
        this.updateNextStep(index, i, percentage, stepSize);
      }

      // this.queueNextStep(index);
    },
    updateNextStep(currentIndex, index, percentage, stepSize) {
      this.entryContainerStates[index] = State.SHOW;

      const startPercentage = stepSize * index;
      const endPercentage = stepSize * (index + 1);

      let currentPercentage = 0;

      if (percentage >= startPercentage && percentage <= endPercentage) {
        const end = stepSize;
        const localPercentage = percentage - startPercentage;

        currentPercentage = 100 - Math.ceil((localPercentage * 100) / end);
      } else if (percentage > endPercentage) {
        currentPercentage = 0;
        this.entryContainerStates[index] = [State.SHOW, State.IS_FULL];
      } else {
        currentPercentage = 100;
      }

      this.entryContainerStyles[index] = `${currentPercentage}`;
    },
    queueNextStep(index) {
      if (this.lastIndex === null) {
        this.entryContainerStates[index] = State.SHOW;

        this.lastIndex = index;
      } else {
        const lastElements = this.$refs['entry-line'];

        if (!lastElements) return;

        const lastElement = lastElements[this.lastIndex];

        if (!lastElement) return;

        console.log('queueNextStep ~ lastElement', lastElement);

        // wait before next step
        // this.entryContainerStates[index] = State.SHOW;
      }
    },
    getEntryContainerClasses(index) {
      return ['timeline__entry-container', this.entryContainerStates[index]];
    },
    getEntryContainerStyle(index) {
      const percentage = this.entryContainerStyles[index] ? this.entryContainerStyles[index] : 100;

      return `--timeline-entry-container-percentage: ${percentage}`;
    },
    getScrollPercentage() {
      const root = this.$refs['root'];
      const height = root.getBoundingClientRect().height;
      const halfHeight = height / 3;
      const elementTop = Tools.getScrollTop(root) - halfHeight;
      const startPosition = window.scrollY - elementTop;
      const endPosition = height;

      return (startPosition * 100) / endPosition;
    },
    isInViewport() {
      if (this.isVisible) return;

      const root = this.$refs['root'];
      const isInViewport = Tools.isInViewportPercent(root, this.percentageInViewport);

      if (!isInViewport) return;

      this.startAnimation();
    },
  },
  props: {
    headline: Object,
    bgColor: {
      default: null,
    },
    color: {
      default: null,
    },
    entries: Array,
    expanded: {
      default: null,
    },
  },
  template: `
    <div :class="classList" :style="style" ref="root">
      <div class="container">
        <div class="timeline__row row">
          <div class="timeline__col col">
            <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />

            <div class="timeline__content">
              <div class="timeline__line">
                <div class="timeline__line-start">
                  <div class="timeline__line-corner">
                    <span></span>
                  </div>
                </div>
                <div :class="getEntryContainerClasses(index)" v-for="(entry, index) in entries" :style="getEntryContainerStyle(index)">
                  <div class="timeline__entry" :style="getEntryLineStyle(index)">
                    <div class="timeline__entry-inner">
                      <div class="timeline__entry-inner-text">
                        {{ entry }}
                      </div>
                      <div class="timeline__entry-inner-line"></div>
                    </div>
                  </div>
                  <div class="timeline__entry-line" :style="getEntryLineStyle(index)" ref="entry-line"></div>
                  <div class="timeline__entry-spacer" :style="getEntryLineStyle(index)">
                    <div class="timeline__entry-inner">
                      <div class="timeline__entry-inner-text">
                        {{ entry }}
                      </div>
                      <div class="timeline__entry-inner-line"></div>
                    </div>
                  </div>
                </div>
                <div class="timeline__line-end" :style="lineEndStyle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
};
