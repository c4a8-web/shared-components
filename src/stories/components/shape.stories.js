import ShapeComponent from "../../components/shape";

export default {
  title: "Components/Shape",
  component: ShapeComponent,
};

export const ShapeFastForward = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-fast-forward",
        backgroundColor: "var(--color-primary-accent)",
        firstColor: "var(--color-primary-accent-light)",
        secondColor: "var(--color-secondary)",
      },
    ],
  },
};

export const ShapeCircleWithinSquare = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-circle-within-square",
        firstColor: "var(--color-orange)",
        secondColor: "var(--color-white)",
        thirdColor: "var(--color-gigas)",
      },
    ],
  },
};

export const ShapeSquareCircle = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-square-circle",
        backgroundColor: "var(--color-primary-accent)",
        firstColor: "var(--color-secondary)",
      },
    ],
  },
};

export const ShapeHalfSquare = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-half-square",
        backgroundColor: "var(--color-blue-light)",
        firstColor: "var(--color-page-detail-shape)",
        secondColor: "var(--color-background)",
        thirdColor: "var(--color-primary-accent)",
      },
    ],
  },
};

export const ShapeFourSquares = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-four-squares",
        firstColor: "var(--color-blue-light)",
        secondColor: "var(--color-white)",
        thirdColor: "var(--color-orange)",
        fourthColor: "var(--color-gigas)",
      },
    ],
  },
};

export const ShapeFourTriangles = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-four-triangles",
        firstColor: "var(--color-orange)",
        secondColor: "var(--color-secondary)",
        thirdColor: "var(--color-white)",
      },
    ],
  },
};

export const ShapeTrianglesToCenter = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-triangles-to-center",
        firstColor: "var(--color-green-blue)",
        secondColor: "var(--color-white)",
        thirdColor: "var(--color-yellow)",
      },
    ],
  },
};

export const ShapeMovingEye = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-moving-eye",
        backgroundColor: "var(--color-green-blue)",
        firstColor: "var(--color-yellow)",
      },
    ],
  },
};

export const ShapeSecurityEye = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-security-eye",
        backgroundColor: "var(--color-green-blue)",
        firstColor: "var(--color-yellow)",
      },
    ],
  },
};

export const ShapeSemiCircle = {
  args: {
    name: "square",
    shapes: [
      {
        name: "shape-semi-circle",
        backgroundColor: "var(--color-green-blue)",
        firstColor: "var(--color-yellow)",
      },
    ],
  },
};

export const SBlock = {
  args: {
    shapes: [
      {
        name: "shape-square-circle",
      },
      {
        backgroundColor: "var(--color-primary-accent-light)",
      },
      {
        name: "shape-fast-forward",
      },
      {
        backgroundColor: "var(--color-primary-accent-light)",
        firstColor: "var(--color-primary-accent)",
        secondColor: "var(--color-secondary)",
      },
    ],
  },
};

export const SBlockTheme = {
  args: {
    shapes: [
      {
        name: "shape-square-circle",
        backgroundColor: "var(--color-primary)",
        firstColor: "var(--color-white)",
      },
      {
        backgroundColor: "var(--color-secondary)",
      },
      {
        name: "shape-fast-forward",
        backgroundColor: "var(--color-primary-accent)",
        firstColor: "var(--color-primary-accent-light)",
        secondColor: "var(--color-secondary)",
      },
      {
        backgroundColor: "var(--color-primary)",
        firstColor: "var(--color-white)",
        secondColor: "var(--color-yellow)",
      },
    ],
  },
};

export const TBlock = {
  args: {
    name: "t-block",
    shapes: [
      {
        name: "shape-half-square",
        backgroundColor: "var(--color-blue-light)",
        firstColor: "var(--color-page-detail-shape)",
        secondColor: "var(--color-background)",
        thirdColor: "var(--color-primary-accent)",
      },
      {
        backgroundColor: "var(--color-page-detail-shape)",
        firstColor: "var(--color-orange)",
        secondColor: "var(--color-background)",
      },
      {
        name: "shape-semi-circle",
        backgroundColor: "var(--color-green-blue)",
        firstColor: "var(--color-yellow)",
      },
      {
        name: "shape-moving-eye",
        backgroundColor: "var(--color-gigas)",
        firstColor: "var(--color-yellow)",
      },
    ],
  },
};

export const LBlock = {
  args: {
    name: "l-block",
    shapes: [
      {
        name: "shape-moving-eye",
        backgroundColor: "var(--color-gigas)",
        firstColor: "var(--color-yellow)",
      },
      {
        backgrounddColor: "var(--color-yellow)",
        firstColor: "var(--color-orange)",
        secondColor: "var(--color-white)",
      },
      {
        name: "shape-half-square",
        backgroundColor: "var(--color-blue-light)",
        firstColor: "var(--color-secondary)",
        secondColor: "var(--color-background)",
        thirdColor: "var(--color-primary-accent)",
      },
      {
        name: "shape-semi-circle",
        squareColor: "var(--color-green-blue)",
        circleColor: "var(--color-yellow)",
      },
    ],
  },
};
