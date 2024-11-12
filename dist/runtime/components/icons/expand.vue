<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 22 12" fill="none">
    <path
      d="M1 1L9.58671 10.2646C9.96284 10.6704 10.597 10.6937 11.0019 10.3164L21 1"
      stroke-width="1.5"
      :stroke="stroke"
      stroke-linecap="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'expand',
  computed: {
    style() {
      return `transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
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
