<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
    <path d="M23 12H1" stroke="#000520" stroke-linecap="round" />
  </svg>
</template>
<script>
export default {
  tagName: 'minus',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    stroke() {
      return this.color;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
