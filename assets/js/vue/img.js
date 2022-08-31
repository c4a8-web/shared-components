// This is a very basic img component and doesn't have the logic that the ruby version has.
// we need to build that logic to implement a somewhat same version of that component
import Tools from '../tools.js';
const basePath = 'https://res.cloudinary.com/c4a8/image/upload/';

export default {
  tagName: 'v-img',
  computed: {
    classList() {
      return ['', 'vue-component'];
    },
    source() {
      if (Tools.isTrue(this.cloudinary)) {
        return `${basePath}${this.img}`;
      } else {
        return `${this.img}`;
      }
    },
  },
  props: {
    img: String,
    cloudinary: Boolean,
  },
  template: `
    <img :src="source" >
  `,
};
