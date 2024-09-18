import { getAssetPath } from "../../../../.storybook/templates";
import lottie1 from "../../data/lottie1.json";
import PeopleSquareComponent from "../../components/people-square";

export default {
  title: "Components/People Square",
  component: PeopleSquareComponent,
};

export const TwoByTwo = {
  args: {
    absolute: true,
    width: 2,
    height: 2,
    grid: [
      {
        number: 410,
        text: "Kunden",
        shape: {
          src: getAssetPath("./svg/shapes/shape-career-3.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-2.jpg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-4.jpg"),
        },
      },
      {
        color: "var(--color-yellow)",
        number: 140,
        text: "Mitarbeiter",
      },
    ],
  },
};

export const ThreeByThree = {
  args: {
    grid: [
      {
        number: 410,
        text: "Kunden",
        shape: {
          src: getAssetPath("svg/shapes/shape-career-3.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-1.jpg"),
        },
        rowStart: 1,
        rowEnd: 2,
      },
      {
        shape: {
          src: getAssetPath("svg/shapes/shape-career-2.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-2.jpg"),
        },
        rowStart: 3,
        rowEnd: 3,
        colStart: 1,
        colEnd: 2,
      },
      {
        color: "var(--color-primary-accent)",
        number: 140,
        text: "Mitarbeiter",
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-3.jpg"),
        },
      },
      {
        shape: {
          src: getAssetPath("svg/shapes/shape-career-4.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-4.jpg"),
        },
      },
    ],
  },
};

export const FourByFour = {
  args: {
    absolute: true,
    width: 4,
    height: 4,
    grid: [
      {
        number: 410,
        text: "Kunden",
        shape: {
          src: getAssetPath("svg/shapes/shape-career-3.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-1.jpg"),
        },
      },
      {
        shape: {
          src: getAssetPath("svg/shapes/shape-career-2.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-2.jpg"),
        },
        rowStart: 1,
        rowEnd: 2,
        colStart: 2,
        colEnd: 3,
      },
      {
        color: "var(--color-primary-accent)",
        number: 140,
        text: "Mitarbeiter",
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-3.jpg"),
        },
        rowStart: 4,
        rowEnd: 4,
        colStart: 1,
        colEnd: 2,
      },
      {
        shape: {
          src: getAssetPath("svg/shapes/shape-career-4.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-1.jpg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-4.jpg"),
        },
        rowStart: 3,
        rowEnd: 4,
        colStart: 3,
        colEnd: 4,
      },
    ],
  },
};

export const WithAnimation = {
  args: {
    grid: [
      {
        number: 410,
        text: "Kunden",
        shape: {
          src: getAssetPath("svg/shapes/shape-career-3.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-1.jpg"),
        },
        rowStart: 1,
        rowEnd: 2,
      },
      {
        shape: {
          lottie: lottie1,
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-2.jpg"),
        },
        rowStart: 3,
        rowEnd: 3,
        colStart: 1,
        colEnd: 2,
      },
      {
        color: "var(--color-primary-accent)",
        number: 140,
        text: "Mitarbeiter",
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-3.jpg"),
        },
      },
      {
        shape: {
          src: getAssetPath("svg/shapes/shape-career-4.svg"),
        },
      },
      {
        img: {
          src: getAssetPath("img/image-placeholder-4.jpg"),
        },
      },
    ],
  },
};
