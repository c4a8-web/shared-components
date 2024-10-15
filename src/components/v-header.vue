<template>
  <div class="header__spacer" :style="spacerBgColor"></div>
  <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
    <div :class="headerContainerClassList">
      <div class="header__row row">
        <div class="header__col col">
          <div class="header__logo">
            <a :href="homeObj?.url">
              <v-img :img="home?.imgLight" class="header__logo-light" :cloudinary="true" alt="logo" />
              <v-img :img="home?.img" class="header__logo-default" :cloudinary="true" alt="logo" />
            </a>
          </div>
          <div class="header__menu" v-on:click="handleCloseClick">
            <icon icon="menu" class="header__menu-icon" :closed="closed" />
          </div>
          <nav class="header__nav" v-on:mouseout="handleMouseOut">
            <ul class="header__list" ref="list">
              <li :class="headerItemClasses(item)" v-for="(item, index) in activeNavigation">
                <a
                  :class="headerLinkClasses(item, index)"
                  :href="getHref(item)"
                  :target="getTarget(item)"
                  v-on:click="handleClick(item, index)"
                  v-if="item?.languages"
                  ref="link"
                >
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
                    <a
                      :href="subChild?.languages[lowerLang]?.url"
                      :target="subChild.target"
                      class="header__product-list-item custom"
                      v-for="subChild in list.children"
                    >
                      <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
                      <div class="header__product-list-data">
                        <div class="header__product-list-title font-size-8 bold">
                          {{ subChild?.languages[lowerLang]?.title }}
                        </div>
                        <div class="header__product-list-subtitle">{{ subChild?.languages[lowerLang]?.subtitle }}</div>
                      </div>
                    </a>
                  </div>
                </template>

                <a
                  :href="item.languages[lowerLang]?.emergency.href"
                  :class="navHighlightClasses(item, index)"
                  v-if="item.languages[lowerLang]?.emergency"
                >
                  <icon :icon="item.languages[lowerLang]?.emergency.icon" size="medium" />
                  {{ item.languages[lowerLang]?.emergency.text }}
                </a>
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
                  v-for="(language, key) in home.languages"
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
import Tools from '../assets/js/tools.js';
import State from '../assets/js/state.js';
import Events from '../assets/js/events.js';

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
        // this.activeNavigation.length > 0 ? '' : State.LOADING,
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
  created() {
    this.setActiveNavigation();
  },
  mounted() {
    this.bindEvents();

    this.setCtaClasses();
    this.setLinkWidth();
    this.handleScroll();
  },
  updated() {
    if (this.inUpdate) {
      this.updateProductListHeight();

      this.inUpdate = false;
      this.inTransition = false;
    }
  },
  methods: {
    setActiveNavigation() {
      this.setActiveLinks();

      this.activeNavigation = this.clonedNavigation;
    },
    setLinkWidth() {
      const links = this.$refs['link'];

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
      const ref = this.$refs[name][refName];

      if (!ref) return;

      return ref;
    },
    getHref(item) {
      return item.children ? 'javascript:void(0);' : item.languages[this.lowerLang]?.url;
    },
    getTarget(item) {
      const target = item.languages[this.lowerLang]?.target;

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
    getCurrentPath() {
      let path = '/';

      if (typeof process !== 'undefined' && process.server) {
        path = this.$route.fullPath;
      } else {
        path = window.location.pathname;
      }

      if (path[path.length - 1] !== '/') {
        path += '/';
      }

      return path;
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
    navHighlightClasses(item, index) {
      const isHidden = this.isLinkListHidden(item, index);

      return ['header__nav-highlight custom', isHidden ? 'is-hidden' : ''];
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
    };
  },
};
</script>

<style lang="scss">
$header-expand-breakpoint: 'lg';
$header-border-size: 1px;

.shared-components {
  .header {
    @include z-index;
  }

  .header {
    &.vue-component {
      &.is-hovering {
        transition-duration: 0s;
      }

      .header__language-switch,
      .header__link-content {
        .icon {
          @include media-breakpoint-up($header-expand-breakpoint) {
            width: spacing(3);
            height: spacing(3);
          }
        }
      }
    }
  }
}

.header {
  --header-vertical-spacing: #{spacing(5)};

  &.is-loading {
    opacity: 0;
    pointer-events: none;
  }

  &.vue-component {
    position: fixed;
    display: flex;
    box-shadow: $header-section-box-shadow;
    top: 0;
    left: 0;
    right: 0;
    width: 100;
    bottom: auto;
    background-color: var(--color-header-background);

    &.is-scrolled {
      transition: background-color 0.5s $animation-transition;
    }

    &.header--product {
      box-shadow: none;

      &.is-scrolled,
      &:hover {
        box-shadow: $header-section-box-shadow;
      }

      &:not(:hover):not(.is-scrolled):not(.is-expanded) {
        --color-header-background: transparent;
      }

      .header__item {
        &:hover {
          .header__link {
            &::after {
              display: none;
            }
          }
        }

        &.active {
          .header__link {
            &::after {
              display: none;
            }
          }
        }

        @include media-breakpoint-up($header-expand-breakpoint) {
          @include link-active;
        }
      }

      .header__link {
        position: relative;
        border-bottom: 0;
        padding-top: spacing(2);
        padding-bottom: spacing(2);
      }

      .header__nav {
        @include media-breakpoint-up($header-expand-breakpoint) {
          margin-left: spacing(26);
        }
      }

      .header__container {
        &::after {
          display: none;
        }
      }

      .header__row {
        @include media-breakpoint-up($header-expand-breakpoint) {
          padding-left: $header-floating-inner-padding-x;
          padding-right: $header-floating-inner-padding-x;
          margin: 0 spacing($size: 4, $negative: true);
        }
      }

      nav {
        bottom: 0;
      }
    }

    &.is-expanded {
      nav {
        overflow-y: auto;
        max-height: 90vh;
      }
    }

    &:not(:hover):not(.is-scrolled).header--light {
      @include media-breakpoint-up($header-expand-breakpoint) {
        --color-header-background: transparent;
        --color-header-border: transparent;

        box-shadow: none;
        color: var(--color-copy-light);

        &::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: -1;
          backdrop-filter: blur(60px);
        }

        .header__link {
          color: inherit;

          .icon {
            color: inherit;
          }
        }

        .header__logo-light {
          display: block;
        }

        .header__logo-default {
          display: none;
        }

        .header__container {
          &::after {
            background-color: transparent;
          }
        }
      }
    }

    &:not(.is-expanded) {
      nav {
        @include media-breakpoint-down(md) {
          @include is-invisible;

          transform: translateY(-100%) translateX(-50%);
        }
      }
    }

    &:not(.is-hovering) {
      @include media-breakpoint-up($header-expand-breakpoint) {
        .header__flyout {
          @include is-invisible;

          transform: translateY(-100%);
        }
      }
    }

    &.is-hovering {
      @include media-breakpoint-up($header-expand-breakpoint) {
        .header__container {
          &::after {
            background-color: transparent;
          }
        }
      }
    }

    .header__menu {
      .icon {
        width: spacing(8);
        height: spacing(8);
      }
    }

    nav {
      background-color: var(--color-header-background);
      position: absolute;
      bottom: calc(-#{$header-border-size} + 2px);
      left: 50%;
      transform: translateY(100%) translateX(-50%);
      width: calc(100vw + 1px);
      box-shadow: $header-section-box-shadow;
      transition: transform $animation-transition 0.5s;
      overflow: hidden;
      z-index: -1;

      .header__language-switch {
        display: flex;
      }

      @include media-breakpoint-up($header-expand-breakpoint) {
        bottom: 0;

        .header__item {
          &:hover {
            .header__link-text {
              font-weight: bold;
            }
          }
        }
      }
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      .header__contact.header__contact--mobile,
      nav .header__language-switch,
      .header__meta-list,
      .header__menu,
      .header__footer {
        display: none;
      }

      .header__link {
        display: flex;

        &::after {
          bottom: 0;
        }
      }

      .header__button,
      nav {
        display: block;
      }

      .header__language-switch {
        padding-top: var(--header-vertical-spacing);
        display: flex;
        gap: 0;
      }

      nav {
        position: relative;
        width: auto;
        left: auto;
        transform: translateY(0);
        background-color: transparent;
        box-shadow: none;
        overflow: visible;
        z-index: 1;
      }

      .header__list {
        flex-wrap: nowrap;
      }

      .header__item {
        flex: 0 0 auto;
      }

      .header__col {
        padding: 0;
        justify-content: left;

        &::after {
          display: none;
        }
      }

      .header__flyout {
        .col {
          padding: 0;
        }
      }

      .header__link {
        width: auto;
        border: 0;
        padding: 0;
      }

      .header__link-content {
        width: auto;
        pointer-events: all;
        padding: var(--header-vertical-spacing) spacing(4);
      }

      &.header--blending:not(.is-hovering):not(.is-scrolled):not(:hover) {
        mix-blend-mode: difference;

        .header__link-text {
          font-weight: 300;
        }
      }
    }
  }
}

.header__logo {
  flex: 0 1 auto;

  img {
    width: #{'min(30%, 36vw)'};
    min-width: 100px;
    height: auto;

    @include media-breakpoint-up($header-expand-breakpoint) {
      min-width: 140px;
    }
  }

  @include media-breakpoint-up($header-expand-breakpoint) {
    flex: 0 1 25%;
  }
}

.header__logo-light {
  display: none;
}

.header__col {
  display: flex;
  place-items: center;
  padding-top: var(--header-vertical-spacing);
  padding-bottom: var(--header-vertical-spacing);
  justify-content: space-between;
  position: relative;

  > .header__search + .header__language-switch {
    margin-left: spacing(5);
  }

  > .header__language-switch {
    margin-left: auto;
  }

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    background-color: var(--color-header-background);
  }
}

