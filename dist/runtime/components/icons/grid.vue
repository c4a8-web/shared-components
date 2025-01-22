<template>
  <svg v-bind="settings" width="32" height="32" viewBox="0 0 32 32">
    <circle cx="5.49906" cy="6.49919" r="1.62162" :fill="color" />
    <circle cx="26.2559" cy="6.49919" r="1.62162" :fill="color" />
    <circle cx="15.8775" cy="6.49919" r="1.62162" :fill="color" />
    <circle cx="5.49906" cy="16.8776" r="1.62162" :fill="color" />
    <circle cx="26.2559" cy="16.8776" r="1.62162" :fill="color" />
    <circle cx="15.8775" cy="16.8776" r="1.62162" :fill="color" />
    <circle cx="5.49906" cy="27.2559" r="1.62162" :fill="color" />
    <circle cx="26.2559" cy="27.2559" r="1.62162" :fill="color" />
    <circle cx="15.8775" cy="27.2559" r="1.62162" :fill="color" />
  </svg>
</template>
<script>
export default {
  tagName: 'grid',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
