export default {
  tagName: 'google-map-entry',
  computed: {
    classList() {
      return ['media vue-component', this.entry.icon === 'phone-charger' ? '' : 'mb-5'];
    },
  },
  props: {
    entry: {
      default: null,
    },
  },
  template: `
    <div :class="classList">
      <icon class="mr-3" :icon="entry.icon" size="medium"/>
      <div class="media-body">
        <h5 class=" mb-1">{{ this.entry.headline }}</h5>
        <span class="d-block text-body font-size-1" v-html="entry.subline" />
      </div>
    </div>
  `,
};
