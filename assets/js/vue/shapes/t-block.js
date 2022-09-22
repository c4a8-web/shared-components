const tagName = 't-block';

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
      return ['t-block', 'vue-component'];
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
          return 'square-half-square';
        case 1:
          return 'rect';
        case 2:
          return 'shape-moving-eye';
        case 3:
          return 'shape-pyramid';
      }
    },
  },
  props: {
    shapes: Array,
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200">
      <g>
        <path fill="#fcd116" d="M 400 800 h 400 v -400 H 400 z"/>
        <path fill="#f8842c" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path fill="#ffffff" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path fill="#f8842c" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path fill="#ffffff" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>


      <shape-moving-eye
        eye-color="var(--color-yellow)"
        square-color="var(--color-gigas)"
        transform="translate(400 800)">
      </shape-moving-eye>

      <shape-semi-circle
        transform="translate(0 400)">
      </shape-semi-circle>


      <shape-half-square
        transform="translate(400 0)">
      </shape-half-square>
    </svg>
  `,
};
