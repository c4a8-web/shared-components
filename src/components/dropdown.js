import Tools from "../assets/js/tools.js";
import State from "../assets/js/state.js";
import Events from "../assets/js/events.js";
import UtilityAnimation from "../assets/js/utility-animation.js";

export default {
  tagName: "dropdown",
  props: {
    label: String,
    items: String,
    filterable: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
    index: Number,
  },
  computed: {
    teleportSelector() {
      return '[id="root"], [data-v-app]';
    },
    dropdownLabelClasses() {
      return [
        "dropdown__label font-size-sm",
        this.hasAnimation ? "utility-animation fade-in-bottom" : "",
      ];
    },
    parsedItems() {
      return Tools.getJSON(this.items);
    },
    filteredItems() {
      if (
        this.filterableValue &&
        this.filterText.length >= this.minCharsToFilter
      ) {
        return this.parsedItems.filter((item) =>
          item.text.toLowerCase().includes(this.filterText.toLowerCase())
        );
      } else {
        return this.parsedItems;
      }
    },
    filterableValue() {
      return Tools.isTrue(this.filterable) === true;
    },
    style() {
      return this.hasAnimation
        ? `--utility-animation-index: ${this.index};`
        : "";
    },
  },
  methods: {
    initActiveSelection() {
      this.activeSelection = this.filteredItems.filter((item) => item.checked);
    },
    updateUtilityAnimation() {
      if (!this.hasAnimation) return;

      UtilityAnimation.observeElementIfNotAlready(this.$refs.label);
    },
    resetSelection() {
      this.activeSelection = [];
    },
    applySelection() {
      this.toggleDropdown();
    },
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
        this.modalOpened();
      } else {
        this.resetFilterText();
        this.modalClosed();
      }
    },
    closeModal() {
      document.body.classList.remove("modal-open");
    },
    modalOpened() {
      if (Tools.isUpperBreakpoint()) return;

      document.body.classList.add("modal-open");
    },
    modalClosed() {
      if (Tools.isUpperBreakpoint()) return;

      this.closeModal();
    },
    toggleIconClasses(selection) {
      return [
        "dropdown__toggle-icon",
        this.activeSelection.includes(selection) ? State.ACTIVE : "",
      ];
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
    resetFilterText() {
      this.filterText = "";
    },
    resetModal() {
      this.isOpen = false;

      this.closeModal();
    },
    handleResize() {
      this.resetModal();
    },
  },
  beforeMount() {
    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          "search",
          "apply",
          "reset",
        ]);
      });
    }

    this.initActiveSelection();
  },
  mounted() {
    this.updateUtilityAnimation();

    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  data() {
    return {
      activeSelection: [],
      isOpen: false,
      filterText: "",
      minCharsToFilter: 1,
    };
  },
  template: `
    <div :class="{ 'dropdown--opened': isOpen, 'dropdown': true, 'dropdown--filtering': filterText.length > 0 }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseDown">
      <teleport :to="teleportSelector">
        <div :class="{'dropdown__background-shim': true, 'show': isOpen}" @click="toggleDropdown"></div>
      </teleport>
      <div :class="dropdownLabelClasses" @click="handleClick" :style="style" data-utility-animation-step="1" ref="label">
        <span class="dropdown__label-text">{{ label }}</span>
        <span class="dropdown__label-placeholder">{{ label }}</span>
        <span class="dropdown__label-icon">
          <icon icon="arrow-narrow" direction="clockwise" size="xs" />
        </span>
      </div>
      <div class="dropdown__items" v-show="isOpen">
        <div class="dropdown__items-content">
          <div class="dropdown__items-header">
            <span class="dropdown__items-header-text">{{ label }}</span>
            <icon
              @click="toggleDropdown"
              class="dropdown__items-close-icon"
              icon="close"
              size="medium"
            />
          </div>
          <div class="dropdown__search-container" v-if="filterableValue">
            <input type="text" class="dropdown__search" v-model="filterText" :placeholder="translationData?.search">
            <icon
              class="dropdown__search-icon"
              icon="magnifier"
              size="small"
            />
            <icon
              @click="resetFilterText"
              class="dropdown__close-icon"
              icon="close"
              size="small"
            />
          </div>
          <div class="dropdown__items-list">
            <div :class="toggleIconClasses(item)" @click="handleSelection(item)" v-for="(item, index) in filteredItems">
              <input class="dropdown__checkbox" type="checkbox" :value="item.value" :id="getCheckboxId(item, index)" :name="getCheckboxId(item, index)" :checked="activeSelection.includes(item)">
              <label class="dropdown__checkbox-label" :for="getCheckboxId(item, index)"></label>
              <span class="dropdown__item-text">{{ item.text }}</span>
              <span class="dropdown__item-count">{{ item.count }}</span>
            </div>
          </div>
          <div class="dropdown__buttons">
            <cta
              :text="translationData?.apply"
              class="dropdown__apply-button"
              href="#apply"
              @click="applySelection"
            />
            <cta
              :text="translationData?.reset"
              class="dropdown__reset-button"
              skin="secondary"
              :button="true"
              href="#reset"
              @click="resetSelection"
            />
          </div>
        </div>
      </div>
    </div>
  `,
};
