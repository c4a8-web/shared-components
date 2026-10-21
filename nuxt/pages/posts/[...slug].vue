<template>
  <tracking />
  <content>
    <post-detail :post="post" :share-url="shareUrl" />
    <contact
      v-bind="contactInContent.infos"
      :contact="contactInContent.infos"
      :quote="contactInContent.quote"
      spacing="mt-10"
      v-if="contactInContent"
    />
    <text-image
      v-bind="textImageTeaser"
      :headline="null"
      :headline-text="textImageTeaser.headline"
      v-if="textImageTeaser"
    />
    <blog-recent v-bind="blogRecentData" v-if="showBlogRecent" />
  </content>
</template>
<script setup>
import {
  useRoute,
  useAsyncData,
  queryCollection,
  useNuxtApp,
  useRequestURL,
  useDynamicPageMeta,
  useI18n,
  useRuntimeConfig,
  useSeo,
  useSchemaOrg,
  defineArticle,
} from '#imports';

import { computed } from 'vue';
import Tools from '../../utils/tools.js';

const route = useRoute();

const { $t: t } = useI18n();

const nuxtApp = useNuxtApp();
const strategy = nuxtApp.$getI18nConfig?.().strategy ?? 'prefix';
const currentLocale = nuxtApp.$getLocale();

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/');
const dataKey = Tools.getDataKey('post', null, currentLocale, path);
const shareUrl = `${useRequestURL().origin}${route.path}`;

const config = useRuntimeConfig();
const postsMapping = config.public.postsMapping || {};

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale;
  const queryPath = postsMapping[route.path] || postsMapping[route.path.replace(/\/$/, '')] || path;
  const query = queryCollection(collectionName).path(queryPath);

  return query.first();
});

const contactInContent = computed(() => post.value?.meta?.contactInContent);
const textImageTeaser = computed(() => post.value?.meta?.textImageTeaser);
const blogRecentData = computed(() => {
  return {
    limit: 15,
    headline: t('similarPosts'),
    slider: true,
    tag: post.value?.meta?.tags,
    spacing: contactInContent.value ? '' : 'mt-10',
  };
});

const showBlogRecent = computed(() => {
  return strategy === 'prefix';
});

dynamicMeta.value = {
  footer: post.value?.meta?.footer,
};

const { data: authorsData } = await useAsyncData('authors_data', () => queryCollection('authors_data').first());

const articleAuthors = computed(() => {
  const names = post.value?.author;

  if (!Array.isArray(names)) return [];

  const knownAuthors = authorsData.value?.meta || {};

  return names.filter(Boolean).map((name) => {
    const author = knownAuthors[name];
    const permalink = author?.permalink ? Tools.addPathPrefix(author.permalink, currentLocale.value, strategy) : null;

    const slug = author?.permalink?.split('/').filter(Boolean).pop();

    return {
      '@type': 'Person',
      ...(slug ? { '@id': `#/schema/person/${slug}` } : {}),
      name: author?.display_name || name,
      ...(permalink ? { url: permalink } : {}),
    };
  });
});

if (post.value) {
  const baseSocialImg = post.value.meta?.socialimg;
  const socialImg = baseSocialImg?.startsWith('/') ? baseSocialImg.slice(1) : baseSocialImg;
  const socialImgUrl = socialImg ? `https://res.cloudinary.com/c4a8/image/upload/${socialImg}` : null;

  useSeo({
    title: post.value.meta?.seoTitle,
    description: post.value.meta?.customExcerpt ?? null,
    keywords: post.value.meta?.keywords ?? null,
    image: socialImgUrl,
  });

  useSchemaOrg([
    defineArticle({
      '@type': 'BlogPosting',
      headline: post.value.title || post.value.meta?.seoTitle,
      ...(post.value.meta?.customExcerpt ? { description: post.value.meta.customExcerpt } : {}),
      ...(socialImgUrl ? { image: { '@type': 'ImageObject', '@id': socialImgUrl, url: socialImgUrl } } : {}),
      ...(post.value.meta?.keywords ? { keywords: post.value.meta.keywords } : {}),
      ...(post.value.meta?.date ? { datePublished: post.value.meta.date } : {}),
      ...(post.value.moment || post.value.meta?.date
        ? { dateModified: post.value.moment || post.value.meta.date }
        : {}),
      ...(articleAuthors.value.length ? { author: articleAuthors.value } : {}),
    }),
  ]);
}
</script>
