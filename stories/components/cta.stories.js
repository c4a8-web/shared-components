// import "../site.css";

import { createComponent } from "../../.storybook/templates";
import ctaTemplate from "../../includes/cta.html";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Components/Cta",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    skin: {
      control: { type: "select" },
      options: [
        "primary is-cutoff",
        "secondary is-cutoff",
        "primary is-cutoff is-light",
      ],
    },
  },
};

const Template = (args) => createComponent(args, ctaTemplate);

export const Cta = Template.bind({});

Cta.args = {
  text: "Ich bin der CTA Text",
  href: "javascript:void(0)",
  skin: "primary is-cutoff",
};
