<template>
  <div :class="classValue" :style="colorStyling">
    <div
      class="list-container__container utility-animation container headline-sticky__target fade-in-bottom"
      data-utility-animation-step="1"
      ref="container"
    >
      <div class="row">
        <div class="col-sm-12">
          <headline :text="headline" :level="level" classes="list-container__headline" />
        </div>
      </div>
    </div>
    <slot-items :items="$slots.default"></slot-items>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'list-container',
  computed: {
    classValue() {
      return [
        'list-container vue-component',
        `${this.spacing ? this.spacing : ''}`,
        `${this.classes ? this.classes : ''}`,
        Tools.isTrue(this.headlineSticky) ? 'list-container--headline-sticky has-headline-sticky' : '',
      ];
    },
    colorStyling() {
      const bgColor = this.bgColor
        ? `--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);`
        : '';
      const headlineColor = this.headlineColor
        ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`
        : '';
      return [bgColor, headlineColor];
    },
  },
  mounted() {
    if (!this.$refs.container) return;

    UtilityAnimation.init([this.$refs.container]);
  },
  props: {
    classes: String,
    headline: String,
    level: String,
    bgColor: String,
    headlineColor: String,
    headlineSticky: {
      default: false,
    },
    spacing: String,
  },
};
</script>
