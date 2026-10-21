<template>
  <article
    :class="classList"
    itemscope
    itemtype="http://schema.org/BlogPosting"
    @click="handleClick"
    :data-utility-animation-step="utilityAnimationStep"
    :style="style"
    ref="root"
  >
    <meta itemprop="author" :content="author" v-if="author" />
    <meta itemprop="datePublished" :content="datePublished" v-if="datePublished" />
    <meta itemprop="headline" :content="title" />
    <template v-if="large">
      <div class="row no-gutters">
        <div class="col-lg-8" v-if="blogtitlepic">
          <div class="card__img-top position-relative overflow-hidden is-foreground">
            <v-img
              itemprop="image"
              :img="hasExtension"
              :cloudinary="hasBlogTitlePic"
              :img-src-sets="imgSrcSets"
              :lazy="true"
            />
            <figure class="d-none d-lg-block">
              <svg
                class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100.1 1920"
                height="101%"
              >
                <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
              </svg>
            </figure>
            <figure class="d-lg-none mb-n1">
              <svg
                class="ie-curved-y position-absolute right-0 bottom-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
              >
                <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
              </svg>
            </figure>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card__body card-body d-flex flex-column h-100 p-4 p-lg-5">
            <headline level="h3"
              ><a class="card__title text-inherit" ref="title" :href="url" :target="target" v-html="combinedTitle"
            /></headline>
            <p v-html="truncatedExcerpt"></p>
            <card-footer v-bind="cardFooterData" />
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="productValue">
      <div class="card-img--products position-relative no-gutters is-foreground" v-if="blogtitlepic">
        <div
          class="card__img-headline-container"
          :style="{ backgroundColor: logo && logo.bgColor ? logo.bgColor : null }"
          v-if="!img"
        >
          <svg class="position-absolute" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M94.1198 230.968L142.596 -11.466L-161.213 -32.5347L-199.287 73.8931L94.1198 230.968Z"
              fill="#f5f5f5"
              fill-opacity="0.2"
            />
            <path
              d="M407.393 173.918L298.222 -11.7818L115.754 124.245L119.845 276.308L407.393 173.918Z"
              fill="#f5f5f5"
              fill-opacity="0.2"
            />
          </svg>
          <div class="pb-5 pt-5 mx-11 d-flex justify-content-center">
            <v-img itemprop="image" :img="logo?.img" :cloudinary="logo?.cloudinary" class="w-100" />
          </div>
          <div class="card-img-cutoff" />
        </div>
        <div class="card__img-products" v-else>
          <v-img itemprop="image" :img="img" :cloudinary="cloudinary" :alt="alt" class="w-100" />
        </div>
      </div>
      <div class="card__body card-body mt-0 pt-0 z-index-2 d-flex flex-column">
        <template v-for="(info, index) in subPointsList(productValue)" v-bind:key="index">
          <headline :class="headlineClassValue(index)" level="h6">{{ info.title }}</headline>
          <template v-for="(point, pointIndex) in info.subpoints" v-bind:key="pointIndex">
            <div class="card__check-mark-row">
              <span class="card__check-placeholder" v-if="point.hideIcon"></span>
              <icon class="card__check-mark-icon" v-else :icon="isIncluded(point.included)" size="medium" />
              <span class="card__check-mark-point">{{ point.subpoint }}</span>
            </div>
          </template>
        </template>
        <div class="card__link mt-auto" v-if="cta">
          <cta v-bind="ctaValue" class="font-weight-bold mt-5" style="color: var(--color-primary)" />
        </div>
      </div>
    </template>

    <template v-else-if="long">
      <div class="card__img-top position-relative no-gutters is-foreground" v-if="blogtitlepic">
        <v-img
          itemprop="image"
          :img="hasExtension"
          :cloudinary="hasBlogTitlePic"
          :img-src-sets="imgSrcSets"
          :lazy="true"
        />
      </div>

      <div class="card__body card-body richtext">
        <div class="card__scope" v-if="scope">{{ scope }}</div>
        <headline level="h4"
          ><a
            ref="title"
            class="card__title text-inherit text-decoration-none text-reset mt-4 mb-4"
            :href="url"
            :target="target"
            >{{ combinedTitle }}</a
          ></headline
        >
        <p class="mb-4 mt-4" v-html="truncatedExcerpt"></p>

        <ul class="card__points text-black">
          <template v-for="(points, index) in subPointsList(subPoints)" v-bind:key="index">
            <li class="mb-4">
              <span>{{ points }}</span>
            </li>
          </template>
        </ul>
        <p class="card-warning" v-if="footer">{{ footer }}</p>

        <div class="card__link" v-if="cta">
          <cta v-bind="ctaValue" />
        </div>
      </div>
    </template>
    <template v-else-if="steps">
      <div>
        <div class="d-flex flex-column justify-content-center">
          <div class="position-absolute d-flex w-100 d-flex flex-column justify-content-center align-items-center pb-3">
            <span class="">{{ overline }}</span>
            <span class="h2">{{ title }}</span>
          </div>
          <div :style="{ backgroundColor: '#f5f5f5' }">
            <svg width="100%" height="100%" viewBox="0 0 557 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 118.969V0H557V183L0 118.969Z" :fill="'var(--color-gk-yellow)'" />

              <path d="M529.5 137.5L556.5 129V182.94L532.5 180.19L529.5 137.5Z" opacity="0.15" fill="white" />
              <path d="M211 0L0.5 119.03L551 182.31L483 0H211Z" opacity="0.15" fill="white" />
              <path d="M1 119.08V0H23L374 161.96L1 119.08Z" opacity="0.15" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div class="card__body card-body z-index-2 pr-5 pl-5 pb-5" style="display: flex; flex-direction: column">
        <div class="pb-10">
          <p v-if="underline" class="text-center">{{ underline }}</p>
          <div v-for="(step, index) in steps" :key="index" class="d-flex align-items-center">
            <Circle :circleContent="`${index + 1}`" :color="accentColor" />
            <div class="">
              <p class="h3 pt-5">{{ step.title }}</p>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
        <div class="card__link mt-auto" v-if="cta">
          <cta v-bind="ctaValue" class="font-weight-bold mt-5" :style="{ color: color }" />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="card__img-top position-relative is-foreground" v-if="blogtitlepic">
        <v-img
          itemprop="image"
          :img="hasExtension"
          :cloudinary="hasBlogTitlePic"
          :img-src-sets="imgSrcSets"
          :lazy="true"
        />
        <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
            <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
          </svg>
        </figure>
      </div>

      <div class="card__content">
        <div class="card__body card-body">
          <headline level="h4"
            ><a ref="title" class="card__title text-inherit" :href="url" :target="target" v-html="combinedTitle"
          /></headline>
          <p v-html="truncatedExcerpt"></p>
        </div>

        <div class="card-footer border-0 pt-0">
          <card-footer v-bind="cardFooterData" />
        </div>
      </div>
    </template>
  </article>
