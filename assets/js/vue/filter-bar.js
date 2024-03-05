import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'filter-bar',
  computed: {
    flatSelections() {
      return this.selections.flat();
    },
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
      if (!this.selections.length) return this.normalizedItems;

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

      filteredItems = [...new Set(filteredItems)];

      return filteredItems;
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
          'clearAll',
        ]);

        this.filterDropdowns = [
          {
            label: this.translationData?.filterAuthors,
            items: this.authors,
            key: 'author',
          },
          {
            label: this.translationData?.filterTopics,
            items: this.topics,
            key: 'categories',
          },
          {
            label: this.translationData?.filterTags,
            items: this.tags,
            key: 'tags',
            filterable: true,
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
      const existingProperty = accumulator.find((prop) => prop.text.toLowerCase() === propertyValue.toLowerCase());

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
    handleDropdownChange(selection, index) {
      if (selection.length === 0) {
        if (this.selections[index]) {
          delete this.selections[index];
        }
      } else {
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
        this.$refs.dropdowns[index].activeSelection = selectionArray || [];
      });

      const result = this.selections.filter((selectionArray) => selectionArray.length > 0);

      if (result.length === 0) return this.clearAllSelections();
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
    maxBlogPosts: Number, // TODO handle max blog posts
    dataAuthors: String,
  },
  template: `
    <div class="filter-bar" >
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
            <tag class="filter-bar__tag" :tag="selection.text" :key="index" v-for="(selection, index) in flatSelections" variant="icon" @click="removeSelection($event, selection)" />
            <a class="filter-bar__reset" v-if="flatSelections.length >= 2" @click="clearAllSelections">
              <icon icon="close" size="xs" /> {{ translationData?.clearAll }}
            </a>
          </div>
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

// TODO add title to mobile item list
// TODO adjust mobile dropdown styling when opened (sticky)
// TODO add content for the filter-bar story
