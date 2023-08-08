export default {
  tagName: 'feature-list',
  computed: {
    classList() {
      return ['feature-list container space-2 vue-component'];
    },
  },
  methods: {},
  props: {
    items: {
      default: null,
    },
  },
  template: `
    <div :class="classList">
      <div class="row justify-content-lg-center align-items-md-center">
        <template v-for="item in items">
          <div class="col-lg-10">
            <div class="media text-body mb-3">
              <icon class="mr-3" :icon="item.icon" :size="item.iconSize"></icon>
              <div class="media-body" v-html="item.bullet" />
            </div>
          </div>
        </template>
      </div>
    </div>
  `,
};
