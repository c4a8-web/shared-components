import TagComponent from "../../components/tag";

export default {
  component: TagComponent,
  argTypes: {
    tag: {
      description: "The text on the Tag",
      type: "string",
      required: true,
    },
    filter: {
      description: "The text to filter on",
      type: "string",
    },
    count: {
      description: "The count of the Tag",
      type: "number",
    },
  },
  title: "Components/Tag",
};

export const WithCount = {
  args: {
    tag: "Microsoft",
    count: 10,
  },
};

export const WithoutCount = {
  args: {
    tag: "Modern Workplace",
    filter: "Modern Workplace",
  },
};

export const WithSpacing = {
  args: {
    tag: "Modern Workplace",
    spacing: 3,
  },
};

export const Small = {
  args: {
    tag: "Azure",
    variant: "small",
  },
};

export const Icon = {
  args: {
    tag: "Azure",
    variant: "icon",
  },
};
