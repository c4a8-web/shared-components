<template>
  <slot :files="structuredList"></slot>
</template>
<script>
import { useI18n } from '#imports';

export default {
  tagName: 'markdown-files',
  setup() {
    const { $getLocale } = useI18n();

    return { currentLocale: $getLocale() };
  },
  computed: {
    structuredList() {
      const updatedList = [];

      if (!this.list) return;

      // TODO refactor this to use the helper i Tools

      const limitEvents = this.query?.limitEvents;
      const reversed = this.query?.reversed;
      const sort = this.query?.sort[0] || this.sort;
      const defaultLang = this.currentLocale || 'de';

      let eventCount = 0;

      for (const item of this.list) {
        const { seo, path, date, moment, _dir, hideInRecent, webcast, meta, ...rest } = item;

        if (this.isRecent && (hideInRecent || (_dir === 'events' && webcast !== true))) {
          continue;
        }

        if (_dir === 'events' && limitEvents !== undefined) {
          if (eventCount >= limitEvents) {
            continue;
          }
          eventCount++;
        }

        const filteredRest = Object.keys({ ...rest, ...meta })
          .filter((key) => !this.hideData.includes(key))
          .reduce((obj, key) => {
            obj[key] = meta?.[key] || rest[key];
            return obj;
          }, {});

        const dateValue = this.cleanDate(this.isDate(moment) ? moment : date ? date : this.extractDate(path));

        const processedItem = {
          url: path,
          date: dateValue,
          moment: dateValue,
          excerpt: meta.customExcerpt || seo?.description || rest.description || meta.content?.intro,
          ...filteredRest,
        };

        if (typeof processedItem.lang !== 'string') {
          processedItem.lang = defaultLang;
        }

        processedItem.url = this.addPathPrefix(path, processedItem.lang, this.strategy);

        if (this.hideItems && this.hideItems(processedItem)) {
          continue;
        }

        updatedList.push(processedItem);
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
    addPathPrefix(path, lang, strategy) {
      return strategy === 'prefix' ? `/${lang}${path}` : path;
    },
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
    hideItems: {
      type: Function,
      default: null,
    },
    strategy: {
      type: String,
    },
  },
};
</script>
