<template>
  <figure :class="'svgshape ' + svgShapeClasses" :style="'pointer-events: all;' + translateStyle">
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      :viewBox="'0 0 ' + svgShapeHeight + ' ' + svgShapeObliquity"
    >
      <polygon :fill="svgShapeColor" :points="points" />
    </svg>
  </figure>
</template>

<script>
export default {
  props: {
    tagName: 'svg-shape',
    align: {
      type: String,
      default: 'bottom',
    },
    peak: {
      type: String,
      default: 'right',
    },
    color: {
      type: String,
      default: 'var(--color-white)',
    },
    obliquity: {
      type: Number,
      default: 10,
    },
    classes: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    svgShapeAlign() {
      return this.align;
    },
    svgShapePeak() {
      return this.peak;
    },
    svgShapeColor() {
      return this.color;
    },
    svgShapeObliquity() {
      return this.obliquity;
    },
    svgShapeClasses() {
      return this.classes;
    },
    svgShapeHeight() {
      return this.height;
    },
    basePoints() {
      return this.svgShapeAlign === 'top'
        ? `0,0 ${this.svgShapeHeight},0`
        : `0,${this.svgShapeObliquity} ${this.svgShapeHeight},${this.svgShapeObliquity}`;
    },
    peakPointY() {
      return this.svgShapeAlign === 'top' ? this.svgShapeObliquity : 0;
    },
    peakPointX() {
      return this.svgShapePeak === 'left' ? 0 : this.svgShapeHeight;
    },
    points() {
      return `${this.basePoints} ${this.peakPointX},${this.peakPointY}`;
    },
    translateStyle() {
      return this.svgShapeAlign !== 'top' ? 'transform: translateY(2px);' : '';
    },
  },
};
</script>
