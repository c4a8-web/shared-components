export default {
  tagName: 'feature-list',
  computed: {
    classList() {
      return ['feature-list container space-2 vue-component'];
    },
    defaultItems() {
      const items = [];

      for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        const icon = item.icon ? item.icon : 'check';
        const color = item.color ? item.color : 'var(--color-blue-jeans)';
        const classes = item.classes ? item.classes : icon === 'check' ? 'icon--has-background' : '';
        const circle = item.circle;
        const size = 'medium';
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
      }
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
        <template v-for="item in defaultItems">
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
