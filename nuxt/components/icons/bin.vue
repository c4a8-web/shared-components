<template>
  <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 24 24">
    <path d="M21,4.5,19.188,21.709A2,2,0,0,1,17.2,23.5H6.8a2,2,0,0,1-1.989-1.791L3,4.5" />
    <line x1="0.5" y1="4.5" x2="23.5" y2="4.5" />
    <path d="M7.5,4.5v-3a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v3" />
    <line x1="12" y1="9" x2="12" y2="19.5" />
    <line x1="16.5" y1="9" x2="16" y2="19.5" />
    <line x1="7.5" y1="9" x2="8" y2="19.5" />
  </svg>
</template>
<script>
export default {
  tagName: 'bin',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale)); stroke-linecap:round; stroke-linejoin:round;`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
