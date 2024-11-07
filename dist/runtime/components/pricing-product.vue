<template>
  <div
    :class="[
      'pricing-product',
      'row',
      'align-items-center',
      ...pricingProductClasses,
      'mb-3',
      hasAnimation ? ['utility-animation', 'fade-in-bottom'] : [],
    ]"
    :style="index ? { '--utility-animation-index': index } : null"
    data-utility-animation-step="1"
    ref="root"
  >
    <div class="pricing-product__description pl-0 mb-2 mb-md-0 col-12 col-md-4 col-lg-5">
      <h3 class="font-size-4 font-size-3-md">{{ title }}</h3>
      <p class="m-0">{{ description }}</p>
    </div>

    <div :class="['pricing-product__price', 'mb-4', 'mb-md-0', 'col-12', ...pricingProductPriceColumns]">
      <div class="text-right">
        <span class="font-size-4 text-secondary font-weight-bold">
          <span
            :class="includedTargetSelectorClass"
            data-currency-format
            :data-toggle-switch-item-options="JSON.stringify({ monthly: price.monthly, annual: price.annual })"
          >
            {{ price[selectedPlan] }}
          </span>
        </span>
        <span class="font-size-1 text-muted d-inline-block ml-1">| {{ price.per }}</span>
      </div>

      <div class="text-right">
        <span class="small text-muted d-inline-block mr-lg-2">
          {{ additionalUsersFee.information }}
        </span>
        <span class="text-secondary">
          <span
            :class="computedTargetSelectorClass"
            data-currency-format
            :data-toggle-switch-item-options="
              JSON.stringify({ monthly: additionalUsersFee.monthly, annual: additionalUsersFee.annual })
            "
          >
            {{ additionalUsersFee[selectedPlan] }}
          </span>
        </span>
        <span class="font-size-1 text-muted d-inline-block ml-1">| {{ price.per }}</span>
      </div>
    </div>

    <div v-if="visibleTabButtons.length > 0" class="cta column align-items-end col-12 col-md-4 col-lg-3">
      <cta-list :list="visibleTabButtons" :classes="buttonClasses" />
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'pricing-product',
  props: {
    product: Object,
    index: Number,
    hasAnimation: Boolean,
    targetSelectorClass: String,
    visibleTab: {
      type: String,
      default: null,
    },
    selectedPlan: String,
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    title() {
      return this.product.title;
    },
    description() {
      return this.product.description;
    },
    price() {
      return this.product.price;
    },
    additionalUsersFee() {
      return this.product.additionalUsersFee;
    },
    buttons() {
      return this.product.buttons;
    },
    includedTargetSelectorClass() {
      return this.targetSelectorClass || 'pricingSwitch';
    },
    computedTargetSelectorClass() {
      return this.product.targetSelectorClass || this.includedTargetSelectorClass;
    },
    visibleTabExpression() {
      if (this.visibleTab) {
        return (item) => item.visibleTabs && item.visibleTabs.includes(this.visibleTab);
      } else {
        return () => true;
      }
    },
    filterExpression() {
      return (item) => item.pages && item.pages.includes(Tools.getPageTitle());
    },
    filteredButtons() {
      return this.buttons.filter(this.filterExpression);
    },
    visibleTabButtons() {
      return this.filteredButtons.filter(this.visibleTabExpression);
    },
    buttonClasses() {
      const classes = ['row', 'justify-content-end', 'ml-md-4', 'ml-lg-6'];

      if (this.visibleTabButtons.length > 1) {
        classes.push('mb-2');
      }
      return classes.join(' ');
    },
    pricingProductClasses() {
      if (this.visibleTabButtons.length > 0) {
        return ['bg-white', 'p-4', 'pl-md-6', 'pr-md-2'];
      } else {
        return ['pricint-product--list', 'py-5', 'px-4', 'px-md-0', 'ml-md-6'];
      }
    },
    pricingProductPriceColumns() {
      if (this.visibleTabButtons.length > 0) {
        return ['col-md-4', 'col-lg-4'];
      } else {
        return ['col-md-8', 'col-lg-7'];
      }
    },
  },
};
</script>
