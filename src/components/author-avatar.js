export default {
  tagName: 'author-avatar',
  data() {
    return {
      defaultImageOffsetLeft: '50%',
      defaultImageOffsetTop: '60%',
    };
  },
  computed: {
    classList() {
      return ['author__avatar vue-component', this.classes ? this.classes : ''];
    },
    style() {
      const imageOffsetLeft = this.author.imageOffsetLeft || this.defaultImageOffsetLeft;
      const imageOffsetTop = this.author.imageOffsetTop || this.defaultImageOffsetTop;

      return `left:${imageOffsetLeft};top:${imageOffsetTop}`;
    },
  },
  methods: {},
  props: {
    author: {
      default: null,
    },
    classes: String,
    imgUrl: String,
  },
  template: `
    <div :class="classList">
      <div class="author__avatar-frame">
        <div :style="style">
          <v-img :img="imgUrl" :cloudinary=true preset="avatar" :alt="author.display_name" />
        </div>
      </div>
    </div>
  `,
};
