import GridComponent from "../../components/grid";
import { getAssetPath } from "../../../.storybook/templates";

export default {
  component: GridComponent,
  argTypes: {},
  title: "Components/Grid",
};

export const ThreeItemsLight = {
  args: {
    bgColor: "var(--color-career-background)",
    headline: "Wo stehen Sie im Moment?",
    light: true,
    items: [
      {
        title: "100%",
        text: "Wir nutzen die Cloud vollständig und möchten nun Aufwände reduzieren.",
      },
      {
        title: "50%",
        text: "Wir sind bereits in der Cloud aber es funktioniert noch nicht so richtig.",
      },
      {
        title: "0%",
        text: "Wir wollen unsere Prozesse in die Cloud ziehen aber stehen noch ganz am Anfang.",
      },
    ],
  },
};

export const ThreeItemsLightIcons = {
  args: {
    bgColor: "var(--color-career-background)",
    headline: "Wo stehen Sie im Moment?",
    light: true,
    items: [
      {
        img: getAssetPath("svg/icons/flexibilitaet.svg"),
        text: "Wir nutzen die Cloud vollständig und möchten nun Aufwände reduzieren.",
      },
      {
        img: getAssetPath("svg/icons/flexibilitaet.svg"),
        text: "Wir sind bereits in der Cloud aber es funktioniert noch nicht so richtig.",
      },
      {
        img: getAssetPath("svg/icons/flexibilitaet.svg"),
        text: "Wir wollen unsere Prozesse in die Cloud ziehen aber stehen noch ganz am Anfang.",
      },
    ],
  },
};

export const FourItems = {
  args: {
    bgColor: "var(--color-primary)",
    headline: "Wo stehen Sie im Moment?",
    headlineClasses: "h2-font-size",
    items: [
      {
        title: "100%",
        text: "Wir nutzen die Cloud vollständig und möchten nun Aufwände reduzieren.",
      },
      {
        title: "66%",
        text: "Wir sind bereits in der Cloud aber es funktioniert noch nicht so richtig.",
      },
      {
        title: "33%",
        text: "Wir wollen unsere Prozesse in die Cloud ziehen aber stehen noch ganz am Anfang.",
      },
      {
        title: "0%",
        text: "Wir wollen unsere Prozesse in die Cloud ziehen aber stehen noch ganz am Anfang.",
      },
    ],
  },
};
