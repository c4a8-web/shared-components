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
<style>
.card.vue-component.utility-animation[data-utility-animation-step] {
  --utility-animation-distance: 25%;
}
.card.vue-component.utility-animation[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 50ms + 0ms);
  animation-duration: 1s;
}
.utility-animation__group .card.vue-component.utility-animation[data-utility-animation-step] {
  --utility-animation-distance: 25%;
}
.utility-animation__group .card.vue-component.utility-animation[data-utility-animation-step].is-starting {
  animation-delay: calc((var(--utility-animation-index) - var(--utility-animation-items-loaded)) * 28ms + 0ms);
  animation-duration: 1s;
}
.card.vue-component:not(.card--no-link) {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1.5s cubic-bezier(0.19, 1, 0.2, 1);
}
.card.vue-component:not(.card--no-link) .is-foreground :is(img, svg, .lottie),
.card.vue-component:not(.card--no-link) .is-background {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: 0.4s;
}
.card.vue-component:not(.card--no-link):hover .is-foreground :is(img, svg, .lottie),
.card.vue-component:not(.card--no-link):hover .is-background {
  transform: scale(1.025);
  transition-duration: 1.3s;
}
.card.vue-component:not(.card--no-link):hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}
.card.vue-component:not(.card--no-link):hover {
  cursor: pointer;
}
.card.vue-component.card--row:not(.card--no-aspect-ratio) .card__img-top img {
  aspect-ratio: 16/9;
}
.card.vue-component.card--row .card__body {
  padding-bottom: 1rem;
}
@media (min-width: 992px) {
  .card.vue-component.card--row {
    --color-card-background: transparent;
    --card-img-width: 43%;
    box-shadow: none;
    border-radius: 0;
    max-width: none;
    display: flex;
    flex-direction: row;
  }
  .card.vue-component.card--row:hover {
    box-shadow: none;
  }
  .card.vue-component.card--row .card__img-top {
    width: var(--card-img-width);
  }
  .card.vue-component.card--row .card__img-top img {
    flex: 1;
    height: auto;
  }
  .card.vue-component.card--row .card__content {
    display: flex;
    flex-direction: column;
    left: var(--card-img-width);
    position: absolute;
    overflow: hidden;
    height: 100%;
    justify-content: space-between;
  }
  .card.vue-component.card--row .card__content .card-footer {
    padding-bottom: 0;
  }
  .card.vue-component.card--row .card__body {
    padding-bottom: 0;
    padding-top: 0.125rem;
  }
  .card.vue-component.card--row .card__body p {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
}
@media (min-width: 1200px) {
  .card.vue-component.card--row {
    --card-img-width: 34%;
  }
}
.card.vue-component:not(.card--large):not(.card--long):not(.card--products) {
  max-width: min(480px, 100%);
}
.card.vue-component:not(.card--large):not(.card--long):not(.card--products).card--default, .card.vue-component:not(.card--large):not(.card--long):not(.card--products).card--row {
  max-width: none;
}
@media (min-width: 768px) {
  .card.vue-component:not(.card--large):not(.card--long):not(.card--products) {
    max-width: min(480px, 100vw);
  }
  .card.vue-component:not(.card--large):not(.card--long):not(.card--products).card--default, .card.vue-component:not(.card--large):not(.card--long):not(.card--products).card--row {
    max-width: none;
  }
}
.card.vue-component.card--products, .card.vue-component.card--long {
  max-width: 100%;
}
@media (min-width: 992px) {
  .card.vue-component.card--products, .card.vue-component.card--long {
    max-width: min(580px, 100%);
  }
}
.card.vue-component.card--event .card__authors {
  text-align: right;
}
.card.vue-component.card--products .card__img-top::before {
  display: none;
}
.card.vue-component.card--products .card__img-top .card__img-headline {
  padding: 1rem 1.25rem 1.5rem;
}
.card.vue-component.card--products .card__img-top .card__img-headline-container {
  height: 100%;
  position: relative;
  top: 0%;
}
.card.vue-component.card--products .card__img-top .card__img-headline-container .headline {
  font-size: 1.375rem;
  line-height: 1.6365em;
}
@media (min-width: 992px) {
  .card.vue-component.card--products .card__img-top .card__img-headline-container .headline {
    font-size: 1.5625rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .card.vue-component.card--products .card__img-top .card__img-headline-container .headline {
    font-size: 1.95313rem;
    line-height: 1.7em;
  }
}
.card.vue-component.card--products .card__img-top .card__img-headline-container .headline {
  line-height: 1.7em !important;
}
.card.vue-component.card--products .card__img-top .card__img-headline-container .headline {
  min-height: 70%;
}
.card.vue-component.card--products .card-body .headline {
  color: var(--color-products-dark-grey);
  text-transform: uppercase;
}
.card.vue-component.card--large .headline {
  line-height: 1.2em;
}
@media (min-width: 992px) {
  .card.vue-component.card--large .card__img-top {
    height: 100%;
  }
}
.card.vue-component:not(.card--no-aspect-ratio) .card__img-top {
  position: relative;
}
.card.vue-component:not(.card--no-aspect-ratio) .card__img-top:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: calc(9 / 16 * 100%);
}
.card.vue-component:not(.card--no-aspect-ratio) .card__img-top > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.card.vue-component .richtext p + .card__link {
  margin-top: 0.5rem;
}
.card.vue-component article {
  margin: 0;
}
.card.vue-component .ie-curved-x,
.card.vue-component .ie-curved-y {
  display: none;
}
.card.vue-component .card__img-top {
  overflow: hidden;
}
.card.vue-component .card__img-top:not(.card-img--long) img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card.vue-component .card__img-top .card-img--long {
  object-fit: cover;
}
.card.vue-component .card-img {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.card.vue-component .card__img-tag {
  font-size: 1.25rem;
  line-height: 1.6em;
}
@media (min-width: 992px) {
  .card.vue-component .card__img-tag {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .card.vue-component .card__img-tag {
    font-size: 1.5625rem;
    line-height: 1.6em;
  }
}
.card.vue-component .card__img-tag {
  font-weight: bold !important;
}
.card.vue-component .card__img-tag {
  display: inline-block;
  position: absolute;
  right: 13%;
  line-height: 1em !important;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
}
.card.vue-component .card-img-cutoff {
  height: 3rem;
  background: linear-gradient(4deg, var(--color-card-background) 0%, var(--color-card-background) 55%, rgba(255, 0, 0, 0) 56%, rgba(255, 0, 0, 0) 100%);
}
.card.vue-component .card-footer:last-child {
  border-radius: 0;
}
.card.vue-component .card-footer,
.card.vue-component .card-body {
  background-color: var(--color-card-background);
}
.card.vue-component h4 {
  line-height: 1.2em;
}

.card__scope,
.card__points {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .card__scope,
  .card__points {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .card__scope,
  .card__points {
    font-size: 1rem;
    line-height: 1.6;
  }
}

.card__scope {
  color: var(--color-card-highlight);
}

.card-warning {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .card-warning {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .card-warning {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.card-warning {
  line-height: 1.7em !important;
}

.card__check-mark-row {
  display: flex;
  margin-bottom: 0.5rem;
}

.card__check-mark-icon {
  padding-bottom: 0.5rem;
  margin-right: 1.25rem;
}

.card__link {
  display: flex;
  justify-content: flex-end;
}

.card:not(.vue-component):not(.card--no-link) {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1.5s cubic-bezier(0.19, 1, 0.2, 1);
}
.card:not(.vue-component):not(.card--no-link) .is-foreground :is(img, svg, .lottie),
.card:not(.vue-component):not(.card--no-link) .is-background {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: 0.4s;
}
.card:not(.vue-component):not(.card--no-link):hover .is-foreground :is(img, svg, .lottie),
.card:not(.vue-component):not(.card--no-link):hover .is-background {
  transform: scale(1.025);
  transition-duration: 1.3s;
}
.card:not(.vue-component):not(.card--no-link):hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}
.card:not(.vue-component):not(.card--no-link):hover {
  cursor: pointer;
}

.card__check-placeholder {
  --card-check-icon-size: 28px;
  display: inline-block;
  height: var(--card-check-icon-size);
  margin-bottom: 0.5rem;
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
  margin: 0 -0.5rem;
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
  padding-bottom: 1.25rem;
  background: var(--color-card-background);
}
</style>
