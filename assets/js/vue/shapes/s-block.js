const arrowPathStart = 'M0.6 796.88v-396l200.59 198-200.59 198zM0 796.88v-396l200.6 198L0 796.88z';
const arrowPathEnd = 'M200.6 796.88v-396l200.59 198-200.59 198zM0 796.88v-396l200.6 198L0 796.88z';

const tagName = 's-block';

export default {
  tagName: tagName,
  computed: {
    name() {
      return tagName;
    },
    shapeSquareCircle() {
      return this.getShapeData(0);
    },
    shapeFastForward() {
      return this.getShapeData(2);
    },
    pyramid() {
      return this.getShapeData(3);
    },
    classList() {
      return ['s-block', 'vue-component'];
    },
  },
  methods: {
    getShapeData(id) {
      const shape = (this.shapes && this.shapes[id]) ?? {};

      return {
        backgroundColor: shape.backgroundColor ? shape.backgroundColor : null,
        foregroundColor: shape.foregroundColor ? shape.foregroundColor : null,
        thirdColor: shape.thirdColor ? shape.thirdColor : null,
      };
    },
  },
  props: {
    shapes: Array,
  },
  template: `
    <svg :class="classList" :data-name="name" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.86 1197.37" width="801.86" height="1197.37" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <path style="adisplay:none" :fill="pyramid?.backgroundColor" d="M.18 796.88h400.84v400.49H.18z"/>
      <path style="adisplay:none" fill="#f8842c" d="M401.02 1197.37H.18L200.6 997.12l200.42 200.25z"/>
      <path style="adisplay:none" fill="#fcd116" d="m200.6 997.12 200.42 200.25H200.6V997.12z"/>
      <path style="adisplay:none" fill="#acd653" d="M801.86 401.19v395.9H401.02v-395.9z"/>

      <shape-fast-forward
        transform="translate(0 400)"
        :background-color="shapeFastForward?.backgroundColor"
        :foreground-color="shapeFastForward?.foregroundColor"
        :third-color="shapeFastForward?.thirdColor"
      ></shape-fast-forward>
      <shape-square-circle
        transform="translate(400 0)"
        :background-color="shapeSquareCircle?.backgroundColor"
        :circle-color="shapeSquareCircle?.foregroundColor"
      ></shape-square-circle>
    </svg>
  `,
};
