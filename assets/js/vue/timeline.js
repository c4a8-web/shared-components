import State from '../state.js';
import Tools from '../tools.js';

export default {
  tagName: 'timeline',
  computed: {
    classList() {
      return [
        'timeline',
        'has-background',
        'timeline--headline-sticky has-headline-sticky',
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
      return `timeline__headline headline-sticky__target h2-font-size light ${
        this.headline?.classes ? this.headline.classes : ''
      }`;
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

      if (percentage <= this.minPercentage) return this.setAnimationStart();
      if (percentage >= this.maxPercentage) return this.setAnimationEnd();

      if (!this.isReady) {
        this.startAnimation();
      }

      this.showEntryByPercent(percentage);
    },
    setAnimationStart() {
      this.isReady = false;
    },
    setAnimationEnd() {
      const fullPercentage = 0;

      for (let i = 0; i < this.entries.length; i++) {
        this.entryContainerStyles[i] = `${fullPercentage}`;
        this.entryContainerStates[i] = [State.SHOW, State.IS_FULL];
      }
    },
    showEntryByPercent(percentage) {
      // const minIndex = 0;
      const stepSize = this.maxPercentage / this.entries.length;

      // let index = Math.floor(percentage / stepSize);

      // if (index < minIndex) {
      //   index = minIndex;
      // }

      for (let i = 0; i < this.entries.length; i++) {
        this.updateNextStep(i, percentage, stepSize);
      }
    },
    updateNextStep(index, percentage, stepSize) {
      this.entryContainerStates[index] = State.SHOW;

      const startPercentage = stepSize * index;
      const endPercentage = stepSize * (index + 1);

      let currentPercentage = 0;

      if (percentage >= startPercentage && percentage <= endPercentage) {
        const end = stepSize;
        const localPercentage = percentage - startPercentage;
        const showThreshold = 60;

        currentPercentage = 100 - Math.ceil((localPercentage * 100) / end);

        if (currentPercentage < showThreshold) {
          this.entryContainerStates[index] = [State.SHOW, 'timeline__entry-container--visible'];
        }
      } else if (percentage > endPercentage) {
        currentPercentage = 0;
        this.entryContainerStates[index] = [State.SHOW, State.IS_FULL];
      } else {
        currentPercentage = 100;
      }

      this.entryContainerStyles[index] = `${currentPercentage}`;
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
      const heightOffset = window.innerHeight / 3;

      let elementTop = Tools.getScrollTop(root) - heightOffset;

      if (elementTop < 0) {
        elementTop = 0;
      }

      const startPosition = window.scrollY - elementTop;
      const endPosition = height - heightOffset;

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
