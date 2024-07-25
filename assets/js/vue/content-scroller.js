import Tools from '../tools.js';

// TODO calc the height of the left block somehow
// TODO make a mobile version of the component

export default {
  tagName: 'content-scroller',
  data() {
    return {
      totalBlockHeight: 0,
      blockHeights: [],
      blockPositions: [],
      blockScrollPercentage: [],
      scrollDistancePercentage: 0,
      placeholderHeight: 0,
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
      this.getScrollDistancePercentage();
      this.updateBlocks();
    },
    handleResize() {
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
    getScrollDistancePercentage() {
      // gets the scroll distance in percentage the user has scrolled over this component

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

      const viewPortOverflow = root.offsetHeight - window.innerHeight;
      // const scrollTop = window.scrollY; // Updated from window.pageYOffset
      // console.log('🚀 ~ getScrollDistancePercentage ~ scrollTop:', scrollTop);
      // const componentHeight = this.$el.offsetHeight;
      // console.log('🚀 ~ getScrollDistancePercentage ~ componentHeight:', componentHeight);
      // const scrollDistancePercentage = (scrollTop / (this.totalBlockHeight - componentHeight)) * 100;

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
  },
  template: `
    <div :class="['content-scroller vue-component', overlappingSizeValue]">
      <div style="display: none; position: fixed;top: 0;left: 0; right: 0;background-color: white; border: 1px solid black;">{{ totalBlockHeight }}#scroll: {{ scrollDistancePercentage }}</div>
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
