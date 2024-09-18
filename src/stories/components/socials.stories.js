import SocialsComponent from "../../components/socials";

export default {
  title: "Components/Socials",
  component: SocialsComponent,
};

export const VerticalNoLabel = {
  args: {
    vertical: true,
    hideLabel: true,
    author: {
      name: "Carolin Kanja",
      // Add other author properties if needed
    },
  },
};

export const Label = {
  args: {
    author: {
      name: "Author Name 2",
      // Add other author properties if needed
    },
  },
};

export const Expand = {
  args: {
    expand: true,
    hideLabel: true,
    author: {
      name: "Carolin Kanja",
      // Add other author properties if needed
    },
  },
};

export const ExpandLabel = {
  args: {
    expand: true,
    hideLabel: false,
    author: {
      name: "Carolin Kanja",
      // Add other author properties if needed
    },
  },
};
