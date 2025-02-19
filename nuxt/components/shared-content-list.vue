<template>
  <template v-if="!isStorybook">
    <ContentList :query="localeQuery">
      <template #default="{ list }">
        <slot v-bind:list="list" />
      </template>
      <template #not-found></template>
    </ContentList>
  </template>
  <template v-else>
    <slot v-bind:list="dataList"></slot>
  </template>
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
