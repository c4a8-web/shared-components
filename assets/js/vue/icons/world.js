export default {
  tagName: 'world',
  computed: {
    style() {
      return `scale(var(--icon-scale));`;
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
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 20 20">
      <g clip-path="url(#icon-world-mask)">
        <path d="M19.583 9.95083C19.5836 11.2135 19.3356 12.4639 18.853 13.6307C18.3704 14.7975 17.6627 15.8578 16.7703 16.7511C15.878 17.6444 14.8184 18.3532 13.6521 18.837C12.4858 19.3208 11.2356 19.5702 9.97298 19.5708C7.41074 19.5283 4.96901 18.4754 3.17921 16.6415C1.38941 14.8075 0.396399 12.3408 0.416309 9.77833C0.41836 7.32895 1.37927 4.97771 3.09332 3.22799C4.80737 1.47828 7.13832 0.46915 9.58714 0.416661C9.72548 0.410828 9.86381 0.408328 10.0038 0.408328C11.2606 0.401511 12.5063 0.643413 13.6692 1.1201C14.832 1.59679 15.8891 2.29884 16.7795 3.18582C17.6699 4.0728 18.376 5.12718 18.8572 6.28823C19.3383 7.44927 19.585 8.69404 19.583 9.95083Z" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.58789 0.416672C4.58789 5.83334 4.58789 12.9 9.58789 19.5667" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.4209 0.416672C15.4209 5.83334 15.4209 12.8975 10.4209 19.5642" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M0.418945 9.57001H19.5831" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="icon-world-mask">
        <rect width="20" height="20" :fill="stroke" />
      </clipPath>
      </defs>
    </svg>
  `,
};
