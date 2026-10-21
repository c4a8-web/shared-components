<template>
  <div
    :class="[
      'quotes',
      quotesImage ? 'mb-8' : 'quotes--no-image',
      quotesNoFullscreen ? 'quotes--no-fullscreenn' : '',
      quotesSpacing,
    ]"
  >
    <div class="container space-top-1 space-bottom-2 space-top-lg-2 space-bottom-lg-0">
      <div class="quotes__row row">
        <div
          class="utility-animation col-lg-12 mb-4 mb-lg-6 fade-in-bottom"
          data-utility-animation-step="1"
          ref="header"
        >
          <headline
            :level="quotes.level"
            :text="quotes.headline"
            :classes="`${quotes.headlineClasses || 'h2-font-size'} quotes__headline`"
          />
        </div>
        <slider
          :options="slickOptions"
          :hide-background="true"
          class="quotes__slider col-sm-12"
          :class="overlapping ? 'mb-lg-n8' : 'pb-8'"
          :hide-container="true"
        >
          <quotes-entry
            v-for="(quotesItem, index) in quotes.items"
            :key="index"
            :entry="quotesItem"
            :active="index === 0"
            :image="quotesImage"
            :has-animation="index === 0"
          />
        </slider>
      </div>
      <div v-if="quotesImagesCount !== 0" class="row mt-7 mt-md-0 justify-content-center">
        <div
          v-for="(image, index) in quotes.footerImage"
          :key="index"
          class="d-flex justify-content-center"
          :class="`col-lg-${quotesColSize}`"
        >
          <v-img :cloudinary="true" :img="image.image" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'quotes',
  props: {
    quotes: {
      type: Object,
      required: true,
    },
    spacing: {
      type: String,
      default: '',
    },
    noFullscreen: {
      type: Boolean,
      default: false,
    },
    overlapping: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (!this.$refs.header) return;

    UtilityAnimation.init([this.$refs.header]);
  },
  computed: {
    quotesSpacing() {
      return this.spacing;
    },
    quotesNoFullscreen() {
      return this.noFullscreen;
    },
    quotesImagesCount() {
      return this.quotes.footerImage?.length || 0;
    },
    quotesImage() {
      return !!this.quotes.items[0]?.img;
    },
    quotesSlidesToShow() {
      return this.quotesImage ? 1.05 : 1;
    },
    quotesColSize() {
      return Math.floor(9 / this.quotesImagesCount);
    },
    slickOptions() {
      return {
        rows: 0,
        centerMode: true,
        centerPadding: this.quotesImage ? '0px' : '15px',
        prevArrow: '<span class="quotes__arrow-left slick-arrow rounded-circle"></span>',
        nextArrow: '<span class="quotes__arrow-right slick-arrow rounded-circle"></span>',
        dots: this.quotes.items.length > 1,
        dotsClass: 'slick-pagination mt-8',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: this.quotesSlidesToShow,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: this.quotesSlidesToShow,
            },
          },
        ],
      };
    },
  },
};
</script>
<style>
.quotes {
  --color-quotes-highlight: var(--color-gk-yellow);
  --color-quotes-background: var(--color-gk-petrol);
  --color-quotes-copy: var(--color-gk-white);
  background-color: var(--color-quotes-background);
  color: var(--color-quotes-copy);
}
.quotes.quotes--no-image {
  display: flex;
  align-items: center;
  padding-bottom: 6rem;
}
.quotes.quotes--no-image:not(.quotes--no-fullscreenn) {
  min-height: 100vh;
}
.quotes.quotes--no-image .quotes__entry-quote,
.quotes.quotes--no-image .quotes__entry-infos,
.quotes.quotes--no-image .quotes__entry-text {
  text-align: center;
}
.quotes.quotes--no-image .quotes__row .slick-slide {
  margin-right: 0;
}
.quotes.quotes--no-image .quotes__entry-text {
  width: 100%;
}
.quotes.quotes--no-image .quotes__entry-text {
  font-size: 1.5rem;
  line-height: 1.4165em;
  font-weight: normal;
}
@media (min-width: 992px) {
  .quotes.quotes--no-image .quotes__entry-text {
    font-size: calc(1.8rem / 1.2);
    line-height: 1.4585em;
  }
}
@media (min-width: 1200px) {
  .quotes.quotes--no-image .quotes__entry-text {
    font-size: 1.8rem;
    line-height: 1.4585em;
  }
}
.quotes.quotes--no-image .quotes__entry-text {
  font-weight: 100 !important;
}
.quotes.quotes--no-image .quotes__entry-text strong {
  font-weight: inherit;
}
.quotes.quotes--no-image .quotes__entry-text {
  line-height: 1.4em !important;
}
.quotes.quotes--no-image .quotes__entry-infos {
  width: 100%;
}
.quotes.quotes--no-image .quotes__entry-text-wrapper {
  margin: 4rem 0;
}
.quotes:not(.quotes--no-image):last-child {
  margin-bottom: 0rem !important;
}
@media (min-width: 992px) {
  .quotes:not(.quotes--no-image) .quotes__entry-text.font-size-3 {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
@media (min-width: 1200px) {
  .quotes:not(.quotes--no-image) .quotes__entry-text.font-size-3 {
    font-size: 1.1rem;
    line-height: 1.8rem;
  }
}
@media (min-width: 1340px) {
  .quotes:not(.quotes--no-image) .quotes__entry-text.font-size-3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
.quotes:not(.quotes--no-image) .quotes__entry-quote-wrapper {
  display: flex;
  flex-direction: column;
}
.quotes:not(.quotes--no-image) .quotes__entry-infos {
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
}
.quotes .slick-arrow {
  background-color: transparent;
  position: absolute;
}
.quotes .slick-arrow:not(.slick-disabled):hover {
  background-color: transparent;
  border-color: var(--color-gk-white);
  border: 1px solid var(--color-gk-white);
}
.quotes .slick-initialized .quotes__entry.slick-slide {
  padding-left: 1px;
}
@media (min-width: 992px) {
  .quotes .slick-initialized .quotes__entry.slick-slide {
    display: flex;
  }
}
.quotes h1,
.quotes h2,
.quotes h3,
.quotes h4,
.quotes h5,
.quotes h6 {
  color: inherit;
}

.quotes__entry-quote {
  position: relative;
  font-size: 10rem;
  color: var(--color-quotes-highlight);
  line-height: 0;
  top: -4%;
  pointer-events: none;
  padding-bottom: 4.5rem;
}
@media (min-width: 992px) {
  .quotes__entry-quote {
    font-size: 8rem;
    top: -5%;
    padding-bottom: 2.5rem;
  }
}
@media (min-width: 1200px) {
  .quotes__entry-quote {
    font-size: 13rem;
    top: -9.5%;
    padding-bottom: 4.5rem;
  }
}

.quotes__entry-position {
  margin-top: 1rem;
}

.quotes__entry-name {
  color: var(--color-quotes-highlight);
  flex: 1 0 100%;
}

.quotes__entry-company {
  flex: 1 0 100%;
}

.quotes__headline {
  text-align: left;
}
@media (min-width: 992px) {
  .quotes__headline {
    text-align: left;
  }
}

.quotes__row {
  justify-content: center;
}
@media (min-width: 992px) {
  .quotes__row {
    justify-content: left;
  }
}

.quotes__entry-img {
  width: 100%;
}
@media (max-width: 991.98px) {
  .quotes__entry-img {
    position: relative;
  }
  .quotes__entry-img:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: calc(1 / 1 * 100%);
  }
  .quotes__entry-img > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

@media (max-width: 991.98px) {
  .quotes__entry-quote-wrapper,
  .quotes__entry-img-wrapper {
    margin: auto;
    margin-left: 0;
  }
}
@media (min-width: 768px) {
  .quotes__entry-quote-wrapper,
  .quotes__entry-img-wrapper {
    max-width: 63%;
  }
}
@media (min-width: 992px) {
  .quotes__entry-quote-wrapper,
  .quotes__entry-img-wrapper {
    max-width: none;
  }
}

.quotes__arrow-right {
  background-image: url("../../assets/svg/right.svg");
  right: 1rem;
}
@media (min-width: 992px) {
  .quotes__arrow-right {
    right: 0;
  }
}

.quotes__arrow-left {
  background-image: url("../../assets/svg/left.svg");
  right: 5rem;
}
.safari .quotes__arrow-left {
  transform: rotate(180deg);
}
@media (min-width: 992px) {
  .quotes__arrow-left {
    right: 3.5rem;
  }
}

@media (min-width: 992px) {
  .quotes__entry-infos {
    padding-bottom: 3rem;
    width: 85%;
  }
  .quotes__entry-infos .font-size-2 {
    font-size: 1.1rem;
  }
}
@media (min-width: 1200px) {
  .quotes__entry-infos .font-size-2 {
    font-size: 1.25rem;
  }
}

.quotes__entry-quote,
.quotes__entry-text,
.quotes__entry-infos {
  text-align: center;
}
@media (min-width: 992px) {
  .quotes__entry-quote,
  .quotes__entry-text,
  .quotes__entry-infos {
    text-align: left;
  }
}

.quotes__arrow-left,
.quotes__arrow-right {
  background-repeat: no-repeat;
  background-size: 28px 17px;
  background-position: center center;
  bottom: 1rem;
  display: none !important;
}
.quotes__arrow-left.slick-disabled,
.quotes__arrow-right.slick-disabled {
  pointer-events: none;
  opacity: 0.5;
}
@media (min-width: 992px) {
  .quotes__arrow-left,
  .quotes__arrow-right {
    display: inline-block !important;
    bottom: 6rem;
  }
}
@media (min-width: 1340px) {
  .quotes__arrow-left,
  .quotes__arrow-right {
    bottom: 8rem;
  }
}

.quotes__entry .quotes__entry-quote-wrapper {
  opacity: 0;
  pointer-events: none;
}
.slick-active .quotes__entry .quotes__entry-quote-wrapper, .slick-current .quotes__entry .quotes__entry-quote-wrapper {
  pointer-events: all;
}
.slick-active .quotes__entry .quotes__entry-quote-wrapper:not(.utility-animation), .slick-current .quotes__entry .quotes__entry-quote-wrapper:not(.utility-animation) {
  opacity: 1;
}

.quotes__entry-quote-wrapper {
  position: relative;
}
.quotes__entry-quote-wrapper.utility-animation[data-utility-animation-step] {
  --utility-animation-distance: 15%;
}
.quotes__entry-quote-wrapper.utility-animation[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 200ms + 0ms);
}
@media (min-width: 992px) {
  .quotes__entry-quote-wrapper {
    padding-bottom: 4rem;
  }
}

.quotes__entry-text-wrapper {
  margin-bottom: 2.5rem;
}
</style>
