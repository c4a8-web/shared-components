import Tools from '../tools.js';

export default {
  tagName: 'blog-recent',
  computed: {
    classList() {
      return [
        'blog-recent',
        `${Tools.isTrue(this.slider) === true ? 'has-slider': ''}`,
        `${Tools.isTrue(this.hideContainer) === true ? '' : 'mt-10'}`,
        'vue-component',
      ];
    },
    blogRecentContainerClass() {
      return [
        'blog-recent__container',
        `${Tools.isTrue(this.slider) === true ? 'js-slick-carousel' : 'row mb-3'}`,
        'vue-component',
      ];
    },
    skinClass() {
      return `${Tools.isTrue(this.slider) === true ? 'has-slider': ''}`;
    },
    itemClass() {
      return `${Tools.isTrue(this.slider) === true ? 'mb-6 mb-lg-0 blog-recent__slide' : 'col-sm-6 col-lg-4 mb-3 mb-sm-8'}`;
    },
    postsArray() {
      return JSON.parse(this.posts);
    },
    ctaParse() {
      return JSON.parse(this.recentCta);
    },
    carouselOptions() {
      const obj = {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "prevArrow": "<span class=\"slick__arrow-left rounded-circle\"></span>",
        "nextArrow": "<span class=\"slick__arrow-right rounded-circle\"></span>",
        "dots": this.postsArray.length > 3 ? true : false,
        "centerMode": false,
        "dotsClass": "slick-pagination is-default",
        "responsive": [{
          "breakpoint": 1200,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3
            }
          }, {
          "breakpoint": 992,
          "settings": {
            "centerMode": true,
            "infinite": true,
            "centerPadding": "30px",
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "dots": this.postsArray.length > 2 ? true : false,
            }
          }, {
          "breakpoint": 768,
          "settings": {
            "centerMode": true,
            "infinite": false,
            "centerPadding": "30px",
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": this.postsArray.length > 1 ? true : false,
            }
          }, {
            "breakpoint": 576,
            "settings": {
              "centerMode": true,
              "infinite": false,
              "centerPadding": "20px",
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "dots": this.postsArray.length > 1 ? true : false,
          }
        }]
      }
      return JSON.stringify(obj);
    }
  },
  methods: {
    imgUrlExist(post, ctalink) {
      if (/youtube/.test(ctalink)) {
        return Tools.getYoutubeThumbnail(ctalink);
      } else {
        return post.blogtitlepic ? this.imgUrl + post.blogtitlepic : false;
      }
    },
    target(post) {
      return post.layout === 'post' ? 'false' : '_blank';
    },
    event(post) {
      return post.layout === 'post' ? 'false' : 'true';
    },
    getValue(value) {
      return `${Tools.isTrue(value) === true ? true : false}`;
    }
  },
  props: {
    hideContainer: {
      default: null,
    },
    recentHeadline: String,
    bgColor: String,
    posts: String,
    recentLimit: {
      default: null,
    },
    slider: {
      default: null,
    },
    imgUrl: {
      default: null,
    },
    recentCta: {
      default: null,
    },
  },
  template: `
    <template v-if="postsArray.length > 0">
      <div :class="classList">
       <div class="blog-recent__bg" :style="{ 'background-color' : bgColor  }" v-if="skinClass !== ''"></div>
      <div class="container" v-if="getValue(this.hideContainer)">
        <div class="row" v-if="getValue(this.recentHeadline)">
          <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6">
            <headline level="h3" :text="recentHeadline" classes="h2-font-size" >
          </div>
        </div>
        <div :class="blogRecentContainerClass" :data-hs-slick-carousel-options="carouselOptions" >
          <template v-for="(post, index) in postsArray">
            <div :class="itemClass" v-if="index <= recentLimit">
              <card :title="post.title" :blog-title-pic="post.blogtitlepic" :youtube-url="post.youtubeUrl" :excerpt="post.excerpt" :date="post.date" :author="post.author" :target="target(post)" :event="event(post)">
            </div>
          </template>
        </div>
        <div class="blog-recent__cta-row row col-lg-12" v-if="recentCta">
          <cta :text="ctaParse.text" :button="ctaParse.button" :width="ctaParse.width" :href="ctaParse.href" :external="ctaParse.external" />
        </div>
      </div>
      </div>
    </template>
  `,
}
