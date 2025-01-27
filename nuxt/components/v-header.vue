<template>
  <div class="header__spacer" :style="spacerBgColor"></div>
  <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
    <div :class="headerContainerClassList" ref="headerContainer">
      <div class="header__row row">
        <div class="header__col col">
          <div :class="secondaryNavigationClassList" v-if="secondaryNavigation" ref="secondaryNavigation">
            <div
              class="header__secondary-navigation-button"
              ref="secondaryNavigationButton"
              @click="toggleSecondaryNavigation"
            >
              <icon class="header__secondary-navigation-icon" icon="grid" />
              <span class="header__secondary-navigation-text">{{ secondaryNavigation.text }}</span>
            </div>
            <div class="header__secondary-navigation-content">
              <div class="header__secondary-navigation-inner-content" ref="secondaryNavigationInnerContent">
                <template v-for="(item, index) in secondaryNavigation.children" :key="index">
                  <a
                    :href="getHref(child)"
                    :target="getTarget(child)"
                    class="header__secondary-navigation-item"
                    v-for="(child, itemIndex) in filterSecondaryNavigationItems(item.children)"
                    :key="itemIndex"
                  >
                    <v-img
                      :img="child.img"
                      class="header__secondary-navigation-item-img"
                      :cloudinary="true"
                      :alt="child.languages[lowerLang]?.title"
                    />
                  </a>
                </template>
              </div>
            </div>
          </div>
          <div class="header__logo" :style="headerLogoStyle">
            <a :href="homeObj?.url">
              <v-img :img="home?.imgLight" class="header__logo-light" :cloudinary="true" alt="logo" />
              <v-img :img="home?.img" class="header__logo-default" :cloudinary="true" alt="logo" />
            </a>
          </div>
          <div class="header__menu" v-on:click="handleCloseClick">
            <icon icon="v-menu" class="header__menu-icon" :closed="closed" />
          </div>
          <nav class="header__nav" v-on:mouseout="handleMouseOut">
            <ul class="header__list" ref="list">
              <v-header-item
                :activeNavigation="activeNavigation"
                :lowerLang="lowerLang"
                :handleMouseOver="handleMouseOver"
                :handleClick="handleClick"
                :getHref="getHref"
                :getTarget="getTarget"
                :linkLists="linkLists"
                :getId="getId"
                :inTransition="inTransition"
                ref="headerItem"
              ></v-header-item>
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
                <a
                  class="header__contact-link custom"
                  :href="contact.languages[lowerLang]?.url"
                  v-if="contact?.languages"
                >
                  <div class="header__contact-text">
                    <icon icon="phone-mail" size="medium" />
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
              <div class="header__language-switch" v-if="hasLangSwitch">
                <a
                  :key="key"
                  v-for="(_, key) in home.languages"
                  :class="{ 'header__language-link custom': true, active: key === lowerLang }"
                  v-on:click="handleLanguageSwitch(key)"
                  >{{ key }}</a
                >
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
          <div
            class="header__language-switch"
            v-on:mouseover="handleLanguageOver"
            v-on:mouseout="handleLanguageOut"
            v-if="hasLangSwitch"
            ref="languageSwitch"
          >
            <span class="header__link-text">{{ lang }}</span>
            <span class="header__link-text-spacer">{{ lang }}</span>
            <icon class="header__link-icon" icon="expand" size="small" />
            <div class="header__language-switch-flyout" ref="languageSwitchFlyout">
              <a
                v-for="(language, key) in home.languages"
                :class="{ 'header__language-link custom': true, 'd-none': key === lowerLang }"
                v-on:click="handleLanguageSwitch(key)"
                >{{ key }}</a
              >
            </div>
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
                  <div
                    class="header__flyout-description font-size-1 thin"
                    v-html="item.languages[lowerLang]?.description"
                  ></div>
                  <a class="header__link custom" :href="contact.languages[lowerLang]?.url" v-if="hasContactLink(item)">
                    <icon icon="phone-mail" size="medium" />
                    <span class="header__contact-title">
                      {{ contact.languages[lowerLang]?.title }}
                    </span>
                  </a>
                  <div class="header__highlight-cta has-emergency-colors" v-if="item.languages[lowerLang]?.emergency">
                    <cta v-bind="item.languages[lowerLang].emergency" />
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
                    <a
                      :href="subChild.languages[lowerLang]?.url"
                      :target="subChild.target"
                      class="header__product-list-item custom"
                      v-for="subChild in list.children"
                    >
                      <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                      <div class="header__product-list-data">
                        <div class="header__product-list-title font-size-8 bold">
                          {{ subChild.languages[lowerLang]?.title }}
                        </div>
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
</template>

