<template>
  <div class="product-blocks utility-animation container-fluid" :style="backgroundColorStyle" ref="root">
    <div class="container space-2">
      <div
        v-if="headline"
        class="container pb-4 pb-lg-6 fade-in-bottom"
        data-utility-animation-step="1"
        :style="animationStyle(1)"
      >
        <headline-row :text="headline" :centered="true" />
      </div>
      <div class="row">
        <div
          v-for="(item, index) in productBlocks.items"
          :key="index"
          class="product-blocks__item col-md-6 mb-5 mb-md-0 space-1 fade-in-bottom"
          data-utility-animation-step="1"
          :style="animationStyle(index + 1)"
        >
          <div :class="['product-blocks__block', { 'text-center': item.copy === '' }, 'pl-lg-3 pr-lg-8']">
            <div class="product-blocks__content">
              <figure :class="['product-blocks__img', { 'mx-auto': item.copy === '' }, 'mb-4']">
                <v-img :img="item.image" :cloudinary="item.cloudinary" :alt="item.alt" v-if="item.image" />
              </figure>
              <h3 v-if="item - headline">{{ item.headline }}</h3>
              <p v-if="item.copy">{{ item.copy }}</p>
              <ul v-if="item.bulletList" class="dashed">
                <li v-for="(bulletListItem, bulletListIndex) in item.bulletList" :key="bulletListIndex">
                  {{ bulletListItem }}
                </li>
              </ul>
            </div>
            <div class="product-blocks__buttons">
              <cta-list v-if="item.list" :list="item.list" />
              <cta
                v-else-if="item.ctaText"
                :text="item.ctaText"
                :href="item.ctaHref"
                :link="item.link"
                :target="item.target"
                :type="item.type"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  props: {
    productBlocks: Object,
    headline: String,
  },
  computed: {
    backgroundColorStyle() {
      return { backgroundColor: this.productBlocks.bgColor };
    },
  },
  methods: {
    animationStyle(index) {
      return { '--utility-animation-index': index };
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
};
</script>
