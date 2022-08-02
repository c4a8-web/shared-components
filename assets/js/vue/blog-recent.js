import Tools from '../tools.js';

export default {
  tagName: 'blog-recent',

  computed: {
    classList() {
      return [
        'blog-recent',
        `${Tools.isTrue(this.slider) === true ? 'has-slider': ''}`,
        `${Tools.isTrue(this.hideContainer) === true ? 'mt-10' : ''}`,
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

    hideContainerClass() {
      return `${Tools.isTrue(this.hideContainer) === true ? true : false}`;
    },

    recentHeadlineClass() {
      return `${Tools.isTrue(this.recentHeadline) === true ? true : false}`;
    },

    recentCtaClass() {
      return `${Tools.isTrue(this.recentCta) === true ? true : false}`;
    },

    skinClass() {
      return `${Tools.isTrue(this.slider) === true ? 'has-slider': ''}`;
    },

    containerClass() {
      return `${Tools.isTrue(this.slider) === true ? 'js-slick-carousel' : 'row mb-3'}`;
    },

    itemClass() {
      return `${Tools.isTrue(this.slider) === true ? 'mb-6 mb-lg-0 blog-recent__slide' : 'col-sm-6 col-lg-4 mb-3 mb-sm-8'}`;
    },


  },

  methods: {

  },

  props: {
    postSize: {
      default: null,
    },

    hideContainer: {
      default: null,
    },
    recentHeadline: {
      default: null,
    },

    bgColor: String,

    posts: {
      default: null,
    },
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
    <template v-if="postSize > 0">
      <div :class="classList">
        <div class="blog-recent__bg" :style="{ 'background-color' : bgColor  }" v-if="skinClass !== ''"></div>
      <div class="container" v-if="hideContainerClass">
        <div class="row" v-if="recentHeadlineClass">
          <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6">
            <headline level="h2" :text="recentHeadline">
          </div>
        </div>
        <div :class="blogRecentContainerClass"
          data-hs-slick-carousel-options='{
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "prevArrow": "<span class=\"slick__arrow-left rounded-circle\"></span>",
            "nextArrow": "<span class=\"slick__arrow-right rounded-circle\"></span>",
            "dots": {% if posts.size > 3 %}true{% else %}false{% endif %},
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
                "dots": {% if posts.size > 2 %}true{% else %}false{% endif %}
                }
              }, {
              "breakpoint": 768,
              "settings": {
                "centerMode": true,
                "infinite": false,
                "centerPadding": "30px",
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "dots": {% if posts.size > 1 %}true{% else %}false{% endif %}
                }
              }, {
                "breakpoint": 576,
                "settings": {
                  "centerMode": true,
                  "infinite": false,
                  "centerPadding": "20px",
                  "slidesToShow": 1,
                  "slidesToScroll": 1,
                  "dots": {% if posts.size > 1 %}true{% else %}false{% endif %}
              }
            }]
          }'
        >
        <template v-for="(post, index) in posts">
          <div :class="itemClass" v-if="index <= recentLimit">
            {{ imgUrl }}{{ post.title }}{{ index }}
            <card title="post.title" blog-title-pic="{{imgUrl}}">
          </div>
        </template>
      </div>
          <div class="blog-recent__cta-row row col-lg-12" v-if="recentCtaClass">
            <cta :text="recentCta.text" :button="true" :skin="recentCta.skin" :width="recentCta.width" :href="recentCta.href">
          </div>
      </div>


    </template>
  `,
}
