import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'filter-bar',
  computed: {
    storedItems() {
      return this.$root.StoreData.blogItems ? this.$root.StoreData.blogItems() : [];
    },
    dataAuthorsValue() {
      return Tools.getJSON(this.dataAuthors);
    },
    normalizedItems() {
      return this.storedItems.slice(1).map((item) => {
        return {
          ...item,
          blogtitlepic: `${item.blog_image_path}${item.blogtitlepic}`,
        };
      });
    },
    filteredItems() {
      if (!this.selections.length) {
        return this.normalizedItems;
      }

      const results = this.normalizedItems.filter((item) => {
        return this.selections.some((selection) => {
          return Array.isArray(item.author) ? item.author.includes(selection.value) : item.author === selection.value;
        });
      });
      console.log('🚀 ~ filteredItems ~ results:', results);

      return results;
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
  },
  created() {
    this.$root.StoreData.blogItems = this.$root.Store(Tools.getJSON(this.items));
    this.$root.StoreData.blogView = this.$root.Store(this.activeView);
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          'onlyLanguage',
          'filterAuthors',
          'filterTopics',
          'filterTags',
        ]);

        this.filterDropdowns = [
          {
            label: this.translationData?.filterAuthors,
            items: this.authors,
          },
          {
            label: this.translationData?.filterTopics,
            items: this.topics,
          },
          {
            label: this.translationData?.filterTags,
            items: this.tags,
          },
        ];
      });
    }
  },
  methods: {
    extractPropertyCounts(property) {
      const results = this.normalizedItems.reduce((accumulator, item) => {
        if (Array.isArray(item[property])) {
          item[property].forEach((propValue) => {
            this.updatePropertyCount(accumulator, propValue);
          });
        } else {
          this.updatePropertyCount(accumulator, item[property]);
        }
        return accumulator;
      }, []);

      return results.sort((a, b) => a.text.localeCompare(b.text));
    },
    updatePropertyCount(accumulator, propertyValue) {
      const existingProperty = accumulator.find((prop) => prop.text === propertyValue);

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
    filterItems() {
      // set up filters that work out in normalizedItems
      // console.log('filter items');
    },
    handleView(view) {
      this.activeView = view;

      this.$root.StoreData.blogView(this.activeView);
    },
    toggleIconClasses(view) {
      return ['filter-bar__toggle-icon', view === this.activeView ? State.ACTIVE : ''];
    },
    title(postData) {
      if (postData?.lang !== this.lang && postData.lang !== '' && this.translationData?.onlyLanguage) {
        return `${postData.title} (${this.translationData?.onlyLanguage})`;
      }

      return postData?.title;
    },
    handleDropdownChange(selection, index) {
      if (selection.length === 0) {
        this.selections.splice(index, 1);
      } else {
        this.selections[index] = selection;
      }

      this.filterItems();
    },
    handleDropdownOpened(openedDropdown) {
      this.$refs.dropdowns.forEach((dropdown) => {
        if (dropdown !== openedDropdown) {
          dropdown.isOpen = false;
        }
      });
    },
  },
  data() {
    return {
      activeView: 'tile-view',
      views: ['tile-view', 'list-view'],
      filterDropdowns: [],
      selections: [],
    };
  },
  props: {
    spacing: String,
    items: String,
    title: String,
    maxBlogPosts: Number,
    dataAuthors: String,
  },
  template: `
    <div class="filter-bar">
      <div class="filter-bar__controls">
        <div class="filter-bar__selection">
          <dropdown
            v-for="(dropdownItem, index) in filterDropdowns"
            v-bind="dropdownItem"
            @dropdown-changed="handleDropdownChange($event, index)"
            @dropdown-opened="handleDropdownOpened"
            ref="dropdowns"
            :key="index"
          />
        </div>
        <div class="filter-bar__views">
          <div class="filter-bar__toggle">
            <div :class="toggleIconClasses(view)" @click="handleView(view)" v-for="view in views">
              <icon :icon="view" size="small" />
            </div>
          </div>
        </div>
      </div>
      <grid-list :items="filteredItems" :view="activeView" :data-authors="dataAuthorsValue" />
    </div>
  `,
};
