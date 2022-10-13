import Tools from '../tools.js';
import State from '../state.js';

export default {
  tagName: 'v-header',
  computed: {
    classList() {
      return [
        'header',
        Tools.isTrue(this.light) ? 'header--light' : '',
        Tools.isTrue(this.hover) ? State.HOVERING : '',
        !Tools.isTrue(this.closed) ? State.EXPANDED : '',
        'vue-component',
      ];
    },
    logoImg() {
      return Tools.isTrue(this.light) ? this.home.imgLight : this.home.img;
    },
  },
  methods: {
    handleClick() {
      this.closed = !this.closed;
    },
    handleMouseOver(item, index) {
      if (!item.children) return;

      this.hover = true;

      const ref = this.getFlyoutRef(index);

      if (!ref) return;

      this.flyoutIndex = index;

      ref.classList.add(State.EXPANDED);
    },
    handleMouseOut(event) {
      if (event.relatedTarget?.closest('.header__flyout')) return;

      this.hover = false;

      const ref = this.getFlyoutRef(this.flyoutIndex);

      if (!ref) return;

      ref.classList.remove(State.EXPANDED);
    },
    getFlyoutRef(refName) {
      const ref = this.$refs['flyout'][refName];

      if (!ref) return;

      return ref;
    },
    getHref(item) {
      return item.children ? 'javascript:void(0);' : item.languages[this.lang].url;
    },
    getNextLanguage() {
      const languages = this.home.languages;

      if (!languages) return;

      const keys = Object.keys(languages);

      if (!keys.length) return;

      const nextLang = keys.filter((lang) => lang !== this.lang);

      if (!nextLang.length) return;

      return nextLang[0];
    },
    handleLanguageSwitch() {
      const nextLang = this.getNextLanguage();
      const nextUrl = this.getNextUrl(nextLang);
      const gotoUrl = nextUrl ? nextUrl : this.home.languages[nextLang].url;

      document.location.href = gotoUrl;
    },
    getCurrentPath() {
      const currentPath = document.location.pathname;

      return currentPath;
    },
    getNextUrl(lang) {
      const currentPath = this.getCurrentPath();

      const matcher = (obj) => {
        return obj.url === currentPath;
      };

      const callback = (_, parent) => {
        return parent;
      };

      const parent = Tools.findRecursive(this.navigation, matcher, callback);

      if (!parent) return;

      return parent[lang]?.url;
    },
  },
  props: {
    home: Object,
    navigation: Object,
    light: {
      default: null,
    },
    lang: String,
  },
  data() {
    return {
      defaultLang: 'de',
      closed: true,
      hover: false,
      flyoutIndex: null,
    };
  },
  template: `
    <header :class="classList">
      <div class="header__container container">
        <div class="row">
          <div class="header__col col">
            <div class="header__logo">
              <v-img :img="logoImg" :cloudinary="true" />
            </div>
            <div class="header__menu" v-on:click="handleClick">
              <icon icon="menu" class="header__menu-icon" :closed="closed" />
            </div>
            <nav v-on:mouseout="handleMouseOut">
              <ul class="header__list">
                <li class="header__item" v-for="(item, index) in navigation">
                  <a class="header__link" :href="getHref(item)" v-on:mouseover="handleMouseOver(item, index)" v-if="item.languages">
                    <span class="header__link-content">{{ item.languages[lang]?.title }}</span>
                  </a>
                  <ul class="header__list header__list--expanded" v-if="item.children">
                    <li class="header__item" v-for="child in item.children">
                      <a class="header__link" href="" v-if="child.languages">
                        <span class="header__link-content">{{ child.languages[lang]?.title }}</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div class="header__search"></div>
            <div class="header__language-switch" v-on:click="handleLanguageSwitch">
              {{ getNextLanguage() }}
            </div>
          </div>
        </div>
      </div>
      <div class="header__flyout" v-on:mouseout="handleMouseOut">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="header__flyout-content" v-for="(item, index) in navigation" ref="flyout">
                <div class="header__flyout-items" v-if="item.children">
                  <figure class="header__flyout-block" v-for="child in item.children">
                    <figcaption class="header__flyout-title" v-if="child.languages">
                      {{ child.languages[lang]?.title }}
                    </figcaption>
                    <ul class="header__flyout-list" v-for="subChild in child.children">
                      <li class="" v-if="subChild.languages">
                        <a :href="subChild.languages[lang].url">
                          {{ subChild.languages[lang].title }}
                        </a>
                      </li>
                    </ul>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};
