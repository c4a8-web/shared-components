import Tools from '../tools.js';

// TODO calculate the height of the left block somehow
// TODO make a mobile version of the component

export default {
  tagName: 'content-scroller',
  data() {
    return {
      totalBlockHeight: 0,
      blockHeights: [],
      blockPositions: [],
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
    this.calculateBlockHeight();

    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  watch: {
    blockHeights() {
      this.calculateTotalBlockHeight();
    },
  },
  methods: {
    handleResize() {
      this.calculateBlockHeight();
    },
    calculateBlockHeight() {
      this.$nextTick(() => {
        const blockList = this.$refs['block'];
        const newBlockHeights = [];

        blockList.reduce((total, block, index) => {
          const blockHeight = block.offsetHeight;

          newBlockHeights[index] = blockHeight;
          this.blockPositions[index] = total;

          return total + blockHeight;
        }, 0);

        this.blockHeights = newBlockHeights;
      });
    },
    calculateTotalBlockHeight() {
      this.$nextTick(() => {
        const blockList = this.$refs['block'];

        this.totalBlockHeight =
          blockList.reduce((total, block, index) => {
            const style = window.getComputedStyle(block);
            const margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom);

            return total + this.blockHeights[index] + margin;
          }, 0) + 'px';
      });
    },
    calculateBlockStyle(index) {
      return [
        {
          '--content-scroller-block-height': this.blockHeights[index] + 'px',
          '--content-scroller-block-position': this.blockPositions[index] + 'px',
        },
      ];
    },
  },
  template: `
    <div :class="['content-scroller vue-component', overlappingSizeValue]" :style="[{'--content-scroller-total-block-height': this.totalBlockHeight}]">
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
                <section class="content-scroller__block" v-for="(block, index) in blocksValue" :key="index" ref="block" :style="calculateBlockStyle(index)">
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
      </wrapper>
      <div class="content-scroller__background"></div>
    </div>
  `,
};
