import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'filter-bar',
  computed: {
    storedItems() {
      return this.$root.StoreData.blogItems ? this.$root.StoreData.blogItems() : [];
    },
  },
  created() {
    this.$root.StoreData.blogItems = this.$root.Store(Tools.getJSON(this.items));
    this.$root.StoreData.blogView = this.$root.Store(this.activeView);
  },
  methods: {
    handleView(view) {
      this.activeView = view;

      this.$root.StoreData.blogView(this.activeView);
    },
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
      <div class="filter-bar__selection">
        SELECTION
      </div>
      <div class="filter-bar__views">
        <div class="filter-bar__toggle">
          <div :class="toggleIconClasses(view)" @click="handleView(view)" v-for="view in views">
            <icon :icon="view" size="small" />
          </div>
        </div>
      </div>
    </div>
  `,
};
