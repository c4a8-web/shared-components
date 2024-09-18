export default {
  tagName: 'services',
  computed: {
    classValue() {
      return [
        'services',
        this.author ? `services--author ${this.authorHasSocials ? '' : 'services--no-socials'}` : '',
        'vue-component',
      ];
    },
    authorHasSocials() {
      return this.author?.socials !== undefined;
    },
    itemsList() {
      return this.authorHasSocials ? this.author.socials : this.items;
    },
  },
  methods: {},
  props: {
    items: {
      default: null,
    },
    title: {
      default: null,
    },
    label: {
      default: null,
    },
    value: {
      default: null,
    },
    author: {
      default: null,
    },
    shareUrl: {
      default: null,
    },
  },
  template: `
  <div :class="classValue">
    <template v-if="itemsList">
      <div class="services__title font-size-xs bold">
        {{ title }}
      </div>
      <div class="services__items font-size-1" >
        <template v-for="item in itemsList">
          <div class="services__item">
            <cta v-bind="item" link="true" :external="authorHasSocials"/>
          </div>
        </template>
      </div>
    </template>
    <div class="services__footer">
      <template v-if="author">
        <socials :author="author" :message="followMessage" expand="true" :share-url="shareUrl"/>
      </template>
      <template v-else>
        <div class="services__label font-size-xs bold">{{ label }}</div>
        <div class="services__value">{{ value }}</div>
      </template>
    </div>
  </div>
`,
};
