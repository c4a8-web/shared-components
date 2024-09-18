export default {
  tagName: 'check-mark',
  computed: {
    style() {
      // TODO check if we can use this style like in the other icons
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    foregroundStroke() {
      return this.color ? this.color : '#001F35';
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
    <svg v-bind="settings" fill="none" viewBox="0 0 28 28">
      <g clip-path="url(#clip0_434_904)">
        <path d="M24.86 3.19L11.91 24.13C11.47 24.56 10.88 24.81 10.27 24.81C9.65999 24.81 9.05999 24.57 8.62999 24.13L3.29999 18.8" stroke="#F5C663" stroke-width="5.67" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.97 1.42L10.03 22.36C9.58998 22.79 8.99998 23.04 8.38998 23.04C7.77998 23.04 7.17998 22.8 6.74998 22.36L1.41998 17.03" :stroke="foregroundStroke" stroke-width="2.83" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_434_904">
        <rect width="27.7" height="27.64" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
};
