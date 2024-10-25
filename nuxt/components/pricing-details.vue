<template>
  <section id="pricingDetails" class="pricing-details" :style="{ backgroundColor: bgColor }">
    <div class="container">
      <div v-if="headline">
        <headline-row :text="headline" :centered="true" :hasAnimation="true" />
      </div>
      <p
        v-if="description"
        class="pricing-details__description w-75 mt-5 ml-auto mr-auto text-center utility-animation fade-in-bottom"
        data-utility-animation-step="1"
      >
        {{ description }}
      </p>
      <div class="pricing-details__content pt-6 pt-lg-8 pb-10">
        <div v-if="toggleSwitch">
          <toggle-switch :toggleSwitch="toggleSwitch" :hasAnimation="true" />
        </div>
        <pricing-product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
          :targetSelectorClass="pricingDetailTargetSelector"
          :visibleTab="visibleTab"
          :index="index + 1"
          :hasAnimation="true"
        />
        <div class="pricing-details__infos pt-5">
          {{ vatInfo }}
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Tools from '../utils/tools.js';
import Lang from '../utils/lang.js';

export default {
  props: {
    products: Array,
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
  },
};
</script>
