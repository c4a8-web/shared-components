export default {
  tagName: 'image-block',
  computed: {
    classList() {
      return ['image-block space-2'];
    },
  },
  props: {
    image: {
      default: null,
    },
  },
  template: `
    <wrapper :classes="classList">
      <v-img class="mx-auto" v-bind="image" />
    </wrapper>
  `,
};
