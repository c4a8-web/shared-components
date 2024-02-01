export default {
  tagName: 'image-block',
  computed: {
    classList() {
      return ['image-block space-2'];
    },
    imageWithCloudinary() {
      const image = {
        img: this.imageBlock['image'],
        cloudinary: true,
        alt: this.imageBlock['alt'],
      };

      return image;
    },
  },
  props: {
    imageBlock: {
      default: null,
    },
  },
  template: `
    <wrapper :classes="classList">
      <div class="mx-auto">
        <v-img v-bind="imageWithCloudinary" />
      </div>
    </wrapper>
  `,
};
