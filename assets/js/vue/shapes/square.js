const tagName = 'square';

export default {
  tagName: tagName,
  computed: {
    name() {
      return tagName;
    },
    allProps() {
      const props = {};

      props.width = this.shapeWidth;

      for (const prop of Object.keys(this.shape)) {
        props[prop] = this.shape[prop];
      }

      return props;
    },
    shape() {
      return this.shapes ? this.shapes[0] : null;
    },
    classList() {
      return ['square', 'vue-component'];
    },
    shapeWidth() {
      return 400;
    },
    shapeHeight() {
      return this.shapeWidth;
    },
    viewBox() {
      return `0 0 ${this.shapeWidth} ${this.shapeHeight}`;
    },
  },
  props: {
    shapes: Array,
  },
  template: `
    <svg style="width: 200px" :class="classList" :data-name="name" xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :width="shapeWidth" :height="shapeHeight" xml:space="preserve" version="1.1" xmlns:xlink="http://www.w3.org/1999">
      <component :is="shape.name" v-if="shape" v-bind="allProps"></component>
    </svg>
  `,
};
