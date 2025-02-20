<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <line class="a" x1="2.5" y1="0.5" x2="2.5" y2="3.5" />
    <line class="a" x1="10.5" y1="0.5" x2="10.5" y2="3.5" />
    <line class="a" x1="4.5" y1="6.5" x2="8.5" y2="6.5" />
    <path class="a" d="M6.5,16.5v3a4,4,0,0,0,8,0v-.75a5.251,5.251,0,0,1,5.25-5.25H23.5" />
    <path class="a" d="M4.5,13.158V15.5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V13.158" />
    <path class="a" d="M12.5,7.5a6,6,0,0,1-12,0v-3a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1Z" />
  </svg>
</template>

<script>
export default {
  tagName: 'phone-charger',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
