export default {
  tagName: 'fab-hint',
  // data() {
  //   return {
  //   };
  // },
  computed: {
    classList() {
      return ['fab-hint vue-component'];
    },
    stickyOffsetBottom() {
      // TODO check for back button
      return 20;
    },
  },
  // methods: {},
  props: {
    author: {
      default: null,
    },
  },
  template: `
    <div :class="classList">
      <div class="fab-hint__start"></div>
      <div class="fab-hint__wrapper js-sticky-block"
        data-hs-sticky-block-options='{
          "parentSelector": ".fab-hint",
          "breakpoint": "xs",
          "startPoint": ".fab-hint__start",
          "endPoint": "9999999",
          "stickyOffsetTop": "0",
          "stickyOffsetBottom": 20
        }'
      >
        <div class="fab-hint__icon">
          <icon icon="image-credits" size="large" />
        </div>
      </div>
      <div class="fab-hint__end"></div>
    </div>
  `,
};
