export default {
  tagName: 'author-header',
  data() {
    return {
      translationData: {},
    };
  },
  computed: {
    classList() {
      return ['author__header row mb-4 mb-lg-5 vue-component', this.classes ? this.classes : ''];
    },
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData(['posts']);
      });
    }
  },
  methods: {},
  props: {
    author: {
      default: null,
    },
    classes: String,
    imgUrl: String,
    postCount: Number,
  },
  template: `
    <div :class="classList">
      <div class="author-header__back back back--animated">
        <icon icon='arrow' direction='left' hover=true circle=true />
      </div>
      <author-avatar :author="author" :imgUrl="imgUrl" classes="col-6 col-sm-4 col-lg-2 pl-lg-0 mb-5 mb-lg-0"></author-avatar>
      <div class="author-header__meta col-lg-8 mt-lg-5 mb-2 mb-lg-0">
        <span itemprop="author" itemscope itemtype="http://schema.org/Person">
          <h1 class="author-header__name h2" itemprop="name">{{ author.display_name }}</h1>
        </span>
        <span class="author-header__post-count">{{ postCount }}</span> <span class="ml-1">{{ translationData?.posts }}</span>
      </div>
    </div>
  `,
};
