<template>
  <div :class="blogContainerClassList" v-if="showComponent">
    <div class="row justify-content-lg-between align-items-lg-center mb-7 d-lg-none">
      <!-- Search is currently not used -->
    </div>

    <SharedContentList :data-list="posts" :query="query" v-slot="{ list, authors }">
      <template v-if="list">
        <markdown-files :list="list" v-slot="{ files }" :query="query" :is-recent="true" :strategy="strategy">
          <template v-if="updateFiles(files)">
            <div class="blog__highlight-post d-none d-lg-block" v-if="highlightPost">
              <card
                :title="highlightPost.title"
                :blogtitlepic="blogTitleUrl(highlightPost)"
                :excerpt="highlightPost.excerpt"
                :date="highlightPost.date"
                :url="highlightPost.url"
                :author="highlightPost.author"
                :large="true"
                :hasAnimation="true"
                :externalLanguage="highlightPostExternalLanguage"
                spacing="mt-n48"
                :dataAuthors="authors"
              /></div
          ></template>
          <filter-bar
            :items="files"
            :maxBlogPosts="blogMaxBlogPosts"
            :dataAuthors="authors"
            v-if="showFilter"
            :default-view="defaultView"
            :has-highlight="hasHighlight"
            :enabled-dropdowns="enabledDropdowns"
            :only-view="onlyView"
          />
          <div class="row" v-else-if="showNoPosts">
            <div class="col-lg-12 mt-10 mb-n10">
              <headline level="h3">{{ $t('noPostsFound') }}</headline>
            </div>
          </div>
        </markdown-files>
      </template>
    </SharedContentList>
  </div>
</template>
<script>
import { useI18n, useNuxtApp } from '#imports';

import Tools from '../utils/tools.js';
import useConfig from '../composables/useConfig.js';

export default {
  tagName: 'blog',
  data() {
    return {
      filesValue: [],
    };
  },
  setup() {
    const config = useConfig();
    const { $getLocale } = useI18n();
    const strategy = useNuxtApp().$getI18nConfig?.().strategy ?? 'prefix';

    return {
      config,
      locale: $getLocale(),
      strategy,
    };
  },
  computed: {
    blogContainerClassList() {
      return ['blog container space-bottom-2 space-bottom-lg-3', !this.hasHighlight ? 'mt-lg-7' : ''];
    },
    showNoPosts() {
      return this.filesValue.length === 0;
    },
    showFilter() {
      return this.filesValue.length > 1;
    },
    imgUrl() {
      return Tools.getBlogImgPath(this.config);
    },
    highlightPost() {
      if (!this.hasHighlight) return;

      const firstPostArray = this.filesValue.slice(0, 1);

      return firstPostArray ? firstPostArray[0] : null;
    },
    highlightPostExternalLanguage() {
      return Tools.getExternalLanguageText(this.locale, this.highlightPost.lang, this.$t);
    },
    showComponent() {
      return this.posts?.length > 0 || this.query;
    },
    query() {
      let query = {};

      query.limit = this.blogMaxBlogPosts;
      query.sort = [{ moment: this.reversed ? 1 : -1 }];
      query.reversed = this.reversed;

      query.where = {
        path: { LIKE: ['/posts/%'] },
      };
      query.path = 'posts';

      if (this.locale === 'es') {
        // Add english posts to spanish ones
        query.additionalCollections = ['content_en'];
      }

      return query;
    },
  },
  methods: {
    blogTitleUrl(post) {
      if (post.image?.img) {
        return post.image.img;
      } else {
        return this.imgUrl + post.blogtitlepic;
      }
    },
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    posts: {
      type: Array,
    },
    blogMaxBlogPosts: {
      type: Number,
      default: 100,
    },
    paginator_page: Number,
    paginator_total_pages: Number,
    paginator_previous_page: Number,
    paginator_previous_page_path: String,
    paginator_next_page: Number,
    paginator_next_page_path: String,
    hasHighlight: {
      type: Boolean,
      default: true,
    },
    defaultView: {
      type: String,
      default: 'tile-view',
    },
    onlyView: {
      type: String,
    },
    enabledDropdowns: {
      type: Array,
      default: () => ['author', 'categories', 'tags'],
    },
    reversed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.blog__highlight-post {
  @include z-index;

  position: relative;
}
</style>
