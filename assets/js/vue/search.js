const loadLunr = async () => {
  await import('../lib/lunr.min.js').then((module) => {
    if (module.default) {
      window.lunr = module.default;
    }
  });
};

// TODO figure out how to load language file

// loadLunr().then(() => {
//   import('../lib/lunr.stemmer.support.min.js').then((stemmer) => stemmer.default(lunr));
// });

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
          this.store = data;

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

      const searchTerm = `${this.$refs.search.value}*`;

      if (!searchTerm) return; // TODO add an error

      this.results = this.searchEngine.search(searchTerm);
      console.log('handleSearch ~ this.results', this.results);
    },
    initSearchEngine() {
      const store = this.store;
      const { results, weights } = store;
      const weightsData = Object.keys(weights);
      const Lunr = window.lunr;

      if (!Lunr) return;

      this.searchEngine = Lunr(function () {
        this.ref('title');

        weightsData.forEach((weightData) => {
          this.field(weightData, { boost: weights[weightData] });
        });

        results?.forEach(function (element) {
          this.add(element);
        }, this);
      });
    },
  },
  props: {
    placeholder: String,
    endpoint: String,
    language: String,
  },
  template: `
    <div :class="classList">
      <input ref="search" type="search" @keypress.enter="handleEnter" />
      <div v-for="result in results">{{ result }}</div>
    </div>
  `,
};
