import Tools from '../tools.js';
import Store from './../store.js';

export default {
  tagName: 'filter-bar',
  computed: {},
  mounted() {},
  methods: {},
  data() {
    this.store = Store({
      items: Tools.getJSON(this.items),
    });

    console.log(this.store);
  },
  props: {
    spacing: String,
    items: String,
  },
  template: `
    filteraaaa
  `,
};
