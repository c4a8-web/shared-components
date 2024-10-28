<template>
  <div :class="toggleSwitchClasses" data-utility-animation-step="1" ref="root">
    <span class="font-size-1 text-muted toggle-switch__text" :class="toggleSwitchLimitLeftClass">{{
      toggleSwitchTextLeft
    }}</span>
    <label class="mx-2" :for="toggleSwitchId">
      <input
        type="checkbox"
        class="js-toggle-switch toggle-switch-input"
        :id="toggleSwitchId"
        :checked="toggleSwitchActive"
        :data-toggle-switch-options="JSON.stringify({ targetSelector: toggleSwitchTargetSelector })"
      />
      <span class="toggle-switch-label">
        <span class="toggle-switch-indicator"></span>
      </span>
    </label>
    <span class="font-size-1 position-relative text-muted toggle-switch__text">
      <div v-if="toggleSwitchHint" class="position-absolute row toggle-switch__hint">
        <icon :icon="'arrow-curl'" :size="'small'"></icon>
        <span class="badge-pill toggle-switch__hint-text" :style="{ backgroundColor: toggleSwitchHintBgColor }">
          <span class="small" :style="{ color: toggleSwitchHintColor }">{{ toggleSwitchHintText }}</span>
        </span>
      </div>
      {{ toggleSwitchTextRight }}
    </span>
  </div>
</template>
<script>
// TODO move this inside the vue component
import ToggleSwitch from '../utils/toggle-switch.js';

export default {
  props: {
    toggleSwitch: {
      type: Object,
      default: () => ({}),
    },
    toggleSwitchHasAnimation: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Object,
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    new ToggleSwitch(this.$refs.root);
  },
  computed: {
    toggleSwitchTextLeft() {
      return this.toggleSwitch.textLeft || 'Monthly';
    },
    toggleSwitchTextRight() {
      return this.toggleSwitch.textRight || 'Annual';
    },
    toggleSwitchHint() {
      return this.toggleSwitch.hint || null;
    },
    toggleSwitchHintText() {
      return (this.toggleSwitchHint && this.toggleSwitchHint.text) || 'Save up to 10%';
    },
    toggleSwitchHintBgColor() {
      return (this.toggleSwitchHint && this.toggleSwitchHint.bgColor) || 'var(--color-secondary)';
    },
    toggleSwitchHintColor() {
      return (this.toggleSwitchHint && this.toggleSwitchHint.color) || 'var(--color-white)';
    },
    toggleSwitchId() {
      return this.toggleSwitch.id || 'customToggleSwitch';
    },
    toggleSwitchTargetSelector() {
      return this.toggleSwitch.targetSelector || '#pricingCount1, #pricingCount2, #pricingCount3';
    },
    toggleSwitchLimit() {
      return this.toggleSwitch.limit || false;
    },
    defaultPlan() {
      return this.products && this.products.pricing && this.products.pricing.defaultPlan;
    },
    toggleSwitchActive() {
      return this.toggleSwitch.active || this.defaultPlan === 'annual';
    },
    toggleSwitchLimitLeftClass() {
      return this.toggleSwitchLimit ? 'toggle-switch__text--right' : '';
    },
    toggleSwitchClasses() {
      return [
        'toggle-switch',
        'overflow-hidden',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        'pt-6',
        'mb-5',
        this.toggleSwitchHasAnimation ? 'utility-animation fade-in-bottom' : '',
      ];
    },
  },
};
</script>
