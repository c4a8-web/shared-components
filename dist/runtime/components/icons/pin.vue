<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path
        d="M12 .71a7.5 7.5 0 0 1 7.5 7.5c0 3.547-5.5 12.381-7.079 14.85a.5.5 0 0 1-.842 0C10 20.592 4.5 11.757 4.5 8.21A7.5 7.5 0 0 1 12 .71z"
      ></path>
      <circle cx="12" cy="8.21" r="3"></circle>
    </g>
  </svg>
</template>

<script>
export default {
  tagName: 'pin',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)); fill: none; stroke-linecap: round; stroke-linejoin: round;`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