</template>
<script>
import Tools from '../utils/tools.js';
import Events from '../utils/events.js';
import UtilityAnimation from '../utils/utility-animation.js';
import { useBlogStore } from '../stores/blog';

export default {
  tagName: 'card',
  data() {
    return {
      wordsToTruncate: 20,
      activeView: null,
      // TODO pass this down from blog-recent
      imgSrcSets: null,
    };
  },
  computed: {
    datePublished() {
      return Tools.getFormattedISODate(this.date);
    },
    blogView() {
      return this.activeView;
    },
    combinedTitle() {
      return `${this.title} ${this.externalLanguage ? '(' + this.externalLanguage + ')' : ''}`;
    },
    noLink() {
      return this.url === undefined || this.url === '' ? true : false;
    },
    indexValue() {
      return this.index != '' && this.index >= 0 ? this.index : null;
    },
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    hasAnimationValue() {
      return Tools.isTrue(this.hasAnimation) === true;
    },
    utilityAnimationStep() {
      return this.hasAnimationValue ? '1' : null;
    },
    rowValue() {
      return Tools.isTrue(this.row) === true;
    },
    variant() {
      if (this.long === true) {
        return 'card--long';
      } else if (this.productValue || this.steps) {
        return 'card--products';
      } else if (this.event === true || this.webcast === true) {
        return 'card--event';
      } else if (this.rowValue) {
        return 'card--row';
      }

      return 'card--default';
    },
    classList() {
      return [
        'card',
        this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '',
        `${this.noLink ? 'card--no-link' : ''}`,
        `${Tools.isTrue(this.large) === true ? 'card--large mb-11' : 'h-100'}`,
        this.variant,
        this.spacing,
        this.hasNoAspectRatio ? 'card--no-aspect-ratio' : '',
        'vue-component',
      ];
    },
    productValue() {
      return Tools.getJSON(this.product);
    },
    truncatedExcerpt() {
      const excerptValue =
        Tools.isTrue(this.long) === true
          ? this.strippedExcerpt
          : Tools.truncateWords(this.strippedExcerpt, this.wordsToTruncate);

      return Tools.decodeHTML(excerptValue);
    },
    strippedExcerpt() {
      return Tools.stripHtml(this.excerpt);
    },
    cardDate() {
      return this.formatDate(this.date);
    },
    hasExtension() {
      if (this.youtubeUrl) {
        return Tools.getYoutubeThumbnail(this.youtubeUrl);
      } else {
        if (/^.+\.(jpg|webp|png)/.test(this.blogtitlepic)) {
          return this.blogtitlepic;
        } else {
          return this.blogtitlepic + '.jpg';
        }
      }
    },
    hasBlogTitlePic() {
      return this.youtubeUrl ? false : true;
    },
    hasNoLink() {
      return Tools.isTrue(this.webcast) ? true : false;
    },
    ctaValue() {
      const cta = Tools.getJSON(this.cta);

      if (cta && cta.link === undefined) {
        cta.link = true;
      }

      return cta;
    },
    cardFooterData() {
      return {
        date: this.cardDate,
        author: this.author,
        authorsList: this.authorList(this.author),
        hasNoLink: this.hasNoLink,
        dataAuthors: this.dataAuthors,
        isRow: this.rowValue,
        tags: this.tags,
      };
    },
  },
  created() {
    if (Tools.isTrue(this.store) !== true) return;

    const blogStore = useBlogStore();
    this.activeView = blogStore.getBlogView;

    // Subscribe to view changes using watch
    this.$watch(
      () => blogStore.getBlogView,
      (newView) => {
        this.activeView = newView;
      }
    );
  },
  mounted() {
    if (!this.hasAnimationValue) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    isTags(target) {
      return target.parentElement.classList.contains('tags__btn') ||
        target.parentElement.classList.contains('card__tags')
        ? true
        : false;
    },
    formatDate(date) {
      if (!date) return;

      if (Tools.isGermanDate(date)) return date;

      const splitted = date.split(' ');
      const formatedDate = splitted[0].split('-');
      const year = formatedDate[0];
      const month = formatedDate[1];
      const day = formatedDate[2];

      return `${day}.${month}.${year}`;
    },
    authorList(author) {
      if (author && typeof author === 'object' && author.length > 0) return author;

      if (author && typeof author === 'string') return [author];

      return author;
    },
    subPointsList(subpoints) {
      return Tools.getJSON(subpoints);
    },
    headlineClassValue(index) {
      return index !== 0 ? 'mt-5' : '';
    },
    handleClick(e) {
      if (this.noLink) return;

      const title = this.$refs['title'];
      const target = e.target;

      if (target.classList.contains('card__title')) return;

      const isTags = this.isTags(target);

      if (!target.parentElement.classList.contains('authors__link') && !isTags) {
        e.stopImmediatePropagation();

        title.click();
      } else {
        if (!isTags) return;

        e.stopImmediatePropagation();
        e.preventDefault();

        this.$emit(Events.CARD_TAG_CLICKED, target.dataset.tag);
      }
    },
    isIncluded(include) {
      return Tools.isTrue(include) ? 'check-mark' : 'x-mark';
    },
  },
  props: {
    overline: String,
    underline: String,
    steps: Array,
    color: {
      type: String,
      default: 'var(--color-primary)',
    },
    accentColor: {
      type: String,
      default: 'var(--color-highlight)',
    },
    blogtitlepic: String,
    url: String,
    title: String,
    target: String,
    excerpt: String,
    author: {
      type: [String, Array],
    },
    date: String,
    footer: String,
    tag: {
      default: null,
    },
    large: {
      default: null,
    },
    long: {
      default: null,
    },
    product: {
      default: null,
    },
    subPoints: {
      default: null,
    },
    event: {
      default: null,
    },
    webcast: {
      default: null,
    },
    youtubeUrl: String,
    dataAuthors: Object,
    scope: String,
    cta: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
    index: Number,
    externalLanguage: String,
    spacing: String,
    store: {
      default: null,
    },
    row: {
      default: null,
    },
    tags: Array,
    hasNoAspectRatio: {
      type: Boolean,
    },
    logo: Object,
    img: String,
    cloudinary: Boolean,
    alt: String,
  },
};
</script>
<style lang="scss">
.card {
  &.vue-component {
    &.utility-animation {
      @include utility-animation-options($distance: 25%, $duration: 1s, $delay: 50ms, $selector: '&');

      .utility-animation__group & {
        @include utility-animation-options($distance: 25%, $duration: 1s, $delay: 28ms, $selector: '&', $group: true);
      }
    }

    &:not(.card--no-link) {
      @include hover-scale;

      &:hover {
        cursor: pointer;
      }
    }

    &.card--row {
      &:not(.card--no-aspect-ratio) {
        .card__img-top {
          img {
            aspect-ratio: 16/9;
          }
        }
      }

      .card__body {
        padding-bottom: spacing(4);
      }

      @include media-breakpoint-up(lg) {
        --color-card-background: transparent;
        --card-img-width: 43%;

        box-shadow: none;
        border-radius: 0;
        max-width: none;
        display: flex;
        flex-direction: row;

        &:hover {
          box-shadow: none;
        }

        .card__img-top {
          width: var(--card-img-width);

          img {
            flex: 1;
            height: auto;
          }
        }

        .card__content {
          display: flex;
          flex-direction: column;
          left: var(--card-img-width);
          position: absolute;
          overflow: hidden;
          height: 100%;
          justify-content: space-between;

          .card-footer {
            padding-bottom: 0;
          }
        }

        .card__body {
          padding-bottom: 0;
          padding-top: spacing(0.5);

          p {
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
          }
        }
      }

      @include media-breakpoint-up(xl) {
        --card-img-width: 34%;
      }
    }

    &:not(.card--large):not(.card--long):not(.card--products) {
      max-width: unquote('min(480px, 100%)');

      &.card--default,
      &.card--row {
        max-width: none;
      }

      @include media-breakpoint-up(md) {
        max-width: unquote('min(480px, 100vw)');

        &.card--default,
        &.card--row {
          max-width: none;
        }
      }
    }

    &.card--products,
    &.card--long {
      max-width: 100%;

      @include media-breakpoint-up(lg) {
        max-width: unquote('min(580px, 100%)');
      }
    }

    &.card--event {
      .card__authors {
        text-align: right;
      }
    }

    &.card--products {
      .card__img-top {
        &::before {
          display: none;
        }

        .card__img-headline {
          padding: spacing(4) spacing(5) spacing(6);
        }

        .card__img-headline-container {
          height: 100%;
          position: relative;
          top: 0%;

          .headline {
            @include font-style($style: 'font-size-4', $line: 'wide');

            & {
              min-height: 70%;
            }
          }
        }
      }

      .card-body {
        .headline {
          color: var(--color-products-dark-grey);
          text-transform: uppercase;
        }
      }
    }

    &.card--large {
      .headline {
        @include line-height('thin');
      }

      @include media-breakpoint-up(lg) {
        .card__img-top {
          height: 100%;
        }
      }
    }

    &:not(.card--no-aspect-ratio) {
      .card__img-top {
        @include aspect-ratio(16, 9);
      }
    }

    .richtext {
      p + .card__link {
        margin-top: spacing(2);
      }
    }

    article {
      margin: 0;
    }

    .ie-curved-x,
    .ie-curved-y {
      display: none;
    }

    .card__img-top {
      overflow: hidden;

      &:not(.card-img--long) {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .card-img--long {
        object-fit: cover;
      }
    }

    .card-img {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    .card__img-tag {
      @include font-style($style: 'font-size-3', $weight: 'bold');

      & {
        display: inline-block;
        position: absolute;
        right: 13%;
        line-height: 1em !important; // TODO there is an issue with font-style when this issue is fixed important can go away
        padding: spacing(2) spacing(3);
        text-transform: uppercase;
      }
    }

    .card-img-cutoff {
      height: spacing(12);
      background: linear-gradient(
        4deg,
        var(--color-card-background) 0%,
        var(--color-card-background) 55%,
        rgba(255, 0, 0, 0) 56%,
        rgba(255, 0, 0, 0) 100%
      );
    }

    .card-footer {
      &:last-child {
        border-radius: 0;
      }
    }

    .card-footer,
    .card-body {
      background-color: var(--color-card-background);
    }

    h4 {
      line-height: 1.2em;
    }
  }
}

.card__scope,
.card__points {
  @include font-size-1;
}

.card__scope {
  color: var(--color-card-highlight);
}

.card-warning {
  @include font-style($style: 'font-size-1', $line: 'wide');
}

.card__check-mark-row {
  display: flex;
  margin-bottom: spacing(2);
}

.card__check-mark-icon {
  padding-bottom: spacing(2);
  margin-right: spacing(5);
}

.card__link {
  display: flex;
  justify-content: flex-end;
}

.card:not(.vue-component) {
  &:not(.card--no-link) {
    @include hover-scale;

    &:hover {
      cursor: pointer;
    }
  }
}

.card__check-placeholder {
  --card-check-icon-size: 28px;

  display: inline-block;
  height: var(--card-check-icon-size);
  margin-bottom: spacing(2);
}

.card__date {
  color: var(--color-copy-reduced);
}

.card__content {
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
}

.card__tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  margin: 0 spacing($size: 2, $negative: true);
}

.card__authors {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.card__footer-infos {
  width: 100%;
}

.card__footer {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
}

.card__img-products {
  padding-bottom: spacing(5);
  background: var(--color-card-background);
}
</style>
