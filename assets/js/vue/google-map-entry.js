export default {
  tagName: 'google-map-entry',
  computed: {
    classList() {
      return ['media vue-component', this.icon === 'phone-charger' ? '' : 'mb-5'];
    },
  },
  props: {
    icon: String,
    headline: String,
    subline: String,
  },
  template: `
    <div :class="classList">
      <icon class="mr-3" :icon="icon" size="medium"/>
      <div class="media-body">
        <h5 class=" mb-1">{{ this.headline }}</h5>
        <span class="d-block text-body font-size-1" v-html="subline" />
      </div>
    </div>
  `,
};
