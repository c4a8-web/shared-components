import Tools from '../tools.js';
import State from '../state.js';

const carouselItem = {
  tagName: 'carousel-item',
  template: `
    <a :href="item.url" :target="item.target" class="carousel__item">
      <v-img
        cloudinary=true
        v-bind="item"
      ></v-img>
    </a>
  `,
  props: {
    item: Object,
  },
};

// TODO add draggable option to move scroll left and right

export default {
  components: {
    'carousel-item': carouselItem,
  },
  tagName: 'carousel',
  computed: {
    jsonItems() {
      return Tools.getJSON(this.items);
    },
    classList() {
      return ['carousel vue-component', this.bgColor ? State.HAS_BACKGROUND : ''];
    },
    style() {
      return [this.bgColor ? `--color-carousel-background: ${this.bgColor};` : ''];
    },
  },
  props: {
    items: Array,
    bgColor: String,
  },
  template: `
    <div :class="classList" ref="carousel" :style="style">
      <div class="carousel__content">
        <section class="carousel__item-container" v-for="(item, index) in jsonItems" :key="index">
          <carousel-item :item="item" />
        </section>
        <section class="carousel__item-container" v-for="(item, index) in jsonItems" :key="index">
          <carousel-item :item="item" />
        </section>
        <section class="carousel__item-container" v-for="(item, index) in jsonItems" :key="index">
          <carousel-item :item="item" />
        </section>
      </div>
    </div>
  `,
};
