<template>
  <div :class="classList" :style="styles" ref="root">
    <div class="logo-list__row row">
      <wrapper classes="logo-list__scroller" :hide-container="!isOverlapping" :hide-container-class="true">
        <div :class="['logo-list__col col d-flex', { 'flex-wrap': !isOverlapping }]">
          <logo-list-items :list="list" :is-overlapping="isOverlapping" />
          <logo-list-items :list="list" is-clone="true" :is-overlapping="isOverlapping" v-if="isOverlapping" />
        </div>
      </wrapper>
    </div>
  </div>
</template>
<script>
import StickyScroller from '../utils/sticky-scroller.js';
import UtilityAnimation from '../utils/utility-animation.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'logo-list',
  mounted() {
    if (!this.$refs.root) return;

    if (this.sticky) {
      StickyScroller.init([this.$refs.root]);
    }

    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    defaultSpacing() {},
    classList() {
      return [
        'logo-list container utility-animation vue-component',
        this.aspectRatio ? 'logo-list--aspect-ratio' : '',
        this.sticky ? 'is-sticky-scroller' : '',
        this.spacing ? this.spacing : 'py-4',
        this.isOverlapping ? 'logo-list--is-overlapping' : '',
      ];
    },
    isOverlapping() {
      return Tools.isTrue(this.overlapping);
    },
    columnsValue() {
      const defaultColumn = 4;
      const columnParam = parseInt(this.columns);
      const columnPercentage = 100 / (Number.isNaN(columnParam) ? defaultColumn : columnParam);
      const columnWidth = '--column-width: ';
      const gap = 3;

      return columnWidth + `calc(${columnPercentage}% - ${gap}px)`;
    },
    aspectRatioValue() {
      if (!this.aspectRatio) return '';

      const aspectRatio = this.aspectRatio.split('/');

      if (aspectRatio.length != 2) return '';

      return `--aspect-ratio-width: ${aspectRatio[0]}; --aspect-ratio-height: ${aspectRatio[1]}`;
    },
    styles() {
      return [
        this.columnsValue,
        this.aspectRatioValue,
        this.bgColor ? `--logo-list-background: ${this.bgColor}` : '',
      ].join('; ');
    },
  },
  props: {
    list: Array,
    sticky: {
      default: false,
    },
    spacing: String,
    columns: Number,
    aspectRatio: {
      default: false,
    },
    overlapping: {
      default: false,
    },
    bgColor: String,
  },
};
</script>
