<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.375 6.34943C12.3754 7.13995 12.2201 7.92281 11.918 8.65332C11.6158 9.38382 11.1728 10.0477 10.6141 10.6069C10.0554 11.1662 9.392 11.61 8.66181 11.9129C7.93162 12.2158 7.14891 12.3719 6.35839 12.3723C4.75424 12.3456 3.22553 11.6865 2.10497 10.5383C0.984417 9.39008 0.362719 7.84576 0.375184 6.24143C0.376468 4.70793 0.978073 3.23587 2.0512 2.14041C3.12433 1.04496 4.58368 0.413167 6.11683 0.380305C6.20344 0.376653 6.29005 0.375088 6.3777 0.375088C7.16453 0.37082 7.94444 0.522269 8.67249 0.820712C9.40055 1.11916 10.0624 1.55869 10.6198 2.11401C11.1773 2.66933 11.6193 3.32945 11.9206 4.05636C12.2218 4.78326 12.3762 5.56258 12.375 6.34943Z"
      :stroke="stroke"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.11683 0.380859C2.98645 3.77211 2.98645 8.19639 6.11683 12.3702"
      :stroke="stroke"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.63855 0.380859C9.76893 3.77211 9.76893 8.19482 6.63855 12.3687"
      :stroke="stroke"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.35913 2.98047H11.3419"
      :stroke="stroke"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.376709 6.11133H12.375"
      :stroke="stroke"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.1499 9.24219H11.6367"
      :stroke="stroke"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  tagName: 'world-detailed',
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
};
</script>
