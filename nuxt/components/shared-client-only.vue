<template>
  <template v-if="!isStorybook">
    <slot></slot>
  </template>
  <template v-else>
    storybook
    <slot></slot>
  </template>
</template>

<script>
import Tools from '../assets/js/tools.js';

// TODO this should be nuxt ClientOnly

export default {
  name: 'SharedClientOnly',
  computed: {
    isStorybook() {
      return Tools.isStorybook();
    },
  },
};
</script>
