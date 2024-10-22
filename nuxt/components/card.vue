<template>
  <article
    :class="classList"
    itemscope
    itemtype="http://schema.org/BlogPosting"
    :onclick="handleClick"
    :data-utility-animation-step="utilityAnimationStep"
    :style="style"
  >
    <template v-if="large">
      <div class="row no-gutters">
        <div class="col-lg-8" v-if="blogTitlePic">
          <div class="card__img-top position-relative overflow-hidden is-foreground">
            <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
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
              ><a class="card__title text-inherit" ref="title" :href="url" :target="target">{{
                combinedTitle
              }}</a></headline
            >
            <p v-html="truncatedExcerpt"></p>
            <card-footer v-bind="cardFooterData" />
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="productValue">
      <div class="card__img-top card-img--products position-relative no-gutters is-foreground" v-if="blogTitlePic">
        <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
        <div class="card__img-headline-container">
          <template v-if="tag">
            <span class="card__img-tag" :style="{ 'background-color': tag.bgColor, color: tag.color }">
              {{ tag.text }}
            </span>
          </template>
          <headline level="h4" classes="card__img-headline text-light text-center">
            <p class="w-100 pt-5 mb-0 no-gutters">
              {{ title }}
            </p>
          </headline>
          <div class="card-img-cutoff" />
        </div>
      </div>

      <div class="card__body card-body mt-0 pt-0 z-index-2">
        <template v-for="(info, index) in subPointsList(productValue)" v-bind:key="index">
          <headline :class="headlineClassValue(index)" level="h6">{{ info.title }}</headline>
          <template v-for="(points, pointsIndex) in info.subpoints" v-bind:key="pointsIndex">
            <div class="card__check-mark-row">
              <span class="card__check-placeholder" v-if="points.hideIcon"></span>
              <icon class="card__check-mark-icon" v-else :icon="isIncluded(points.included)" size="medium" />
              <span class="card__check-mark-point">{{ points.subpoint }}</span>
            </div>
          </template>
        </template>
      </div>
    </template>

    <template v-else-if="long">
      <div class="card__img-top position-relative no-gutters is-foreground" v-if="blogTitlePic">
        <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
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
    <template v-else>
      <div class="card__img-top position-relative is-foreground" v-if="blogTitlePic">
        <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
        <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
            <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
          </svg>
        </figure>
      </div>

      <div class="card__content">
        <div class="card__body card-body">
          <headline level="h4"
            ><a ref="title" class="card__title text-inherit" :href="url" :target="target">{{
              combinedTitle
            }}</a></headline
          >
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

export default {
  tagName: 'card',
  data() {
    return {
      wordsToTruncate: 20,
      activeView: null,
    };
  },
  computed: {
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
      if (Tools.isTrue(this.long) === true) {
        return 'card--long';
      } else if (this.productValue) {
        return 'card--products';
      } else if (Tools.isTrue(this.event) === true) {
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
        if (/^.+\.(jpg|webp|png)/.test(this.blogTitlePic)) {
          return this.blogTitlePic;
        } else {
          return this.blogTitlePic + '.jpg';
        }
      }
    },
    hasBlogTitlePic() {
      return this.youtubeUrl ? false : true;
    },
    hasNoLink() {
      return Tools.isTrue(this.webCast) ? true : false;
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

    const blogView = this.$root.StoreData.blogView;

    if (!blogView) return null;

    this.activeView = blogView();

    blogView.subscribe((view) => {
      this.activeView = view;
    });
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
    blogTitlePic: String,
    url: String,
    title: String,
    target: String,
    excerpt: String,
    author: Array,
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
    webCast: {
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
  },
};
</script>
