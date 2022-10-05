export default {
  tagName: 'v-header',
  computed: {
    classList() {
      return ['', 'vue-component'];
    },
  },
  props: {
    home: Object,
    navigation: Object,
  },
  template: `
    <header>
      <div class="header__logo">
        <v-img :img="home?.img" :cloudinary="true" />
      </div>
    </header>
  `,
};
