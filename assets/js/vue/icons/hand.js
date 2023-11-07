export default {
  tagName: 'hand',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
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
  <svg v-bind="settings" :style="style" viewBox="0 0 295 304" fill="none">
    <path d="M50.5707 135.135C42.6425 127.207 29.4289 127.207 20.1793 135.135C12.2511 143.063 12.2511 156.277 20.1793 165.527L133.816 279.164C147.03 292.378 165.529 300.306 185.35 300.306C205.17 300.306 223.669 292.378 236.883 279.164L265.953 250.094C285.774 230.274 295.023 201.204 289.738 173.455L271.239 82.281C269.917 73.0314 263.31 66.4246 254.061 65.1032C242.168 62.4605 228.955 71.7101 227.633 83.6024L222.348 127.207L124.567 29.4264C116.639 21.4982 103.425 21.4982 94.1758 29.4264C86.2476 37.3546 86.2476 50.5682 94.1758 59.8178L80.9621 45.2828C73.0339 37.3546 59.8203 37.3546 50.5707 45.2828C42.6425 53.211 42.6425 66.4246 50.5707 75.6742L65.1057 90.2092C57.1775 82.281 43.9639 82.281 34.7143 90.2092C26.7861 98.1374 26.7861 111.351 34.7143 120.601L50.5707 135.135Z" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M94.1547 59.7668L153.616 119.228" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M65.1072 90.2095L125.891 149.671" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M95.4982 180.062L50.5718 135.135" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M205.17 36.0347C210.456 36.0347 214.42 37.356 218.384 39.9988" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M211.778 3C226.313 3 239.527 8.28546 248.776 18.8564" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36.0364 240.846C36.0364 255.381 47.9287 267.273 62.4637 267.273" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 247.452C3 276.522 26.7846 300.307 55.8546 300.307" :stroke="stroke" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
};
