<template>
  <slot :files="structuredList"></slot>
</template>
<script>
export default {
  tagName: 'markdown-files',
  computed: {
    structuredList() {
      const updatedList = this.list.map((item) => {
        const { description, _path, ...rest } = item;

        return { url: _path, excerpt: description, ...rest };
      });

      console.log('Structured list:', updatedList);

      return updatedList;
    },
  },
  props: {
    list: Array,
  },
};
</script>
