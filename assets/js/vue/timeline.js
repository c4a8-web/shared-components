import State from '../state.js';
import Tools from '../tools.js';

export default {
  tagName: 'timeline',
  computed: {
    classList() {
      return [
        'timeline',
        'has-background',
        this.isMounted ? State.READY : '',
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
      isMounted: false,
      startDelay: 500,
      isVisible: false,
      percentageInViewport: 40,
      minPercentage: -10,
      maxPercentage: 100,
      entryContainerStates: [],
    };
  },
  methods: {
    bindEvents() {
      document.addEventListener('scroll', this.handleScroll);
    },
    startAnimation() {
      setTimeout(() => {
        this.isMounted = true;
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

      if (percentage <= this.minPercentage || percentage > this.maxPercentage) return;

      if (!this.isMounted) {
        this.startAnimation();
      }

      this.showEntryByPercent(percentage);
    },
    showEntryByPercent(percentage) {
      const minIndex = 0;
      const stepSize = this.maxPercentage / this.entries.length;

      let index = Math.floor(percentage / stepSize);

      if (index < minIndex) {
        index = minIndex;
      }

      this.queueNextStep(index);
    },
    queueNextStep(index) {
      this.entryContainerStates[index] = State.SHOW;

      return;

      if (!this.lastIndex) {
        this.entryContainerStates[index] = State.SHOW;

        this.lastIndex = index;
        console.log('queueNextStep ~ this.lastIndex', this.lastIndex);
      } else {
        const lastElements = this.$refs['entry-line'];
        console.log('queueNextStep ~ lastElements', lastElements);

        if (!lastElements) return;

        const lastElement = lastElements[this.lastIndex];
        console.log('queueNextStep ~ lastElement', lastElement);

        if (!lastElement) return;

        console.log('queueNextStep ~ lastElement', lastElement);

        // wait before next step
        // this.entryContainerStates[index] = State.SHOW;
      }
    },
    getEntryContainerClasses(index) {
      return ['timeline__entry-container', this.entryContainerStates[index]];
    },
    getScrollPercentage() {
      const root = this.$refs['root'];
      const height = root.getBoundingClientRect().height;
      const halfHeight = height / 2;
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
                <div :class="getEntryContainerClasses(index)" v-for="(entry, index) in entries">
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
