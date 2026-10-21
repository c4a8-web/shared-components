<template>
  <slot v-bind:list="contentList" :authors="authors" :strategy="strategy" />
</template>

<script setup>
import { useI18n, useNuxtApp } from '#imports';
import { computed } from 'vue';
import { useAsyncData, queryCollection } from '#imports';
import { reduceAuthors } from '../composables/useAuthors';
import Tools from '../utils/tools';

const props = defineProps({
  query: {
    type: Object,
    required: true,
  },
  dataList: {
    type: Array,
    default: () => [],
  },
});

const { $getLocale } = useI18n();
const strategy = useNuxtApp().$getI18nConfig?.().strategy ?? 'prefix';

const localeQuery = computed(() => ({
  ...props.query,
  where: {
    ...props.query.where,
  },
}));

// A supplied dataList must key its own cache entry: the prerenderer shares one
// useAsyncData cache across routes, and two pages with the same query but different
// lists (e.g. blog vs glossary) would otherwise render each other's data.
const dataKey =
  props.query?.key ||
  Tools.getDataKey(
    'content',
    props.dataList.length > 0 ? { list: props.dataList.map((item) => item.path ?? item.id) } : props.query,
    $getLocale()
  );

const filterDuplicateItems = (items) => {
  const seen = new Map();

  return items.filter((item) => {
    const normalizedPath = item.path?.replace(/-(en|es)(\.md)?$/, '');

    if (!normalizedPath) return true;

    if (seen.has(normalizedPath)) {
      return false;
    }

    seen.set(normalizedPath, true);

    return true;
  });
};

const getPrimarySort = (lQuery) => {
  if (!Array.isArray(lQuery.sort) || lQuery.sort.length === 0) return null;

  const [field, direction] = Object.entries(lQuery.sort[0])[0];

  return { field, direction: direction === 1 ? 'ASC' : 'DESC' };
};

const buildQuery = (collectionName, { missingSortField = false } = {}) => {
  const query = queryCollection(collectionName);

  let queryBuilder = query;
  const lQuery = localeQuery.value;
  const primarySort = getPrimarySort(lQuery);

  if (lQuery.where && Object.keys(lQuery.where).length > 0) {
    Object.entries(lQuery.where).forEach(([field, condition]) => {
      if (typeof condition === 'object') {
        Object.entries(condition).forEach(([operator, value]) => {
          queryBuilder = queryBuilder.where(field, operator, value);
        });
      } else {
        queryBuilder = queryBuilder.where(field, '=', condition);
      }
    });
  }

  if (missingSortField) {
    queryBuilder = queryBuilder.where(primarySort.field, 'IS NULL').order('stem', primarySort.direction);
  } else {
    if (primarySort && lQuery.limit) {
      queryBuilder = queryBuilder.where(primarySort.field, 'IS NOT NULL');
    }

    if (Array.isArray(lQuery.sort)) {
      lQuery.sort.forEach((sortItem) => {
        Object.entries(sortItem).forEach(([field, direction]) => {
          queryBuilder = queryBuilder.order(field, direction === 1 ? 'ASC' : 'DESC');
        });
      });
    }
  }

  if (lQuery.limit) {
    queryBuilder = queryBuilder.limit(lQuery.limit);
  }

  return queryBuilder;
};

const KEEP_TOP = new Set([
  'id',
  'path',
  'stem',
  'meta',
  'description',
  'moment',
  'hideInRecent',
  'webcast',
  'layout',
  'title',
  'author',
  'cta',
  'tags',
]);
const DROP_META = new Set([
  'keywords',
  'contactInContent',
  'seoTitle',
  'socialimg',
  'titleClass',
  'scripts',
  'asideNav',
  'maxContent',
  'quotes',
  'footer',
  'textImageTeaser',
  'published',
]);

const projectForList = (doc) => {
  const projected = {};

  for (const [key, value] of Object.entries(doc)) {
    if (!KEEP_TOP.has(key)) continue;

    if (key === 'meta' && value && typeof value === 'object') {
      projected.meta = Object.fromEntries(
        Object.entries(value).filter(([metaKey]) => !DROP_META.has(metaKey) && !metaKey.startsWith('quote'))
      );
    } else {
      projected[key] = value;
    }
  }

  return projected;
};

const fetchCollection = async (collectionName) => {
  const lQuery = localeQuery.value;
  const results = (await buildQuery(collectionName).all()).map(projectForList);

  if (!getPrimarySort(lQuery) || !lQuery.limit) return results;

  const missingSortFieldResults = (await buildQuery(collectionName, { missingSortField: true }).all()).map(
    projectForList
  );

  return [...results, ...missingSortFieldResults];
};

const buildList = async () => {
  const mainCollection = 'content_' + $getLocale();
  const mainResults = await fetchCollection(mainCollection);

  if (!props.query.additionalCollections?.length) {
    return mainResults;
  }

  const additionalResults = await Promise.all(
    props.query.additionalCollections.map((collection) => fetchCollection(collection))
  );

  return filterDuplicateItems([...mainResults, ...additionalResults.flat()]);
};

// Ship only the authors the listed posts reference, not the whole authors map.
const referencedAuthors = async (docs) => {
  const names = docs.flatMap((doc) => (doc?.author ? [].concat(doc.author) : []));

  if (names.length === 0) return null;

  const doc = await queryCollection('authors_data').first();

  return doc?.meta ? reduceAuthors(doc.meta, names) : null;
};

const { data: asyncData } = await useAsyncData(dataKey, async () => {
  const list = props.dataList.length > 0 ? props.dataList : await buildList();

  return { list, authors: await referencedAuthors(list) };
});

const contentList = computed(() => asyncData.value?.list || null);
const authors = computed(() => asyncData.value?.authors || null);
</script>
