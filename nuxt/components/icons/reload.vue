<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 51 51">
    <path
      fill="none"
      d="M18.6856 35.965C20.9479 37.7442 23.8016 38.8053 26.9028 38.8053C34.2506 38.8053 40.2071 32.8488 40.2071 25.501C40.2071 18.1533 34.2506 12.1968 26.9028 12.1968C19.5551 12.1968 13.5986 18.1533 13.5986 25.501V29.278"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill="none"
      d="M8.50244 24.9604L13.5992 30.0582L18.6968 24.9604"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  tagName: 'reload',
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
