<template>
  <article
    v-if="normalizedPost"
    class="post post-detail h-entry content-grid--extended"
    :class="{ 'post-detail--aside-nav': asideNavValue, 'space-top-2 space-top-lg-4': !noHeader }"
    itemscope
    :itemtype="isTechArticle ? 'http://schema.org/TechArticle' : 'http://schema.org/BlogPosting'"
    ref="article"
  >
    <header class="post-header" v-if="!noHeader">
      <h1
        class="post-title p-name"
        :class="normalizedPost.titleClass || 'h2-font-size'"
        itemprop="name headline"
        v-html="normalizedPost.title"
      ></h1>
      <div class="py-4 mt-5">
        <div class="row align-items-md-center">
          <div class="col-md-7 mb-5 mb-md-0" v-if="post.author">
            <div class="media align-items-center">
              <div v-for="person in avatars" :key="person" class="avatar mr-2">
                <author-avatar
                  v-if="authors && authors[person]?.avatar"
                  :img-url="authors[person]?.avatar"
                  :author="authors[person]"
                />
              </div>
              <div class="media-body font-size-1" :class="{ 'ml-3': avatars.length > 0 }">
                <authors :authors-list="normalizedPost.author" :data-authors="authors" />
              </div>
            </div>
          </div>
          <div class="col-md-5 align-self-end pr-lg-0" :class="{ 'pl-lg-0': !post.author }">
            <div class="text-muted font-size-1" :class="{ 'text-right': post.author }">
              <time v-if="formattedDateXml" class="dt-published" :datetime="formattedDateXml" itemprop="datePublished">
                {{ formattedDate }}
              </time>
            </div>
          </div>
        </div>
      </div>
    </header>
    <p class="post__sticky-excerpt" v-html="normalizedPost.customExcerpt || normalizedPost.excerpt"></p>
    <div v-if="post.blogTitleImages" class="post__title-images">
      <slider :hide-background="true">
        <v-img
          v-for="(postTitleImage, index) in normalizedPost.blogTitleImages"
          :key="index"
          :cloudinary="postTitleImage.cloudinary"
          :img="postTitleImage.img"
        />
      </slider>
    </div>
    <div v-else-if="normalizedPost.blogtitlepic" class="post__intro-img">
      <v-img
        :img="blogImagePath + normalizedPost.blogtitlepic"
        :cloudinary="true"
        :alt="normalizedPost.title"
        img-src-sets="postImages"
      />
      <figcaption v-if="normalizedPost.blogtitlepicsubline">{{ normalizedPost.blogtitlepicsubline }}</figcaption>
    </div>
    <sticky-block
      v-if="shouldShowStickyBlocks"
      class="post__sticky-bar"
      :class="{ 'has-side-bar': asideNavValue }"
      :sticky-offset-top="stickyOffsetTop"
      :has-padding="!asideNavValue"
      breakpoint="lg"
      :calculate-height="true"
    >
      <aside-nav v-if="asideNavValue" v-bind="asideNavValue" />
      <socials :vertical="true" :hide-label="true" :author="null" :share-url="shareUrl" v-else />
    </sticky-block>

    <shared-content-renderer
      :value="enhancedPost"
      tag="main"
      :class="contentWidth"
      itemprop="articleBody"
      :components="{ a: ContentRendererLink }"
    />
    <div class="post-detail__tags mt-5" :class="tagsWidth" v-if="!noTags">
      <div class="post-detail__tags-list">
        <tag v-for="(tag, index) in normalizedPost.tags" :key="index" :tag="tag" variant="small" />
      </div>
    </div>
    <aside-nav v-if="!shouldShowStickyBlocks && asideNavValue" v-bind="asideNavValue" />
  </article>
  <div v-else>
    <h1>Post not found</h1>
  </div>
</template>

<script>
import Tools from '../utils/tools.js';
import { useAppStore } from '../stores/app';
import useAuthors from '../composables/useAuthors.js';
import { ref } from 'vue';
import ContentRendererLink from './content-renderer-link.vue';

