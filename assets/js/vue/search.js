// TODO fix js issue
// import * as Lunr from '../lib/lunr.min.js';

export default {
  tagName: 'search',
  computed: {
    classList() {
      return ['search', `${this.expanded ? 'search--expanded' : ''}`, 'vue-component'];
    },
  },
  data() {
    return {
      search: null,
      store: null,
      results: null,
    };
  },
  methods: {
    handleEnter() {
      const url = `${this.endpoint}`;

      if (!url) return;
      if (this.store) return this.handleSearch();

      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.store = data?.results;

          this.handleSearch();
        })
        .catch((error) => {
          console.log('handleEnter ~ error', error);
        });
    },
    handleSearch() {
      if (!this.searchEngine) {
        this.initSearchEngine();
      }

      const searchTerm = this.$refs.search.value;

      if (!searchTerm) return; // TODO add an error

      this.results = this.searchEngine.search(searchTerm);
    },
    initSearchEngine() {
      const store = this.store;

      this.searchEngine = Lunr(function () {
        this.ref('title');
        this.field('content');
        this.field('url');

        store?.forEach(function (element) {
          this.add(element);
        }, this);
      });
    },
  },
  props: {
    placeholder: String,
    endpoint: String,
  },
  template: `
    <div :class="classList">
      <input ref="search" type="search" @keypress.enter="handleEnter" />
      <div v-for="result in results">{{ result }}</div>
    </div>
  `,
};
