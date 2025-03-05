<template>
  <slot :files="structuredList"></slot>
</template>
<script>
export default {
  tagName: 'markdown-files',
  computed: {
    structuredList() {
      const updatedList = [];
      const limitEvents = this.query?.limitEvents;
      const reversed = this.query?.reversed;
      const sort = this.query?.sort[0] || this.sort;

      let eventCount = 0;

      for (const item of this.list) {
        const { description, _path, date, moment, _dir, hideInRecent, webcast, ...rest } = item;

        if (this.isRecent && (hideInRecent || (_dir === 'events' && webcast !== true))) {
          continue;
        }

        if (_dir === 'events' && limitEvents !== undefined) {
          if (eventCount >= limitEvents) {
            continue;
          }
          eventCount++;
        }

        const filteredRest = Object.keys(rest)
          .filter((key) => !this.hideData.includes(key))
          .reduce((obj, key) => {
            obj[key] = rest[key];
            return obj;
          }, {});

        const dateValue = this.cleanDate(this.isDate(moment) ? moment : date ? date : this.extractDate(_path));
        const dateValueOrFallback = dateValue ? dateValue : '2000-01-01';

        updatedList.push({
          url: _path,
          date: dateValueOrFallback,
          moment: dateValueOrFallback,
          excerpt: description,
          ...filteredRest,
        });
      }

      if (sort) {
        const [key, order] = Object.entries(sort)[0];

        updatedList.sort((a, b) => {
          if (a[key] < b[key]) return order === -1 ? 1 : -1;
          if (a[key] > b[key]) return order === -1 ? -1 : 1;

          return 0;
        });
      }

      if (this.limit) {
        const combinedLimit = limitEvents ? this.limit + limitEvents : this.limit;

        return reversed ? updatedList.slice(-combinedLimit) : updatedList.slice(0, combinedLimit);
      }

      return updatedList;
    },
  },
  methods: {
    extractDate(path) {
      if (!path) return null;

      return this.getDate(path);
    },
    getDate(dateString) {
      const datePattern = /\d{4}-\d{2}-\d{2}/;
      const match = dateString.match(datePattern);

      return match ? match[0] : null;
    },
    isDate(dateString) {
      return dateString ? this.getDate(dateString) !== null : null;
    },
    cleanDate(date) {
      if (typeof date === 'string' && date.includes('T')) {
        return date.split('T')[0];
      }

      return date;
    },
  },
  props: {
    list: Array,
    hideData: {
      type: Array,
      default: () => [],
    },
    sort: Object,
    limit: Number,
    query: Object,
    isRecent: Boolean,
  },
};
</script>
