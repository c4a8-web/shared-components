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
    <svg v-bind="settings" :style="style" viewBox="0 0 24 2" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23 1H1Z" fill="#0072C6"/>
      <path d="M23 1H1" stroke-linecap="round"/>
    </svg>
 `,
};
