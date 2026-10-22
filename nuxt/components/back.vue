<template>
  <div class="back back--animated" :class="[classes, { [State.SHOW]: canGoBack }]" @click="handleClick">
    <icon icon="arrow" direction="left" :hover="true" :circle="true" />
  </div>
</template>

<script>
import State from '../utils/state.js';

export default {
  name: 'back',
  props: {
    classes: {
      type: String,
      default: '',
    },
    // target for direct entries (no same-host referrer, e.g. a shared deep link):
    // instead of hiding, the button navigates here
    fallback: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      State,
      canGoBack: false,
      hasInternalHistory: false,
    };
  },
  mounted() {
    this.hasInternalHistory = document.referrer.indexOf(document.location.host) !== -1;
    this.canGoBack = this.hasInternalHistory || this.fallback !== '';
  },
  methods: {
    handleClick(e) {
      e.stopImmediatePropagation();

      if (this.hasInternalHistory) {
        window.history.back();
      } else if (this.fallback) {
        window.location.href = this.fallback;
      }
    },
  },
};
</script>
<style lang="scss">
.back {
  position: relative;
  display: none;
  width: spacing(9);
  height: spacing(9);
  cursor: pointer;
  top: spacing($size: 8, $negative: true);

  .icon {
    width: 100%;
    height: 100%;
  }

  &.show {
    display: inline-flex;
  }

  &:not(.back--animated) {
    pointer-events: none;

    &.show {
      opacity: 1;
      pointer-events: all;
    }

    @include media-breakpoint-up(lg) {
      top: spacing($size: 24, $negative: true);
      opacity: 0;
      transition: opacity 0.6s $animation-transition;
    }
  }
}
</style>
