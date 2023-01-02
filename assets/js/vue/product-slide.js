export default {
  tagName: 'product-slide',
  computed: {
    classList() {
      return `product-slide vue-component`;
    },
    productSlideContainerClass() {
      return 'product-slide__container js-slick-carousel slick--single-list';
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `h2-font-size ${this.headlineClasses ? this.headlineClasses : ''}`;
    },
    productsArray() {
      return this.products ? JSON.parse(this.products) : [];
    },
    itemClass() {
      return 'product_slide__slide';
    },
    carouselOptions() {
      const obj = {
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.products.length > 3 ? true : false,
        centerMode: false,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.products.length > 2 ? true : false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.products.length > 1 ? true : false,
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
              dots: this.products.length > 1 ? true : false,
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
              dots: this.products.length > 1 ? true : false,
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
    slider: {
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
        <div class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-9">
          <headline class="mb-10" :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
        </div>
      </div>
      <div :class="productSlideContainerClass" :data-hs-slick-carousel-options="carouselOptions">
        <template v-for="product in productsArray">
          <div :class="itemClass">
            <card :products="true" :infos="product.infos"/>
          </div>
        </template>
      </div>
    </div>
  </div>
   `,
};
