<template>
  <div class="product-blocks utility-animation container-fluid" :style="backgroundColorStyle" ref="root">
    <div :class="['container', spacing]">
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
              <headline
                v-if="item.headline"
                :text="item.headline.text || item.headline"
                :level="item.headline.level || 'h3'"
                :classes="item.headline.classes || ''"
                :utility-animation-step="item.headline.utilityAnimationStep || null"
              />
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
    headline: String || Object,
    spacing: { type: String, default: 'space-top-2 space-bottom-2' },
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
<style lang="scss">
.product-blocks__block {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-blocks__content {
  flex: 1;
}

.product-blocks__img {
  width: 15rem;

  @include media-breakpoint-up(md) {
    min-height: 54px;
  }
}

.product-blocks__item {
  @include utility-animation-options($delay: 80ms, $selector: '&');
}
</style>
