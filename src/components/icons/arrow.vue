<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 28 17">
    <g transform="translate(0.75 0.75)">
      <path
        d="M0.5 0.5L26 0.5"
        transform="translate(0 7)"
        fill="none"
        fill-rule="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0 15L7 7.5L0 0"
        transform="translate(19 0)"
        fill="none"
        fill-rule="evenodd"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
<script>
export default {
  tagName: 'arrow',
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
