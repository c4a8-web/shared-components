<template>
  <div class="feature-grid utility-animation py-7" :style="styleObject" ref="root">
    <div :class="containerClasses">
      <headline-row
        :text="headline"
        :centered="true"
        :classes="featureGridHeadlineRowClasses"
        utilityAnimationStep="1"
        :noContainer="true"
        :level="headlineLevel"
      ></headline-row>

      <p class="feature-grid__description w-lg-50 text-center mt-3 mx-auto" v-if="description">{{ description }}</p>

      <figure v-if="image" class="d-flex mt-8 justify-content-center fade-in-bottom" data-utility-animation-step="1">
        <v-img v-bind="image" :img="image.src" />
      </figure>

      <div class="my-8" v-if="features">
        <div class="d-flex flex-wrap">
          <feature-grid-item
            v-for="(feature, index) in features"
            :key="index"
            :classes="columnClass"
            :index="index + 1"
            :item="feature"
            :centered="centered"
          ></feature-grid-item>
        </div>
      </div>

      <div v-if="footer" class="container pb-6">
        {{ footer }}
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'feature-grid',
  props: {
    backgroundColor: {
      type: String,
      default: 'var(--color-bg-grey)',
    },
    description: String,
    headline: String,
    gridSize: {
      type: Number,
      default: 4,
    },
    image: Object,
    features: Array,
    footer: String,
    centered: Boolean,
    headlineClasses: String,
    headlineLevel: String,
    spacing: String,
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    columnClass() {
      return 'col-lg-' + 12 / this.gridSize;
    },
    featureGridHeadlineRowClasses() {
      return ['fade-in-bottom', this.headlineClasses];
    },
    containerClasses() {
      return ['container', this.spacing];
    },
    styleObject() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },
};
</script>
