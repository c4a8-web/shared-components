import Tools from '../tools.js';

export default {
  tagName: 'content-scroller',
  // data() {
  //   return {
  //     defaultImageOffsetLeft: '50%',
  //     defaultImageOffsetTop: '60%',
  //   };
  // },
  computed: {
    // classList() {
    //   return ['content-scroller vue-component'];
    // },
    blocksValue() {
      return Tools.getJSON(this.blocks);
    },
    headlineValue() {
      const headline = Tools.getJSON(this.headline);

      return {
        ...headline,
        level: headline.level || 'h2',
        classes: `content-scroller__headline ${headline.classes || 'h2-font-size'}`,
      };
    },
    overlappingSizeValue() {
      return this.overlappingSize || 'mt-n10';
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
    <div class="content-scroller vue-component">
      <div class="content-scroller__grid">
        <div class="content-scroller__content">
          <headline
            v-bind="headlineValue"
          />
        </div>
        <div :class="['content-scroller__blocks', overlappingSizeValue]">
          <div class="content-scroller__block" v-for="(index, block) in blocksValue" :key="index">
            {{ block.title }}

            {{ block.content }}
          </div>
        </div>
      </div>
    </div>
  `,
};
