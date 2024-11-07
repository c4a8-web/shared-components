<template>
  <section id="pricingDetails" class="pricing-details" :style="{ backgroundColor: bgColor }">
    <div class="container">
      <div v-if="headline">
        <headline-row :text="headline" :centered="true" :has-animation="true" />
      </div>
      <p
        v-if="description"
        class="pricing-details__description w-75 mt-5 ml-auto mr-auto text-center utility-animation fade-in-bottom"
        data-utility-animation-step="1"
        ref="description"
      >
        {{ description }}
      </p>
      <div class="pricing-details__content pt-6 pt-lg-8 pb-10">
        <div v-if="toggleSwitch">
          <toggle-switch :toggle-switch="toggleSwitch" :has-animation="true" />
        </div>
        <pricing-product
          v-for="(product, index) in list"
          :key="index"
          :product="product"
          :target-selector-class="pricingDetailTargetSelector"
          :visible-tab="visibleTab"
          :index="index + 1"
          :has-animation="true"
          :selected-plan="selectedPlan"
        />
        <div class="pricing-details__infos pt-5" v-html="vatInfo"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Tools from '../utils/tools.js';
import Lang from '../utils/lang.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'pricing-details',
  props: {
    products: Object,
    headline: String,
    description: String,
    bgColor: {
      type: String,
      default: 'var(--color-bg-grey)',
    },
    toggleSwitch: Object,
    visibleTab: String,
    lang: {
      type: String,
      default: 'de',
    },
  },
  mounted() {
    if (!this.$refs.description) return;

    UtilityAnimation.init([this.$refs.description]);
  },
  computed: {
    pricingDetailTargetSelector() {
      return (this.toggleSwitch && this.toggleSwitch.targetSelectorClass) || 'pricingSwitch';
    },
    langData() {
      return Lang[Tools.getLang()];
    },
    vatInfo() {
      return this.langData?.vatInfo;
    },
    list() {
      return this.products?.list || [];
    },
    selectedPlan() {
      return this.products?.pricing?.defaultPlan || 'monthly';
    },
  },
};
</script>
