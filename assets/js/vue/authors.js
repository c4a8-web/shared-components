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

    nolinkClass() {
      return Tools.isTrue(this.noLink) ? true : false
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
        <template v-if="!nolinkClass">
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

/*
{%- assign lang = page.lang | default: 'de' -%}

{%- assign authorsAuthors = include.authors -%}
{%- assign authorsNoLink = include.noLink -%}

{% if authorsNoLink %}
  {%- assign authorsSeperator = '&' -%}
{% else %}
  {%- assign authorsSeperator = ',' -%}
{%- endif -%}

{% if authorsAuthors %}
  <!-- Shared Authors Section -->
    <span class="authors {% if authorsNoLink %}authors--no-link{% endif %}">
      {% if authorsNoLink %}
        {{ site.data.lang[lang].withAuthor }}
      {% endif %}
      {% for author in authorsAuthors %}
        {%- assign authorData = site.data.authors[author] -%}
        {% unless authorsNoLink %}
          <a href="{{ authorData.permalink }}" class="post-teaser__author" itemprop="author" itemscope itemtype="http://schema.org/Person">
        {% endunless %}
          <span itemprop="name">{{ author }}</span>
        {% unless authorsNoLink %}
          </a>
        {% endunless %}
        {% unless forloop.last %}{{ authorsSeperator }}{% endunless %}
      {% endfor %}
    </span>
  <!-- End Shared Authors Section -->
{% endif %}

*/
