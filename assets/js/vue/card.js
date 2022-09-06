import Tools from '../tools.js';

export default {
  tagName: 'card',
  data() {
    return {
      wordsToTruncate: 20,
    };
  },
  computed: {
    classList() {
      return [
        'card',
        `${Tools.isTrue(this.large) === true ? 'card--large mb-11' : 'h-100'}`,
        `${Tools.isTrue(this.event) === true ? 'card--event' : ''}`,
        'vue-component',
      ];
    },
    mediaClass() {
      return `${Tools.isTrue(this.event) === true ? 'align-items-center mt-auto' : 'media align-items-center mt-auto'}`;
    },
    truncatedExcerpt() {
      return Tools.truncateWords(Tools.stripHtml(this.excerpt), this.wordsToTruncate);
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
      return Tools.isTrue(this.webCast) ? true : false
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return;

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
    handleClick(e) {
      const title = this.$refs['title'];

      title.click();
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
    large: {
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
  },
  template: `
    <article :class="classList" itemscope itemtype="http://schema.org/BlogPosting" :onclick="handleClick" >
      <template v-if="large">
        <div class="row no-gutters">
          <div class="col-lg-8" v-if="blogTitlePic">
            <div class="position-relative overflow-hidden">
              <v-img :img ="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets"/>
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
            <div class="card-body d-flex flex-column h-100 p-4 p-lg-5">
              <headline level="h3"><a class="text-inherit" ref="title" :href="url" :target="target">{{ title }}</a></headline>
              <p>{{ truncatedExcerpt }}</p>
              <div :class="mediaClass">
                <div class="card__author">
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

      <template v-else>
        <div class="card-img-top position-relative" v-if="blogTitlePic">
          <v-img :img="hasExtension" :cloudinary="hasBlogTitlePic" :imgSrcSets="imgSrcSets"/>
          <figure class="ie-curved-y position-absolute right-0 bottom-0 left-0 mb-n1">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
              <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
            </svg>
          </figure>
        </div>

        <div class="card-body">
          <headline level="h4"><a ref="title" class="text-inherit" :href="url" :target="target">{{ title }}</a></headline>
          <p>{{ truncatedExcerpt }}</p>
        </div>

        <div class="card-footer border-0 pt-0">
          <div :class="mediaClass">
            <div class="card__author">
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
