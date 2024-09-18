const tagName = 's-block';

export default {
  tagName: tagName,
  computed: {
    name() {
      return tagName;
    },
    secondShapeBackgroundColor() {
      return this.secondShape.backgroundColor ? this.secondShape.backgroundColor : 'var(--color-primary-accent-light)';
    },
    fourthShapeBackgroundColor() {
      return this.fourthShape.backgroundColor ? this.fourthShape.backgroundColor : 'var(--color-primary-accent-light)';
    },
    fourthShapeFirstColor() {
      return this.fourthShape.firstColor ? this.fourthShape.firstColor : 'var(--color-primary-accent)';
    },
    fourthShapeSecondColor() {
      return this.fourthShape.secondColor ? this.fourthShape.secondColor : 'var(--color-secondary)';
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
          return 'square-square-circle';
        case 1:
          return 'rect';
        case 2:
          return 'shape-fast-forward';
        case 3:
          return 'shape-pyramid';
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
    <svg :class="classList" :data-name="name" viewBox="0 0 800 1200" width="800" height="1200" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999" xmlns="http://www.w3.org/2000/svg">

      <component
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        v-if="secondShape.name"
        transform="translate(400 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>
      <rect v-else x="400" y="400" :width="shapeWidth" :height="shapeHeight" :fill="secondShapeBackgroundColor" />

      <component
        transform="translate(0 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>

      <component
        v-if="fourthShape.name"
        transform="translate(0 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
      <g v-else >
        <path :fill="fourthShapeBackgroundColor" d="M.18 800h400v400H.18z"/>
        <path :fill="fourthShapeFirstColor" d="M400 1200H.18L200 1000l200 200z"/>
        <path :fill="fourthShapeSecondColor" d="m200 1000 200 200H200V1000z"/>
      </g>
    </svg>
  `,
};
