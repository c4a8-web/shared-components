import Tools from "../assets/js/tools.js";
import State from "../assets/js/state.js";

export default {
  tagName: "filter-bar",
  computed: {
    flatSelections() {
      return this.selections.flat();
    },
    storedItems() {
      return this.$root.StoreData.blogItems
        ? this.$root.StoreData.blogItems()
        : [];
    },
    dataAuthorsValue() {
      return Tools.getJSON(this.dataAuthors);
    },
    normalizedItems() {
      return this.storedItems.slice(this.itemStartPoint).map((item) => {
        return {
          ...item,
          blogtitlepic: `${item.blog_image_path}${item.blogtitlepic}`,
        };
      });
    },
    filteredItems() {
      if (!this.selections.length)
        return this.maxBlogPosts
          ? this.normalizedItems.slice(0, this.maxBlogPosts)
          : this.normalizedItems;

      let filteredItems = [];

      this.selections.forEach((selectionArray) => {
        selectionArray.forEach((selection) => {
          this.filterDropdowns.forEach((dropdown) => {
            const key = dropdown.key;
            const matchingItems = this.normalizedItems.filter((item) => {
              return Array.isArray(item[key])
                ? item[key].includes(selection.value)
                : item[key] === selection.value;
            });

            filteredItems = [...filteredItems, ...matchingItems];
          });
        });
      });

      return this.getMaxItems(filteredItems);
    },
    authors() {
      return this.extractPropertyCounts("author");
    },
    topics() {
      return this.extractPropertyCounts("categories");
    },
    tags() {
      return this.extractPropertyCounts("tags");
    },
    dropdownCollection() {
      return [this.authors, this.topics, this.tags];
    },
  },
  created() {
    this.$root.StoreData.blogItems = this.$root.Store(
      Tools.getJSON(this.items)
    );
    this.$root.StoreData.blogView = this.$root.Store(this.activeView);
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          "onlyLanguage",
          "filterAuthors",
          "filterTopics",
          "filterTags",
          "clearAll",
        ]);

        this.filterDropdowns = [
          {
            label: this.translationData?.filterAuthors,
            items: this.authors,
            key: "author",
          },
          {
            label: this.translationData?.filterTopics,
            items: this.topics,
            key: "categories",
          },
          {
            label: this.translationData?.filterTags,
            items: this.getFilteredTags(),
            key: "tags",
            filterable: true,
          },
        ];
      });
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);

    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getFilteredTags() {
      const hash = Tools.getHash();

      if (!hash) return this.tags;

      const filteredTag = decodeURIComponent(hash.substring(1)).toLowerCase();

      const tags = this.tags.map((tag) => {
        if (tag.text.toLowerCase() === filteredTag) {
          this.addTagToSelection(tag);

          return { ...tag, checked: true };
        }

        return tag;
      });

      return tags;
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
      this.itemStartPoint = Tools.isUpperBreakpoint() ? 1 : 0;
    },
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
      const existingProperty = accumulator.find(
        (prop) => prop.text.toLowerCase() === propertyValue.toLowerCase()
      );

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
      return [
        "filter-bar__toggle-icon",
        view === this.activeView ? State.ACTIVE : "",
      ];
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

      const result = this.selections.filter(
        (selectionArray) => selectionArray.length > 0
      );

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
      activeView: "tile-view",
      views: ["tile-view", "list-view"],
      filterDropdowns: [],
      selections: [],
      itemStartPoint: 0,
      hasClickedOnTag: false,
    };
  },
  props: {
    spacing: String,
    items: String,
    maxBlogPosts: Number,
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
      <grid-list
        :items="filteredItems"
        :view="activeView"
        :data-authors="dataAuthorsValue"
        @card-tag-clicked="handleCardTagClicked"
      />
    </div>
  `,
};
