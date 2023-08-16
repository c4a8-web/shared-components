import { createComponent, getTitle, getDecorators } from '../../.storybook/templates';
import { includesctahtml as component } from '../../.storybook/generatedIncludes';

import { analytics } from '../globalArgTypes';

const options = getTitle({
  title: 'Cta',
});

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  ...options,
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    skin: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'primary is-cutoff',
        'secondary is-cutoff',
        'primary is-cutoff is-light',
        'secondary is-cutoff is-light',
        'primary is-light',
        'secondary is-light',
      ],
    },
    analytics,
    grow: {
      defaultValue: false, // TODO possible remove after migration to 7.x
      control: { type: 'boolean' },
      description: "Will apply w-lg-auto when you don't specify a width.",
      type: {
        summary: null,
      },
    },
    width: {
      table: {
        disabled: false,
      },
      control: {
        type: 'text',
      },
      type: {
        summary: 'Bootstrap widths',
        detail: 'w-10, w-20, w-30, ... or w-lg-80, w-md-60, ...',
      },
      description: 'Here you can add helper classes for the width:',
    },
  },
  decorators: getDecorators(),
};

const Template = (args) => createComponent(args, component);

export const PrimaryButtonCutoff = Template.bind({});

PrimaryButtonCutoff.args = {
  text: 'Primary Button Cutoff',
  skin: 'primary is-cutoff',
  button: true,
};

export const SecondaryButtonCutoff = Template.bind({});

SecondaryButtonCutoff.args = {
  text: 'Secondary Button Cutoff',
  href: 'javascript:void(0)',
  skin: 'secondary is-cutoff',
};

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  text: 'Primary Button',
  href: 'javascript:void(0)',
  skin: 'primary',
  button: true,
};

export const PrimaryButtonDownload = Template.bind({});

PrimaryButtonDownload.args = {
  text: 'Primary Button',
  href: 'javascript:void(0)',
  skin: 'primary',
  button: true,
  download: true,
};

export const PrimaryButtonExternal = Template.bind({});

PrimaryButtonExternal.args = {
  text: 'Primary Button',
  href: 'javascript:void(0)',
  skin: 'primary',
  button: true,
  external: true,
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  text: 'Secondary Button',
  href: 'javascript:void(0)',
  skin: 'secondary',
  button: true,
};

export const PrimaryLink = Template.bind({});

PrimaryLink.args = {
  text: 'Primary Link',
  href: 'javascript:void(0)',
  link: true,
};

PrimaryLink.argTypes = {
  width: {
    table: { disable: true },
  },
  skin: {
    table: { disable: true },
  },
};

export const PrimaryLinkActive = Template.bind({});

PrimaryLinkActive.args = {
  text: 'Primary Link',
  href: 'javascript:void(0)',
  link: true,
  active: true,
};

PrimaryLinkActive.argTypes = {
  width: {
    table: { disable: true },
  },
  skin: {
    table: { disable: true },
  },
};

export const PrimaryLinkMonochrome = Template.bind({});

PrimaryLinkMonochrome.args = {
  text: 'Primary Link',
  href: 'javascript:void(0)',
  link: true,
  monochrome: true,
};

export const PrimaryLinkReversed = Template.bind({});

PrimaryLinkReversed.args = {
  text: 'Primary Link lorem ipsum dolor sit amet',
  href: 'javascript:void(0)',
  link: true,
  reversed: true,
};
