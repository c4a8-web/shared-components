import Tools from '../tools.js';

export default {
  tagName: 'hero',
  computed: {
    classList() {
      return ['hero vue-component', this.isLight ? 'is-light' : ''];
    },
    style() {
      return [this.bgColor ? `--hero-background-color: ${this.bgColor};` : ''];
    },
    cta() {
      return this.heroJson ? this.heroJson.cta : null;
    },
    fixed() {
      return this.heroJson ? this.heroJson.fixed : false;
    },
    isLight() {
      return this.heroJson ? this.heroJson.isLight : false;
    },
    bgColor() {
      return this.heroJson ? this.heroJson.bgColor : null;
    },
    overline() {
      return this.heroJson ? this.heroJson.overline : null;
    },
    headline() {
      return this.heroJson ? this.heroJson.headline : null;
    },
    animation() {
      return this.heroJson ? this.heroJson.animation : null;
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
          <span class="hero__overline" v-if="overline">{{ overline }}</span>
          <headline class="hero__headline" v-if="headline">{{ headline }}</headline>
          <div class="hero__animation" v-if="animation">
            <text-icon-animation
              :animation="animation"
              :fixed="fixed"
              :cta="cta"
            >
            </text-icon-animation>
          </div>
        </main>
      </div>
    </div>
  `,
};
