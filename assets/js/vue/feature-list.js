export default {
  tagName: 'feature-list',
  computed: {
    classList() {
      return ['feature-list container space-2 vue-component'];
    },
    itemsWithFallback() {
      const items = [];

      this.items.forEach((item) => {
        const icon = item.icon ? item.icon : 'check';
        const isCheck = icon === 'check';

        const color = isCheck ? 'var(--color-blue-jeans)' : item.color;
        const classes = isCheck ? 'icon--has-background' : item.classes;
        const circle = isCheck ? true : item.circle;
        const size = isCheck ? 'medium' : item.size;
        const bullet = item.bullet;

        const entry = {
          icon: icon,
          color: color,
          classes: classes,
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
              <icon class="mr-3" :icon="item.icon" :color="item.color" :classes="item.classes" :circle="item.circle" :size="item.size"></icon>
              <div class="media-body" v-html="item.bullet" />
            </div>
          </div>
        </template>
      </div>
    </div>
  `,
};
