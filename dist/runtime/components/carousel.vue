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
import Tools from '../utils/tools.js';
import State from '../utils/state.js';

export default {
  tagName: 'carousel',
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
