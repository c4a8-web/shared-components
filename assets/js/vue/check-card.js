import Tools from '../tools.js';

// TODO rename component
export default {
  tagName: 'check-card',
  computed: {
    classList() {
      return ['check-card vue-component', this.hasProducts ? 'check-card--products' : null];
    },
    checkCardsContainerClass() {
      return ['check-card__container utility-animation fade-in-bottom js-slick-carousel slick--single-list'];
    },
    containerValue() {
      return `col-lg-12 col-md-10 ${this.spacing ? this.spacing : ''} mb-9`;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `h2-font-size utility-animation fade-in-bottom ${this.headlineClasses ? this.headlineClasses : ''} ${
        this.subline ? 'mb-10' : ''
      }`;
    },
    sublineClassesValue() {
      return `check-card__subline utility-animation fade-in-bottom e w-lg-65 ${
        this.sublineClasses ? this.sublineClasses : 'font-size-2'
      }`;
    },
    itemClass() {
      return `check-card__slide`;
    },
    hasProducts() {
      return this.checks[0]?.product;
    },
    carouselOptions() {
      const slidesToShowDesktop = this.hasProducts ? 2 : 3;

      const obj = {
        slidesToShow: slidesToShowDesktop,
        slidesToScroll: slidesToShowDesktop,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.checks.length > slidesToShowDesktop ? true : false,
        centerMode: false,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.checks.length > 2 ? true : false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: this.hasProducts ? '37px' : '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1 ? true : false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1 ? true : false,
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
              dots: this.checks.length > 1 ? true : false,
            },
          },
        ],
      };

      return JSON.stringify(obj);
    },
  },
  methods: {},
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    checks: {
      default: null,
    },
    products: {
      default: null,
    },
  },
  template: `
    <div :class="classList">
      <div class="container">
        <div class="row" v-if="headline">
          <div :class="containerValue">
            <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" data-utility-animation-step="1" />
            <div v-if="subline" :class="sublineClassesValue" v-html="subline" data-utility-animation-step="1"></div>
          </div>
        </div>
        <div :class="checkCardsContainerClass" :data-hs-slick-carousel-options="carouselOptions" data-utility-animation-step="1">
          <template v-for="(check, index) in checks">
            <div :class="itemClass">
              <template v-if="hasProducts">
                <card :product="check.product" :title="check.title" :tag="check.tag" :blog-title-pic="check.picture" />
              </template>
              <template v-else>
                <card :url="check.url" :title="check.title" :blog-title-pic="check.picture" :excerpt="check.subline" :sub-points="check.subpoints" :scope="check.scope" :footer="check.footer" :cta="check.cta" long=true />
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  `,
};
