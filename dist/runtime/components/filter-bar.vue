<template>
  <div class="filter-bar">
    <div class="filter-bar__controls">
      <div class="filter-bar__selection">
        <div class="filter-bar__dropdowns">
          <dropdown
            v-for="(dropdownItem, index) in filterDropdowns"
            v-bind="dropdownItem"
            @dropdown-changed="handleDropdownChange($event, index)"
            @dropdown-opened="handleDropdownOpened"
            ref="dropdowns"
            :has-animation="true"
            :key="index"
            :index="index"
          />
        </div>
        <div class="filter-bar__tags">
          <tag
            class="filter-bar__tag"
            :tag="selection.text"
            :key="index"
            v-for="(selection, index) in flatSelections"
            variant="icon"
            @click="removeSelection($event, selection)"
          />
          <a class="filter-bar__reset" v-if="flatSelections.length >= 2" @click="clearAllSelections">
            <icon icon="close" size="xs" /> {{ translationData?.clearAll }}
          </a>
        </div>
      </div>
      <div class="filter-bar__views" v-if="!onlyView">
        <div class="filter-bar__toggle">
          <div
            :class="toggleIconClasses(view)"
            @click="handleView(view)"
            v-for="(view, viewIndex) in views"
            :key="viewIndex"
          >
            <icon :icon="view" size="small" />
          </div>
        </div>
      </div>
    </div>
    <grid-list
      :items="filteredItems"
      :view="activeView"
      :data-authors="dataAuthors"
      :has-no-aspect-ratio="hasNoAspectRatio"
      @card-tag-clicked="handleCardTagClicked"
    />
  </div>
</template>
<script>
import { useI18n } from '#imports';

import Tools from '../utils/tools.js';
import State from '../utils/state.js';

import { useBlogStore } from '../stores/blog';

