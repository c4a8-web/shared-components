import { createComponent, getTitle } from '../../.storybook/templates';
import { includesshapehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Shape',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ShapeFastForward = Template.bind({});

ShapeFastForward.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-fast-forward',
      backgroundColor: 'var(--color-primary-accent)',
      foregroundColor: 'var(--color-primary-accent-light)',
      thirdColor: 'var(--color-secondary)',
    },
  ],
};

export const ShapeCircleWithinSquare = Template.bind({});

ShapeCircleWithinSquare.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-circle-within-square',
      firstColor: 'var(--color-orange)',
      secondColor: 'var(--color-white)',
      thirdColor: 'var(--color-white)',
      fourthColor: 'var(--color-gigas)',
      fifthColor: 'var(--color-gigas)',
      sixthColor: 'var(--color-orange)',
    },
  ],
};

export const ShapeSquareCircle = Template.bind({});

ShapeSquareCircle.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-square-circle',
      backgroundColor: 'var(--color-primary-accent)',
      circleColor: 'var(--color-secondary)',
    },
  ],
};

export const ShapeHalfSquare = Template.bind({});

ShapeHalfSquare.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-half-square',
      backgroundColor: 'var(--color-blue-light)',
      firstColor: 'var(--color-page-detail-shape)',
      secondColor: 'var(--color-background)',
      thirdColor: 'var(--color-primary-accent)',
    },
  ],
};

export const ShapeFourSquares = Template.bind({});

ShapeFourSquares.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-four-squares',
      firstColor: 'var(--color-blue-light)',
      secondColor: 'var(--color-blue-light)',
      thirdColor: 'var(--color-orange)',
      fourthColor: 'var(--color-orange)',
      fifthColor: 'var(--color-gigas)',
      sixthColor: 'var(--color-gigas)',
    },
  ],
};

export const ShapeFourTriangles = Template.bind({});

ShapeFourTriangles.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-four-triangles',
      firstColor: 'var(--color-orange)',
      secondColor: 'var(--color-secondary)',
      thirdColor: 'var(--color-orange)',
      fourthColor: 'var(--color-secondary)',
    },
  ],
};

export const TrianglesToCenter = Template.bind({});

TrianglesToCenter.args = {
  name: 'square',
  shapes: [
    {
      name: 'triangles-to-center',
      firstColor: 'var(--color-green-blue)',
      secondColor: 'var(--color-white)',
      thirdColor: 'var(--color-yellow)',
      fourthColor: 'var(--color-green-blue)',
      fifthColor: 'var(--color-yellow)',
      sixthColor: 'var(--color-green-blue)',
      seventhColor: 'var(--color-green-blue)',
      eighthColor: 'var(--color-white)',
    },
  ],
};

export const ShapeMovingEye = Template.bind({});

ShapeMovingEye.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-moving-eye',
      squareColor: 'var(--color-green-blue)',
      eyeColor: 'var(--color-yellow)',
    },
  ],
};

export const ShapeSemiCircle = Template.bind({});

ShapeSemiCircle.args = {
  name: 'square',
  shapes: [
    {
      name: 'shape-semi-circle',
      squareColor: 'var(--color-green-blue)',
      circleColor: 'var(--color-yellow)',
    },
  ],
};

export const SBlock = Template.bind({});

SBlock.args = {
  shapes: [
    {
      name: 'shape-square-circle',
    },
    {
      name: 'shape-fast-forward',
    },
    {},
    {
      backgroundColor: '#673ab7', // TODO this will be the default in the pyramid shape
      foregroundColor: 'var(--color-orange)',
      thirdColor: 'var(--color-yellow)',
    },
  ],
};

export const SBlockTheme = Template.bind({});

SBlockTheme.args = {
  shapes: [
    {
      name: 'shape-square-circle',
      backgroundColor: 'var(--color-primary)',
      circleColor: 'var(--color-white)',
    },
    {
      name: 'shape-fast-forward',
      backgroundColor: 'var(--color-secondary)',
      foregroundColor: 'var(--color-white)',
      thirdColor: 'var(--color-primary-accent)',
    },
    {
      backgroundColor: 'var(--color-primary-accent)',
      foregroundColor: 'var(--color-white)',
      thirdColor: '#ff0000',
    },
    {
      backgroundColor: 'var(--color-primary)',
      foregroundColor: 'var(--color-white)',
      thirdColor: '#ff0000',
    },
  ],
};

export const TBlock = Template.bind({});

TBlock.args = {
  name: 't-block',
  shapes: [
    {
      name: 'shape-moving-eye',
      squareColor: 'var(--color-green-blue)',
      eyeColor: 'var(--color-yellow)',
    },
    {
      name: 'shape-semi-circle',
      squareColor: 'var(--color-green-blue)',
      circleColor: 'var(--color-yellow)',
    },
    {
      name: 'shape-half-square',
      backgroundColor: 'var(--color-blue-light)',
      firstColor: 'var(--color-secondary)',
      secondColor: 'var(--color-background)',
      thirdColor: 'var(--color-primary-accent)',
    },
    {
      backgroundColor: 'var(--color-yellow)',
      leftTriangleColor: 'var(--color-orange)',
      rightTriangleColor: 'var(--color-white)',
    },
  ],
};

export const LBlock = Template.bind({});

LBlock.args = {
  name: 'l-block',
  shapes: [
    {
      name: 'shape-moving-eye',
      squareColor: 'var(--color-green-blue)',
      eyeColor: 'var(--color-yellow)',
    },
    {
      name: 'shape-semi-circle',
      squareColor: 'var(--color-green-blue)',
      circleColor: 'var(--color-yellow)',
    },
    {
      name: 'shape-half-square',
      backgroundColor: 'var(--color-blue-light)',
      firstColor: 'var(--color-secondary)',
      secondColor: 'var(--color-background)',
      thirdColor: 'var(--color-primary-accent)',
    },
    {
      backgroundColor: 'var(--color-yellow)',
      leftTriangleColor: 'var(--color-orange)',
      rightTriangleColor: 'var(--color-white)',
    },
  ],
};
