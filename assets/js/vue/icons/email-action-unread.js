export default {
  tagName: 'email-action-unread',
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
  <svg v-bind="settings" :style="style" viewBox="0 0 26 26">
    <title>email-action-unread</title>
    <g>
      <rect x=".5" y="3.954" width="23" height="16" rx="2" ry="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></rect>
      <path d="M22.911 4.536L12 13.454 1.089 4.536" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
  </svg>
  `,
};
