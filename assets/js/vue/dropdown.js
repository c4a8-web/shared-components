import Tools from '../tools.js';
import State from '../state.js';
import Events from '../events.js';

export default {
  tagName: 'dropdown',
  props: {
    label: String,
    items: String,
    filterable: {
      default: null,
    },
  },
  computed: {
    parsedItems() {
      return Tools.getJSON(this.items);
    },
    filteredItems() {
      if (this.filterableValue && this.filterText.length >= this.minCharsToFilter) {
        return this.parsedItems.filter((item) => item.text.toLowerCase().includes(this.filterText.toLowerCase()));
      } else {
        return this.parsedItems;
      }
    },
    filterableValue() {
      return Tools.isTrue(this.filterable) === true;
    },
  },
  methods: {
    handleSelection(selection) {
      if (!this.activeSelection.includes(selection)) {
        this.activeSelection.push(selection);
      } else {
        const index = this.activeSelection.indexOf(selection);

        this.activeSelection.splice(index, 1);
      }

      this.$emit(Events.DROPDOWN_CHANGED, this.activeSelection);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.$emit(Events.DROPDOWN_OPENED, this);
      } else {
        this.filterText = '';
      }
    },
    toggleIconClasses(selection) {
      return ['dropdown__toggle-icon', this.activeSelection.includes(selection) ? State.ACTIVE : ''];
    },
    handleMouseEnter(e) {
      if (!Tools.isUpperBreakpoint()) return e.preventDefault();

      this.toggleDropdown();
    },
    handleMouseDown(e) {
      if (!Tools.isUpperBreakpoint()) return e.preventDefault();

      this.toggleDropdown();
    },
    handleClick(e) {
      if (Tools.isUpperBreakpoint()) return e.preventDefault();

      this.toggleDropdown();
    },
    getCheckboxId(item, index) {
      return `dropdown-checkbox-${item.value}-${index}`;
    },
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData(['search']);
      });
    }
  },
  data() {
    return {
      activeSelection: [],
      isOpen: false,
      filterText: '',
      minCharsToFilter: 3,
    };
  },
  template: `
    <div :class="{ 'dropdown--opened': isOpen, 'dropdown': true }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseDown">
      <div class="dropdown__label font-size-sm" @click="handleClick">
        <span class="dropdown__label-text">{{ label }}</span>
        <span class="dropdown__label-placeholder">{{ label }}</span>
        <span class="dropdown__label-icon">
          <icon icon="arrow-narrow" direction="clockwise" size="xs" />
        </span>
      </div>
      <div class="dropdown__items" v-show="isOpen">
        <div class="dropdown__items-content">
          <input v-if="filterableValue" type="text" v-model="filterText" :placeholder="translationData?.search">
          <div class="dropdown__items-list">
            <div :class="toggleIconClasses(item)" @click="handleSelection(item)" v-for="(item, index) in filteredItems">
              <input class="dropdown__checkbox" type="checkbox" :value="item.value" :id="getCheckboxId(item, index)" :name="getCheckboxId(item, index)" :checked="activeSelection.includes(item)">
              <label class="dropdown__checkbox-label" :for="getCheckboxId(item, index)"></label>
              <span class="dropdown__item-text">{{ item.text }}</span>
              <span class="dropdown__item-count">{{ item.count }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
