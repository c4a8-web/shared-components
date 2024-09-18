import Tools from "../assets/js/tools.js";

export default {
  tagName: "img-filter",
  props: {
    img: String,
    alt: String,
    cloudinary: {
      default: null,
    },
    lazy: Boolean,
    classes: String,
    color: String,
  },
  computed: {
    cloudinaryValue() {
      return Tools.isTrue(this.cloudinary);
    },
    colorValue() {
      return this.color ? this.color : "#000520";
    },
    svgFilter() {
      const red = parseFloat((Tools.red(this.colorValue) / 255).toFixed(5));
      const green = parseFloat((Tools.green(this.colorValue) / 255).toFixed(5));
      const blue = parseFloat((Tools.blue(this.colorValue) / 255).toFixed(5));
      const opacity = 1;
      const max = Math.max(red, green, blue);
      const min = Math.min(red, green, blue);
      const lightness = (100 * (max + min)) / 2 + "%"; // lightness(this.colorValue);
      const svgFilterId = "img-to-color";

      return `
        filter: saturate(0%) brightness(0%) invert(${lightness}) opacity(${opacity});
        filter: url('data:image/svg+xml;utf8,\
        <svg xmlns="http://www.w3.org/2000/svg">\
          <filter id="${svgFilterId}" color-interpolation-filters="sRGB">\
            <feColorMatrix type="matrix" values="\
              0 0 0 0 ${red}\
              0 0 0 0 ${green}\
              0 0 0 0 ${blue}\
              0 0 0 ${opacity} 0\
            "/>\
          </filter>\
        </svg>\
        #${svgFilterId}')
      `;
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  template: `
    <div class="img-filter vue-component" :style="svgFilter">
      <v-img
        :img="img"
        :alt="alt"
        :cloudinary="cloudinaryValue"
        :lazy="lazy"
      />
    </div>
  `,
};
