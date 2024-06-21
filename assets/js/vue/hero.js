import Tools from '../tools.js';
import StickyScroller from '../sticky-scroller.js';

// TODO add back button
// TODO add cta list
// TODO add shape + positions

export default {
  tagName: 'hero',
  computed: {
    classList() {
      return [
        'hero vue-component',
        this.variant,
        this.isLight ? 'is-light' : '',
        this.isLightOverline ? 'is-light-overline' : '',
        this.fullscreen ? 'hero--fullscreen' : '',
        this.animation ? 'hero--animation' : '',
        this.textShadow ? 'hero--text-shadow' : '',
        this.hasStickyScroller ? StickyScroller.getRootClass() : '',
      ];
    },
    contentClassList() {
      return ['hero__content', this.spacing ? this.spacing : this.animation ? '' : 'py-10 py-lg-11'];
    },
    style() {
      return [
        this.bgColor ? `--hero-background-color: ${this.bgColor};` : '',
        this.overlineBgColor ? `--hero-overline-background-color: ${this.overlineBgColor};` : '',
      ];
    },
    cta() {
      return this.heroJson ? this.heroJson.cta : null;
    },
    isLight() {
      return this.heroJson ? this.heroJson.light : false;
    },
    isLightOverline() {
      return this.heroJson && typeof this.heroJson.lightOverline !== 'undefined'
        ? this.heroJson.lightOverline
        : this.isLight;
    },
    background() {
      return this.heroJson && this.heroJson.background ? this.heroJson.background : null;
    },
    bgColor() {
      return this.heroJson ? this.heroJson.bgColor : null;
    },
    overline() {
      return this.heroJson ? this.heroJson.overline : null;
    },
    overlineBgColor() {
      return this.heroJson ? this.heroJson.overlineBgColor : null;
    },
    subline() {
      return this.heroJson ? this.heroJson.subline : null;
    },
    headline() {
      return this.heroJson ? this.heroJson.headline : null;
    },
    textShadow() {
      return this.heroJson ? this.heroJson.textShadow : null;
    },
    level() {
      return this.heroJson && this.heroJson.level ? this.heroJson.level : 'h1';
    },
    animation() {
      return this.heroJson ? this.heroJson.animation : null;
    },
    icon() {
      return this.heroJson && this.background ? this.background.icon : null;
    },
    fullscreen() {
      return this.heroJson ? this.heroJson.fullscreen : false;
    },
    spacing() {
      return this.heroJson && this.background ? this.background.spacing : null;
    },
    img() {
      return this.heroJson && this.background ? this.background.img : null;
    },
    hasStickyScroller() {
      return this.heroJson ? this.heroJson.sticky : false;
    },
    showShape() {
      return this.shape.img || this.shape.lottie;
    },
    shape() {
      return this.heroJson && this.heroJson.shape ? this.heroJson.shape : null;
    },
    variant() {
      return this.heroJson && this.heroJson.variant ? this.heroJson.variant : null;
    },
    heroJson() {
      return Tools.getJSON(this.hero);
    },
  },
  props: {
    hero: Object,
  },
  template: `
    <div :class="classList" :style="style">
      <v-img
        v-if="img"
        class="hero__background-img" :cloudinary="background.cloudinary" :img="img" aaaaapreset="eventThumb">
      >
      </v-img>
      <div class="hero__container container">
        <main :class="contentClassList">
          <div class="hero__intro row" v-if="overline || headline">
            <div class="hero__intro-col col">
              <span class="hero__overline" v-if="overline">{{ overline }}</span>
              <headline class="hero__headline" v-if="headline" :level="level">{{ headline }}</headline>
              <p class="hero__subline lead" v-if="subline" v-html="subline"></p>
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
          <div class="hero__background-shape" v-if="shape">
            <v-img
              v-if="showShape"
              :cloudinary="shape.cloudinary"
              :img="shape.img"
              :alt="shape.alt"
              :lottie="shape.lottie"
              :lottie-settings="shape.lottieSettings"
            >
            </v-img>
          </div>
        </main>
      </div>
    </div>
  `,
};
