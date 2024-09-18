import Tools from "../assets/js/tools.js";
import StickyScroller from "../assets/js/sticky-scroller.js";

const heroPattern = {
  tagName: "hero-pattern",
  template: `
    <svg width="1393" height="696" viewBox="0 0 1393 696" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M616 13L1194 103L1242 606L636 696L616 13Z" fill="#D1D9DD" />
      <g filter="url(#filter0_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7762 72.1904L42.6441 74.2293L56.4455 97.8893L18.8934 106.099L11.7762 72.1904Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter1_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M392.512 537.332L490.251 496.165L459 537L426.691 580.548L392.512 537.332Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter2_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1013.26 51.2925L989.911 103.324L987.275 75.8276L984.063 46.8784L1013.26 51.2925Z" fill="#D1D9DD"/>
      </g>
      <g filter="url(#filter3_f)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1264.1 60.4603L1342.54 9.19567L1393.77 77.3657L1332.46 100.181L1264.1 60.4603Z" fill="#D1D9DD"/>
      </g>
      <defs>
        <filter id="filter0_f" x="0.90324" y="61.3173" width="66.4156" height="55.6548" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="5.43656" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter1_f" x="389.793" y="493.447" width="103.176" height="89.8188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter2_f" x="975.909" y="38.7236" width="45.5049" height="72.7549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="4.07742" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
        <filter id="filter3_f" x="1261.38" y="6.47752" width="135.108" height="96.4219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="1.35914" result="effect1_foregroundBlur"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  `,
};

