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
    },
    authorArray() {
      return typeof this.authorsList === 'object' ? this.authorsList : [this.authorsList];
    },
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
    authorLink(author) {
      return this.dataAuthors.hasOwnProperty(author) ? this.dataAuthors[author].permalink : '';
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
    dataAuthors: {
      default: null,
    },
  },
  template: `
    <template v-if="authorArray">
      <span :class="classList" v-for="author in authorArray">
        <template v-if="!noLink">
          <a :href="authorLink(author)" class="authors__link post-teaser__auto" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">{{author}}</span>
          </a>
        </template>
        <template v-else>
          <span itemprop="name">{{ authorStart(authorArray, author) }} {{author}}</span>
        </template>
        <template v-if="!authorsSeperator(authorArray, author)">
          {{ seperator }}
        </template>
      </span>
    </template>
  `,
};
