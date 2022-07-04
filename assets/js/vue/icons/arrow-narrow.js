export default {
  tagName: 'arrow-narrow',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" :style="style" viewBox="0 0 19.74 69.3">
      <polyline fill="none" stroke-width="3px" stroke-linecap="round" stroke-miterlimit="10" points="1.62 1.62 17.91 34.62 1.62 67.62"></polyline>
    </svg>
  `,
};
