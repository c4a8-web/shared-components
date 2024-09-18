import Tools from "../assets/js/tools.js";

export default {
  tagName: "post-teaser",
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
        return date.split("-").reverse().join(".");
      }

      return;
    },
    classList() {
      return [
        "post-teaser",
        this.classes !== "" ? this.classes : "",
        "vue-component",
      ];
    },
    title() {
      if (
        this.postData?.lang !== this.lang &&
        this.postData.lang !== "" &&
        this.translationData?.onlyLanguage
      ) {
        return `${this.postData.title} (${this.translationData?.onlyLanguage})`;
      }

      return this.postData?.title;
    },
    excerpt() {
      const maxWords = 30;

      return Tools.decodeHTML(
        Tools.truncateWords(this.postData?.excerpt, maxWords)
      );
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
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          "onlyLanguage",
        ]);
      });
    }
  },
  props: {
    classes: String,
    post: Object,
    tag: String,
    site: Object,
    lang: String,
  },
  template: `
    <div class="post-teaser mb-8 row vue-component" :data-tags="tag">
      <div class="post-teaser__img-container col-sm-4 mb-4 mb-sm-0">
        <a :href="href" class="post-teaser__link is-foreground">
          <v-img :img="imgUrl" :alt="title" class="img-responsive shadow" :cloudinary="true" preset="postTeaser" img-src-sets="postTeaser" />
        </a>
      </div>
      <div class="col-sm-8">
        <div class="post-teaser__date mb-2">
          {{ formattedDate }}
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
