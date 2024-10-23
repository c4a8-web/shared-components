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

        const filteredRest = Object.keys(rest)
          .filter((key) => !this.hideData.includes(key))
          .reduce((obj, key) => {
            obj[key] = rest[key];
            return obj;
          }, {});

        return { url: _path, date: this.extractDate(_path), excerpt: description, ...filteredRest };
      });

      console.log('Structured list:', updatedList);

      return updatedList;
    },
  },
  methods: {
    extractDate(path) {
      if (!path) return null;

      const datePattern = /\d{4}-\d{2}-\d{2}/;
      const match = path.match(datePattern);

      return match ? match[0] : null;
    },
  },
  props: {
    list: Array,
    hideData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
