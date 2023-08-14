export default {
  tagName: 'feature-list',
  data() {
    return {
      defaultIcon: 'check',
    };
  },
  computed: {
    classList() {
      return ['feature-list container space-2 vue-component'];
    },
    itemsWithFallback() {
      const items = [];

      this.items.forEach((item) => {
        const icon = item.icon ? item.icon : this.defaultIcon;
        const isDefaultIcon = icon === this.defaultIcon;

        const color = isDefaultIcon ? 'var(--color-blue-jeans)' : item.color;
        const hasBackground = isDefaultIcon;
        const circle = isDefaultIcon ? true : item.circle;
        const size = isDefaultIcon ? 'medium' : item.size;
        const bullet = item.bullet;

        const entry = {
          icon: icon,
          color: color,
          hasBackground: hasBackground,
          circle: circle,
          size: size,
          bullet: bullet,
        };

        items.push(entry);
      });

      return items;
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
        <template v-for="item in itemsWithFallback">
          <div class="col-lg-10">
            <div class="media text-body mb-3">
              <icon class="mr-3" v-bind="item"></icon>
              <div class="media-body" v-html="item.bullet" />
            </div>
          </div>
        </template>
      </div>
    </div>
  `,
};
