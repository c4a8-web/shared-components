import Tools from '../tools.js';
import State from '../state.js';
import Store from './../store.js';

export default {
  tagName: 'filter-bar',
  computed: {
    storedItems() {
      return this.itemsStore();
    },
  },
  mounted() {
    this.itemsStore = Store(Tools.getJSON(this.items));
  },
  methods: {
    handleView(view) {
      console.log('🚀 ~ handleView ~ view:', view);
    },
    // handleTileView() {
    //   console.log('handleTileView');
    // },
    // handleListView() {
    //   console.log('handleListView');
    // },
    toggleIconClasses(view) {
      return ['filter-bar__toggle-icon', view === this.activeView ? State.ACTIVE : ''];
    },
  },
  data() {
    return {
      activeView: 'tile-view',
      views: ['tile-view', 'list-view'],
    };
  },
  props: {
    spacing: String,
    items: String,
  },
  template: `
    <div class="filter-bar">
      <div class="filter-bar__toggle">
        <div :class="toggleIconClasses(view)" @click="handleView(view)" v-for="view in views">
          <icon :icon="view" size="small" />
        </div>
      </div>
    </div>
  `,
};