export default {
  tagName: 'post-detail',
  components: {
    ContentRendererLink,
  },
  setup(props) {
    const { authors } = useAuthors(props.post?.author);
    const isAtEnd = ref(false);
    const endPoint = ref(null);
    const stickyContentHeight = ref(0);
    const store = useAppStore();

    return {
      authors,
      isAtEnd,
      endPoint,
      stickyContentHeight,
      store,
      ContentRendererLink,
    };
  },
  data() {
    return {
      shouldShowStickyBlocks: false,
    };
  },
  mounted() {
    this.checkStickyBlocks();

    window.addEventListener('resize', this.checkStickyBlocks);

    if (!this.normalizedPost) return Tools.gotoHome();

    this.store.setPageIsLoaded(true);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkStickyBlocks);
  },
  methods: {
    checkStickyBlocks() {
      this.shouldShowStickyBlocks = !this.asideNavValue || !Tools.isBelowBreakpoint('lg');
    },
  },
  computed: {
    contentWidth() {
      return [
        'richtext full-width',
        this.asideNavValue ? 'content-grid--side-bar' : 'content-grid',
        this.post?.meta?.maxContent === true ? 'richtext--full-width' : null,
      ];
    },
    tagsWidth() {
      return this.asideNavValue ? 'full-width content-grid--side-bar' : null;
    },
    stickyOffsetTop() {
      return this.asideNavValue ? 124 : 100;
    },
    asideNavValue() {
      return this.post?.meta?.asideNav || null;
    },
    enhancedPost() {
      if (!this.normalizedPost) return null;

      return {
        ...this.normalizedPost,
        body: {
          ...this.normalizedPost.body,
          value: Tools.applyKramdownAttrs(this.normalizedPost.body.value),
        },
      };
    },
    normalizedPost() {
      return this.post ? Tools.normalizeMarkdownItem(this.post) : null;
    },
    avatars() {
      const authors = this.normalizedPost?.author;

      return authors.filter((person) => this.authors && this.authors[person]?.avatar);
    },
    blogImagePath() {
      return Tools.blogImagePath;
    },
    formattedDate() {
      if (!this.normalizedPost?.date) return '';

      const date = new Date(this.normalizedPost.date);

      return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },
    formattedDateXml() {
      if (!this.normalizedPost?.date) return '';

      const date = new Date(this.normalizedPost.date);
      return date.toISOString();
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    shareUrl: {
      type: String,
      default: '',
    },
    noHeader: {
      type: Boolean,
      default: false,
    },
    noTags: {
      type: Boolean,
      default: false,
    },
    isTechArticle: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.post,
.post-detail {
  --post-paragraph-line-height: 2;
}
@media (min-width: 992px) {
  .post .post-header,
  .post-detail .post-header {
    grid-row: 1;
  }
}
@media (min-width: 992px) {
  .post .post__sticky-excerpt,
  .post-detail .post__sticky-excerpt {
    grid-row: 2;
  }
}
@media (min-width: 992px) {
  .post .post__intro-img,
  .post-detail .post__intro-img {
    grid-row: 3;
  }
}

.post-detail {
  overflow: clip;
}
.post-detail.post-detail--aside-nav .aside-nav {
  padding-top: 0.75rem;
}
.post-detail.post-detail--aside-nav > .post-detail__tags > .post-detail__tags-list {
  grid-column: content;
}
.post-detail .headline {
  scroll-margin-top: 100px;
}
.post-detail .headline {
  scroll-margin-top: 100px;
}

.post {
  container-type: normal;
}
.post .full-width-container {
  overflow: visible;
}
.post .post-title.h3-font-size {
  font-size: 1.625rem;
  font-weight: bold;
}
@media (min-width: 992px) {
  .post .post-title.h3-font-size {
    font-size: calc(2.5rem / 1.3);
  }
}
@media (min-width: 1200px) {
  .post .post-title.h3-font-size {
    font-size: 1.75rem;
  }
}
.post .post__screenshot {
  left: 50%;
  transform: translateX(-50%);
}
.post .sticky-block__start .socials {
  padding-top: 0.75rem;
}

.post__screenshot {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.post main > p:not(.post__sticky-excerpt) {
  line-height: var(--post-paragraph-line-height);
}
.post main > p:last-of-type {
  margin-bottom: 0;
}
.post main > p:last-of-type img {
  margin-bottom: 0;
}
.post main .prose-p:not(.post__sticky-excerpt) {
  line-height: var(--post-paragraph-line-height);
}
@media (min-width: 992px) {
  .post main .aside-wrapper {
    grid-column: content-text-start/content-end;
  }
}
@media (min-width: 992px) {
  .post main.content-grid--side-bar .aside-wrapper {
    grid-column: content-start/content-end;
  }
}
@media (min-width: 992px) {
  .post main {
    grid-row: 4;
  }
}
.post iframe:not(.video-frame__iframe):not(.video__iframe) {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.post > img:first-of-type {
  margin-top: 0;
}
.post > img:first-of-type + figcaption {
  margin-top: -2rem;
  margin-bottom: 2.5rem;
}
@media (min-width: 992px) {
  .post > img:first-of-type + figcaption {
    position: relative;
    margin-top: -3rem;
    margin-bottom: 3.5rem;
  }
}
.post .richtext > picture > img,
.post .richtext > .img__picture-wrapper img,
.post .richtext > img,
.post p > img:not(.post__screenshot) {
  border-radius: 0;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
@media (min-width: 992px) {
  .post iframe:not(.video-frame__iframe):not(.video__iframe) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
@media (min-width: 1200px) {
  .post .post__sticky-bar,
  .post .post__intro-img {
    grid-column: breakout;
  }
}

.post__intro-img .img__picture-wrapper img,
.post__intro-img > img {
  border-radius: 0;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
@media (min-width: 992px) {
  .post__intro-img .img__picture-wrapper img,
  .post__intro-img > img {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
}

.post .p-prose.has-img {
  margin-bottom: 0;
}
@media (min-width: 992px) {
  .post .p-prose.has-img {
    position: relative;
    z-index: 2;
  }
}
@media (min-width: 1200px) {
  .post .p-prose.has-img {
    grid-column: breakout;
  }
}

.post__sticky-bar {
  grid-column: content;
}
.post__sticky-bar.post__sticky-bar--lg-only {
  display: none;
}
@media (min-width: 992px) {
  .post__sticky-bar.post__sticky-bar--lg-only {
    display: flex;
  }
}
@media (min-width: 992px) {
  .post__sticky-bar {
    grid-row: 4;
    width: var(--breakout-size);
    margin-bottom: 0;
    transform: translateY(-8px);
    z-index: 1;
  }
  .post__sticky-bar.has-side-bar {
    width: calc(var(--breakout-size) + var(--sidebar-size));
  }
}
@media (min-width: 1200px) {
  .post__sticky-bar {
    display: flex;
  }
}

.post__sticky-excerpt {
  padding-top: 0.75rem;
}
.post__sticky-excerpt {
  font-size: 1.25rem;
  line-height: 1.6em;
}
@media (min-width: 992px) {
  .post__sticky-excerpt {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .post__sticky-excerpt {
    font-size: 1.5625rem;
    line-height: 1.6em;
  }
}
.post__sticky-excerpt {
  font-weight: 100 !important;
}
.post__sticky-excerpt strong {
  font-weight: inherit;
}

.post__title-images {
  padding-top: 1px;
  margin-top: -1px;
}
@media (max-width: 991.98px) {
  .post__title-images.full-width .slider .slider__wrapper {
    padding-left: 0;
    padding-right: 0;
  }
}
@media (min-width: 992px) {
  .post__title-images.full-width .slider .slider__wrapper {
    padding: 0 3.5rem;
  }
  .post__title-images.full-width .slider .wrapper-slot-items__item {
    padding: 0 1rem;
  }
}
@media (min-width: 1200px) {
  .post__title-images.full-width .slider {
    width: 100vw;
  }
  .post__title-images.full-width .slider .slider__wrapper {
    padding: 0 4.5rem;
  }
}
</style>
