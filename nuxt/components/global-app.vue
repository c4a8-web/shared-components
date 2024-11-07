<template>
  <tracking />
  <div id="app" :class="classes">
    <slot />
  </div>
</template>

<script>
import Anchor from '../utils/anchor.js';
import Modal from '../utils/modal.js';

export default {
  tagName: 'global-app',
  mounted() {
    // initializes JS components
    new Anchor();
    document.querySelectorAll('.modal').forEach((node) => new Modal(node));
  },
  props: {
    classes: Array,
  },
};
</script>
