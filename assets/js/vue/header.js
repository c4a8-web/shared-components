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
    homeObj() {
      return this.home?.languages[this.lowerLang];
    },
    logoImg() {
      return Tools.isTrue(this.light) ? this.home.imgLight : this.home.img;
    },
    lowerLang() {
      return this.lang.toLowerCase();
    },
  },
  methods: {
    handleCloseClick() {
      this.closed = !this.closed;

      const nav = this.$refs['nav'];

      if (!this.closed) {
        nav.style.height = `${nav.scrollHeight}px`;
      } else {
        nav.style.height = '';
      }
    },
    handleClick(item) {
      console.log('item', item);
    },
    handleMouseOver(item, index, event) {
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
      const nextUrl = this.getNextUrl(nextLang);
      const gotoUrl = nextUrl ? nextUrl : this.home.languages[nextLang]?.url;

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
    meta: Object,
    light: {
      default: null,
    },
    lang: String,
    contact: Object,
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
              <a :href="homeObj.url">
                <v-img :img="logoImg" :cloudinary="true" />
              </a>
            </div>
            <div class="header__menu" v-on:click="handleCloseClick">
              <icon icon="menu" class="header__menu-icon" :closed="closed" />
            </div>
            <nav v-on:mouseout="handleMouseOut" ref="nav">
              <div class="header__search"></div>
              <ul class="header__list">
                <li class="header__item" v-for="(item, index) in navigation">
                  <a class="header__link custom" :href="getHref(item)" v-on:click="handleClick(item)" v-if="item.languages" ref="link">
                    <div class="header__link-content" v-on:mouseover="handleMouseOver(item, index, $event)">
                      {{ item.languages[lowerLang]?.title }}
                      <icon class="header__link-icon" icon="expand" size="small" v-if="item.children" />
                    </div>
                  </a>
                  <ul class="header__list header__list--expanded" v-if="item.children">
                    <li class="header__item" v-for="child in item.children">
                      <a class="header__link custom" href="" v-if="child.languages">
                        <span class="header__link-content">{{ child.languages[lowerLang]?.title }}</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div class="header__footer">
                <ul class="header__meta-list" v-if="meta">
                  <li class="header__meta-list-item" v-for="item in meta">
                    <cta
                      :href="item.languages[lowerLang]?.url"
                      :text="item.languages[lowerLang]?.title"
                      link=true
                      reversed=true
                      monochrome=true
                    />
                  </li>
                </ul>
                <div class="header__contact header__contact--mobile" v-if="contact">
                  <a class="header__contact-link custom" :href="contact.languages[lowerLang]?.url">
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
                      {{ child.languages[lowerLang]?.title }}
                    </figcaption>
                    <ul class="header__flyout-list" v-for="subChild in child.children">
                      <li class="header__flyout-item" v-if="subChild.languages">
                        <cta
                          :href="subChild.languages[lowerLang].url"
                          :text="subChild.languages[lowerLang].title"
                          link=true
                          reversed=true
                          monochrome=true
                        />
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
