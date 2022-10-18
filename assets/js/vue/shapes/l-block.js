const tagName = 'l-block';

export default {
  tagName: tagName,
  computed: {
    name() {
      return tagName;
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
        console.log('prop', prop);
        console.log('value', shape[prop]);
      }

      return props;
    },

    getShapeDataNew(id) {
      const shape = (this.shapes && this.shapes[id]) ?? {};

      return this.allProps(shape);
    },
    getShapeData(id) {
      const shape = (this.shapes && this.shapes[id]) ?? {};

      return {
        name: shape.name,
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
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200">

      <component
        transform="translate(0 400)"
        :is="firstShape?.name"
        v-bind="getShapeDataNew(0)">
      </component>

      <component
        transform="translate(400 800)"
        :is="secondShape?.name"
        v-bind="getShapeDataNew(1)">
      </component>

      <component
        transform="translate(0 0)"
        :is="thirdShape?.name"
        v-bind="getShapeDataNew(2)">
      </component>

      <component
        v-if="fourthShape.name"
        transform="translate(-400 400)"
        :is="fourthShape?.name"
        v-bind="getShapeDataNew(2)">
      </component>
      <g v-else transform="translate (-400 400)" >
        <path fill="#fcd116" d="M 400 800 h 400 v -400 H 400 z"/>
        <path fill="#f8842c" d="M 600 800 H 400 L 600 600 l 0 200 z"/>
        <path fill="#ffffff" d="m 800 800 l -200 -200 H 600 V 800 z"/>
        <path fill="#f8842c" d="m 400 600 l 200 -200 H 600 V 600 z"/>
        <path fill="#ffffff" d="m 800 600 l -200 -200 H 600 V 600 z"/>
      </g>

    </svg>
  `,
};
