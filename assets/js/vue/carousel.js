import Tools from '../tools.js';

const carouselItem = {
  tagName: 'carousel-item',
  template: `
    <a :href="item.url" :target="item.target" :class="['carousel__item-link d-block space-top-1', index === 0 ? 'mt-3': '', item.classes ? item.classes : 'w-90']">
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

export default {
  components: {
    'carousel-item': carouselItem,
  },
  tagName: 'carousel',
  computed: {
    jsonItems() {
      return Tools.getJSON(this.items);
    },
  },
  methods: {
    startAutoscroll() {
      const carousel = this.$refs.carousel;
      const itemWidth = carousel.children[0].offsetWidth;
      let scrollAmount = 0;

      const scroll = () => {
        scrollAmount += 1;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= itemWidth * this.items.length) {
          scrollAmount = 0;
        }

        requestAnimationFrame(scroll);
      };

      scroll();
    },
  },
  mounted() {
    // this.startAutoscroll();
  },
  props: {
    items: Array,
  },
  template: `
    <div class="carousel vue-component" ref="carousel">
      <div class="carousel__content">
        <div class="item" v-for="(item, index) in jsonItems" :key="index">
          <carousel-item :item="item" />
        </div>
        <!-- Clone the items to create the infinite effect -->
        <div class="item" v-for="(item, index) in jsonItems" :key="'clone-' + index">
          <carousel-item :item="item" />
        </div>
      </div>
    </div>
  `,
};
