// This is a very basic img component and doesn't have the logic that the ruby version has.
// we need to build that logic to implement a somewhat same version of that component

const basePath = 'https://res.cloudinary.com/c4a8/image/upload/v1624282277/';

export default {
  tagName: 'v-img',
  computed: {
    classList() {
      return ['', 'vue-component'];
    },
    source() {
      return `${basePath}${this.img}`;
    },
  },
  props: {
    img: String,
  },
  template: `
    <img :src="source" >
  `,
};
