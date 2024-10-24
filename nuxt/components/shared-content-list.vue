<template>
  <template v-if="!isStorybook">
    <ContentList :query="query">
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

// v-slot="{ list }"

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
