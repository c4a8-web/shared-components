import Tools from '../tools.js';

export default {
  tagName: 'content-scroller',
  data() {
    return {
      scrollPosition: 0,
      intersectionRatio: '100vh',
      totalBlockHeight: 0, // New data property to store total block height
    };
  },
  computed: {
    blocksValue() {
      return Tools.getJSON(this.blocks);
    },
    headlineValue() {
      const headline = Tools.getJSON(this.headline);

      return {
        ...headline,
        level: headline.level || 'h2',
        classes: `content-scroller__headline ${headline.classes || 'h3-font-size'}`,
      };
    },
    overlappingSizeValue() {
      return this.overlappingSize || 'mt-lg-n10';
    },
  },
  props: {
    headline: {
      default: null,
    },
    blocks: Array,
    overlappingSize: String,
  },
  mounted() {
    this.createIntersectionObserver();
    this.calculateTotalBlockHeight(); // Calculate height at the start
    window.addEventListener('resize', this.calculateTotalBlockHeight); // Add resize event listener
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('resize', this.calculateTotalBlockHeight); // Remove resize event listener
  },
  methods: {
    createIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const boundingRect = entry.boundingClientRect;
          const rootRect = entry.rootBounds || { top: 0 };
          this.scrollPosition = boundingRect.top - rootRect.top;

          // Calculate the intersection ratio
          this.intersectionRatio = (entry.intersectionRatio * 100).toFixed(2) + '%';
          console.log(`Intersection ratio: ${this.intersectionRatio}`);
          // this.$el.style.setProperty('--content-scroller-intersection-ratio', `${this.intersectionRatio}%`);
        });
      }, options);

      observer.observe(this.$el);
    },
    calculateTotalBlockHeight() {
      this.$nextTick(() => {
        const blocks = this.$el.querySelectorAll('.content-scroller__block');
        this.totalBlockHeight = Array.from(blocks).reduce((total, block) => {
          const style = window.getComputedStyle(block);
          const margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);
          return total + block.offsetHeight + margin;
        }, 0);
        console.log(`Total block height including margins: ${this.totalBlockHeight}px`);
      });
    },
  },
  template: `
    <div :class="['content-scroller vue-component', overlappingSizeValue]" :style="[{'--content-scroller-intersection-ratio': intersectionRatio}]">
      <div style="position: fixed">{{ totalBlockHeight }}</div>
      <wrapper class="content-scroller__wrapper">
        <div class="content-scroller__row">
          <div class="content-scroller__grid col">
            <div class="content-scroller__content-wrapper">
              <div class="content-scroller__content">
                <headline
                  v-bind="headlineValue"
                />
              </div>
            </div>
            <div class="content-scroller__blocks">
              <div class="content-scroller__blocks-content">
                <section class="content-scroller__block" v-for="(block, index) in blocksValue" :key="index">
                  <main>
                    <headline
                      v-if="block.headline"
                      v-bind="block.headline"
                      :level="block.headline.level || 'h3'"
                      classes="content-scroller__block-headline"
                    />
                    <p class="content-scroller__block-content">{{ block.content }}</p>
                  </main>
                  <div class="content-scroller__block-spacer">spacer</div>
                </section>
              </div>
              <div class="content-scroller__spacer">SPACER</div>
            </div>
            <div class="content-scroller__spacer">SPACER</div>
          </div>
        </div>
      </wrapper>
      <div class="content-scroller__background"></div>
    </div>
  `,
};
