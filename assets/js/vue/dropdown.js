import Tools from '../tools.js';
import State from '../state.js';
import Events from '../events.js';

export default {
  tagName: 'dropdown',
  props: {
    label: String,
    items: String,
  },
  computed: {
    parsedItems() {
      return Tools.getJSON(this.items);
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
      }
    },
    toggleIconClasses(selection) {
      return ['dropdown__toggle-icon', this.activeSelection.includes(selection) ? State.ACTIVE : ''];
    },
  },
  data() {
    return {
      activeSelection: [],
      isOpen: false,
    };
  },
  template: `
    <div class="dropdown">
      <div class="dropdown__label font-size-sm" @click="toggleDropdown">
        <span class="dropdown__label-text">{{ label }}</span>
        <span class="dropdown__label-placeholder">{{ label }}</span>
        <span class="dropdown__label-icon"></span>
      </div>
      <div class="dropdown__items" v-show="isOpen">
        <div :class="toggleIconClasses(item)" @click="handleSelection(item)" v-for="(item, index) in parsedItems">
          <input type="checkbox" :value="item.value" :checked="activeSelection.includes(item)">
          {{ item.text }}
          <span style="float: right;">{{ item.count }}</span>
        </div>
      </div>
    </div>
  `,
};
