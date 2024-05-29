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
    <svg v-bind="settings" :style="style" fill="none" viewBox="0 0 22 24">
      <g clip-path="url(#icon-world-mask)">
        <path d="M20.583 13.9508C20.5836 15.2135 20.3356 16.4639 19.853 17.6307C19.3704 18.7975 18.6627 19.8578 17.7703 20.7511C16.878 21.6444 15.8184 22.3532 14.6521 22.837C13.4858 23.3208 12.2356 23.5702 10.973 23.5708C8.41074 23.5283 5.96901 22.4755 4.17921 20.6415C2.38941 18.8075 1.3964 16.3409 1.41631 13.7783C1.41836 11.329 2.37927 8.97772 4.09332 7.22801C5.80737 5.47829 8.13832 4.46917 10.5871 4.41668C10.7255 4.41084 10.8638 4.40834 11.0038 4.40834C12.2606 4.40153 13.5063 4.64343 14.6692 5.12012C15.832 5.5968 16.8891 6.29886 17.7795 7.18584C18.6699 8.07282 19.376 9.1272 19.8572 10.2882C20.3383 11.4493 20.585 12.6941 20.583 13.9508Z" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5879 4.41669C5.58789 9.83335 5.58789 16.9 10.5879 23.5667" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.4209 4.41669C16.4209 9.83335 16.4209 16.8975 11.4209 23.5642" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.41895 13.57H20.5831" :stroke="stroke" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="icon-world-mask">
          <rect width="20" height="20" :fill="stroke" transform="translate(1 4)"/>
        </clipPath>
      </defs>
    </svg>
  `,
};
