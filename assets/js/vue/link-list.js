export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return ['link-list xxxheader__flyout-block', 'vue-component'];
    },
  },
  props: {
    list: Object,
    lang: String,
  },
  template: `
    <figure :class="classList" v-for="child in list" v-if="list">
      <figcaption class="xxxheader__flyout-title" v-if="child.languages">
        {{ child.languages[lang]?.title }}
      </figcaption>
      <ul class="xxxheader__list header__list--expanded" v-for="subChild in child.children">
        <li class="xxxheader__flyout-item" v-if="subChild.languages">
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
