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
    }
  },

  methods: {

    authorsSeperator(array, element) {
      return array[array.length - 1] === element;
    },

    setSeperator() {
      return this.noLink ? ' & ' : ', ';
    }
  },
  props: {
    authorsList: Array,

    noLink: {
      default: null,
    },
  },
  template: `
    <template v-if="authorsList">
      <span :class="classList" v-for="author in authorsList">
        <template v-if="!noLink">
          <a href="{{ site.data.authors[author].permalink }}" class="post-teaser__auto" itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">{{author}}</span>
          </a>
        </template>
        <template v-else>
          <span itemprop="name">{{author}}</span>
        </template>
        <template v-if="!authorsSeperator(authorsList, author)">
          {{setSeperator()}}
        </template>
      </span>
    </template>
  `,
};
