import Tools from '../tools.js';
import StickyScroller from '../sticky-scroller.js';

// TODO add back button
// TODO add cta list

export default {
  tagName: 'hero',
  computed: {
    classList() {
      return [
        'hero vue-component',
        this.isLight ? 'is-light' : '',
        this.isLightOverline ? 'is-light-overline' : '',
        this.fullscreen ? 'hero--fullscreen' : '',
        this.animation ? 'hero--animation' : '',
        this.hasStickyScroller ? StickyScroller.getRootClass() : '',
      ];
    },
    contentClassList() {
      return ['hero__content', this.spacing ? this.spacing : this.animation ? '' : 'py-10 py-lg-12'];
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
    subline() {
      return this.heroJson ? this.heroJson.subline : null;
    },
    headline() {
      return this.heroJson ? this.heroJson.headline : null;
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
              <p class="hero__subline" v-if="subline" v-html="subline"></p>
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
