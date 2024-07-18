import Tools from '../tools.js';

export default {
  tagName: 'content-scroller',
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
  template: `
    <div :class="['content-scroller vue-component', overlappingSizeValue]">
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
