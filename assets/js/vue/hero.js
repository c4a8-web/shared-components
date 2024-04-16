import Tools from '../tools.js';

export default {
  tagName: 'hero',
  computed: {
    classList() {
      return ['hero vue-component', this.isLight ? 'is-light' : '', this.fullscreen ? 'hero--fullscreen' : ''];
    },
    contentClassList() {
      return ['hero__content', this.spacing ? this.spacing : 'pt-4 pt-lg-5'];
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
    icon() {
      return this.heroJson && this.heroJson.background ? this.heroJson.background.icon : null;
    },
    fullscreen() {
      return this.heroJson ? this.heroJson.fullscreen : false;
    },
    spacing() {
      return this.heroJson && this.heroJson.background ? this.heroJson.background.spacing : null;
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
        <main :class="contentClassList">
          <div class="hero__intro row" v-if="overline || headline">
            <div class="hero__intro-col col">
              <span class="hero__overline" v-if="overline">{{ overline }}</span>
              <headline class="hero__headline" v-if="headline">{{ headline }}</headline>
            </div>
          </div>
          <text-icon-animation
            v-if="animation"
            :animation="animation"
            :fixed="fixed"
            :cta="cta"
            :icon="icon"
            classes="hero__animation"
          >
          </text-icon-animation>
        </main>
      </div>
    </div>
  `,
};
