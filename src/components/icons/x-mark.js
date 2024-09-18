export default {
  tagName: 'x-mark',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    foregroundStroke() {
      return this.color ? this.color : '#FF0000';
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" fill="none" viewBox="0 0 28 28">
      <g clip-path="url(#clip0_434_958)">
        <path d="M2.72115 2.72115L22.2692 22.2692" stroke="#FF0000" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2692 2.72115L2.72115 22.2692" stroke="#FF0000" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.40385 2.72115L20.9519 22.2692" stroke="#001F35" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9519 2.72115L1.40385 22.2692" stroke="#001F35" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_434_958">
        <rect width="28" height="25" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
};
