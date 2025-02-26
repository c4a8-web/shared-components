<template>
  <ContentList :query="localeQuery" v-if="!isStorybook">
    <template #default="{ list }">
      <slot v-bind:list="list" />
    </template>
    <template #not-found><div></div></template>
  </ContentList>
  <slot v-bind:list="dataList" v-else></slot>
</template>

<script>
import Tools from '../utils/tools.js';
import { useI18n } from 'vue-i18n';

export default {
  name: 'SharedContentList',
  computed: {
    isStorybook() {
      return Tools.isStorybook();
    },
    localeQuery() {
      const { locale } = useI18n();

      return {
        ...this.query,
        where: {
          ...this.query.where,
          _locale: locale.value,
        },
      };
    },
  },
  props: {
    query: Object,
    dataList: Array,
  },
};
</script>
