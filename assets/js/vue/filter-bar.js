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
      <div class="row mb-5 utility-animation fade-in-bottom" data-utility-animation-step="1">
        <div class="col-12">
          <headline level="h3" classes="h2-font-size mb-0" :text="title"></headline>
        </div>
      </div>
      <grid-list :items="storedItems" :view="activeView" :data-authors="dataAuthorsValue" />
      <div class="row mb-3 utility-animation__group" style="display: none">
        <template v-for="(post, index) in storedItems">
          <div class="col-sm-6 col-lg-4 mb-3 mb-sm-8" v-if="index > 0">
            <card
              :title="post.title"
              :excerpt="post.excerpt"
              :date="post.date"
              :url="post.url"
              :author="post.author"
              :hasAnimation="true"
              :index="index"
              :data-authors="dataAuthorsValue"
            />
          </div>
        </template>
      </div>
    </div>
  `,
};
