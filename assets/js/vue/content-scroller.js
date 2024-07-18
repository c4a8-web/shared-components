import Tools from '../tools.js';

export default {
  tagName: 'content-scroller',
  data() {
    return {
      totalBlockHeight: 0,
      blockHeights: [],
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

        blockList.reduce((_, block, index) => {
          const blockHeight = block.offsetHeight;

          newBlockHeights[index] = blockHeight;
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
                <section class="content-scroller__block" v-for="(block, index) in blocksValue" :key="index" ref="block" :style="[{'--content-scroller-block-height': blockHeights[index] + 'px'}]">
                  <main>
                    <headline
                      v-if="block.headline"
                      v-bind="block.headline"
                      :level="block.headline.level || 'h3'"
                      classes="content-scroller__block-headline"
                    />
                    <p class="content-scroller__block-content">{{ block.content }}</p>
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
