<template>
  <template v-if="!isStorybook">
    <ContentList :query="query" v-slot="{ list }">
      <slot v-bind:list="list" />
    </ContentList>
  </template>
  <template v-else>
    <slot v-bind:list="dataList"></slot>
  </template>
</template>

<script>
import Tools from '../utils/tools.js';

export default {
  name: 'SharedContentList',
  computed: {
    isStorybook() {
      return Tools.isStorybook();
    },
  },
  props: {
    query: Object,
    dataList: Array,
  },
};
</script>
