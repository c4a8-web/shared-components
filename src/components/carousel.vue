<template>
  <div :class="classList" ref="carousel" :style="style">
    <div class="carousel__container">
      <div class="carousel__row">
        <section class="carousel__row-section" ref="row-section">
          <carousel-item :item="item" v-for="(item, index) in jsonItems" :key="index" />
        </section>
        <section class="carousel__row-section">
          <carousel-item :item="item" v-for="(item, index) in jsonItems" :key="index" />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../assets/js/tools.js';
import State from '../assets/js/state.js';

const carouselItem = {
  tagName: 'carousel-item',
  template: `
    <a :href="item.url" :target="item.target" class="carousel__item">
      <v-img
        :cloudinary="true"
        v-bind="item"
        :class="item.classes"
      ></v-img>
    </a>
  `,
  props: {
    item: Object,
  },
};

export default {
  tagName: 'carousel',
  components: {
    'carousel-item': carouselItem,
  },
  data() {
    return {
      clientWidth: null,
      resizeObserver: null,
    };
  },
  computed: {
    jsonItems() {
      return Tools.getJSON(this.items);
    },
    classList() {
      return ['carousel vue-component', this.bgColor ? State.HAS_BACKGROUND : ''];
    },
    style() {
      return [
        this.bgColor ? `--color-carousel-background: ${this.bgColor};` : '',
        this.clientWidth ? `--animation-scroll-width: -${this.clientWidth}px;` : '',
      ];
    },
  },
  mounted() {
    const rowSection = this.$refs['row-section'];

    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === rowSection) {
          this.clientWidth = entry.contentRect.width;
        }
      }
    });

    if (!rowSection) return;

    this.resizeObserver.observe(rowSection);

    window.addEventListener('resize', this.updateClientWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateClientWidth);
  },
  methods: {
    updateClientWidth() {
      this.clientWidth = this.$refs['row-section']?.clientWidth;
    },
  },
  props: {
    items: Array,
    bgColor: String,
  },
};
</script>