.header__menu {
  flex: 0 1 auto;
  display: flex;
  place-items: center;
}

.header__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.header__link {
  position: relative;
  width: 100%;
  display: flex;
  padding: var(--header-vertical-spacing) $grid-gutter-half-width;
  place-content: center;

  &::after {
    display: none;
    content: '';
    position: absolute;
    bottom: -1px;
    height: 3px;
    width: calc(100% - 2 * #{$grid-gutter-half-width});
    left: $grid-gutter-half-width;
    background-color: var(--color-header-active);
    z-index: 10;
    pointer-events: none;
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    bottom: -1px;
    height: $header-border-size;
    width: 100%;
    left: 0;
    background-color: var(--color-header-border);
    z-index: 10;
    pointer-events: none;
    transition: background-color 0.5s $animation-transition, height 0.5s $animation-transition,
      width 0.5s $animation-transition, left 0.5s $animation-transition;

    @include media-breakpoint-up($header-expand-breakpoint) {
      display: none;
    }
  }

  &.is-expanded {
    &::after {
      @include media-breakpoint-up($header-expand-breakpoint) {
        display: block;
      }
    }

    &::before {
      left: $grid-gutter-half-width;
      background-color: var(--color-header-active);
      width: var(--header-link-text-width);
      height: 3px;
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      border-bottom-width: 1px;
      padding-bottom: var(--header-vertical-spacing);
    }
  }

  &:hover {
    &::after {
      @include media-breakpoint-up($header-expand-breakpoint) {
        display: block;
      }
    }
  }
}

.header__link,
.header__language-switch {
  &.is-expanded {
    .icon {
      --icon-rotation: 180deg !important;

      color: var(--color-header-active);
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      .icon {
        color: inherit;
      }
    }
  }
}

.header__link-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  place-items: center;
  pointer-events: none;
}

