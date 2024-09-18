import Tools from "../assets/js/tools.js";
import State from "../assets/js/state.js";
import StickyScroller from "../assets/js/sticky-scroller.js";

export default {
  tagName: "blog-recent",
  computed: {
    classList() {
      return [
        "blog-recent utility-animation utility-animation--percentage-offset",
        `${this.hasBackground}`,
        `${this.skinClass}`,
        `${Tools.isTrue(this.hideContainer) === true ? "" : this.getSpacing}`,
        `${Tools.isTrue(this.sticky) === true ? StickyScroller.rootSelector.substring(1) : ""}`,
        "vue-component",
      ];
    },
    getSpacing() {
      return this.spacing ? this.spacing : "";
    },
    hasBackground() {
      return this.bgColor ? State.HAS_BACKGROUND : "";
    },
    blogRecentContainerClass() {
      return [
        "blog-recent__container fade-in-bottom",
        `${Tools.isTrue(this.slider) === true ? "js-slick-carousel" : "row mb-3"}`,
        "vue-component",
      ];
    },
    hiddenContainer() {
      return Tools.isTrue(this.slider) === false
        ? Tools.isTrue(this.hideContainer)
        : false;
    },
    skinClass() {
      return `${Tools.isTrue(this.slider) === true ? "has-slider" : ""}`;
    },
    itemClass() {
      return `${
        Tools.isTrue(this.slider) === true
          ? "mb-6 mb-lg-0 blog-recent__slide"
          : "col-sm-6 col-lg-4 mb-3 mb-sm-8"
      }`;
    },
    postsArray() {
      return this.posts ? JSON.parse(this.posts) : [];
    },
    ctaParse() {
      return this.cta ? JSON.parse(this.cta) : null;
    },
    caseStudies() {
      return Tools.isTrue(this.caseStudies) === true ? true : false;
    },
    carouselOptions() {
      const obj = {
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.postsArray.length > 3 ? true : false,
        centerMode: false,
        dotsClass: "slick-pagination is-default",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: "30px",
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.postsArray.length > 2 ? true : false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: "20px",
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.postsArray.length > 1 ? true : false,
            },
          },
        ],
      };
      return JSON.stringify(obj);
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h3";
    },
    headlineClassesValue() {
      const defaultHeadlineClasses = "h2-font-size";

      return this.headlineClasses
        ? Tools.hasFontSizeClass(this.headlineClasses)
          ? this.headlineClasses
          : `${defaultHeadlineClasses} ${this.headlineClasses}`
        : defaultHeadlineClasses;
    },
    sublineClassesValue() {
      return `blog-recent__subline ${this.sublineClasses ? this.sublineClasses : "font-size-2"}`;
    },
  },
  methods: {
    event(post) {
      return post.layout === "post" ? false : true;
    },
    isTrue(value) {
      return Tools.isTrue(value);
    },
    blogTitleUrl(post) {
      return post.layout === "casestudies"
        ? post.blogtitlepic
        : this.imgUrl + post.blogtitlepic;
    },
    target(post) {
      return post.external ? "_blank" : "_self";
    },
  },
  props: {
    bgColor: String,
    dataAuthors: Object,
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    posts: String,
    cta: {
      default: null,
    },
    hideContainer: {
      default: false,
    },
    imgUrl: {
      default: null,
    },
    limit: {
      default: null,
    },
    slider: {
      default: null,
    },
    sticky: {
      default: null,
    },
  },
  template: `
    <template v-if="postsArray.length > 0">
      <div :class="classList">
        <div class="blog-recent__bg" :style="{ 'background-color' : bgColor  }" v-if="skinClass !== ''"></div>
        <wrapper :hideContainer="hiddenContainer">
          <div class="row" v-if="headline">
            <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom" data-utility-animation-step="1">
              <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
              <span v-if="subline" :class="sublineClassesValue" >{{ subline }}</span>
            </div>
          </div>
          <div :class="blogRecentContainerClass" :data-hs-slick-carousel-options="carouselOptions" data-utility-animation-step="1">
            <template v-for="(post, index) in postsArray">
              <div :class="itemClass" v-if="index <= limit">
                <card :url="post.url" :title="post.title" :blog-title-pic="blogTitleUrl(post)" :youtube-url="post.youtubeUrl" :excerpt="post.excerpt" :date="post.date" :author="post.author" :target="target(post)" :event="event(post)" :dataAuthors="dataAuthors" :external-language="post.externalLanguage">
              </div>
            </template>
          </div>
          <div class="blog-recent__cta-row row col-lg-12" v-if="ctaParse">
            <cta :text="ctaParse?.text" :button="ctaParse?.button" :target="ctaParse?.target" :width="ctaParse?.width" :href="ctaParse?.href" :external="ctaParse?.external" />
          </div>
        </wrapper>
      </div>
    </template>
  `,
};
