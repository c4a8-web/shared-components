import Tools from '../tools.js';

export default {
  tagName: 'authors',
  computed: {
    classList() {
      return [
        'authors',
        `${Tools.isTrue(this.noLink) === true ? 'authors authors--no-link' : 'authors'}`,
        'vue-component',
      ];
    },
    seperator() {
      return this.noLink ? ' & ' : ' , ';
    }
  },

  methods: {
    authorsSeperator(array, element) {
      return array[array.length - 1] === element;
    },
    authorStart(array, element) {
      if (array[0] === element) {
        return this.dataLang.withAuthor;
      }
    },

  },
  props: {
    authorsList: Array,
    noLink: {
      default: null,
    },
    dataLang: {
      default: 'de',
    },
    dataAuthors: Array,
  },
  template: `
    <template v-if="authorsList">
      <span :class="classList" v-for="author in authorsList">
        <template v-if="!noLink">

          <a href="dataAuthors[author].permalink" class="post-teaser__auto" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">{{author}}</span>
          </a>
        </template>
        <template v-else>
          <span itemprop="name">{{ authorStart(authorsList, author) }} {{author}}</span>
        </template>
        <template v-if="!authorsSeperator(authorsList, author)">
          {{ seperator }}
        </template>
      </span>
    </template>
  `,
};
