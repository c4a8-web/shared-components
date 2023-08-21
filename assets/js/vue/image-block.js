export default {
  tagName: 'image-block',
  computed: {
    classList() {
      return ['space-2'];
    },
  },
  props: {
    image: {
      default: null,
    },
  },
  template: `
    <div class="image-block vue-component">
      <wrapper :classes="classList">
        <div class="mx-auto">
          <v-img v-bind="image" />
        </div>
      </wrapper>
    </div>
  `,
};
