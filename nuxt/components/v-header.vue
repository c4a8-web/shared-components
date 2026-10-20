<template>
  <div class="header__spacer" :style="spacerBgColor"></div>
  <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
    <div :class="headerContainerClassList" ref="headerContainer">
      <div class="header__row row">
        <div class="header__col col">
          <div
            :class="secondaryNavigationClassList"
            v-if="secondaryNavigation"
            @transitionend="handleSecondaryNavigationTransitionEnd"
            ref="secondaryNavigation"
          >
            <div
              class="header__secondary-navigation-button"
              ref="secondaryNavigationButton"
              @click="toggleSecondaryNavigation"
            >
              <icon class="header__secondary-navigation-icon" icon="grid" />
              <span class="header__secondary-navigation-text">{{
                secondaryNavigation.languages?.[lowerLang]?.title || secondaryNavigation.text
              }}</span>
            </div>
            <div class="header__secondary-navigation-content">
              <div
                class="header__secondary-navigation-inner-content"
                ref="secondaryNavigationInnerContent"
                v-if="renderMegaMenu"
              >
                <template v-for="(item, index) in secondaryNavigation.children" :key="index">
                  <a
                    :href="getHref(child)"
                    :target="getTarget(child)"
                    class="header__secondary-navigation-item custom"
                    v-for="(child, itemIndex) in item.children"
                    :key="itemIndex"
                  >
                    <v-img
                      :img="child.img"
                      class="header__secondary-navigation-item-img"
                      :cloudinary="child.cloudinary ?? true"
                      :alt="child.languages[lowerLang]?.alt || child.languages[lowerLang]?.title"
                    />
                    <span class="header__secondary-navigation-item-text">{{ child.languages[lowerLang]?.title }}</span>
                  </a>
                </template>
              </div>
            </div>
          </div>
          <div class="header__logo" :style="headerLogoStyle">
            <a :href="homeObj?.url">
              <span class="header__logo-media" ref="logoMedia">
                <v-img
                  :img="home?.imgLight"
                  class="header__logo-light"
                  :cloudinary="home?.cloudinary ?? true"
                  :alt="logoAlt"
                  fetchpriority="high"
                />
                <v-img
                  :img="home?.img"
                  class="header__logo-default"
                  :cloudinary="home?.cloudinary ?? true"
                  :alt="logoAlt"
                  fetchpriority="high"
                />
              </span>
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
                :renderMegaMenu="renderMegaMenu"
                ref="headerItem"
              ></v-header-item>
            </ul>
            <div class="header__footer">
              <link-list
                :list="metaList"
                :lang="lowerLang"
                classes="header__meta-list"
                :no-animation="true"
                v-if="metaList && hasMeta"
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
                <cta :classes="ctaClassList" :on-surface="onSurfaceCta" v-bind="button" />
              </div>
              <div
                :class="{
                  'header__language-switch header__language-switch--mobile': true,
                  'is-expanded': languageListExpanded,
                }"
                v-if="hasLangSwitch"
              >
                <a class="header__link custom" v-on:click="toggleLanguageList">
                  <div class="header__link-content">
                    <span class="header__language-label">
                      <icon icon="world-detailed" :size="22" />
                      {{ $t('changeLanguage') }}
                    </span>
                    <icon class="header__link-icon" icon="expand" size="small" />
                  </div>
                </a>
                <div class="header__language-switch-list">
                  <a
                    v-for="option in languageOptions"
                    :class="{ 'header__language-link custom': true, active: option.code === lowerLang }"
                    v-on:click="handleLanguageSwitch(option.code)"
                    :key="option.code"
                  >
                    <span class="header__language-names">
                      <span class="header__language-native">{{ option.native }}</span>
                      <span class="header__language-translated" v-if="option.translated">{{ option.translated }}</span>
                    </span>
                    <span class="header__language-code">{{ option.label }}</span>
                  </a>
                  <p class="header__language-note">{{ languageNote }}</p>
                </div>
              </div>
            </div>
          </nav>
          <div class="header__button" v-if="button">
            <cta :classes="ctaClassList" :on-surface="onSurfaceCta" v-bind="button" :small="true" />
          </div>
          <search v-if="searchValue" class="header__search" language="de" placeholder="search" />
          <div
            class="header__language-switch"
            v-on:mouseover="handleLanguageOver"
            v-on:mouseout="handleLanguageOut"
            v-if="hasLangSwitch"
            ref="languageSwitch"
          >
            <span class="header__link-text">{{ lowerLang }}</span>
            <span class="header__link-text-spacer">{{ lowerLang }}</span>
            <icon class="header__link-icon" icon="expand" size="small" />
            <div class="header__language-switch-flyout" ref="languageSwitchFlyout">
              <a
                v-for="option in languageOptions"
                :class="{ 'header__language-link custom': true, active: option.code === lowerLang }"
                v-on:click="handleLanguageSwitch(option.code)"
                :key="option.code"
              >
                <span class="header__language-names">
                  <span class="header__language-native">{{ option.native }}</span>
                  <span class="header__language-translated" v-if="option.translated">{{ option.translated }}</span>
                </span>
                <span class="header__language-code">{{ option.label }}</span>
              </a>
              <p class="header__language-note">{{ languageNote }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__flyout" v-on:mouseout="handleMouseOut" v-if="renderMegaMenu">
      <div :class="containerClass">
        <div class="row">
          <div class="col">
            <div
              class="header__flyout-content"
              v-for="(item, itemIndex) in activeNavigation"
              ref="flyout"
              :key="itemIndex"
            >
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

                <template v-for="(list, listIndex) in item.children" :key="listIndex">
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
                      v-for="(subChild, subchildIndex) in list.children"
                      :key="subchildIndex"
                    >
                      <v-img
                        :img="subChild.img"
                        class="header__product-list-image"
                        :cloudinary="subChild.cloudinary ?? true"
                        :alt="subChild.languages[lowerLang]?.alt || subChild.languages[lowerLang]?.title"
                      />
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
import { computed } from 'vue';
import { useI18n, useNuxtApp } from '#imports';
import { useAppStore } from '../stores/app.js';
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import Events from '../utils/events.js';
import SecondaryNavigation from '../utils/data/secondary-navigation.js';
import Languages from '../utils/languages.js';

const HEADER_LAYOUT_CACHE_KEY = 'vHeaderLayout';
const HEADER_COLLAPSE_MAX_VIEWPORT = 1400;

const isOutsideCollapseMeasureRange = () => {
  if (typeof window === 'undefined') return false;

  return !Tools.isAboveBreakpoint('lg') || window.innerWidth >= HEADER_COLLAPSE_MAX_VIEWPORT;
};

const readHeaderLayoutCache = () => {
  if (typeof window === 'undefined') return null;

  try {
    const cache = JSON.parse(window.sessionStorage.getItem(HEADER_LAYOUT_CACHE_KEY));

    return cache && cache.viewport === window.innerWidth ? cache : null;
  } catch {
    return null;
  }
};

export default {
  tagName: 'v-header',
  setup() {
    const store = useAppStore();

    const { $switchLocalePath: switchLocalePath, $getLocales } = useI18n();
    const availableLocales = computed(() => ($getLocales() || []).map((l) => (typeof l === 'string' ? l : l.code)));

    return { store, switchLocalePath, availableLocales };
  },
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
        this.collapseRatio ? 'header--collapsible' : '',
        this.collapseRatio && !this.logoCollapseReady ? 'is-measuring' : '',
        this.logoCollapsed ? 'is-logo-collapsed' : '',
        this.headerCondensed ? 'is-condensed' : '',
        this.onSurface ? State.ON_SURFACE : '',
        this.inUpdate ? 'is-updating' : '',
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

      return {
        ...SecondaryNavigation,
        children: SecondaryNavigation.children.map((item) => ({
          ...item,
          children: item.children.filter((child) => child.name !== this.theme),
        })),
      };
    },
    collapseRatio() {
      const ratio = parseFloat(this.collapse);

      if (!ratio || ratio <= 0) return null;

      return ratio > 1 ? ratio / 100 : ratio;
    },
    headerLogoStyle() {
      const styles = [];

      if (this.secondaryNavigation && this.logoOffsetPosition) {
        styles.push(`padding-left: ${this.logoOffsetPosition}px`);
      }

      if (this.collapseRatio) {
        styles.push(`--header-logo-collapse: ${this.collapseRatio}`);
      }

      if (this.collapseRatio && this.logoNaturalWidth) {
        styles.push(`--header-logo-natural-width: ${this.logoNaturalWidth}px`);
      }

      return styles.length ? `${styles.join(';')};` : undefined;
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
    logoAlt() {
      // The logo is the only content of the home link, so the alt text names the site,
      // taken from the home entry's alt (or title) instead of a hardcoded "logo".
      return this.homeObj?.alt || this.homeObj?.title || 'logo';
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    languageNote() {
      // The source language is the site's default locale: German on corporate, English
      // on the product sites. Its name is itself translated, so the sentence reads
      // naturally in every language.
      const source = useNuxtApp().$getI18nConfig?.().defaultLocale ?? 'en';
      const sourceKey = `languageSource${Tools.capitalize(source)}`;
      const sourceName = this.$t(sourceKey);

      return this.$t('languageNote', { source: sourceName === sourceKey ? this.$t('languageSourceEn') : sourceName });
    },
    searchValue() {
      return Tools.isTrue(this.search);
    },
    metaList() {
      if (!this.meta || typeof this.meta !== 'object') return null;

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
      const clonedNavigation = JSON.parse(JSON.stringify(this.navigation));

      if (this.secondaryNavigation) {
        this.secondaryNavigation.isMobile = true;

        clonedNavigation.push(this.secondaryNavigation);
      }

      return clonedNavigation;
    },
    isLight() {
      return this.light === true;
    },
    hasLangSwitch() {
      return this.availableLocales.length > 1;
    },
    languageOptions() {
      return Languages.getOptions(this.availableLocales, this.lowerLang);
    },
    hasContact() {
      return this.contact;
    },
    hasMeta() {
      return this.meta && this.meta.length > 0;
    },
    headerState() {
      return this.store.getHeader;
    },
    onSurfaceCta() {
      return this.hoverHeader || this.isScrolled ? null : this.onSurface || (this.isLight && this.onSurface);
    },
  },
  created() {
    this.setActiveNavigation();

    this.store.setHeader({
      isScrolled: this.isScrolled,
      isLight: this.isLight,
      isHovering: this.hover,
      isProduct: this.product,
      isExpanded: !this.closed,
      isBlending: this.blendMode,
      isUpdating: this.inUpdate,
    });
  },
  watch: {
    secondaryNavigationDimensions(newVal) {
      if (newVal !== null && newVal.width >= 0) {
        this.$nextTick(() => {
          this.calculateLogoOffsetPosition();
        });
      }
    },
    isScrolled(newVal) {
      this.store.setHeader({ ...this.headerState, isScrolled: newVal });
    },
    hover(newVal) {
      this.store.setHeader({ ...this.headerState, isHovering: newVal });
    },
    closed(newVal) {
      this.store.setHeader({ ...this.headerState, isExpanded: !newVal });
    },
    blendMode(newVal) {
      this.store.setHeader({ ...this.headerState, isBlending: newVal });
    },
    inUpdate(newVal) {
      this.store.setHeader({ ...this.headerState, isUpdating: newVal });
    },
  },
  mounted() {
    this.bindEvents();

    this.setCtaClasses();
    this.setLinkWidth();
    this.setLogoNaturalWidth();
    this.handleScroll();

    if (this.secondaryNavigation) {
      this.getSecondaryNavigationDimensions();
    }

    this.initEvents.forEach((event) =>
      window.addEventListener(event, this.initMegaMenu, { once: true, passive: true })
    );

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => this.setLogoNaturalWidth());
    }
  },
  updated() {
    if (this.inUpdate) {
      this.updateProductListHeight();

      this.inUpdate = false;
      this.inTransition = false;
    }
  },
  methods: {
    initMegaMenu() {
      if (this.renderMegaMenu) return;

      this.renderMegaMenu = true;

      if (this.secondaryNavigation) {
        this.$nextTick(() => {
          if (this.secondaryNavigationIsExpanded || this.secondaryNavigationInTransition) return;

          this.getSecondaryNavigationDimensions();
        });
      }

      this.initEvents.forEach((event) => window.removeEventListener(event, this.initMegaMenu));
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
    closeSecondaryNavigation() {
      if (!this.secondaryNavigation || !this.secondaryNavigationIsExpanded) return;

      this.secondaryNavigationInTransition = !this.secondaryNavigationInTransition;
      this.secondaryNavigationIsExpanded = !this.secondaryNavigationIsExpanded;

      const secondaryNavigation = this.$refs.secondaryNavigation;

      secondaryNavigation.removeAttribute('data-height-expanded');
      secondaryNavigation.removeAttribute('data-width-expanded');
      secondaryNavigation.style.height = null;
      secondaryNavigation.style.width = null;

      this.secondaryNavigationTransitionState = null;
    },
    toggleSecondaryNavigation() {
      if (!this.secondaryNavigation) return;

      const secondaryNavigation = this.$refs.secondaryNavigation;
      const secondaryNavigationButton = this.$refs.secondaryNavigationButton;

      if (!secondaryNavigation || !secondaryNavigationButton) return;

      clearTimeout(this.secondaryNavigationTimeout);

      this.secondaryNavigationInTransition = !this.secondaryNavigationInTransition;
      this.secondaryNavigationIsExpanded = !this.secondaryNavigationIsExpanded;

      if (this.secondaryNavigationIsExpanded) return this.expandWidthSecondaryNavigation(secondaryNavigation);

      this.shrinkSecondaryNavigation(secondaryNavigation, secondaryNavigationButton);
    },
    shrinkWidthSecondaryNavigation() {
      const secondaryNavigation = this.$refs.secondaryNavigation;

      if (!secondaryNavigation) return;

      secondaryNavigation.removeAttribute('data-height-expanded');
      secondaryNavigation.style.height = null;

      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonHeight = buttonDimensions.height;

      secondaryNavigation.style.width = `${buttonHeight}px`;

      secondaryNavigation.removeAttribute('data-width-expanded');
      this.secondaryNavigationTransitionState = null;
    },
    shrinkSecondaryNavigation(secondaryNavigation) {
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonHeight = buttonDimensions.height;

      secondaryNavigation.style.height = `${buttonHeight}px`;

      this.secondaryNavigationTransitionState = this.secondaryNavigationTransitionStates.SHRINKING_HEIGHT;
    },
    expandWidthSecondaryNavigation(secondaryNavigation) {
      if (!this.secondaryNavigationInTransition) return;

      const dimensions = this.secondaryNavigationDimensions;
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonWidth = buttonDimensions.width;

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
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonHeight = buttonDimensions.height;

      secondaryNavigation.style.height = `${buttonHeight}px`;

      this.secondaryNavigationTimeout = setTimeout(() => {
        this.secondaryNavigationDimensions['height'] = secondaryNavigationInnerContent.offsetHeight;

        const dimensions = this.secondaryNavigationDimensions;

        secondaryNavigation.dataset.heightExpanded = true;

        secondaryNavigation.style.height = `${buttonHeight + dimensions.height}px`;
      }, this.secondaryNaivgationTransitionDelay * 4);
    },
    handleSecondaryNavigationTransitionEnd(event) {
      if (
        this.secondaryNavigationTransitionState &&
        (event?.propertyName !== 'height' || event?.propertyName !== 'width')
      )
        return;

      if (this.secondaryNavigationTransitionState === this.secondaryNavigationTransitionStates.SHRINKING_HEIGHT) {
        this.shrinkWidthSecondaryNavigation();
      }
    },
    setLogoNaturalWidth() {
      const media = this.$refs.logoMedia;

      if (!media) return;

      const images = [...media.querySelectorAll('img')];
      const width = Math.max(0, ...images.map((image) => image.getBoundingClientRect().width));

      if (!width) {
        const pending = images.filter((image) => !image.complete);

        if (!pending.length) {
          this.logoCollapseReady = true;

          return;
        }

        pending.forEach((image) => {
          image.addEventListener('load', this.setLogoNaturalWidth, { once: true });
          image.addEventListener('error', () => (this.logoCollapseReady = true), { once: true });
        });

        return;
      }

      this.logoNaturalWidth = width;

      this.evaluateLogoCollapse();
    },
    calculateLogoOffsetPosition() {
      this.logoOffsetPosition = 0;

      if (Tools.isUpperBreakpoint() && !this.headerCondensed) {
        this.logoOffsetPosition = this.getLogoOffsetSpace();
      }

      this.saveHeaderLayoutCache();
    },
    getLogoOffsetSpace() {
      if (!this.secondaryNavigation) return 0;

      const headerContainer = this.$refs.headerContainer;

      if (!headerContainer) return 0;

      const offsetCorrection = 20;

      const margin = headerContainer.getBoundingClientRect().left;
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonWidth = buttonDimensions.width;

      return margin < buttonWidth ? Math.max(0, buttonWidth - margin - offsetCorrection) : 0;
    },
    evaluateLogoCollapse() {
      if (isOutsideCollapseMeasureRange()) {
        this.logoCollapsed = false;
        this.headerCondensed = false;
        this.logoCollapseReady = true;
        this.saveHeaderLayoutCache();
        return;
      }

      const media = this.$refs.logoMedia;
      const header = media?.closest('.header');
      const col = media?.closest('.header__col');
      const logo = media?.closest('.header__logo');

      if (!header || !col || !logo) return;

      const wasCondensed = header.classList.contains('is-condensed');

      if (wasCondensed) header.classList.remove('is-condensed');

      const imageWidth = [...media.querySelectorAll('img')]
        .map((image) => image.getBoundingClientRect().width)
        .reduce((widest, width) => Math.max(widest, width), 0);

      let measurements = null;

      if (imageWidth) {
        const colStyle = window.getComputedStyle(col);
        const available =
          col.getBoundingClientRect().width - parseFloat(colStyle.paddingLeft) - parseFloat(colStyle.paddingRight);

        const logoStyle = window.getComputedStyle(logo);
        const logoPadding = parseFloat(logoStyle.paddingRight) + this.getLogoOffsetSpace();

        const siblingsRequired = [...col.children]
          .filter((child) => child !== logo && child.offsetParent)
          .reduce((total, child) => {
            const childStyle = window.getComputedStyle(child);
            const margins = child.classList.contains('header__language-switch')
              ? 0
              : parseFloat(childStyle.marginLeft) + parseFloat(childStyle.marginRight);
            const width = Math.max(child.scrollWidth, child.getBoundingClientRect().width);

            return total + width + margins;
          }, 0);

        measurements = {
          available,
          expanded: imageWidth + logoPadding + siblingsRequired,
          collapsed: imageWidth * (this.collapseRatio || 1) + logoPadding + siblingsRequired,
        };
      }

      if (wasCondensed) header.classList.add('is-condensed');

      if (!measurements) return;

      const condensed = measurements.collapsed > measurements.available + 1;
      const collapsed = !condensed && measurements.expanded > measurements.available + 1;

      this.logoCollapsed = collapsed;

      if (!this.logoCollapseReady && collapsed) {
        this.$nextTick(() => requestAnimationFrame(() => requestAnimationFrame(() => (this.logoCollapseReady = true))));
      } else {
        this.logoCollapseReady = true;
      }

      if (condensed !== this.headerCondensed) {
        this.headerCondensed = condensed;
        this.reset();
        this.$nextTick(() => {
          this.setLogoNaturalWidth();
          this.getSecondaryNavigationDimensions();
        });
      }

      this.saveHeaderLayoutCache();
    },
    saveHeaderLayoutCache() {
      try {
        window.sessionStorage.setItem(
          HEADER_LAYOUT_CACHE_KEY,
          JSON.stringify({
            viewport: window.innerWidth,
            condensed: this.headerCondensed,
            collapsed: this.logoCollapsed,
            naturalWidth: this.collapseRatio ? this.logoNaturalWidth : null,
            logoOffset: this.logoOffsetPosition,
          })
        );
      } catch {}
    },
    getSecondaryNavigationButtonDimensions() {
      const secondaryNavigationButton = this.$refs.secondaryNavigationButton;

      return { width: secondaryNavigationButton.offsetWidth, height: secondaryNavigationButton.offsetHeight };
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
      return this.headerCondensed || Tools.isBelowBreakpoint('md');
    },
    bindEvents() {
      window.addEventListener('scroll', this.handleScroll.bind(this));

      document.addEventListener(Events.WINDOW_RESIZE, this.handleResize.bind(this));
    },
    handleResize() {
      this.reset();
      this.setLinkWidth();
      this.setLogoNaturalWidth();
      this.closeSecondaryNavigation();
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
      if (this.initMegaMenu) this.initMegaMenu();

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
      if (this.initMegaMenu) this.initMegaMenu();

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
      if (this.headerCondensed) return;
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
    toggleLanguageList() {
      this.languageListExpanded = !this.languageListExpanded;
    },
    handleLanguageOver() {
      this.resetAllFlyouts();

      this.hover = true;

      const languageSwitch = this.$refs['languageSwitch'];

      if (!languageSwitch) return;

      languageSwitch.classList.add(State.EXPANDED);
    },
    handleLanguageOut(event) {
      if (event.relatedTarget?.closest('.header__language-switch')) return;

      this.hover = false;

      const languageSwitch = this.$refs['languageSwitch'];

      if (!languageSwitch) return;

      languageSwitch.classList.remove(State.EXPANDED);
    },
    resetAllFlyouts() {
      const headerItems = this.$refs['headerItem'];
      const links = headerItems?.$refs['link'];

      links?.forEach((link) => {
        link.classList.remove(State.EXPANDED);
      });

      this.$refs['flyout']?.forEach((flyout) => {
        flyout.classList.remove(State.EXPANDED);
      });

      this.$refs['languageSwitch']?.classList.remove(State.EXPANDED);
    },
    getFlyoutRef(refName) {
      return this.getRef('flyout', refName);
    },
    getLinkRef(refName) {
      return this.getRef('link', refName);
    },
    getRef(name, refName) {
      let ref = null;

      if (this.$refs[name]) {
        ref = this.$refs[name][refName];
      } else if (this.$refs['headerItem'] && this.$refs['headerItem'].$refs[name]) {
        ref = this.$refs['headerItem'].$refs[name][refName];
      }

      return ref || null;
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
    async handleLanguageSwitch(nextLang) {
      if (nextLang === this.lowerLang) return;

      Tools.storageSave('preferedLanguage', nextLang, false);

      const target = this.switchLocalePath(nextLang);
      const stem = window.location.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';

      const alternates = await this.loadContentAlternates();
      const missing = alternates[stem] && !alternates[stem].includes(nextLang);

      document.location.href = missing || !target ? `/${nextLang}` : target;
    },
    loadContentAlternates() {
      if (!this._contentAlternates) {
        this._contentAlternates = fetch('/i18n-content-alternates.json')
          .then((res) => (res.ok ? res.json() : {}))
          .catch(() => ({}));
      }

      return this._contentAlternates;
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

      const langPrefix = new RegExp(`^/${this.lowerLang}/`);

      return currentPath.replace(langPrefix, `/${lang}/`);
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

      const url = new URL(hrefLang.getAttribute('href'), document.location.origin);

      return url.pathname + url.search + url.hash;
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
    onSurface: Boolean,
    collapse: {
      default: null,
    },
  },
  data() {
    const layoutCache = readHeaderLayoutCache();

    return {
      hoverHeader: false,
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
      logoNaturalWidth: layoutCache?.naturalWidth || null,
      logoOffsetPosition: layoutCache?.logoOffset || 0,
      logoCollapsed: layoutCache?.collapsed || false,
      headerCondensed: layoutCache?.condensed || false,
      logoCollapseReady: !!layoutCache || isOutsideCollapseMeasureRange(),
      secondaryNavigationInTransition: false,
      secondaryNavigationIsExpanded: false,
      secondaryNavigationDimensions: null,
      secondaryNavigationTimeout: null,
      secondaryNaivgationTransitionDelay: 100,
      secondaryNavigationTransitionState: null,
      secondaryNavigationTransitionStates: {
        SHRINKING_HEIGHT: 0,
        SHRINKING_WIDTH: 1,
      },
      initEvents: ['mousemove', 'scroll', 'touchstart', 'click'],
      renderMegaMenu: false,
      languageListExpanded: false,
    };
  },
};
</script>
<style lang="scss">
$header-expand-breakpoint: 'lg';
$header-border-size: 1px;
$header-collapse-max-viewport: 1400px;

.shared-components {
  .header {
    @include z-index;
  }

  .header {
    &.vue-component {
      &.is-hovering {
        transition-duration: 0s;
      }

      &:not(.is-condensed) {
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
}

.header {
  --header-vertical-spacing: #{spacing(4)};
  --header-secondary-navigation-shadow: 4px 0px 12px 0px rgba(0, 0, 0, 0.08);
  --header-logo-height-small: 26px;
  --header-logo-height-medium: 26px;
  --header-logo-height-large: 24px;

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
    width: 100%;
    bottom: auto;
    background-color: var(--color-header-background);

    &.is-scrolled {
      transition: background-color 0.5s $animation-transition;
    }

    &:hover,
    &.is-scrolled {
      .header__secondary-navigation-button {
        box-shadow: var(--header-secondary-navigation-shadow);
      }
    }

    &.on-surface {
      .header__secondary-navigation {
        --color-header-background: transparent;
      }
    }

    &:not(:hover):not(.is-scrolled):not(.is-expanded) {
      --color-header-background: rgba(255, 255, 255, 0.3);

      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -2;
        background-color: var(--color-gk-white);
        opacity: 0.3;
      }

      &.header--light {
        &::after {
          background-color: var(--color-black);
        }
      }
    }

    &:not(.header--product):not(.is-condensed) {
      @include media-breakpoint-between($header-expand-breakpoint, $header-expand-breakpoint) {
        .header__nav {
          flex-shrink: 0;
        }

        .header__logo {
          padding-right: spacing(4);
        }

        .header__link-content {
          padding-left: spacing(3);
          padding-right: spacing(3);
        }
      }
    }

    &.header--product {
      --header-logo-height-small: 38px;
      --header-logo-height-medium: 34px;
      --header-logo-height-large: 40px;

      box-shadow: none;

      &.is-scrolled,
      &:hover {
        box-shadow: $header-section-box-shadow;
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
      }

      .header__link {
        border-bottom: 0;
      }

      nav {
        bottom: 0;
      }

      &:not(.is-condensed) {
        .header__item {
          @include media-breakpoint-up($header-expand-breakpoint) {
            @include link-active;
          }
        }

        .header__row {
          @include media-breakpoint-up($header-expand-breakpoint) {
            padding-left: $header-floating-inner-padding-x;
            padding-right: $header-floating-inner-padding-x;
            margin: 0 spacing($size: 4, $negative: true);
          }
        }

        @include media-breakpoint-between($header-expand-breakpoint, xl) {
          --header-container-width: #{get-container-max-width(lg)};

          .header__container {
            max-width: none;
            width: auto;
            flex-grow: 1;
            margin-left: calc((100% - var(--header-container-width)) / 2);
            margin-right: 0;
          }
        }

        @include media-breakpoint-between(xl, xl) {
          --header-container-width: #{get-container-max-width(xl)};
        }

        @include media-breakpoint-between($header-expand-breakpoint, $header-expand-breakpoint) {
          --header-logo-height-large: 38px;

          .header__logo {
            flex-basis: 20%;
            padding-right: spacing(4);
          }

          .header__language-switch {
            --header-language-spacing: #{spacing(4)};
          }

          .header__link-content {
            padding-left: spacing(3);
            padding-right: spacing(3);
          }

          .header__button {
            margin-left: spacing(3);
          }
        }

        .header__logo {
          @include media-breakpoint-up($header-expand-breakpoint) {
            flex-grow: 1;
          }
        }

        .header__nav {
          @include media-breakpoint-up($header-expand-breakpoint) {
            flex-shrink: 0;
          }
        }
      }
    }

    &.header--collapsible {
      .header__logo-media {
        width: var(--header-logo-natural-width, max-content);
        transition: width 0.5s $animation-transition;
      }

      &.is-measuring {
        .header__logo-media {
          transition: none;
        }

        @include media-breakpoint-up($header-expand-breakpoint) {
          @media (max-width: ($header-collapse-max-viewport - 0.02px)) {
            .header__nav,
            .header__button,
            .header__language-switch,
            .header__menu {
              opacity: 0;
              pointer-events: none;
            }
          }
        }
      }

      &.is-logo-collapsed {
        @include media-breakpoint-up($header-expand-breakpoint) {
          .header__logo {
            flex: 1 1 auto;
          }

          .header__logo-media {
            width: calc(var(--header-logo-natural-width) * var(--header-logo-collapse));
          }
        }
      }
    }

    &.is-expanded {
      nav {
        overflow-y: auto;
        max-height: 90vh;
      }
    }

    &:not(:hover):not(.is-scrolled) {
      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        backdrop-filter: blur(30px);
      }
    }

    &:not(:hover):not(.is-scrolled):not(.is-condensed).header--light {
      @include media-breakpoint-up($header-expand-breakpoint) {
        --color-header-background: transparent;
        --color-header-border: transparent;

        box-shadow: none;
        color: var(--color-copy-light);

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
      }
    }

    &:not(.is-expanded) {
      nav {
        @include media-breakpoint-down(md) {
          @include is-invisible;

          transform: translateY(-100%) translateX(-50%);
        }
      }

      &.is-condensed {
        nav {
          @include is-invisible;

          transform: translateY(-100%) translateX(-50%);
        }
      }
    }

    &.is-condensed {
      .header__item.is--mobile {
        display: block;
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

        .header__secondary-navigation-button {
          opacity: 0.4;
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
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      &:not(.is-condensed) {
        --header-vertical-spacing: #{spacing(5)};

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

        .header__button {
          flex-shrink: 0;
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
          bottom: 0;
          transform: translateY(0);
          background-color: transparent;
          box-shadow: none;
          overflow: visible;
          z-index: 1;
          transition: none;

          .header__item {
            &:hover {
              .header__link-text {
                font-weight: bold;
              }
            }
          }
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
          padding: calc(var(--header-vertical-spacing) + spacing(2)) spacing(4);
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
}

.header__logo {
  flex: 0 1 auto;

  img {
    height: var(--header-logo-height-small);
    width: auto;
    max-width: 40vw;

    @include media-breakpoint-up(md) {
      height: var(--header-logo-height-medium);
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      @at-root :where(.header:not(.is-condensed)) & {
        height: var(--header-logo-height-large);
      }
    }
  }

  @include media-breakpoint-up($header-expand-breakpoint) {
    @at-root :where(.header:not(.is-condensed)) & {
      flex: 0 1 25%;
      padding-right: spacing(8);
    }
  }
}

.header__logo-media {
  display: block;
  overflow: hidden;
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

  > .header__language-switch {
    margin-left: auto;
  }

  > .header__search + .header__language-switch {
    margin-left: 0;
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
    transition:
      background-color 0.5s $animation-transition,
      height 0.5s $animation-transition,
      width 0.5s $animation-transition,
      left 0.5s $animation-transition;

    @include media-breakpoint-up($header-expand-breakpoint) {
      @at-root :where(.header:not(.is-condensed)) & {
        display: none;
      }
    }
  }

  &.is-expanded {
    &::after {
      @include media-breakpoint-up($header-expand-breakpoint) {
        @at-root :where(.header:not(.is-condensed)) & {
          display: block;
        }
      }
    }

    &::before {
      left: $grid-gutter-half-width;
      background-color: var(--color-header-active);
      width: var(--header-link-text-width);
      height: 3px;
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      @at-root :where(.header:not(.is-condensed)) & {
        border-bottom-width: 1px;
        padding-bottom: var(--header-vertical-spacing);
      }
    }
  }

  &:hover {
    &::after {
      @include media-breakpoint-up($header-expand-breakpoint) {
        @at-root :where(.header:not(.is-condensed)) & {
          --color-header-active: var(--color-primary-accent);

          display: block;
        }
      }
    }
  }
}

.header__link,
.header__language-switch {
  &.is-expanded {
    .header__link-icon {
      --icon-rotation: 180deg !important;
    }

    .icon {
      color: var(--color-header-active);
    }

    @include media-breakpoint-up($header-expand-breakpoint) {
      @at-root :where(.header:not(.is-condensed)) & {
        .icon {
          color: inherit;
        }
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
        @at-root :where(.header:not(.is-condensed)) & {
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

  &.header__item--is-slim {
    --header-item-spacing: #{spacing(4)};

    border-bottom: 1px solid var(--color-header-border);

    .header__link::before,
    .header__product-list-subtitle {
      display: none;
    }

    .header__product-list {
      margin-top: 0;
      margin-bottom: var(--header-item-spacing);

      &:first-of-type {
        margin-top: spacing(2);
        margin-bottom: 0;
      }
    }

    .header__product-list-data {
      margin-left: 0;
    }

    .header__product-list-item {
      margin-bottom: var(--header-item-spacing);
      align-items: center;
    }

    .header__product-list-image {
      max-width: none;
      max-height: 38px;
      object-fit: contain;
      object-position: left;
    }
  }
}

.header__flyout {
  bottom: 1px;
  left: 0;
  width: 100%;
  z-index: 5;
  transition:
    transform $animation-transition 0.5s,
    opacity $animation-transition 0.4s;
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
    transition:
      opacity 0.5s 0.15s $animation-transition,
      transform 0.4s 0.15s $animation-transition;
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
  --header-language-flyout-width: 580px;
  --header-language-bridge-width: 100%;
  --header-language-underline-offset: #{spacing($size: 2, $negative: true)};
  --header-language-name-width: 160px;
  --header-language-spacing: #{spacing(8)};

  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0 0 var(--header-vertical-spacing) var(--header-language-spacing);
  display: none;
  order: 1;
  gap: spacing(10);
  place-items: center;
  z-index: 1;

  .header__link-icon {
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--header-language-bridge-width);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    pointer-events: none;
  }

  &::before {
    display: none;
    content: '';
    position: absolute;
    bottom: var(--header-language-underline-offset);
    left: var(--header-language-spacing);
    width: calc(100% - var(--header-language-spacing));
    height: 3px;
    background-color: var(--color-header-active);
    z-index: 10;
    pointer-events: none;
  }

  &:hover {
    &::before {
      @include media-breakpoint-up($header-expand-breakpoint) {
        --color-header-active: var(--color-primary-accent);

        display: block;
      }
    }
  }

  &.is-expanded {
    @include media-breakpoint-up($header-expand-breakpoint) {
      .header__link-text {
        font-weight: bold;
      }

      &::after {
        pointer-events: auto;
      }
    }
  }

  &:not(.is-expanded) {
    .header__language-switch-flyout,
    .header__language-switch-list {
      @include is-invisible;
    }

    .header__language-switch-flyout .header__language-link {
      opacity: 0;
      transform: translateY(-20px);
      transition-delay: 0s;
    }
  }

  &.header__language-switch--mobile {
    flex-direction: column;
    place-items: stretch;
    gap: 0;
    padding: 0;
    text-transform: none;

    &::after {
      content: none;
    }

    .header__link {
      padding-left: 0;
      padding-right: 0;
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
    @at-root :where(.header:not(.is-condensed)) & {
      margin-top: spacing(10);
      width: 70%;
    }
  }
}

.header__product-list {
  transition:
    height 0.4s $animation-transition,
    opacity 0.5s 0.15s $animation-transition,
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
  // TODO find a way to calculate this
  height: 64px;
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
.header__link-text,
.header__item.is--mobile .header__product-list-title {
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
    @at-root :where(.header:not(.is-condensed)) & {
      margin-right: 0;
    }
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

  &:hover {
    color: var(--color-copy);
  }

  &.active,
  &.active:hover {
    color: var(--color-active);

    .header__language-code {
      color: inherit;
    }
  }

  @include media-breakpoint-up($header-expand-breakpoint) {
    &:hover {
      font-weight: bold;
    }

    &:hover:not(.active) {
      color: var(--color-copy-hover);
    }

    &:hover .header__language-code {
      color: inherit;
    }
  }
}

.header__language-switch-flyout,
.header__language-switch-list {
  text-transform: none;

  .header__language-link {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: spacing(4);
    padding: spacing(2) 0;
    break-inside: avoid;
  }
}

.header__language-switch-flyout {
  padding: spacing(6) spacing(8);
  bottom: 0;
  right: spacing($size: 3, $negative: true);
  z-index: 5;
  min-width: var(--header-language-flyout-width);
  columns: 2;
  column-gap: spacing(16);
  transition:
    transform $animation-transition 0.5s,
    opacity $animation-transition 0.4s 0.1s;

  .header__language-link {
    grid-template-columns: var(--header-language-name-width) auto;
    transition:
      opacity 0.4s 0.15s $animation-transition,
      transform 0.4s 0.15s $animation-transition;
  }
}

.header__language-switch-list {
  width: 100%;
  padding: spacing(2) 0 spacing(4);
  transition:
    height 0.4s $animation-transition,
    opacity 0.5s 0.15s $animation-transition,
    transform 0.4s 0.15s $animation-transition;
}

.header__language-label {
  @include font-size-custom($sm: $font-size-18px);

  display: flex;
  place-items: center;
  gap: spacing(2);

  .icon {
    margin-left: 0;
    color: var(--color-secondary-accent);
  }
}

.header__language-names {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.header__language-native {
  @include font-size-custom($sm: $font-size-16px);

  line-height: 1.3;
}

.header__language-translated {
  @include font-size-custom($sm: $font-size-12px);

  color: var(--color-copy-reduced);
  line-height: 1.3;
}

.header__language-code {
  @include font-size-custom($sm: $font-size-12px);
  @include font-weight('bold');

  justify-self: end;
  padding: 1px spacing(1);
  border: 1px solid var(--color-header-border);
  border-radius: 2px;
  color: var(--color-copy-reduced);
  line-height: 1.4;
  text-transform: uppercase;
}

.header__highlight-cta {
  display: none;

  @include media-breakpoint-up($header-expand-breakpoint) {
    @at-root :where(.header:not(.is-condensed)) & {
      margin-top: spacing(12);
      display: block;
    }
  }
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

.header__secondary-navigation {
  --header-secondary-background: var(--color-header-background);
  --header-secondary-background-expanded: var(--color-gk-white);

  position: fixed;
  opacity: 0;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: 2;
  display: none;
  background-color: var(--header-secondary-background);
  pointer-events: none;

  &.is-ready:not([data-updating]) {
    opacity: 1;
    pointer-events: all;
    transition-property: width, height;
    transition-duration: 0.4s, 0.7s;
    transition-timing-function: $animation-transition;

    &:not([data-expanded]):not(.in-transition) {
      .header__secondary-navigation-content,
      .header__secondary-navigation-text {
        display: none;
      }
    }

    &[data-width-expanded] {
      --header-secondary-background: var(--header-secondary-background-expanded);

      box-shadow: var(--header-secondary-navigation-shadow);

      .header__secondary-navigation-content {
        height: 0;
      }

      .header__secondary-navigation-text {
        opacity: 1;
        pointer-events: all;
      }
    }

    &[data-height-expanded] {
      .header__secondary-navigation-content {
        opacity: 1;
        pointer-events: all;
        height: auto;
      }
    }
  }

  .header__secondary-navigation-icon {
    margin: spacing(6);
    transition: transform 0.5s $animation-transition;

    &.icon {
      width: spacing(8);
      height: spacing(8);
    }
  }

  @include media-breakpoint-up($header-expand-breakpoint) {
    :where(.header:not(.is-condensed)) & {
      display: flex;
    }
  }
}

.header__secondary-navigation-text {
  @include font-weight('bold');
  @include font-size-1;

  transition: opacity 0.5s ease-in-out;
  padding-right: spacing(10);
  margin-left: spacing($negative: true, $size: 2);
}

.header__secondary-navigation-button {
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    .header__secondary-navigation-icon {
      transform: scale(1.05);
    }
  }
}

.header__secondary-navigation-text,
.header__secondary-navigation-content {
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
}

.header__secondary-navigation-content {
  background-color: var(--header-secondary-background);
  overflow: hidden;
  height: 0;
}

.header__secondary-navigation-inner-content {
  padding: spacing(2) spacing(7) spacing(8) spacing(6);
  display: flex;
  flex-direction: column;
  gap: spacing(3);
}

.header__secondary-navigation-item {
  display: flex;
  align-items: center;
  transition: transform 0.3s $animation-transition;

  &:hover {
    transform: scale(1.05);
  }

  .header__secondary-navigation-item-img {
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    object-fit: contain;
    object-position: left;
  }
}

.header__secondary-navigation-item-text {
  color: var(--color-copy);
  display: inline-block;
  margin-left: spacing(3);
}

  .header__language-note {
    color: var(--color-copy);
    font-size: 0.625rem;
    line-height: 1.45;
    margin: 1rem 0 0;
    opacity: 0.45;
    text-transform: none;
    white-space: normal;
    // The flyout is a two-column layout; the note runs under both columns.
    column-span: all;
    // Fades in like the language links, a beat after them.
    transition: opacity 0.4s 0.25s cubic-bezier(0.19, 1, 0.2, 1), transform 0.4s 0.25s cubic-bezier(0.19, 1, 0.2, 1);
  }

  .header__language-switch:not(.is-expanded) .header__language-note {
    opacity: 0;
    transform: translateY(-20px);
    transition-delay: 0s;
  }
</style>