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
    shapeRect() {
      return this.getShapeData(1);
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
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    },
  },
  methods: {
    getShapeData(id) {
      const shape = (this.shapes && this.shapes[id]) ?? {};

      return {
        backgroundColor: shape.backgroundColor ? shape.backgroundColor : null,
        foregroundColor: shape.foregroundColor ? shape.foregroundColor : null,
        thirdColor: shape.thirdColor ? shape.thirdColor : null,
        component: shape.component ? shape.component : this.defaultComponent(id),
      };
    },
    defaultComponent(id) {
      // TODO component :is="component"

      switch (id) {
        default:
        case 0:
          return 'square-square-circle';
        case 1:
          return 'rect';
        case 2:
          return 'shape-fast-forward';
        case 3:
          return 'shape-pyramid';
      }
    }
  },
  props: {
    shapes: Array,
  },
  template: `
    <svg :class="classList" :data-name="name" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801.86 1197.37" width="801.86" height="1197.37" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <g>
        <path :fill="pyramid?.backgroundColor" d="M.18 796.88h400.84v400.49H.18z"/>
        <path fill="#f8842c" d="M401.02 1197.37H.18L200.6 997.12l200.42 200.25z"/>
        <path fill="#fcd116" d="m200.6 997.12 200.42 200.25H200.6V997.12z"/>
      </g>

      <rect x="400" y="400" :width="shapeWidth" :height="shapeHeight" :fill="shapeRect?.backgroundColor ? shapeRect?.backgroundColor : '#acd653'" />

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
