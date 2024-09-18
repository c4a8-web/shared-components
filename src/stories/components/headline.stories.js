import HeadlineComponent from "../../components/Headline.vue";

export default {
  title: "Components/Headline",
  component: HeadlineComponent,
};

export const h1 = {
  args: {
    level: "h1",
    text: "Headline Level 1",
  },
};

export const h2 = {
  args: {
    level: "h2",
    text: "Headline Level 2",
  },
};

export const h3 = {
  args: {
    level: "h3",
    text: "Headline Level 3",
  },
};

export const h4 = {
  args: {
    level: "h4",
    text: "Headline Level 4",
  },
};

export const h1WithH4Style = {
  args: {
    level: "h1",
    text: "Headline Level 1 with H4 Style",
    classes: "h4-font-size",
  },
};

export const h1WithFontSize3Style = {
  args: {
    level: "h1",
    text: "Headline Level 1 with Font Size 3 Style",
    classes: "font-size-3",
  },
};

// export const h5 = {
//   args: {
//     level: 'h5',
//     text: 'Headline Level 5',
//   },
// };

// export const h6 = {
//   args: {
//     level: 'h6',
//     text: 'Headline Level 6',
//   },
// };
