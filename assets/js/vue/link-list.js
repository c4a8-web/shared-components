import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return [
        'link-list',
        `${this.isExpanded ? State.EXPANDED : ''}`,
        `${this.hasActiveItem ? State.ACTIVE : ''}`,
        `${this.isHidden ? 'link-list--hidden' : ''}`,
        `${this.inTransition ? 'link-list--in-transition' : ''}`,
        this.classes,
        'vue-component',
      ];
    },
    hasActiveItem() {
      const items = this.list.children;

      return items.filter((item) => item.languages[this.lang].active === true).length > 0;
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
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('md');
    },
    isExpandable() {
      return this.isLowerBreakpoint() && this.list.languages[this.lang]?.title ? true : false;
    },
    updateHeight() {
      const root = this.$refs['root'];

      if (!root) return;

      const newHeight = this.isHidden ? '' : root.scrollHeight + 'px';

      root.style.height = newHeight;
    },
    handleClick() {
      if (!this.isExpandable()) return;

      this.isExpanded = !this.isExpanded;
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
      isExpanded: false,
    };
  },
  template: `
    <figure :class="classList" v-if="list" ref="root">
      <figcaption class="link-list__title" v-if="list?.languages" v-on:click="handleClick">
        {{ list.languages[lang]?.title }}
        <icon class="link-list__icon" icon="expand" size="small" />
      </figcaption>
      <ul class="link-list__list header__list--expanded">
        <li class="link-list__item" v-for="subChild in list.children">
          <cta
            :href="subChild.languages[lang].url"
            :text="subChild.languages[lang].title"
            :active="subChild.languages[lang].active"
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
