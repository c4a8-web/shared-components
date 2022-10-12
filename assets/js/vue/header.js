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
    handleMouseOver() {
      this.hover = true;
      console.log('mouse over');
    },
    handleMouseOut() {
      this.hover = false;
    },
    // switchLang() {
    //   const lang = this.lang === 'de' ? 'en' : this.defaultLang;
    // },
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
      flyoutContent: null,
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
            <nav>
              <ul class="header__list">
                <li class="header__item" v-for="item in navigation">
                  <a class="header__link" href="" v-on:mouseover="handleMouseOver" v-on:mouseout="handleMouseOut" v-if="item.languages">
                    {{ item.languages[lang]?.title }}
                  </a>
                  <ul class="header__list header__list--expanded" v-if="item.children">
                    <li class="header__item" v-for="child in item.children">
                      <a class="header__link" href="" v-if="child.languages">
                        {{ child.languages[lang]?.title }}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="header__flyout">
        <div class="container">
          <div class="row">
            <div class="col">
              FLYOUT CONTENT
              <div v-html="flyoutContent"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
};
