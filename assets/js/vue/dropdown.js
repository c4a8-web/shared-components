import Tools from '../tools.js';
import State from '../state.js';

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
      this.activeSelection = selection;
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    toggleIconClasses(selection) {
      return ['dropdown__toggle-icon', selection === this.activeSelection ? State.ACTIVE : ''];
    },
  },
  data() {
    return {
      activeSelection: '',
      isOpen: false,
    };
  },
  template: `
    <div class="dropdown" style="position: relative;">
      <div class="dropdown__label" @click="toggleDropdown">
        {{ label }}
      </div>
      <div class="dropdown__items" style="position: absolute; z-index: 1;" v-show="isOpen">
        <div :class="toggleIconClasses(item)" @click="handleSelection(item)" v-for="item in parsedItems">
          <input type="checkbox" :value="item.value" v-model="activeSelection">
          {{ item.text }}
          <span style="float: right;">{{ item.count }}</span>
        </div>
      </div>
    </div>
  `,
};
