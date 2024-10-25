<template>
  <div class="pricing-slider">
    <div
      v-if="pricingSliderRange"
      class="js-slider-data"
      :data-range="JSON.stringify(pricingSliderRange)"
      :data-products="JSON.stringify(products)"
    >
      <input
        class="js-ion-range-slider"
        type="text"
        :data-hs-ion-range-slider-options="JSON.stringify(hsIonRangeSliderOptions)"
      />
    </div>
    <div class="product-stage__result-container">
      <div class="text-center text-midnight">
        <span class="font-size-5 js-result-price">0</span>
        <span class="pricing-slider__info font-size-5">
          <icon icon="info" size="small"></icon>
        </span>
        <span v-if="pricingSliderRange && pricingSliderRange.resultPer">| {{ pricingSliderRange.resultPer }}</span>
      </div>
      <div class="text-center text-midnight">
        <strong class="js-result-product"></strong>
        <span class="js-result-extra"></span>
      </div>
      <modal :slim="true" :center="true" class="pricing-slider__modal" :modal-id="modalId">
        <div class="container">
          <div class="row">
            <div class="col">{{ tooltip }}</div>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'pricing-slider',
  props: {
    slider: Object,
    tooltip: String,
    modalId: String,
    products: Object,
  },
  computed: {
    pricingSliderRange() {
      return this.slider && this.slider.range ? this.slider.range : {};
    },
    hsIonRangeSliderOptions() {
      return {
        extra_classes: 'range-slider-custom',
        hide_from_to: false,
        min: this.pricingSliderRange.min,
        max: this.pricingSliderRange.max,
        from: this.pricingSliderRange.from,
        step: this.pricingSliderRange.step,
        result_min_target_el: '.js-result-price',
      };
    },
  },
};
</script>
