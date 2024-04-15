import Tools from '../tools.js';

export default {
  tagName: 'hero',
  computed: {
    classList() {
      return ['hero vue-component', this.isLight ? 'is-light' : ''];
    },
    isLight() {
      return this.heroJson ? this.heroJson.isLight : false;
    },
    bgColor() {
      return this.heroJson ? this.heroJson.bgColor : null;
    },
    style() {
      return [this.bgColor ? `--hero-background-color: ${this.bgColor};` : ''];
    },
    heroJson() {
      return Tools.getJSON(this.hero);
    },
  },
  methods: {},
  props: {
    hero: Object,
  },
  template: `
    <div :class="classList" :style="style">
      <div class="hero__container container">
        <main class="hero__content row">
          isch bin ein held
        </main>
      </div>
    </div>
  `,
};
