<template>
  <template v-if="showCompoent">
    <SharedContentList :data-list="postsArray" :query="query" v-slot="{ list }">
      list: {{ list.length }}
      <template v-if="list">
        <markdown-files :list="list" v-slot="{ files }" :hide-data="hideData" :query="query" :limit="limit">
          <div :class="classList" ref="root" v-if="updateFiles(files)">
            <div class="blog-recent__bg" :style="{ 'background-color': bgColor }" v-if="skinClass !== ''"></div>
            <wrapper :hideContainer="hiddenContainer">
              <div class="row" v-if="headline">
                <div
                  class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom"
                  data-utility-animation-step="1"
                >
                  <headline :level="headlineLevelValue" :classes="headlineClassesValue">{{ headline }}</headline>
                  <span v-if="subline" :class="sublineClassesValue">{{ subline }}</span>
                </div>
              </div>
              <div :class="blogRecentContainerClass" data-utility-animation-step="1" ref="container">
                <template v-for="(post, index) in files">
                  <div :class="itemClass" v-if="index <= limit" v-bind:key="index">
                    <card
                      v-bind="post"
                      :url="postUrl(post)"
                      :blog-title-pic="blogTitleUrl(post)"
                      :youtube-url="post.youtubeUrl"
                      :date="post.date"
                      :author="post.author"
                      :target="target(post)"
                      :event="event(post)"
                      :dataAuthors="dataAuthors"
                      :external-language="post.externalLanguage"
                      :excerpt="excerpt(post)"
                    />
                  </div>
                </template>
              </div>
              <div class="blog-recent__cta-row row col-lg-12" v-if="cta">
                <cta
                  :text="cta?.text"
                  :button="cta?.button"
                  :target="cta?.target"
                  :width="cta?.width"
                  :href="cta?.href"
                  :external="cta?.external"
                />
              </div>
            </wrapper>
          </div>
        </markdown-files>
      </template>
    </SharedContentList>
  </template>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import StickyScroller from '../utils/sticky-scroller.js';
import UtilityAnimation from '../utils/utility-animation.js';
import MarkdownFiles from './markdown-files.vue';

export default {
  components: { MarkdownFiles },
  tagName: 'blog-recent',
  data() {
    return {
      hideData: ['tags'],
      filesValue: [],
    };
  },
  computed: {
    classList() {
      return [
        'blog-recent utility-animation utility-animation--percentage-offset',
        `${this.hasBackground}`,
        `${this.skinClass}`,
        this.hideContainer === true ? '' : this.getSpacing,
        this.sticky === true ? StickyScroller.rootSelector.substring(1) : '',
        'vue-component',
      ];
    },
    showCompoent() {
      return this.postsArray.length > 0 || this.query;
    },
    query() {
      let query = {};

      query.limit = this.limit;
      query.sort = [{ moment: this.reversed ? 1 : -1 }];
      query.reversed = this.reversed;

      if (this.combine === true) {
        query.where = { _path: /^\/(posts|events|casestudies)\// };
        query.path = '/';
        query.limit = null;
        query.limitEvents = this.limitEvents;
      } else {
        if (this.events === true) {
          query.path = '/events';
        } else if (this.caseStudies === true) {
          query.path = '/casestudies';
        } else {
          query.path = '/posts';
        }
      }

      return query;
    },
    getSpacing() {
      return this.spacing ? this.spacing : '';
    },
    hasBackground() {
      return this.bgColor ? State.HAS_BACKGROUND : '';
    },
    blogRecentContainerClass() {
      return [
        'blog-recent__container fade-in-bottom',
        this.slider === true ? 'js-slick-carousel' : 'row mb-3',
        'vue-component',
      ];
    },
    hiddenContainer() {
      return this.slider === false ? this.hideContainer : false;
    },
    skinClass() {
      return `${this.slider === true ? 'has-slider' : ''}`;
    },
    itemClass() {
      return `${this.slider === true ? 'mb-6 mb-lg-0 blog-recent__slide' : 'col-sm-6 col-lg-4 mb-3 mb-sm-8'}`;
    },
    postsArray() {
      return typeof this.posts === 'string' ? JSON.parse(this.posts) : this.posts;
    },
    carouselOptions() {
      const obj = {
        rows: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.filesValue?.length > 3 ? true : false,
        centerMode: false,
        infinite: false,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: '30px',
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.filesValue?.length > 2 ? true : false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.filesValue?.length > 1 ? true : false,
            },
          },
        ],
      };

      return { ...obj, ...this.sliderOptions };
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      const defaultHeadlineClasses = 'h2-font-size';

      return this.headlineClasses
        ? Tools.hasFontSizeClass(this.headlineClasses)
          ? this.headlineClasses
          : `${defaultHeadlineClasses} ${this.headlineClasses}`
        : defaultHeadlineClasses;
    },
    sublineClassesValue() {
      return `blog-recent__subline ${this.sublineClasses ? this.sublineClasses : 'font-size-2'}`;
    },
    imgUrl() {
      const config = Tools.getConfig();

      return config.public?.blogImagePath || 'blog/heads/';
    },
  },
  watch: {
    filesValue(newValue) {
      if (newValue.length > 0) {
        this.$nextTick(() => {
          this.init();
        });
      }
    },
  },
  methods: {
    init() {
      Tools.initSlickSlider(this.$refs.container, this.carouselOptions);

      if (!this.$refs.root) return;

      if (this.sticky) {
        StickyScroller.init([this.$refs.root]);
      }

      UtilityAnimation.init([this.$refs.root]);
    },
    event(post) {
      return post.layout === 'post' ? false : true;
    },
    blogTitleUrl(post) {
      if (post.layout === 'casestudies') {
        return post.hero?.v2 ? post.hero.shape.img : post.hero.background.img;
      } else if (post.image?.img) {
        return post.image.img;
      } else {
        return this.imgUrl + post.blogtitlepic;
      }
    },
    target(post) {
      return post.external || post.cta?.external ? '_blank' : '_self';
    },
    postUrl(post) {
      return post?.cta?.href || post.url;
    },
    excerpt(post) {
      return post.excerpt || post.hero?.subline;
    },
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    bgColor: {
      type: String,
      default: 'var(--color-blue-light)',
    },
    dataAuthors: Object,
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    posts: {
      type: [Array, String],
      default: [],
    },
    cta: {
      default: null,
    },
    hideContainer: {
      default: false,
    },
    limitEvents: Number,
    limit: {
      type: Number,
      default: 3,
    },
    slider: {
      default: null,
    },
    sliderOptions: Object,
    sticky: {
      default: null,
    },
    events: Boolean,
    combine: Boolean,
    caseStudies: Boolean,
    reversed: Boolean,
  },
};
</script>
