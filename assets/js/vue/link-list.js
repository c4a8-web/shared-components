export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return ['link-list', this.classes, 'vue-component'];
    },
  },
  props: {
    list: Object,
    lang: String,
    classes: String,
  },
  template: `
    <figure :class="classList" v-if="list">
      <figcaption class="link-list__title" v-if="list.languages">
        {{ list.languages[lang]?.title }}
      </figcaption>
      <ul class="link-list__list header__list--expanded">
        <li class="link-list__item" v-for="subChild in list.children">
          <cta
            :href="subChild.languages[lang].url"
            :text="subChild.languages[lang].title"
            link=true
            reversed=true
            monochrome=true
            v-if="subChild.languages"
          />
        </li>
      </ul>
    </figure>
  `,
};
