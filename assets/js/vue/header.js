import Tools from '../tools.js';
import State from '../state.js';
import Events from '../events.js';

export default {
  tagName: 'v-header',
  computed: {
    classList() {
      return [
        'header',
        this.isScrolled ? State.IS_SCROLLED : '',
        this.isLight ? 'header--light' : '',
        Tools.isTrue(this.hover) ? State.HOVERING : '',
        Tools.isTrue(this.product) ? 'header--product' : '',
        !Tools.isTrue(this.closed) ? State.EXPANDED : '',
        Tools.isTrue(this.blendMode) ? 'header--blending' : '',
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
    searchValue() {
      return Tools.isTrue(this.search);
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
    isLight() {
      return Tools.isTrue(this.light) === true;
    },
    hasLangSwitch() {
      return Object.keys(this.home?.languages).length > 1;
    },
    hasContact() {
      return this.contact;
    },
    hasMeta() {
      return this.meta && this.meta.length > 0;
    },
  },
  mounted() {
    this.bindEvents();

    this.setCtaClasses();
    this.setLinkWidth();
  },
  updated() {
    if (this.inUpdate) {
      this.updateProductListHeight();

      this.inUpdate = false;
      this.inTransition = false;
    }
  },
  methods: {
    setLinkWidth() {
      const links = this.$refs['link'];

      if (!links) return;

      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const textWidth = link.querySelector('.header__link-text-spacer')?.clientWidth;

        link.style.setProperty('--header-link-text-width', textWidth + 'px');
      }
    },
    showFlyoutBlock(children) {
      return children.length > this.maxLinkListsInFlyout ? false : true;
    },
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('md');
    },
    bindEvents() {
      window.addEventListener('scroll', this.handleScroll.bind(this));

      document.addEventListener(Events.WINDOW_RESIZE, this.handleResize.bind(this));
    },
    handleResize() {
      this.reset();
      this.setLinkWidth();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > this.scrollThreshold;

      this.setCtaClasses();
    },
    reset() {
      this.resetFlyouts();
      this.updateProductListHeight();

      this.closed = true;
    },
    handleCloseClick() {
      this.closed = !this.closed;

      if (this.closed) {
        this.reset();
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

      if (this.linkLists[id]) {
        this.inTransition = true;
      }

      this.inUpdate = true;

      this.closeAllSiblings(id);
      this.closeAllChildren();
    },
    closeAllSiblings(id) {
      const keys = Object.keys(this.linkLists);

      keys.forEach((key) => {
        if (key !== id) {
          this.linkLists[key] = false;
        }
      });
    },
    closeAllChildren() {
      const customEvent = new CustomEvent(Events.CHILD_HAS_UPDATE, {
        detail: {},
      });

      this.$refs['list'].dispatchEvent(customEvent);
    },
    getId(item, index) {
      return `${item.name}_${index}`;
    },
    handleHeaderMouseOver() {
      this.hoverHeader = true;

      this.setCtaClasses();
    },
    handleHeaderMouseOut() {
      this.hoverHeader = false;

      this.setCtaClasses();
    },
    setCtaClasses() {
      if (!this.isLight) return;

      if (this.hoverHeader || this.isScrolled) {
        this.ctaClassList = false;
      } else {
        this.ctaClassList = 'is-light-lg';
      }
    },
    handleMouseOver(item, index) {
      if (!item.children) return;

      this.resetAllFlyouts();

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
    resetAllFlyouts() {
      this.$refs['link']?.forEach((link) => {
        link.classList.remove(State.EXPANDED);
      });

      this.$refs['flyout']?.forEach((flyout) => {
        flyout.classList.remove(State.EXPANDED);
      });
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
      return item.children ? 'javascript:void(0);' : item.languages[this.lowerLang]?.url;
    },
    getTarget(item) {
      const target = item.languages[this.lowerLang].target;

      return target ? target : null;
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
        if (!obj?.title) return;

        let url = obj?.url;

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

      let parent = Tools.findRecursive(this.navigation, matcher, callback);

      if (!parent) {
        parent = Tools.findRecursive(this.meta, matcher, callback);
      }

      if (!parent) {
        parent = Tools.findRecursive(this.contact, matcher, callback);
      }

      if (!parent) {
        const hrefLang = this.getHrefLang();

        return hrefLang ? hrefLang : this.isBlogTagsUrl(currentPath) ? this.getBlogTagsUrl(lang, currentPath) : null;
      }

      return parent[lang]?.url;
    },
    isBlogTagsUrl(currentPath) {
      const regex = /\/blog\/tags/;

      return regex.test(currentPath);
    },
    getBlogTagsUrl(lang, currentPath) {
      let newPath;

      const tagsIdentifier = 'tags';

      switch (lang) {
        case 'en':
          newPath = currentPath.replace(tagsIdentifier, `${tagsIdentifier}-${lang}`);
          break;
        default:
        case this.defaultLang:
          const regex = new RegExp(`${tagsIdentifier}-..`);

          newPath = currentPath.replace(regex, tagsIdentifier);
          break;
      }

      return newPath + document.location.search;
    },
    getHrefLang() {
      const hrefLang = document.querySelector('link[hreflang]');

      if (!hrefLang) return;

      return hrefLang.getAttribute('href');
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
      return this.getListClasses(item, index, ['header__link custom']);
    },
    headerProductListClasses(item, index) {
      return this.getListClasses(item, index, ['header__product-list', this.inTransition ? State.IN_TRANSITION : '']);
    },
    getListClasses(item, index, classes) {
      const isLinkListHidden = this.isLinkListHidden(item, index);

      return [...classes, isLinkListHidden ? '' : State.EXPANDED];
    },
    updateProductListHeight() {
      const productList = this.$refs['product-list'];

      if (!productList) return;

      for (let i = 0; i < productList.length; i++) {
        const list = productList[i];
        const isExpanded = list.classList.contains(State.EXPANDED);
        const newHeight = !isExpanded || list.style.height !== '' ? '' : list.scrollHeight + 'px';

        list.style.height = newHeight;
      }
    },
  },
  props: {
    home: Object,
    navigation: Object,
    meta: Object,
    light: {
      default: null,
    },
    search: {
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
    blendMode: {
      default: null,
    },
  },
  data() {
    return {
      inUpdate: false,
      inTransition: false,
      defaultLang: 'de',
      closed: true,
      hover: false,
      headerHover: false,
      flyoutIndex: null,
      linkLists: {},
      scrollThreshold: 10,
      isScrolled: false,
      ctaClassList: false,
      maxLinkListsInFlyout: 3,
    };
  },
  template: `
    <div class="header__spacer" :style="spacerBgColor"></div>
    <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
      <div :class="headerContainerClassList">
        <div class="header__row row">
          <div class="header__col col">
            <div class="header__logo">
              <a :href="homeObj?.url">
                <v-img :img="home.imgLight" class="header__logo-light" :cloudinary="true" />
                <v-img :img="home.img" class="header__logo-default" :cloudinary="true" />
              </a>
            </div>
            <div class="header__menu" v-on:click="handleCloseClick">
              <icon icon="menu" class="header__menu-icon" :closed="closed" />
            </div>
            <nav class="header__nav" v-on:mouseout="handleMouseOut">
              <ul class="header__list" ref="list">
                <li :class="headerItemClasses(item)" v-for="(item, index) in activeNavigation">
                  <a :class="headerLinkClasses(item, index)" :href="getHref(item)" :target="getTarget(item)" v-on:click="handleClick(item, index)" v-if="item?.languages" ref="link">
                    <div class="header__link-content" v-on:mouseover="handleMouseOver(item, index, $event)">
                      <span class="header__link-text">{{ item.languages[lowerLang]?.title }}</span>
                      <span class="header__link-text-spacer">{{ item.languages[lowerLang]?.title }}</span>
                      <icon class="header__link-icon" icon="expand" size="small" v-if="item.children" />
                    </div>
                  </a>

                  <template v-for="list in item.children">
                    <link-list
                      :list="list"
                      :lang="lowerLang"
                      :hidden="isLinkListHidden(item, index)"
                      classes="header__link-list"
                      :no-animation="true"
                      v-if="item.children && !list.products"
                    />
                    <div :class="headerProductListClasses(item, index)" ref="product-list" v-else>
                      <a :href="subChild?.languages[lowerLang]?.url" :target="subChild.target" class="header__product-list-item custom" v-for="subChild in list.children">
                        <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                        <div class="header__product-list-data">
                          <div class="header__product-list-title font-size-8 bold">{{ subChild?.languages[lowerLang]?.title }}</div>
                          <div class="header__product-list-subtitle">{{ subChild?.languages[lowerLang]?.subtitle }}</div>
                        </div>
                      </a>
                    </div>
                  </template>
                </li>
              </ul>
              <div class="header__footer">
                <link-list
                  :list="metaList"
                  :lang="lowerLang"
                  classes="header__meta-list"
                  :no-animation="true"
                  v-if="hasMeta"
                />

                <div class="header__contact header__contact--mobile" v-if="hasContact">
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
                <div class="header__button" v-if="button">
                  <cta
                    :text="button.text"
                    :href="button.href"
                    :target="button.target"
                    :skin="button.skin"
                    :classes="ctaClassList"
                  />
                </div>
                <div class="header__language-switch" v-on:click="handleLanguageSwitch" v-if="hasLangSwitch">
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
                :classes="ctaClassList"
              />
            </div>
            <search v-if="searchValue" class="header__search" language="de" placeholder="search" />
            <div class="header__language-switch" v-on:click="handleLanguageSwitch" v-if="hasLangSwitch">
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
                  <figure class="header__flyout-block" v-if="showFlyoutBlock(item.children)">
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
                    <div class="header__highlight-cta has-emergency-colors" v-if="item.languages[lowerLang]?.security">
                      <cta v-bind="item.languages[lowerLang].security" />
                    </div>
                  </figure>

                  <template v-for="list in item.children">
                    <link-list
                      :list="list"
                      :lang="lowerLang"
                      :no-animation="true"
                      v-if="item.children && !list.products"
                    />
                    <div class="header__product-list is-expanded" v-else>
                      <a :href="subChild.languages[lowerLang]?.url" :target="subChild.target" class="header__product-list-item custom" v-for="subChild in list.children">
                        <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                        <div class="header__product-list-data">
                          <div class="header__product-list-title font-size-8 bold">{{ subChild.languages[lowerLang]?.title }}</div>
                          <div class="header__product-list-subtitle">{{ subChild.languages[lowerLang]?.subtitle }}</div>
                        </div>
                      </a>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};
