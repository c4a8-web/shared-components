import Tools from '../tools.js';

export default {
  tagName: 'card',
  data() {
    return {
      wordsToTruncate: 20,
    };
  },
  computed: {
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
    classList() {
      return [
        'card',
        this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '',
        `${this.noLink ? 'card--no-link' : ''}`,
        `${Tools.isTrue(this.large) === true ? 'card--large mb-11' : 'h-100'}`,
        `${Tools.isTrue(this.long) === true ? 'card--long' : ''}`,
        `${this.productValue ? 'card--products' : ''}`,
        `${Tools.isTrue(this.event) === true ? 'card--event' : ''}`,
        'vue-component',
      ];
    },
    productValue() {
      return Tools.getJSON(this.product);
    },
    mediaClass() {
      return `${Tools.isTrue(this.event) === true ? 'align-items-center mt-auto' : 'media align-items-center mt-auto'}`;
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
  },
  methods: {
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

      if (!target.parentElement.classList.contains('authors__link')) {
        e.stopImmediatePropagation();

        title.click();
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
  },
  template: `
    <article :class="classList" itemscope itemtype="http://schema.org/BlogPosting"
      :onclick="handleClick"
      :data-utility-animation-step="utilityAnimationStep"
      :style="style"
    >
      <template v-if="large">
        <div class="row no-gutters">
          <div class="col-lg-8" v-if="blogTitlePic">
            <div class="card__img-top position-relative overflow-hidden is-foreground">
              <v-img :img ="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true" />
              <figure class="d-none d-lg-block">
                <svg class="ie-curved-x position-absolute top-0 right-0 bottom-0 mr-n1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.1 1920" height="101%">
                  <path fill="#fff" d="M0,1920c0,0,93.4-934.4,0-1920h100.1v1920H0z"></path>
                </svg>
              </figure>
              <figure class="d-lg-none mb-n1">
                <svg class="ie-curved-y position-absolute right-0 bottom-0 left-0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card__body card-body d-flex flex-column h-100 p-4 p-lg-5">
              <headline level="h3"><a class="card__title text-inherit" ref="title" :href="url" :target="target">{{ combinedTitle }}</a></headline>
              <p v-html="truncatedExcerpt"></p>
              <div :class="mediaClass">
                <div class="card__author" v-if="author">
                  <authors :authorsList="authorList(author)" :noLink="hasNoLink" :dataAuthors="dataAuthors"></authors>
                </div>
                <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
                  {{ cardDate }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-else-if="productValue">
        <div class="card__img-top card-img--products position-relative no-gutters is-foreground" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
          <div class="card__img-headline-container">
            <template v-if="tag">
              <span class="card__img-tag"
              :style="{'background-color': tag.bgColor, 'color': tag.color }">
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
          <template v-for="(info, index) in subPointsList(productValue)">
            <headline :class="headlineClassValue(index)" level="h6" :text="info.title"/>
            <template v-for="points in info.subpoints">
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
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
        </div>

        <div class="card__body card-body richtext">
          <div class="card__scope" v-if="scope">{{ scope }}</div>
          <headline level="h4"><a ref="title" class="card__title text-inherit text-decoration-none text-reset mt-4 mb-4" :href="url" :target="target">{{ combinedTitle }}</a></headline>
          <p class="mb-4 mt-4" v-html="truncatedExcerpt"></p>

          <ul class="card__points text-black">
            <template v-for="points in subPointsList(subPoints)">
              <li class="mb-4"><span>{{ points }}</span></li>
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
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets" :lazy="true"/>
          <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
              <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
            </svg>
          </figure>
        </div>

        <div class="card__body card-body">
          <headline level="h4"><a ref="title" class="card__title text-inherit" :href="url" :target="target">{{ combinedTitle }}</a></headline>
          <p v-html="truncatedExcerpt"></p>
        </div>

        <div class="card-footer border-0 pt-0">
          <div :class="mediaClass">
            <div class="card__author" v-if="author">
              <authors :authorsList="authorList(author)" :noLink="hasNoLink" :dataAuthors="dataAuthors"></authors>
            </div>
            <div class="media-body d-flex justify-content-end text-muted font-size-1 ml-2">
              {{ cardDate }}
            </div>
          </div>
        </div>
      </template>
    </article>
  `,
};
