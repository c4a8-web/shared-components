import UtilityAnimation from '../utility-animation.js';

export default {
  tagName: 'grid-list',
  computed: {
    classList() {
      return ['grid-list row mb-3 mx-n3 utility-animation__group vue-component'];
    },
    columnClassList() {
      return [this.view === 'tile-view' ? 'col-sm-6 col-lg-4' : 'col-sm-12', 'mb-3 mb-sm-8'];
    },
    isList() {
      return this.view === 'list-view';
    },
    isRow() {
      return this.isList ? true : false;
    },
  },
  watch: {
    view() {
      setTimeout(() => {
        // delay for view to be ready for the outside view manipulation
        UtilityAnimation.resetGroup(this.$refs.group);
      }, 100);
    },
  },
  created() {},
  beforeMount() {},
  methods: {},
  data() {
    return {};
  },
  props: {
    items: String,
    view: String,
    dataAuthors: Array,
  },
  template: `
    <div :class="classList" ref="group">
      <template v-for="(item, index) in items">
        <div :class="columnClassList" v-if="index > 0">
          <card
            :title="item.title"
            :url="item.url"
            :blog-title-pic="item.blogtitlepic"
            :excerpt="item.excerpt"
            :date="item.moment ? item.moment : item.date"
            :url="item.url"
            :author="item.author"
            :hasAnimation="true"
            :index="index"
            :data-authors="dataAuthors"
            :row="isRow"
            :tags="item.tags"
          />
        </div>
      </template>
    </div>
  `,
};
