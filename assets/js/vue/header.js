import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'v-header',
  computed: {
    classList() {
      return [
        'header',
        this.isScrolled ? State.IS_SCROLLED : '',
        Tools.isTrue(this.light) ? 'header--light' : '',
        Tools.isTrue(this.hover) ? State.HOVERING : '',
        Tools.isTrue(this.product) ? 'header--product' : '',
        !Tools.isTrue(this.closed) ? State.EXPANDED : '',
        'vue-component',
      ];
    },
    headerContainerClassList() {
      return ['header__container', this.containerClass];
    },
    containerClass() {
      return Tools.isTrue(this.product) ? 'container' : 'container-xxl';
    },
    homeObj() {
      return this.home?.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang.toLowerCase();
    },
    metaList() {
      return {
        ...this.meta,
        children: this.meta,
      };
    },
    spacerBgColor() {
      const color = this.bgColor ? this.bgColor : 'var(--color-header-background)';

      return `--color-header-spacer-background: ${color}; background-color: var(--color-header-spacer-background);`;
    },
    activeNavigation() {
      this.setActiveLinks();

      return this.navigation;
    },
  },
  mounted() {
    this.bindEvents();
  },
  methods: {
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('md');
    },
    bindEvents() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    },
    handleScroll() {
      this.isScrolled = window.scrollY > this.scrollThreshold;
    },
    handleCloseClick() {
      this.closed = !this.closed;

      if (this.closed) {
        this.resetFlyouts();
      }
    },
    resetFlyouts() {
      Object.keys(this.linkLists).forEach((linkListKey) => {
        this.linkLists[linkListKey] = false;
      });
    },
    handleClick(item, index) {
      if (!this.isLowerBreakpoint()) return;

      const id = this.getId(item, index);

      this.linkLists[id] = !this.linkLists[id];
    },
    getId(item, index) {
      return `${item.name}_${index}`;
    },
    handleMouseOver(item, index) {
      if (!item.children) return;

      this.hover = true;

      const link = this.getLinkRef(index);

      if (!link) return;

      link.classList.add(State.EXPANDED);

      const flyout = this.getFlyoutRef(index);

      if (!flyout) return;

      this.flyoutIndex = index;

      flyout.classList.add(State.EXPANDED);
    },
    handleMouseOut(event) {
      if (event.relatedTarget?.closest('.header__flyout')) return;

      this.hover = false;

      const link = this.getLinkRef(this.flyoutIndex);

      if (!link) return;

      link.classList.remove(State.EXPANDED);

      const ref = this.getFlyoutRef(this.flyoutIndex);

      if (!ref) return;

      ref.classList.remove(State.EXPANDED);
    },
    getFlyoutRef(refName) {
      return this.getRef('flyout', refName);
    },
    getLinkRef(refName) {
      return this.getRef('link', refName);
    },
    getRef(name, refName) {
      const ref = this.$refs[name][refName];

      if (!ref) return;

      return ref;
    },
    getHref(item) {
      return item.children ? 'javascript:void(0);' : item.languages[this.lowerLang].url;
    },
    getNextLanguage() {
      const languages = this.home.languages;

      if (!languages) return;

      const keys = Object.keys(languages);

      if (!keys.length) return;

      const nextLang = keys.filter((lang) => lang !== this.lowerLang);

      if (!nextLang.length) return;

      return nextLang[0];
    },
    handleLanguageSwitch() {
      const nextLang = this.getNextLanguage();
      const activeUrl = this.getActiveUrlByLang(nextLang);
      const gotoUrl = activeUrl ? activeUrl : this.home.languages[nextLang]?.url;

      document.location.href = gotoUrl;
    },
    getCurrentPath() {
      const currentPath = document.location.pathname;

      return currentPath;
    },
    getActiveUrlByLang(lang, update) {
      const currentPath = this.getCurrentPath();
      const lastCharacter = '/';

      const matcher = (obj, parentKey) => {
        if (!obj.title) return;

        let url = obj.url;

        if (currentPath[currentPath?.length - 1] === lastCharacter && url && url[url?.length - 1] !== lastCharacter) {
          url = url + lastCharacter;
        }

        const condition = url === currentPath;

        if (update && condition) {
          obj.active = true;

          const parentLink = this.getParentLink(parentKey);

          if (parentLink) parentLink.active = true;
        }

        return condition;
      };

      const callback = (_, parent) => {
        return parent;
      };

      const parent = Tools.findRecursive(this.navigation, matcher, callback);

      if (!parent) return;

      return parent[lang]?.url;
    },
    getParentLink(key) {
      const navi = this.navigation[key];

      return navi.languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, true);
    },
    headerItemClasses(item) {
      return ['header__item', item.languages[this.lowerLang]?.active ? State.ACTIVE : ''];
    },
    isLinkListHidden(item, index) {
      const id = this.getId(item, index);

      return !this.linkLists[id] ? true : false;
    },
    headerLinkClasses(item, index) {
      const isLinkListHidden = this.isLinkListHidden(item, index);

      return ['header__link custom', isLinkListHidden ? '' : State.EXPANDED];
    },
  },
  props: {
    home: Object,
    navigation: Object,
    meta: Object,
    light: {
      default: null,
    },
    lang: String,
    contact: Object,
    bgColor: String,
    product: {
      default: null,
    },
    button: {
      default: null,
    },
  },
  data() {
    return {
      defaultLang: 'de',
      closed: true,
      hover: false,
      flyoutIndex: null,
      linkLists: {},
      scrollThreshold: 10,
      isScrolled: false,
    };
  },
  template: `
    <div class="header__spacer" :style="spacerBgColor"></div>
    <header :class="classList">
      <div :class="headerContainerClassList">
        <div class="row">
          <div class="header__col col">
            <div class="header__logo">
              <a :href="homeObj.url">
                <v-img :img="home.imgLight" class="header__logo-light" :cloudinary="true" />
                <v-img :img="home.img" class="header__logo-default" :cloudinary="true" />
              </a>
            </div>
            <div class="header__menu" v-on:click="handleCloseClick">
              <icon icon="menu" class="header__menu-icon" :closed="closed" />
            </div>
            <nav class="header__nav" v-on:mouseout="handleMouseOut">
              <div class="header__search"></div>
              <ul class="header__list">
                <li :class="headerItemClasses(item)" v-for="(item, index) in activeNavigation">
                  <a :class="headerLinkClasses(item, index)" :href="getHref(item)" v-on:click="handleClick(item, index)" v-if="item?.languages" ref="link">
                    <div class="header__link-content" v-on:mouseover="handleMouseOver(item, index, $event)">
                      {{ item.languages[lowerLang]?.title }}
                      <icon class="header__link-icon" icon="expand" size="small" v-if="item.children" />
                    </div>
                  </a>

                  <link-list
                    :list="list"
                    :lang="lowerLang"
                    :hidden="isLinkListHidden(item, index)"
                    classes="header__link-list"
                    v-for="list in item.children" v-if="item.children"
                  />
                </li>
              </ul>
              <div class="header__footer">
                <link-list
                  :list="metaList"
                  :lang="lowerLang"
                  classes="header__meta-list"
                  v-if="meta"
                />

                <div class="header__contact header__contact--mobile" v-if="contact">
                  <a class="header__contact-link custom" :href="contact.languages[lowerLang]?.url" v-if="contact?.languages">
                    <div class="header__contact-text">
                      <icon
                        icon="phone-mail"
                        size="medium"
                      />
                      <span class="header__contact-title">
                        {{ contact.languages[lowerLang]?.title }}
                      </span>
                    </div>
                  </a>
                </div>
                <div class="header__language-switch" v-on:click="handleLanguageSwitch">
                  {{ getNextLanguage() }}
                </div>
              </div>
            </nav>
            <div class="header__button" v-if="button">
              <cta
                :text="button.text"
                :href="button.href"
                :target="button.target"
                :skin="button.skin"
              />
            </div>
            <div class="header__language-switch" v-on:click="handleLanguageSwitch">
              {{ getNextLanguage() }}
            </div>
          </div>
        </div>
      </div>
      <div class="header__flyout" v-on:mouseout="handleMouseOut">
        <div :class="containerClass">
          <div class="row">
            <div class="col">
              <div class="header__flyout-content" v-for="(item, index) in activeNavigation" ref="flyout">
                <div class="header__flyout-items" v-if="item.children">
                  <figure class="header__flyout-block">
                    <figcaption class="header__flyout-caption">
                      {{ item.languages[lowerLang]?.title }}
                    </figcaption>
                    <div class="header__flyout-description font-size-1 thin" v-html="item.languages[lowerLang]?.description"></div>
                    <a class="header__link custom" :href="contact.languages[lowerLang]?.url" v-if="contact?.languages">
                      <icon
                        icon="phone-mail"
                        size="medium"
                      />
                      <span class="header__contact-title">
                        {{ contact.languages[lowerLang]?.title }}
                      </span>
                    </a>
                  </figure>

                  <link-list
                    :list="list"
                    :lang="lowerLang"
                    v-for="list in item.children"
                    v-if="item.children"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};
