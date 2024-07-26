import Tools from '../tools.js';

// TODO make a mobile version of the component

export default {
  tagName: 'content-scroller',
  data() {
    return {
      blockScrollPercentage: [],
      scrollDistancePercentage: 0,
      minHeight: 0,
      blockCount: 0,
      isScrolledUpOut: false,
      isScrolledDownOut: false,
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
      return this.overlappingSize || 'mt-md-n10';
    },
    style() {
      return {
        '--content-scroller-min-height': `${this.minHeight}px`,
      };
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
    this.calcBlockCount();

    this.$nextTick(() => {
      this.handleResize();
    });

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleScroll() {
      this.calcScrollDistancePercentage();
      this.updateBlocks();
    },
    handleResize() {
      this.calcMinHeight();
      this.handleScroll();
    },
    resetIsScrolledUpOut() {
      const blocks = this.$refs['block'];

      if (!blocks) return;

      blocks.forEach((_, index) => {
        this.setBlockMinPercentage(index);
      });

      this.isScrolledUpOut = true;
    },
    resetIsScrolledDownOut() {
      const blocks = this.$refs['block'];

      if (!blocks) return;

      blocks.forEach((_, index) => {
        this.setBlockMaxPercentage(index);
      });

      this.isScrolledDownOut = true;
    },
    setBlockMaxPercentage(index) {
      const maxBlockScrollPercentage = 100;

      this.blockScrollPercentage[index] = maxBlockScrollPercentage;
    },
    setBlockMinPercentage(index) {
      const minBlockScrollPercentage = 0;

      this.blockScrollPercentage[index] = minBlockScrollPercentage;
    },
    updateBlocks() {
      const minPercentage = 0;
      const maxPercentage = 100;

      if (!this.isScrolledUpOut && this.scrollDistancePercentage <= minPercentage) return this.resetIsScrolledUpOut();

      if (!this.isScrolledDownOut && this.scrollDistancePercentage >= maxPercentage)
        return this.resetIsScrolledDownOut();

      if (this.scrollDistancePercentage <= minPercentage || this.scrollDistancePercentage >= maxPercentage) return;

      this.isScrolledUpOut = false;
      this.isScrolledDownOut = false;

      const scrollDistanceStep = 100 / this.blockCount;
      const blocks = this.$refs['block'];

      if (!blocks) return;

      blocks.forEach((_, index) => {
        const blockStartPercentage = index * scrollDistanceStep;
        const blockEndPercentage = (index + 1) * scrollDistanceStep;

        if (
          this.scrollDistancePercentage >= blockStartPercentage &&
          this.scrollDistancePercentage <= blockEndPercentage
        ) {
          let blockScrollPercentage =
            ((this.scrollDistancePercentage - blockStartPercentage) / scrollDistanceStep) * 100;

          this.blockScrollPercentage[index] = blockScrollPercentage;
        } else if (this.scrollDistancePercentage < blockStartPercentage) {
          this.setBlockMinPercentage(index);
        } else if (this.scrollDistancePercentage > blockEndPercentage) {
          this.setBlockMaxPercentage(index);
        }
      });
    },
    getViewportHeight() {
      return window.innerHeight;
    },
    calcScrollDistancePercentage() {
      const root = this.$el;
      const scrollPosition = window.scrollY;
      const componentTop = root.getBoundingClientRect().top + window.scrollY;
      const componentHeight = root.offsetHeight;
      const componentHeightHalf = componentHeight / 2;

      let scrollDistancePercentage = 0;

      if (scrollPosition >= componentTop) {
        const scrolledPastComponent = scrollPosition - componentTop;

        scrollDistancePercentage = (scrolledPastComponent / componentHeightHalf) * 100;
      }

      this.scrollDistancePercentage = scrollDistancePercentage;
    },
    calcBlockCount() {
      const blockCount = this.blocks.length;

      if (!blockCount) return;

      this.blockCount = blockCount;
    },
    calcBlockStyle(index) {
      return [
        {
          '--content-scroller-block-scroll-percentage': this.blockScrollPercentage[index],
        },
      ];
    },
    calcMinHeight() {
      const placeholder = this.$refs['placeholder'];

      if (!placeholder) return;

      this.minHeight = placeholder.offsetHeight;
    },
  },
  template: `
    <div :class="['content-scroller vue-component', overlappingSizeValue]" :style="style">
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
              <div class="content-scroller__blocks-placeholder" ref="placeholder">
                <div class="content-scroller__blocks-frame">
                  <section class="content-scroller__block" v-for="(block, index) in blocksValue" :key="index" ref="block" :style="calcBlockStyle(index)">
                    <main>
                      <div class="content-scroller__block-space">
                        <headline
                          v-if="block.headline"
                          v-bind="block.headline"
                          :level="block.headline.level || 'h3'"
                          classes="content-scroller__block-headline"
                        />
                        <p class="content-scroller__block-content">{{ block.content }}</p>
                      </div>
                    </main>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </wrapper>
      <div class="content-scroller__background"></div>
    </div>
  `,
};
