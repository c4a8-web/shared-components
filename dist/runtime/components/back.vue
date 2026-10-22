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
<style>
.back {
  position: relative;
  display: none;
  width: 2.25rem;
  height: 2.25rem;
  cursor: pointer;
  top: -2rem;
}
.back .icon {
  width: 100%;
  height: 100%;
}
.back.show {
  display: inline-flex;
}
.back:not(.back--animated) {
  pointer-events: none;
}
.back:not(.back--animated).show {
  opacity: 1;
  pointer-events: all;
}
@media (min-width: 992px) {
  .back:not(.back--animated) {
    top: -6rem;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.19, 1, 0.2, 1);
  }
}
</style>
