import Tools from '../tools.js';

export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return [
        'link-list',
        `${this.isHidden ? 'link-list--hidden' : ''}`,
        `${this.inTransition ? 'link-list--in-transition' : ''}`,
        this.classes,
        'vue-component',
      ];
    },
    isHidden() {
      return Tools.isTrue(this.hidden) === true;
    },
  },
  watch: {
    hidden(oldValue, _) {
      if (!oldValue) {
        this.inTransition = true;
      }
    },
  },
  updated() {
    this.updateHeight();

    this.inTransition = false;
  },
  methods: {
    updateHeight() {
      const root = this.$refs['root'];

      if (!root) return;

      const newHeight = this.isHidden ? '' : root.scrollHeight + 'px';

      root.style.height = newHeight;
    },
  },
  props: {
    list: Object,
    lang: String,
    classes: String,
    hidden: {
      default: null,
    },
  },
  data() {
    return {
      inTransition: false,
    };
  },
  template: `
    <figure :class="classList" v-if="list" ref="root">
      <figcaption class="link-list__title" v-if="list?.languages">
        {{ list.languages[lang]?.title }}
      </figcaption>
      <ul class="link-list__list header__list--expanded">
        <li class="link-list__item" v-for="subChild in list.children">
          <cta
            :href="subChild.languages[lang].url"
            :text="subChild.languages[lang].title"
            link=true
            reversed=true
            monochrome=true
            v-if="subChild.languages"
          />
        </li>
      </ul>
    </figure>
  `,
};
