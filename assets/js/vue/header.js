import Tools from '../tools.js';

export default {
  tagName: 'v-header',
  computed: {
    classList() {
      return ['', 'vue-component'];
    },
    logoImg() {
      return Tools.isTrue(this.light) ? this.home.imgLight : this.home.img;
    },
  },
  methods: {
    handleClick() {
      this.closed = !this.closed;
    },
  },
  props: {
    home: Object,
    navigation: Object,
    light: {
      default: null,
    },
  },
  data() {
    return {
      closed: false,
    };
  },
  template: `
    <header class="header">
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
              NAV ITEMS
            </nav>
          </div>
        </div>
      </div>
    </header>
  `,
};