export default {
  tagName: 'filter-bar',
  computed: {
    hasNoAspectRatio() {
      if (!this.onlyView) return;

      return true;
    },
    flatSelections() {
      return this.selections.flat();
    },
    storedItems() {
      const blogStore = useBlogStore();

      return blogStore.getBlogItems;
    },
    normalizedItems() {
      return this.storedItems.slice(this.itemStartPoint).map((item) => {
        if (item.lang && item.lang !== this.locale) {
          item.externalLanguage = Tools.getExternalLanguageText(this.locale, item.lang, this.$t);
        }

        return {
          ...item,
          blogtitlepic: `${item.blog_image_path || ''}${item.blogtitlepic}`,
          footer: typeof item.footer === 'string' ? item.footer : undefined,
        };
      });
    },
    filteredItems() {
      if (!this.selections.length)
        return this.maxBlogPosts ? this.normalizedItems.slice(0, this.maxBlogPosts) : this.normalizedItems;

      let filteredItems = [];

      this.selections.forEach((selectionArray) => {
        selectionArray.forEach((selection) => {
          this.filterDropdowns.forEach((dropdown) => {
            const key = dropdown.key;
            const matchingItems = this.normalizedItems.filter((item) => {
              return Array.isArray(item[key]) ? item[key].includes(selection.value) : item[key] === selection.value;
            });

            filteredItems = [...filteredItems, ...matchingItems];
          });
        });
      });

      return this.getMaxItems(filteredItems);
    },
    authors() {
      return this.extractPropertyCounts('author');
    },
    topics() {
      return this.extractPropertyCounts('categories');
    },
    tags() {
      return this.extractPropertyCounts('tags');
    },
    dropdownCollection() {
      return [this.authors, this.topics, this.tags];
    },
  },
  setup() {
    const { $getLocale } = useI18n();

    return { locale: $getLocale() };
  },
  created() {
    const blogStore = useBlogStore();

    blogStore.setBlogItems(this.items);
    blogStore.setBlogView(this.activeView);

    const dropdownConfig = {
      author: {
        label: this.$t('filterAuthors'),
        items: this.authors,
        key: 'author',
        condition: () => this.authors.length > 0,
      },
      categories: {
        label: this.$t('filterTopics'),
        items: this.topics,
        key: 'categories',
        condition: () => true,
      },
      tags: {
        label: this.$t('filterTags'),
        items: this.tags,
        key: 'tags',
        filterable: true,
        condition: () => true,
      },
    };

    this.filterDropdowns = this.enabledDropdowns
      .filter((key) => dropdownConfig[key] && dropdownConfig[key].condition())
      .map((key) => {
        const config = dropdownConfig[key];
        return {
          label: config.label,
          items: config.items,
          key: config.key,
          ...(config.filterable && { filterable: config.filterable }),
        };
      });
  },
  mounted() {
    this.selectTagFromHash();

    window.addEventListener('resize', this.handleResize);

    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    selectTagFromHash() {
      const hash = Tools.getHash();

      if (!hash) return;

      this.getTagByName(decodeURIComponent(hash.substring(1)).toLowerCase());
    },
    addTagToSelection(tag, index) {
      const selectedIndex = index ? index : this.dropdownCollection.length - 1;

      this.selections[selectedIndex] = [tag];
    },
    getMaxItems(items) {
      items = [...new Set(items)];

      return this.maxBlogPosts ? items.slice(0, this.maxBlogPosts) : items;
    },
    handleResize() {
      this.itemStartPoint = Tools.isUpperBreakpoint() && this.hasHighlight ? 1 : 0;
    },
    extractPropertyCounts(property) {
      const results = this.normalizedItems.reduce((accumulator, item) => {
        if (Array.isArray(item[property])) {
          item[property].forEach((propValue) => {
            this.updatePropertyCount(accumulator, propValue);
          });
        } else if (item[property]) {
          this.updatePropertyCount(accumulator, item[property]);
        }

        return accumulator;
      }, []);

      return results.sort((a, b) => a.text.localeCompare(b.text));
    },
    updatePropertyCount(accumulator, propertyValue) {
      const existingProperty = accumulator.find((prop) => prop?.text?.toLowerCase() === propertyValue?.toLowerCase());

      if (existingProperty) {
        existingProperty.count += 1;
      } else {
        accumulator.push({
          text: propertyValue,
          value: propertyValue,
          count: 1,
        });
      }
    },
    handleView(view) {
      this.activeView = view;

      const blogStore = useBlogStore();

      blogStore.setBlogView(this.activeView);
    },
    toggleIconClasses(view) {
      return ['filter-bar__toggle-icon', view === this.activeView ? State.ACTIVE : ''];
    },
    isArrayEmpty(array) {
      return Object.keys(array).length ? false : true;
    },
    isArrayEmptyRecursive(array) {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (item && !this.isArrayEmpty(item)) {
          return false;
        }
      }

      return true;
    },
    handleCardTagClicked(event) {
      this.clearAllSelections();
      this.getTagByName(event.toLowerCase());
    },
    getTagByName(tagName) {
      this.tags.map((tag) => {
        if (tag.text.toLowerCase() === tagName) {
          const index = this.filterDropdowns.length - 1;

          this.addTagToSelection(tag, index);
          this.updateDropdownSelection([tag], index);
          this.hasClickedOnTag = true;
        }
      });
    },
    handleDropdownChange(selection, index) {
      if (selection.length === 0) {
        if (this.selections[index]) {
          delete this.selections[index];
        }
      } else {
        if (this.hasClickedOnTag) {
          this.hasClickedOnTag = false;

          this.selections[index] = [];
        }

        this.selections[index] = selection;
      }

      if (this.isArrayEmptyRecursive(this.selections)) {
        this.selections = [];
      }
    },
    handleDropdownOpened(openedDropdown) {
      this.$refs.dropdowns.forEach((dropdown) => {
        if (dropdown !== openedDropdown) {
          dropdown.isOpen = false;
        }
      });
    },
    clearAllSelections() {
      this.selections = [];

      this.$refs.dropdowns.forEach((dropdown) => {
        dropdown.isOpen = false;
        dropdown.activeSelection = [];
      });
    },
    removeSelection(e, selection) {
      e.preventDefault();

      this.selections = this.selections.map((selectionArray) => {
        return selectionArray.filter((item) => item.value !== selection.value);
      });

      this.selections.forEach((selectionArray, index) => {
        this.updateDropdownSelection(selectionArray || [], index);
      });

      const result = this.selections.filter((selectionArray) => selectionArray.length > 0);

      if (result.length === 0) return this.clearAllSelections();
    },
    updateDropdownSelection(selection, index) {
      const dropdown = this.$refs.dropdowns[index];

      if (!dropdown) return;

      dropdown.activeSelection = selection;
    },
  },
  data() {
    return {
      activeView: this.onlyView || this.defaultView,
      views: ['tile-view', 'list-view'],
      filterDropdowns: [],
      selections: [],
      itemStartPoint: 0,
      hasClickedOnTag: false,
    };
  },
  props: {
    spacing: String,
    items: Array,
    maxBlogPosts: Number,
    dataAuthors: Object,
    defaultView: { type: String, default: 'tile-view' },
    onlyView: { type: String },
    hasHighlight: { type: Boolean, default: true },
    enabledDropdowns: {
      type: Array,
      default: () => ['author', 'categories', 'tags'],
    },
  },
};
</script>
<style>
.filter-bar__controls {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.filter-bar__toggle {
  background-color: var(--color-surface-background);
  display: inline-flex;
}

.filter-bar__toggle-icon {
  display: flex;
  cursor: pointer;
  padding: 0.75rem;
}
.filter-bar__toggle-icon.active {
  color: var(--color-primary);
}
.filter-bar__toggle-icon:hover {
  color: var(--color-primary-accent);
}
.filter-bar__toggle-icon:not(:first-of-type) {
  position: relative;
  margin-left: 1px;
}
.filter-bar__toggle-icon:not(:first-of-type)::before {
  position: absolute;
  content: "";
  display: block;
  left: 0;
  width: 1px;
  height: 120%;
  height: calc(100% - 1rem);
  transform: translateY(-0.25rem);
  background-color: var(--color-border-light);
}

.filter-bar__dropdowns {
  display: flex;
  gap: 1rem;
}
.filter-bar__dropdowns [data-utility-animation-step] {
  --utility-animation-distance: 15%;
}
.filter-bar__dropdowns [data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
  animation-duration: 0.8s;
}

.filter-bar__views {
  display: none;
}
@media (min-width: 992px) {
  .filter-bar__views {
    display: block;
  }
}

.filter-bar__reset {
  font-size: 0.85rem;
  margin-left: 0.5rem;
  display: inline-flex;
  cursor: pointer;
  gap: 0.5rem;
  place-items: center;
}
.filter-bar__reset > .icon.vue-component {
  width: 12px;
  height: 12px;
  stroke-width: 5px;
}
.filter-bar__reset > .icon.vue-component > svg {
  width: 100%;
  height: 100%;
}

.filter-bar__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  place-items: center;
}
.filter-bar__tags .filter-bar__tag {
  margin-top: 0.5rem;
}
</style>
