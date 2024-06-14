import Tools from '../tools.js';
import StickyScroller from '../sticky-scroller.js';

export default {
  tagName: 'hero',
  computed: {
    classList() {
      return [
        'hero vue-component',
        this.isLight ? 'is-light' : '',
        this.fullscreen ? 'hero--fullscreen' : '',
        this.animation ? 'hero--animation' : '',
        this.hasStickyScroller ? StickyScroller.getRootClass() : '',
      ];
    },
    contentClassList() {
      return ['hero__content', this.spacing ? this.spacing : 'py-8 py-lg-10'];
    },
    style() {
      return [this.bgColor ? `--hero-background-color: ${this.bgColor};` : ''];
    },
    cta() {
      return this.heroJson ? this.heroJson.cta : null;
    },
    isLight() {
      return this.heroJson ? this.heroJson.light : false;
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
    hasStickyScroller() {
      return this.heroJson ? this.heroJson.sticky : false;
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