<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import Events from '../utils/events.js';
import SecondaryNavigation from '../utils/data/secondary-navigation.js';

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
    secondaryNavigationClassList() {
      return [
        'header__secondary-navigation',
        this.secondaryNavigationInTransition ? State.IN_TRANSITION : '',
        this.secondaryNavigationDimensions ? State.READY : '',
        this.secondaryNavigationIsExpanded ? State.IS_EXPANDED : '',
      ];
    },
    secondaryNavigation() {
      if (!this.showSecondaryNavigation) return null;

      return SecondaryNavigation;
    },
    headerLogoStyle() {
      if (!this.secondaryNavigation || !this.logoOffsetPosition) return;

      return `padding-left: ${this.logoOffsetPosition}px;`;
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
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
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
    clonedNavigation() {
      return JSON.parse(JSON.stringify(this.navigation));
    },
    isLight() {
      return this.light === true;
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
  created() {
    this.setActiveNavigation();
  },
  watch: {
    secondaryNavigationDimensions(newVal) {
      if (newVal !== null && newVal.width >= 0) {
        this.$nextTick(() => {
          this.calculateLogoOffsetPosition();
        });
      }
    },
  },
  mounted() {
    this.bindEvents();

    this.setCtaClasses();
    this.setLinkWidth();
    this.handleScroll();

    if (!this.secondaryNavigation) return;

    this.getSecondaryNavigationDimensions();
  },
  updated() {
    if (this.inUpdate) {
      this.updateProductListHeight();

      this.inUpdate = false;
      this.inTransition = false;
    }
  },
  methods: {
    filterSecondaryNavigationItems(items) {
      return items.filter((item) => item.name !== this.theme);
    },
    getSecondaryNavigationDimensions() {
      if (!this.secondaryNavigation) return;

      const secondaryNavigation = this.$refs.secondaryNavigation;

      secondaryNavigation.dataset.updating = true;

      this.secondaryNavigationDimensions = null;

      secondaryNavigation.style.width = null;
      secondaryNavigation.style.height = null;
      secondaryNavigation.removeAttribute('data-width-expanded');
      secondaryNavigation.removeAttribute('data-height-expanded');

      this.secondaryNavigationDimensions = {
        width: secondaryNavigation.offsetWidth,
      };

      secondaryNavigation.removeAttribute('data-updating');
    },
    toggleSecondaryNavigation() {
      if (!this.secondaryNavigation) return;

      const secondaryNavigation = this.$refs.secondaryNavigation;
      const secondaryNavigationButton = this.$refs.secondaryNavigationButton;

      if (!secondaryNavigation || !secondaryNavigationButton) return;

      clearTimeout(this.secondaryNavigationTimeout);

      this.secondaryNavigationInTransition = !this.secondaryNavigationInTransition;
      this.secondaryNavigationIsExpanded = !this.secondaryNavigationIsExpanded;

      secondaryNavigation.style.width = null;
      secondaryNavigation.style.height = null;
      secondaryNavigation.removeAttribute('data-width-expanded');
      secondaryNavigation.removeAttribute('data-height-expanded');

      if (!this.secondaryNavigationInTransition) return;

      const dimensions = this.secondaryNavigationDimensions;
      const buttonWidth = this.getSecondaryNavigationButtonWidth();

      secondaryNavigation.style.width = `${buttonWidth}px`;

      this.secondaryNavigationTimeout = setTimeout(() => {
        secondaryNavigation.style.width = `${dimensions.width}px`;
        this.expandSecondaryNavigation();
      }, this.secondaryNaivgationTransitionDelay);
    },
    expandSecondaryNavigation() {
      const secondaryNavigation = this.$refs.secondaryNavigation;

      if (!secondaryNavigation) return;

      secondaryNavigation.dataset.widthExpanded = true;

      const secondaryNavigationInnerContent = this.$refs.secondaryNavigationInnerContent;
      const buttonWidth = this.getSecondaryNavigationButtonWidth();

      secondaryNavigation.style.height = `${buttonWidth}px`;

      this.secondaryNavigationTimeout = setTimeout(() => {
        this.secondaryNavigationDimensions['height'] = secondaryNavigationInnerContent.offsetHeight;

        const dimensions = this.secondaryNavigationDimensions;

        secondaryNavigation.dataset.heightExpanded = true;

        secondaryNavigation.style.height = `${buttonWidth + dimensions.height}px`;
      }, this.secondaryNaivgationTransitionDelay * 4);
    },
    calculateLogoOffsetPosition() {
      this.logoOffsetPosition = 0;

      if (!Tools.isUpperBreakpoint()) return;

      const headerContainer = this.$refs.headerContainer;

      if (!headerContainer) return { leftSpace: 0 };

      const style = window.getComputedStyle(headerContainer);
      const containerWidth = parseFloat(style.width);
      const windowWidth = window.innerWidth;
      const offsetCorrection = 20;

      const margin = (windowWidth - containerWidth) / 2;
      const buttonWidth = this.getSecondaryNavigationButtonWidth();

      const leftSpace = margin < buttonWidth ? buttonWidth - margin - offsetCorrection : 0;

      this.logoOffsetPosition = leftSpace;
    },
    getSecondaryNavigationButtonWidth() {
      const secondaryNavigationButton = this.$refs.secondaryNavigationButton;

      return secondaryNavigationButton.offsetWidth;
    },
    setActiveNavigation() {
      this.setActiveLinks();

      this.activeNavigation = this.clonedNavigation;
    },
    setLinkWidth() {
      const headerItems = this.$refs['headerItem'];
      const links = headerItems?.$refs['link'];

      if (!links) return;

      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const textWidth = link?.querySelector('.header__link-text-spacer')?.clientWidth;

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
      this.getSecondaryNavigationDimensions();
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
        this.ctaClassList = null;
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
    handleLanguageOver() {
      this.resetAllFlyouts();

      this.hover = true;

      const languageSwitch = this.$refs['languageSwitch'];

      if (!languageSwitch) return;

      languageSwitch.classList.add(State.EXPANDED);
    },
    handleLanguageOut(event) {
      if (event.relatedTarget?.closest('.header__flyout')) return;

      this.hover = false;

      const languageSwitch = this.$refs['languageSwitch'];

      if (!languageSwitch) return;

      languageSwitch.classList.remove(State.EXPANDED);
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
      const ref = this.$refs[name] ? this.$refs[name][refName] : this.$refs['headerItem']?.$refs[name][refName];

      if (!ref) return;

      return ref;
    },
    getHref(item) {
      return item.children ? 'javascript:void(0);' : item.languages[this.lowerLang]?.url;
    },
    getTarget(item) {
      if (!item || !item.languages) return null;

      const target = item?.languages[this.lowerLang]?.target || item.target;

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
    handleLanguageSwitch(nextLang) {
      const activeUrl = this.getActiveUrlByLang(nextLang);
      const gotoUrl = activeUrl ? activeUrl : this.home.languages[nextLang]?.url;

      Tools.storageSave('preferedLanguage', nextLang, false);

      document.location.href = gotoUrl;
    },
    getActiveUrlByLang(lang, update) {
      const currentPath = Tools.getCurrentPath();
      const lastCharacter = '/';

      const matcher = (obj, parentKey) => {
        if (!obj?.title) return;

        let url = obj?.url;

        if (currentPath[currentPath?.length - 1] === lastCharacter && url && url[url?.length - 1] !== lastCharacter) {
          url = url + lastCharacter;
        }

        const condition = url === currentPath || url === currentPath + lastCharacter;
        const parentLink = this.getParentLink(parentKey);

        if (update && condition) {
          obj.active = true;

          if (parentLink) parentLink.active = true;
        } else {
          obj.active = false;

          if (parentLink) parentLink.active = false;
        }

        return condition;
      };

      const callback = (_, parent) => {
        return parent;
      };

      let parent = Tools.findRecursive(this.clonedNavigation, matcher, callback);

      if (!parent) {
        parent = Tools.findRecursive(this.meta, matcher, callback);
      }

      if (!parent) {
        parent = Tools.findRecursive(this.contact, matcher, callback);
      }

      if (!parent) {
        const hrefLang = this.getHrefLang(lang);

        return hrefLang ? hrefLang : this.getTranslatedUrl(currentPath, lang);
      }

      return parent[lang]?.url;
    },
    getTranslatedUrl(currentPath, lang) {
      if (this.isBlogTagsUrl(currentPath)) return this.getBlogTagsUrl(lang, currentPath);

      const segment = this.getFolderSwitchSegment(currentPath);

      if (segment) return this.getFolderSwitchUrl(lang, currentPath, segment);

      return null;
    },
    getFolderSwitchSegment(currentPath) {
      const folderSwitch = this.home.folderSwitch;

      if (!folderSwitch) return null;

      const foundSegment = folderSwitch.find((segment) => currentPath.includes(segment));

      return foundSegment || null;
    },
    getFolderSwitchUrl(lang, currentPath, segment) {
      if (!segment) return currentPath;

      let newPath;

      if (lang === this.defaultLang) {
        const regex = new RegExp(`/${this.lowerLang}/`);

        newPath = currentPath.replace(regex, '/');
      } else {
        newPath = currentPath.replace(segment, `${lang}/${segment}`);
      }

      return newPath;
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
    getHrefLang(lang) {
      const hrefLang = document?.querySelector(`link[hreflang=${lang}]`);

      if (!hrefLang) return;

      return hrefLang.getAttribute('href');
    },
    getParentLink(key) {
      const navi = this.clonedNavigation[key];

      return navi?.languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, true);
    },
    updateProductListHeight() {
      const headerItems = this.$refs['headerItem'];
      const productList = headerItems?.$refs['product-list'];

      if (!productList) return;

      for (let i = 0; i < productList.length; i++) {
        const list = productList[i];
        const isExpanded = list.classList.contains(State.EXPANDED);
        const newHeight = !isExpanded || list.style.height !== '' ? '' : list.scrollHeight + 'px';

        list.style.height = newHeight;
      }
    },
    hasContactLink(item) {
      return this.contact?.languages && !item.languages[this.lowerLang]?.emergency;
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
    showSecondaryNavigation: {
      default: false,
      type: Boolean,
    },
    theme: String,
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
      ctaClassList: null,
      maxLinkListsInFlyout: 3,
      activeNavigation: {},
      logoOffsetPosition: null,
      secondaryNavigationInTransition: false,
      secondaryNavigationIsExpanded: false,
      secondaryNavigationDimensions: null,
      secondaryNavigationTimeout: null,
      secondaryNaivgationTransitionDelay: 100,
    };
  },
};
</script>

<style lang="scss"></style>
