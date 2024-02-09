import Tools from '../tools.js';

export default {
  tagName: 'post-teaser',
  data() {
    return {
      translationData: null,
      spacing: 2,
    };
  },
  computed: {
    formattedDate() {
      const date = this.postData?.date;

      if (date) {
        return date.split('-').reverse().join('.');
      }

      return;
    },
    classList() {
      return [
        'post-teaser',
        'mb-8 row',
        this.author ? 'post-teaser--author' : '',
        this.classes !== '' ? this.classes : '',
        'vue-component',
      ];
    },
    title() {
      if (this.postData?.lang !== this.lang && this.postData.lang !== '' && this.translationData?.onlyLanguage) {
        return `${this.postData.title} (${this.translationData?.onlyLanguage})`;
      }

      return this.postData?.title;
    },
    excerpt() {
      const maxWords = 30;

      return Tools.decodeHTML(Tools.truncateWords(this.postData?.excerpt, maxWords));
    },
    imgUrl() {
      return `/blog/heads/${this.postData?.blogtitlepic}.jpg`;
    },
    postData() {
      return Tools.getJSON(this.post);
    },
    listClasses() {
      return `list-inline-item mx-sm-n${this.spacing}`;
    },
    href() {
      return this.postData?.url;
    },
    postTeaserPreset() {
      return this.author ? '' : 'postTeaser';
    },
    columnClasses() {
      return ['col-sm-8', this.author ? 'd-flex flex-column' : ''];
    },
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData(['onlyLanguage']);
      });
    }
  },
  methods: {},
  props: {
    classes: String,
    post: Object,
    tag: String,
    site: Object,
    lang: String,
    author: {
      default: null,
    },
  },
  template: `
    <div :class="classList" :data-tags="tag">
      <div class="post-teaser__img-container col-sm-4 mb-4 mb-sm-0">
        <a :href="href" class="post-teaser__link is-foreground">
          <v-img :img="imgUrl" :alt="title" class="img-responsive shadow" :cloudinary="true" :preset="this.postTeaserPreset" :img-src-sets="this.postTeaserPreset" />
        </a>
      </div>
      <div :class="columnClasses">
        <div class="post-teaser__date mb-2">
          {{ formattedDate }}
          <a :href="href" v-if="this.author">
            {{ this.author }}
          </a>
        </div>
        <h3 class="post-teaser__title mb-3">
          <a :href="href" class="post-teaser__link" v-html="title"></a>
        </h3>
        <p class="post-teaser__abstract mb-5" v-html="excerpt"></p>
        <ul class="list-inline">
          <li :class="listClasses">
            <tag v-for="tag in postData?.tags" :key="tag" :tag="tag" :spacing="spacing" ></tag>
          </li>
        </ul>
      </div>
    </div>
  `,
};
