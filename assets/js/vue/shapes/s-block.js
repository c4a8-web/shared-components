const tagName = 's-block';

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
          return 'square-square-circle';
        case 1:
          return 'shape-fast-forward';
        case 2:
          return 'rect';
        case 3:
          return 'shape-pyramid';
      }
    },
  },
  props: {
    shapes: Array,
  },
  template: `
    <svg :class="classList" :data-name="name" viewBox="0 0 801.86 1197.37" width="801.86" height="1197.37" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">

      <component
        transform="translate(400 0)"
        :is="firstShape?.name"
        v-bind="firstShape">
      </component>

      <component
        transform="translate(0 400)"
        :is="secondShape?.name"
        v-bind="secondShape">
      </component>

      <component
        v-if="thirdShape.name"
        transform="translate(400 400)"
        :is="thirdShape?.name"
        v-bind="thirdShape">
      </component>
      <rect v-else x="400" y="400" :width="shapeWidth" :height="shapeHeight" :fill="shapeRect?.backgroundColor ? shapeRect?.backgroundColor : '#acd653'" />

      <component
        v-if="fourthShape.name"
        transform="translate(0 800)"
        :is="fourthShape?.name"
        v-bind="fourthShape">
      </component>
      <g v-else >
        <path :fill="fourthShape?.backgroundColor" d="M.18 796.88h400.84v400.49H.18z"/>
        <path :fill="fourthShape?.foregroundColor" d="M401.02 1197.37H.18L200.6 997.12l200.42 200.25z"/>
        <path :fill="fourthShape?.thirdColor" d="m200.6 997.12 200.42 200.25H200.6V997.12z"/>
      </g>

    </svg>
  `,
};
