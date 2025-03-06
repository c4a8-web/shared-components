<template>
  <tracking />
  <div id="app" :class="classes">
    <slot />
  </div>
</template>

<script>
import Anchor from '../utils/anchor.js';
import Modal from '../utils/modal.js';
import Events from '../utils/events.js';

export default {
  tagName: 'global-app',
  mounted() {
    // initializes JS components
    new Anchor();
    document.querySelectorAll('.modal').forEach((node) => new Modal(node));

    window.addEventListener('resize', () => {
      this.triggerResizeEvent();
    });

    this.captureBodyMutation();
  },
  methods: {
    captureBodyMutation() {
      const observer = new ResizeObserver(this.handleBodyMutation);

      observer.observe(document.body);
    },
    handleBodyMutation(mutations) {
      const heightTolleranceRange = 3;
      let once = false;

      mutations.forEach((mutation) => {
        if (once) return;

        if (
          mutation.contentRect.height > this.lastBodyHeight + heightTolleranceRange ||
          mutation.contentRect.height < this.lastBodyHeight - heightTolleranceRange
        ) {
          this.lastBodyHeight = mutation.contentRect.height;
          once = true;

          this.triggerResizeEvent();

          return;
        }
      });
    },
    triggerResizeEvent() {
      const customEvent = new CustomEvent(Events.WINDOW_RESIZE, {});

      document.dispatchEvent(customEvent);
    },
  },
  props: {
    classes: Array,
  },
  data() {
    return {
      lastBodyHeight: null,
    };
  },
};
</script>
