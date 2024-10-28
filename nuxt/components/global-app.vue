<template>
  <div id="app" :class="classes">
    <slot />
  </div>
</template>

<script>
import Modal from '../utils/modal.js';

export default {
  tagName: 'global-app',
  mounted() {
    // initializes JS components
    document.querySelectorAll('.modal').forEach((node) => new Modal(node));

    // TODO add anchors.js
  },
  props: {
    classes: Array,
  },
};
</script>
