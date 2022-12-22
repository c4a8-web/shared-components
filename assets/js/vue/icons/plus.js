export default {
  tagName: 'plus',
  computed: {
    style() {
      return `transform: rotate(var(--icon-rotation));`;
    },
    stroke() {
      return this.color;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 24 24" fill="none">
    <path d="M12 1V23" stroke="#000520" stroke-linecap="round"/>
    <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
  </svg>
 `,
};
