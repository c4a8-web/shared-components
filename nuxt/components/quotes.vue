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
<style lang="scss">
.quotes {
  --color-quotes-highlight: var(--color-gk-yellow);
  --color-quotes-background: var(--color-gk-petrol);
  --color-quotes-copy: var(--color-gk-white);

  background-color: var(--color-quotes-background);
  color: var(--color-quotes-copy);

  &.quotes--no-image {
    &:not(.quotes--no-fullscreenn) {
      min-height: 100vh;
    }

    display: flex;
    align-items: center;
    padding-bottom: spacing(24);

    .quotes__entry-quote,
    .quotes__entry-infos,
    .quotes__entry-text {
      text-align: center;
    }

    .quotes__row {
      .slick-slide {
        margin-right: 0;
      }
    }

    .quotes__entry-text {
      @include font-style($style: 'h4-font-size', $weight: 'light', $line: 'middle');

      width: 100%;
    }

    .quotes__entry-infos {
      width: 100%;
    }

    .quotes__entry-text-wrapper {
      margin: spacing(16) 0;
    }
  }

  &:not(.quotes--no-image) {
    &:last-child {
      margin-bottom: spacing(0) !important;
    }

    .quotes__entry-text {
      @include media-breakpoint-up(lg) {
        &.font-size-3 {
          // TODO check can't we use an existing font?
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }

      @include media-breakpoint-up(xl) {
        &.font-size-3 {
          font-size: 1.1rem;
          line-height: 1.8rem;
        }
      }

      @include media-breakpoint-up(xxl) {
        &.font-size-3 {
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
    }

    .quotes__entry-quote-wrapper {
      display: flex;
      flex-direction: column;
    }

    .quotes__entry-infos {
      display: flex;
      flex-wrap: wrap;
      margin-top: auto;
    }
  }

  .slick-arrow {
    background-color: transparent;
    position: absolute;

    &:not(.slick-disabled) {
      &:hover {
        background-color: transparent;
        border-color: var(--color-gk-white);
        border: 1px solid var(--color-gk-white);
      }
    }
  }

  .slick-initialized {
    .quotes__entry {
      &.slick-slide {
        padding-left: 1px;

        @include media-breakpoint-up(lg) {
          display: flex;
        }
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
  }
}

.quotes__entry-quote {
  position: relative;
  font-size: 10rem;
  color: var(--color-quotes-highlight);
  line-height: 0;
  top: -4%;
  pointer-events: none;
  padding-bottom: 4.5rem;

  @include media-breakpoint-up(lg) {
    font-size: 8rem;
    top: -5%;
    padding-bottom: 2.5rem;
  }

  @include media-breakpoint-up(xl) {
    font-size: 13rem;
    top: -9.5%;
    padding-bottom: 4.5rem;
  }
}

.quotes__entry-position {
  margin-top: spacing(4);
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

  @include media-breakpoint-up(lg) {
    text-align: left;
  }
}

.quotes__row {
  justify-content: center;

  @include media-breakpoint-up(lg) {
    justify-content: left;
  }
}

.quotes__entry-img {
  width: 100%;

  @include media-breakpoint-down(md) {
    @include aspect-ratio(1, 1);
  }
}

.quotes__entry-quote-wrapper,
.quotes__entry-img-wrapper {
  @include media-breakpoint-down(md) {
    margin: auto;
    margin-left: 0;
  }

  @include media-breakpoint-up(md) {
    max-width: 63%;
  }

  @include media-breakpoint-up(lg) {
    max-width: none;
  }
}

.quotes__arrow-right {
  background-image: assets('../../assets/svg/right.svg');
  right: spacing(4);

  @include media-breakpoint-up(lg) {
    right: 0;
  }
}

.quotes__arrow-left {
  @include safari {
    transform: rotate(180deg);
  }

  background-image: assets('../../assets/svg/left.svg');
  right: spacing(20);

  @include media-breakpoint-up(lg) {
    right: spacing(14);
  }
}

.quotes__entry-infos {
  @include media-breakpoint-up(lg) {
    padding-bottom: spacing(12);
    width: 85%;

    .font-size-2 {
      font-size: 1.1rem;
    }
  }

  @include media-breakpoint-up(xl) {
    .font-size-2 {
      font-size: 1.25rem;
    }
  }
}

.quotes__entry-quote,
.quotes__entry-text,
.quotes__entry-infos {
  text-align: center;

  @include media-breakpoint-up(lg) {
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

  &.slick-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  @include media-breakpoint-up(lg) {
    display: inline-block !important;
    bottom: 6rem;
  }

  @include media-breakpoint-up(xxl) {
    bottom: 8rem;
  }
}

.quotes__entry {
  .quotes__entry-quote-wrapper {
    opacity: 0;
    pointer-events: none;
  }

  .slick-active &,
  .slick-current & {
    .quotes__entry-quote-wrapper {
      &:not(.utility-animation) {
        opacity: 1;
      }

      pointer-events: all;
    }
  }
}

.quotes__entry-quote-wrapper {
  &.utility-animation {
    @include utility-animation-options($distance: 15%, $delay: 200ms, $selector: '&');
  }

  position: relative;

  @include media-breakpoint-up(lg) {
    padding-bottom: spacing(16);
  }
}

.quotes__entry-text-wrapper {
  margin-bottom: spacing(10);
}
</style>
