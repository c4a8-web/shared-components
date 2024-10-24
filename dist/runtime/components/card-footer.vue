<template>
  <div class="card__footer">
    <div class="card__tags" v-if="tags">
      <tag v-for="tag in tagsList" :key="tag" :tag="tag" variant="small" :lang="lang"></tag>
    </div>
    <div class="card__footer-infos d-flex align-items-end mt-auto">
      <div :class="['card__date d-flex font-size-1 mr-3', isRow ? '' : 'media-body']">
        {{ date }}
      </div>
      <div class="card__authors" v-if="author">
        <authors :authorsList="authorsList" :noLink="hasNoLink" :dataAuthors="dataAuthorsList"></authors>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'card-footer',
  data() {
    return {
      maxTags: 3,
    };
  },
  computed: {
    lang() {
      return Tools.getLang();
    },
    tagsList() {
      let tags = Array.isArray(this.tags) ? this.tags : this.tags.split(',');

      return tags.slice(0, this.maxTags);
    },
    dataAuthorsList() {
      if (!this.dataAuthors) return null;

      if (!this.dataAuthors.display_name) return this.dataAuthors;

      return { [this.dataAuthors.display_name]: this.dataAuthors };
    },
  },
  props: {
    classes: String,
    date: String,
    author: {
      type: [String, Array],
    },
    authorsList: Array,
    hasNoLink: Boolean,
    dataAuthors: Object,
    isRow: Boolean,
    tags: Array,
  },
};
</script>
