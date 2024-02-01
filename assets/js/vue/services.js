export default {
  tagName: 'services',
  computed: {
    classValue() {
      return ['services', 'vue-component'];
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
    socials: {
      default: null,
    },
  },
  template: `
  <div :class="classValue">
    <div class="services__title font-size-xs bold">
      {{ this.title }}
    </div>
    <div class="services__items font-size-1" >
      <template v-for="item in this.items">
        <div class="services__item">
          <cta v-bind="item" link="true" />
        </div>
      </template>
    </div>
    <div class="services__footer">
      <template v-if="socials">
        <socials v-bind="socials" />
      </template>
      <template v-else>
        <div class="services__label font-size-xs bold">{{ this.label }}</div>
        <div class="services__value">{{ this.value }}</div>
      </template>
    </div>
  </div>
`,
};
