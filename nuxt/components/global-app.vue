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

// TODO find a better way to handle this events

const triggerResizeEvent = () => {
  const customEvent = new CustomEvent(Events.WINDOW_RESIZE, {});

  document.dispatchEvent(customEvent);
};

const handleBodyMutation = (mutations) => {
  const heightTolleranceRange = 3;
  let once = false;

  mutations.forEach((mutation) => {
    if (once) return;

    if (
      mutation.contentRect.height > lastBodyHeight + heightTolleranceRange ||
      mutation.contentRect.height < lastBodyHeight - heightTolleranceRange
    ) {
      lastBodyHeight = mutation.contentRect.height;
      once = true;

      triggerResizeEvent();

      return;
    }
  });
};

const captureBodyMutation = () => {
  const observer = new ResizeObserver(handleBodyMutation);

  observer.observe(document.body);
};

export default {
  tagName: 'global-app',
  mounted() {
    // initializes JS components
    new Anchor();
    document.querySelectorAll('.modal').forEach((node) => new Modal(node));

    window.addEventListener('resize', () => {
      triggerResizeEvent();
    });
  },
  props: {
    classes: Array,
  },
};
</script>
