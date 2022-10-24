export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return ['link-list xxxheader__flyout-block', this.classes, 'vue-component'];
    },
  },
  props: {
    list: Object,
    lang: String,
    classes: String,
  },
  template: `
    <figure :class="classList" v-if="list">
      <figcaption class="link-list__title xxxheader__flyout-title" v-if="list.languages">
        {{ list.languages[lang]?.title }}
      </figcaption>
      <ul class="link-list__list xxxheader__list header__list--expanded" v-for="subChild in list.children">
        <li class="link-list__item xxxheader__flyout-item" v-if="subChild.languages">
          <cta
            :href="subChild.languages[lang].url"
            :text="subChild.languages[lang].title"
            link=true
            reversed=true
            monochrome=true
          />
        </li>
      </ul>
    </figure>
  `,
};
