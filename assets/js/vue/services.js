export default {
  tagName: 'services',
  computed: {
    classValue() {
      return [
        'services',
        this.author ? 'services--author' : '',
        this.authorSocialsExist ? 'services--no-socials' : '',
        'vue-component',
      ];
    },
    authorSocialsExist() {
      return this.author.socials !== undefined;
    },
    itemsList() {
      return this.authorSocialsExist ? this.authors.socials : this.items;
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
    <template v-if="this.items">
      <div class="services__title font-size-xs bold">
        {{ this.title }}
      </div>
      <div class="services__items font-size-1" >
        <template v-for="item in this.itemsList">
          <div class="services__item">
            <cta v-bind="item" link="true" />
          </div>
        </template>
      </div>
    </template>
    <div class="services__footer">
      <template v-if="this.author">
        <socials :author="this.author" :message="this.followMessage" :site="site" :page="page" expand="true" :share-url="this.shareUrl"/>
      </template>
      <template v-else>
        <div class="services__label font-size-xs bold">{{ this.label }}</div>
        <div class="services__value">{{ this.value }}</div>
      </template>
    </div>
  </div>
`,
};
