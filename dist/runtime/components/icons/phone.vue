<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <g>
      <path
        d="M9.086 7.4a2.315 2.315 0 0 0 0-3.271L6.632 1.678a2.313 2.313 0 0 0-3.271 0L2.016 3.024a3.463 3.463 0 0 0-.439 4.365 53.778 53.778 0 0 0 15.034 15.034 3.469 3.469 0 0 0 4.366-.437l1.345-1.346a2.312 2.312 0 0 0 0-3.271l-2.453-2.453a2.312 2.312 0 0 0-3.271 0l-.818.818A54.879 54.879 0 0 1 8.268 8.22z"
      ></path>
    </g>
  </svg>
</template>
<script>
export default {
  tagName: 'phone',
  computed: {
    style() {
      return `stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)); stroke-linecap: round; stroke-linejoin: round; `;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
