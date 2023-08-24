export default {
  tagName: 'image-block',
  computed: {
    classList() {
      return ['image-block space-2'];
    },
    imageWithCloudinary() {
      const image = {
        img: this.image['image'],
        cloudinary: true,
        alt: this.image['alt'],
      };

      return image;
    },
  },
  props: {
    image: {
      default: null,
    },
  },
  template: `
    <wrapper :classes="classList">
      <v-img class="mx-auto" v-bind="imageWithCloudinary" />
    </wrapper>
  `,
};
