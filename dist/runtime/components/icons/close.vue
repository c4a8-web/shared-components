<template>
  <svg v-bind="settings" :style="style" :viewBox="`0 0 ${viewBoxWidth} ${viewBoxWidth}`">
    <line
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      :x1="outerPosition"
      :y1="padding"
      :x2="padding"
      :y2="outerPosition"
    />
    <line
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      :x1="outerPosition"
      :y1="outerPosition"
      :x2="padding"
      :y2="padding"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'close',
  computed: {
    outerPosition() {
      return this.viewBoxWidth - this.padding;
    },
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
  },
  props: {
    padding: Number,
    settings: Object,
    color: String,
  },
  data() {
    return {
      viewBoxWidth: 48,
    };
  },
};
</script>