export default {
  tagName: "hero",
  components: {
    "hero-pattern": heroPattern,
  },
  data() {
    return {
      introHeight: null,
    };
  },
  mounted() {
    this.setIntroStyle();
  },
  methods: {
    setIntroStyle() {
      if (!this.isCentered) return;

      const intro = this.$refs["intro"];

      if (!intro) return;

      this.introHeight = intro.offsetHeight;

      intro.style.height = `0`;
    },
    handleLetterSwitcherEnded() {
      const intro = this.$refs["intro"];

      if (!intro) return;

      intro.style.height = `${this.introHeight}px`;
      intro.style.opacity = 1;
    },
  },
  computed: {
    classList() {
      return [
        "hero vue-component",
        this.variant,
        this.isLight ? "is-light" : "",
        this.isLightOverline ? "is-light-overline" : "",
        this.shapePosition,
        this.fullscreen ? "hero--fullscreen" : "",
        this.shapeFullscreen ? "hero--shape-fullscreen" : "",
        this.animation ? "hero--animation" : "",
        this.textShadow ? "hero--text-shadow" : "",
        this.bgWidth ? "hero--bg-width" : "",
        this.isCentered ? "hero--centered" : "",
        this.shapeInContent ? "hero--shape-in-content" : "",
        this.hasStickyScroller ? StickyScroller.getRootClass() : "",
      ];
    },
    contentClassList() {
      return [
        "hero__content",
        this.spacing ? this.spacing : this.animation ? "" : "py-10 py-lg-11",
      ];
    },
    style() {
      return [
        this.bgColor
          ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${Tools.hexToRgb(this.bgColor)}`
          : "",
        this.bgWidth ? `--hero-background-width: ${this.bgWidth}%;` : "",
        this.overlineBgColor
          ? `--hero-overline-background-color: ${this.overlineBgColor};`
          : "",
      ];
    },
    cta() {
      return this.heroJson ? this.heroJson.cta : null;
    },
    isLight() {
      return this.heroJson ? this.heroJson.light : false;
    },
    isLightOverline() {
      return this.heroJson && typeof this.heroJson.lightOverline !== "undefined"
        ? this.heroJson.lightOverline
        : this.isLight;
    },
    background() {
      return this.heroJson && this.heroJson.background
        ? this.heroJson.background
        : null;
    },
    bgColor() {
      return this.heroJson ? this.heroJson.bgColor : null;
    },
    bgWidth() {
      return this.heroJson ? this.heroJson.bgWidth : null;
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
    headlineClasses() {
      return this.heroJson ? this.heroJson.headlineClasses : null;
    },
    headlineClassList() {
      return ["hero__headline", this.headlineClasses];
    },
    textShadow() {
      return this.heroJson ? this.heroJson.textShadow : null;
    },
    level() {
      return this.heroJson && this.heroJson.level ? this.heroJson.level : "h1";
    },
    animation() {
      return this.heroJson ? this.heroJson.animation : null;
    },
    letterSwitcher() {
      return this.heroJson ? this.heroJson.letterSwitcher : null;
    },
    icon() {
      return this.heroJson && this.background ? this.background.icon : null;
    },
    fullscreen() {
      return this.heroJson && this.heroJson.fullscreen
        ? this.heroJson.fullscreen
        : false;
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
    lottieSettings() {
      if (!this.shape || !this.shape.lottie) return;

      const height = this.shapeFullscreen ? "100%" : "auto";

      return {
        ...this.shape.lottieSettings,
        width: "auto",
        height,
      };
    },
    lottieFileData() {
      if (!this.shape) return null;

      return this.shape.lottie
        ? this.shape.lottie
        : this.lottieData
          ? Tools.getJSON(this.lottieData)
          : null;
    },
    showShape() {
      return this.shape.img || this.shape.lottie || this.lottieFileData;
    },
    shape() {
      return this.heroJson && this.heroJson.shape ? this.heroJson.shape : null;
    },
    shapeFullscreen() {
      return this.shape && this.shape.fullscreen
        ? this.shape.fullscreen
        : false;
    },
    shapeBottom() {
      return (this.shape && this.shape.bottom) || null;
    },
    shapeTop() {
      return (this.shape && this.shape.top) || null;
    },
    shapePosition() {
      if (!this.shape) return null;

      if (this.shapeFullscreen) return "hero--shape-top";

      return this.shapeTop
        ? "hero--shape-top"
        : this.shapeBottom
          ? "hero--shape-bottom"
          : "hero--shape-center";
    },
    shapeInContent() {
      return this.shape && this.shape.inContent ? this.shape.inContent : false;
    },
    variant() {
      return this.heroJson && this.heroJson.variant
        ? this.heroJson.variant
        : null;
    },
    pattern() {
      return this.heroJson && this.heroJson.pattern
        ? this.heroJson.pattern
        : null;
    },
    ctaList() {
      if (
        !this.heroJson ||
        this.animation ||
        (!this.heroJson.cta && !this.heroJson.ctaList)
      )
        return null;

      return this.heroJson.cta ? [this.heroJson.cta] : this.heroJson.ctaList;
    },
    showShapeContainer() {
      return (
        this.bgWidth || this.isSmall || (this.showShape && this.shapeInContent)
      );
    },
    isCentered() {
      return this.letterSwitcher ? true : false;
    },
    isSmall() {
      return this.variant === "hero--small";
    },
    imgSrcSets() {
      if (!this.bgWidth) return null;

      return "heroStudy";
    },
    badges() {
      return this.heroJson && this.heroJson.badges
        ? this.heroJson.badges
        : false;
    },
    hasBack() {
      return this.heroJson && this.heroJson.back ? this.heroJson.back : false;
    },
    heroJson() {
      return Tools.getJSON(this.hero);
    },
  },
  props: {
    hero: Object,
    lottieData: String,
  },
  template: `
    <div :class="classList" :style="style">
      <hero-pattern
        class="hero__pattern"
        v-if="pattern"
      />
      <v-img
        v-if="img"
        class="hero__background-img" :cloudinary="background.cloudinary" :img="img">
      >
      </v-img>
      <div class="hero__container container">
        <main :class="contentClassList">
          <div class="hero__back-row row" v-if="hasBack">
            <div class="hero__back-col col">
              <div class="hero__back back">
                <icon
                  icon="arrow"
                  classes="hero__back-icon"
                  direction="left"
                  :hover="true"
                  :circle="true">
                </icon>
              </div>
            </div>
          </div>
          <letter-switcher
            v-if="letterSwitcher"
            v-bind="letterSwitcher"
            class="hero__letter-switcher"
            @ended="handleLetterSwitcherEnded"
          >
          </letter-switcher>
          <div class="hero__intro row" v-if="overline || headline || subline" ref="intro">
            <div class="hero__intro-col col">
              <span class="hero__overline" v-if="overline">{{ overline }}</span>
              <headline :class="headlineClassList" v-if="headline" :level="level" v-html="headline"></headline>
              <div class="hero__content-shape" v-if="shapeInContent">
                <v-img
                  v-if="showShape"
                  :cloudinary="shape.cloudinary"
                  :img="shape.img"
                  :alt="shape.alt"
                  :lottie="lottieFileData"
                  :lottie-settings="lottieSettings"
                  :img-src-sets="imgSrcSets"
                >
                </v-img>
              </div>
              <p class="hero__subline lead" v-if="subline" v-html="subline"></p>
              <cta-list
                v-if="ctaList"
                classes="hero__cta-list"
                :list="ctaList"
              >
              </cta-list>
              <div class="hero__badges" v-if="badges">
                <div class="hero__badge-container" v-for="badge in badges">
                  <v-img
                    cloudinary=true
                    v-bind="badge"
                    class="hero__badge-image"
                  ></v-img>
                </div>
              </div>
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
      <wrapper class="hero__background-shape-wrapper" v-if="shape" :hideContainer="!showShapeContainer">
        <wrapper class="hero__background-shape-content" :hideContainer="!showShapeContainer" :hideContainerClass="true">
          <div class="hero__background-shape">
            <v-img
              v-if="showShape"
              :cloudinary="shape.cloudinary"
              :img="shape.img"
              :alt="shape.alt"
              :lottie="lottieFileData"
              :lottie-settings="lottieSettings"
              :img-src-sets="imgSrcSets"
            >
            </v-img>
          </div>
        </wrapper>
      </wrapper>
    </div>
  `,
};