.header__link-content,
.header__language-switch {
  .icon {
    margin-left: spacing(2);
  }
}

.header__item {
  flex: 1 0 100%;

  &.active {
    .header__link {
      color: var(--color-active);

      &.is-expanded {
        .header__link-icon {
          color: var(--color-active);
        }
      }

      .header__link-icon {
        color: var(--color-copy);
      }

      @include media-breakpoint-up($header-expand-breakpoint) {
        color: inherit;

        &:not(:hover)::after {
          display: block;
          background-color: var(--color-active);
        }

        &.is-expanded {
          .header__link-icon {
            color: var(--color-copy);
          }
        }
      }
    }
  }
}

.header__flyout {
  bottom: 1px;
  left: 0;
  width: 100%;
  z-index: 5;
  transition: transform $animation-transition 0.5s, opacity $animation-transition 0.4s;
}

.header__flyout,
.header__language-switch-flyout {
  position: absolute;
  background-color: var(--color-header-background);
  transform: translateY(100%);
  box-shadow: $header-section-box-shadow;
}

.header__flyout-content {
  &:not(.is-expanded) {
    > * {
      @include is-invisible;
    }

    .header__flyout-items > * {
      transform: translateY(-20px);
      opacity: 0;
    }
  }

  &.is-expanded {
    .header__flyout-items > * {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.header__flyout-items {
  --header-flyout-item-width: calc(25% - #{spacing(18)} / 4 * 3);
  --header-flyout-product-width: calc(33% - #{spacing(18)} / 4 * 2);

  display: flex;
  margin-top: spacing(16);
  margin-bottom: spacing(27);
  width: 100%;
  gap: spacing(18);

  > * {
    transition: opacity 0.5s 0.15s $animation-transition, transform 0.4s 0.15s $animation-transition;
    flex: 1 0 var(--header-flyout-item-width);

    &.header__product-list {
      flex: 1 0 var(--header-flyout-product-widt);
    }
  }

  .header__flyout-block {
    max-width: var(--header-flyout-item-width);
  }
}

.header__flyout-caption {
  @include font-size-4;
}

.header__item,
.header__meta-list,
.header__flyout-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.header__language-switch {
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0 0 var(--header-vertical-spacing) 0;
  display: none;
  order: 1;
  gap: spacing(10);
  place-items: center;
  z-index: 1;

  .header__link-icon {
    pointer-events: none;
  }

  &.is-expanded {
    @include media-breakpoint-up($header-expand-breakpoint) {
      .header__link-text {
        font-weight: bold;
      }
    }
  }

  &:not(.is-expanded) {
    .header__language-switch-flyout {
      @include is-invisible;

      transform: translateY(-100%);
    }
  }
}

.header__search {
  margin-left: auto;
  .icon {
    margin: auto 0;
    display: flex;
  }
}

.header__meta-list {
  padding-top: spacing(5);
  padding-bottom: spacing(4);
  order: 0;

  .header__link {
    border: 0;
  }
}

.header__contact {
  margin: spacing(1) 0;
  display: flex;
  place-items: center;
  place-content: center;

  &.header__contact--mobile {
    order: 2;
  }
}

.header__contact-text {
  display: flex;
  place-content: center;
}

.header__contact-title {
  display: inline-block;
  margin-left: spacing(2);
  text-decoration: underline;
}

.header__contact-link {
  background-color: var(--color-header-contact-background);
  padding: spacing(15) spacing(4);
  display: block;
  width: 100%;
}

.header__link,
.header__link:active,
.header__link:visited,
.header__link:hover,
.header__contact-link:active,
.header__contact-link:visited,
.header__contact-link {
  color: var(--color-copy);
}

.header__footer {
  width: 100%;
  margin: 0 auto;
  padding-left: $grid-gutter-half-width;
  padding-right: $grid-gutter-half-width;
  display: flex;
  flex-direction: column;

  .header__button {
    display: block;
    margin-left: 0;
    margin-bottom: spacing(6);
    margin-top: spacing(6);
  }
}

.header__container {
  position: relative;
  z-index: 10;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0px;
    width: 100vw;
    height: $header-border-size;
    background-color: var(--color-header-container-border);
    left: 50%;
    transform: translateX(-50%);
  }
}

.header__flyout-description {
  margin-top: spacing(9);
}

.header__flyout-block {
  .header__link {
    margin-top: spacing(11);
    display: flex;
    justify-content: flex-start;

    &:hover {
      &::after {
        display: none;
      }
    }
  }
}

.header__nav-highlight,
.header__link-list,
.header__product-list {
  margin: spacing(2) $grid-gutter-half-width spacing(2);
}

.header__link-list {
  &:first-of-type {
    &.is-expandable {
      margin-top: spacing(6);
    }
  }

  &:not(.is-expandable) {
    margin-top: 0;
    margin-bottom: 0;

    &:first-of-type {
      margin-top: spacing(2);
    }

    &:last-of-type {
      margin-bottom: spacing(2);
    }
  }

  &.is-expanded {
    margin-bottom: spacing(6);
  }

  @include media-breakpoint-up($header-expand-breakpoint) {
    margin-top: spacing(10);
    width: 70%;
  }
}

.header__product-list {
  transition: height 0.4s $animation-transition, opacity 0.5s 0.15s $animation-transition,
    transform 0.4s 0.15s $animation-transition;

  &:not(.is-expanded),
  &.in-transition {
    @include is-invisible;

    width: 0;
  }

  &.in-transition {
    width: auto;
  }
}

.header__spacer {
  height: spacing(18);
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -1px;
    background-color: var(--color-header-spacer-background);
  }

  @include media-breakpoint-up($header-expand-breakpoint) {
    display: none;
  }
}

.header__button {
  margin-left: spacing(4);
  display: none;
}

.header__link-text-spacer,
.header__link-text {
  @include font-size-custom($sm: $font-size-18px, $lg: $font-size-16px);
}

.header__link-text-spacer {
  pointer-events: none;
  font-weight: bold;
  opacity: 0;
}

.header__link-text {
  position: absolute;
}

.header__link-icon {
  margin-right: spacing(2);

  @include media-breakpoint-up($header-expand-breakpoint) {
    margin-right: 0;
  }
}

.header__product-list-image {
  max-width: spacing(12);
  transition: transform 0.5s $animation-transition;
  align-self: flex-start;
}

.header__product-list-subtitle {
  @include font-size-custom($sm: $font-size-14px);

  color: var(--color-header-product-subtitle);
}

.header__product-list-item {
  display: flex;
  margin-bottom: spacing(12);
  color: var(--color-copy);

  &:hover {
    color: var(--color-copy-hover);

    .header__product-list-image {
      transform: scale(1.2);
    }
  }

  &:visited,
  &:focus,
  &:active {
    .header__product-list-image {
      transform: scale(1);
    }
  }
}

.header__product-list-data {
  margin-left: spacing(2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header__language-link {
  color: var(--color-copy);

  &.active {
    color: var(--color-active);
  }

  &:hover {
    @include media-breakpoint-up($header-expand-breakpoint) {
      color: var(--color-copy);
      font-weight: bold;
    }
  }
}

.header__language-switch-flyout {
  padding: 0 spacing(8) spacing(4);
  bottom: 0;
  right: spacing($size: 3, $negative: true);
  z-index: 5;
  display: flex;
  gap: spacing(4);
  flex-direction: column;
  transition: transform $animation-transition 0.5s, opacity $animation-transition 0.4s 0.1s;
}

.header__highlight-cta {
  display: none;

  @include media-breakpoint-up($header-expand-breakpoint) {
    margin-top: spacing(12);
    display: block;
  }
}

.header__language-link {
  color: var(--color-copy);

  &.active {
    color: var(--color-active);
  }

  &:hover {
    @include media-breakpoint-up($header-expand-breakpoint) {
      color: var(--color-copy);
      font-weight: bold;
    }
  }
}

.header__language-switch-flyout {
  padding: 0 spacing(8) spacing(4);
  bottom: 0;
  right: spacing($size: 3, $negative: true);
  z-index: 5;
  display: flex;
  gap: spacing(4);
  flex-direction: column;
  transition: transform $animation-transition 0.5s, opacity $animation-transition 0.4s 0.1s;
}

.header__nav-highlight {
  @include font-size-custom($sm: $font-size-13px);

  display: flex;
  align-items: center;
  color: var(--color-emergency);

  .icon {
    margin-right: spacing(2);
  }

  &.is-in-transition,
  &.is-hidden {
    @include is-invisible;

    width: 0;
  }

  &:hover,
  &:active {
    color: var(--color-emergency);
  }
}
</style>
