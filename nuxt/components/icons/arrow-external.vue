<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 34 34">
    <path
      d="M33.23,2.39,1.79,33.79"
      transform="translate(-0.79 -0.79)"
      style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3"
    ></path>
    <path
      d="M33.79,33.79v-30a2,2,0,0,0-2-2h-30"
      transform="translate(-0.79 -0.79)"
      style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 3"
    ></path>
  </svg>
</template>
<script>
export default {
  tagName: 'arrow-external',
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
