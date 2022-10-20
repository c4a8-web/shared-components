const tagName = 't-block';

export default {
  tagName: tagName,
  computed: {
    name() {
      return tagName;
    },
    fourthShapeBackgroundColor() {
      return this.fourthShape.backgroundColor ? this.fourthShape.backgroundColor : '#fcd116';
    },
    fourthShapeFirstColor() {
      return this.fourthShape.firstColor ? this.fourthShape.firstColor : '#f8842c';
    },
    fourthShapeSecondColor() {
      return this.fourthShape.secondColor ? this.fourthShape.secondColor : '#fff';
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
    // getShapeData(id) {
    //   const shape = (this.shapes && this.shapes[id]) ?? {};

    //   return {
    //     name: shape.name,
    //     backgroundColor: shape.backgroundColor ? shape.backgroundColor : null,
    //     foregroundColor: shape.foregroundColor ? shape.foregroundColor : null,
    //     thirdColor: shape.thirdColor ? shape.thirdColor : null,
    //     component: shape.component ? shape.component : this.defaultComponent(id),
    //   };
    // },
    defaultComponent(id) {
      // TODO component :is="component"

      switch (id) {
        default:
        case 0:
          return 'shape-moving-eye';
        case 1:
          return 'shape-half-square';
        case 2:
          return 'shape-semi-circle';
        case 3:
          return 'rect';
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
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        transform="translate(400 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <component
        transform="translate(0 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        v-if="fourthShape.name"
        transform="translate(400 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
      <g v-else transform="translate(0 400)">
        <path :fill="fourthShapeBackgroundColor" d="M 400 800 h 400 v -400 H 400 z"/>
        <path :fill="fourthShapeFirstColor" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path :fill="fourthShapeSecondColor" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path :fill="fourthShapeFirstColor" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path :fill="fourthShapeSecondColor" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

    </svg>
  `,
};
