<template>
  <div class="author" v-if="person">
    <div v-if="personData">
      <div class="row mb-4 mb-lg-5" style="display: none">
        <author-avatar
          class-list="col-6 col-sm-4 col-lg-2 pl-lg-0 mb-5 mb-lg-0"
          :author="person"
          :img-url="imageUrl"
          v-if="imageUrl"
        />
        <div class="author__meta col-lg-8 mt-lg-5 mb-2 mb-lg-0">
          <span itemprop="author" itemscope itemtype="http://schema.org/Person">
            <headline level="h1" classes="author__name h2" itemprop="name">{{ personData.display_name }}</headline>
          </span>
        </div>
      </div>
      <author-header :img-url="imageUrl" :author="personData" :post-count="postCount" />
      <div class="author__intro-block row">
        <div class="author__intro font-size-2 col-lg-8 pl-lg-0">
          <ContentRenderer :value="intro" tag="p" />
        </div>
        <div :class="['author__socials col-lg-4', hasSocials ? 'pt-lg-4' : '']" v-if="showSocials">
          <services v-bind="servicesData" />
        </div>
      </div>
      <div class="author__events row mt-lg-5" v-if="events && events.length > 0">
        <event-overview :events="events" :sort-by="sortBy" />
      </div>
      <div class="author__posts">
        <div class="author__posts-list mt-6 pt-6">
          <grid-list :items="posts" view="list-view" :data-authors="dataAuthors" />
        </div>
      </div>
    </div>
  </div>
  <div v-else><headline>Author not found</headline></div>
</template>
<script>
import { useI18n } from '#imports';

import { useAppStore } from '../stores/app';

export default {
  tagName: 'author',
  data() {
    return {
      sortBy: {
        moment: -1,
      },
    };
  },
  setup() {
    const { $getLocale } = useI18n();
    const store = useAppStore();

    return { locale: $getLocale(), store };
  },
  computed: {
    postCount() {
      return this.posts?.length || 0;
    },
    introText() {
      if (this.locale === 'de') return this.person?.description;

      const fallbackLocale = 'en';
      let description = this.person?.otherLanguages[this.locale];

      if (description) return description;

      description = this.person?.otherLanguages[fallbackLocale];

      return description;
    },
    intro() {
      return {
        body: { type: 'minimal', value: [this.introText] },
      };
    },
    imageUrl() {
      return this.personData ? '' + this.personData?.avatar : '';
    },
    hasSocials() {
      return this.personData?.socials;
    },
    servicesData() {
      return {
        author: this.personData,
        title: this.person.title,
      };
    },
    showSocials() {
      return this.personData?.twitter || this.personData?.linkedin;
    },
  },
  mounted() {
    this.store.setPageIsLoaded(true);
  },
  props: {
    person: {
      type: Object,
    },
    personData: {
      type: Object,
    },
    posts: {
      type: Array,
    },
    events: {
      type: Array,
    },
    dataAuthors: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.author__posts-list {
  width: 100%;
}
</style>
