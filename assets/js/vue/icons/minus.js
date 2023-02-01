export default {
  tagName: 'minus',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation));`;
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
      <path d="M23 12H1" stroke="#000520" stroke-linecap="round"/>
    </svg>
 `,
};
