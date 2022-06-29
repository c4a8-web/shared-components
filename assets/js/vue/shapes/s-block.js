const arrowPathStart = 'M0.6 796.88v-396l200.59 198-200.59 198zM0 796.88v-396l200.6 198L0 796.88z';
const arrowPathEnd = 'M200.6 796.88v-396l200.59 198-200.59 198zM0 796.88v-396l200.6 198L0 796.88z';

export default {
  tagName: 's-block',
  computed: {
    shapeCircle() {
      return this.getShapeData(0);
    },
    pyramid() {
      return this.getShapeData(3);
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.86 1197.37" width="801.86" height="1197.37" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">

      <path fill="#f8842c" d="M0 400.88h401.19v396H0z"/>
      <path id="s-block-arrows" fill="#fcd116" d="${arrowPathStart}" >
        <animate id="s-block-arrows-anim" href="#s-block-arrows" attributeName="d" values="
          ${arrowPathStart};
          ${arrowPathEnd}
        "
          begin="4.5s;s-block-arrows-anim-reverse.end+20s"
          dur="1.7s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
        <animate id="s-block-arrows-anim-reverse" href="#s-block-arrows" attributeName="d" values="
          ${arrowPathEnd};
          ${arrowPathStart}
        "
          begin="s-block-arrows-anim.end +15s"
          dur="1.7s"
          fill="freeze"
          calcMode="spline"
          keySplines="0.19 1 0.2 1"
        />
      </path>

      <path :fill="pyramid?.backgroundColor" d="M.18 796.88h400.84v400.49H.18z"/>
      <path fill="#f8842c" d="M401.02 1197.37H.18L200.6 997.12l200.42 200.25z"/>
      <path fill="#fcd116" d="m200.6 997.12 200.42 200.25H200.6V997.12z"/>
      <path fill="#acd653" d="M801.86 401.19v395.9H401.02v-395.9z"/>
      <shape-square-circle
        transform="translate(400 0)"
        :background-color="shapeCircle?.backgroundColor"
        :circle-color="shapeCircle?.foregroundColor"
      ></shape-square-circle>


    </svg>
  `,
};
