import Tools from '../tools.js';
import State from '../state.js';
import Events from '../events.js';

export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return [
        'link-list',
        `${this.isExpanded ? State.EXPANDED : ''}`,
        `${this.isExpandable() ? State.EXPANDABLE : ''}`,
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
  mounted() {
    this.bindEvents();
  },
  methods: {
    bindEvents() {
      this.parentOfParent = this.$refs['root'].parentNode.parentNode;

      this.parentOfParent.addEventListener(Events.CHILD_HAS_UPDATE, this.handleUpdate.bind(this));
    },
    handleUpdate(event) {
      const eventRoot = event.detail.root;

      if (this.isExpanded && this.$refs['root'] !== eventRoot) {
        this.handleClick();
      }
    },
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('md');
    },
    isExpandable() {
      return this.isLowerBreakpoint() && this.list.languages && this.list.languages[this.lang]?.title ? true : false;
    },
    updateHeight() {
      const root = this.$refs['root'];

      if (!root) return;

      const newHeight = this.isHidden ? '' : root.scrollHeight + 'px';

      root.style.height = newHeight;
    },
    handleClick(event) {
      if (!this.isExpandable()) return;

      this.isExpanded = !this.isExpanded;

      const root = this.$refs['root'];

      if (event) {
        const customEvent = new CustomEvent(Events.CHILD_HAS_UPDATE, {
          detail: {
            root,
          },
        });

        this.parentOfParent.dispatchEvent(customEvent);
      }

      if (!root || this.isExpanded) return;

      root.style.height = '';
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
      parentOfParent: null,
    };
  },
  template: `
    <figure :class="classList" v-if="list" ref="root">
      <figcaption class="link-list__title font-size-8 bold" v-if="list?.languages" v-on:click="handleClick">
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
