const tagName = 'l-block';

export default {
  tagName: tagName,
  computed: {
    name() {
      return tagName;
    },
    secondShapeBackgroundColor() {
      return this.secondShape.backgroundColor ? this.secondShape.backgroundColor : 'var(--color-yellow)';
    },
    secondShapeFirstColor() {
      return this.secondShape.firstColor ? this.secondShape.firstColor : 'var(--color-orange)';
    },
    secondShapeSecondColor() {
      return this.secondShape.secondColor ? this.secondShape.secondColor : 'var(--color-white)';
    },
    firstShape() {
      return this.getShapeData(0);
    },
    secondShape() {
      return this.getShapeData(1);
    },
    thirdShape() {
      return this.getShapeData(2);
    },
    fourthShape() {
      return this.getShapeData(3);
    },
    classList() {
      return ['l-block', 'vue-component'];
    },
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    },
  },
  methods: {
    allProps(shape) {
      const props = {};

      for (const prop of Object.keys(shape)) {
        props[prop] = shape[prop];
      }

      return props;
    },

    getShapeData(id) {
      const shape = (this.shapes && this.shapes[id]) ?? {};

      return this.allProps(shape);
    },
    defaultComponent(id) {
      switch (id) {
        default:
        case 0:
          return 'shape-moving-eye';
        case 1:
          return 'rect';
        case 2:
          return 'shape-semi-circle';
        case 3:
          return 'shape-half-square';
      }
    },
  },
  props: {
    shapes: Array,
    backgroundColor: String,
    firstColor: String,
    secondColor: String,
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200">
      <component
        transform="translate(0 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(0 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <g v-else transform="translate (-400 0)" >
        <path :fill="secondShapeBackgroundColor" d="M 400 800 h 400 v -400 H 400 z"/>
        <path :fill="secondShapeFirstColor" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path :fill="secondShapeFirstColor" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path :fill="secondShapeSecondColor" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

      <component
        transform="translate(0 800)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        transform="translate(400 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
    </svg>
  `,
};
