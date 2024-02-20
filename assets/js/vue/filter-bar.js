import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'filter-bar',
  computed: {
    storedItems() {
      return this.$root.StoreData.blogItems ? this.$root.StoreData.blogItems() : [];
    },
    dataAuthorsValue() {
      return Tools.getJSON(this.dataAuthors);
    },
    normalizedItems() {
      return this.storedItems.map((item) => {
        return {
          ...item,
          blogtitlepic: `${item.blog_image_path}${item.blogtitlepic}`,
        };
      });
    },
  },
  created() {
    this.$root.StoreData.blogItems = this.$root.Store(Tools.getJSON(this.items));
    this.$root.StoreData.blogView = this.$root.Store(this.activeView);
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData(['onlyLanguage']);
      });
    }
  },
  methods: {
    handleView(view) {
      this.activeView = view;

      this.$root.StoreData.blogView(this.activeView);
    },
    toggleIconClasses(view) {
      return ['filter-bar__toggle-icon', view === this.activeView ? State.ACTIVE : ''];
    },
    title(postData) {
      if (postData?.lang !== this.lang && postData.lang !== '' && this.translationData?.onlyLanguage) {
        return `${postData.title} (${this.translationData?.onlyLanguage})`;
      }

      return postData?.title;
    },
  },
  data() {
    return {
      activeView: 'tile-view',
      views: ['tile-view', 'list-view'],
    };
  },
  props: {
    spacing: String,
    items: String,
    title: String,
    maxBlogPosts: Number,
    dataAuthors: String,
  },
  template: `
    <div class="filter-bar">
      <div class="filter-bar__controls">
        <div class="filter-bar__selection">
          SELECTION
        </div>
        <div class="filter-bar__views">
          <div class="filter-bar__toggle">
            <div :class="toggleIconClasses(view)" @click="handleView(view)" v-for="view in views">
              <icon :icon="view" size="small" />
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters mb-5 utility-animation fade-in-bottom" data-utility-animation-step="1">
        <div class="col-12">
          <headline level="h3" classes="h2-font-size mb-0" :text="title"></headline>
        </div>
      </div>
      <grid-list :items="normalizedItems" :view="activeView" :data-authors="dataAuthorsValue" />
    </div>
  `,
};
