import { getTitle, createStory, getArgTypes } from '../../.storybook/templates';
import { includesctahtml as component } from '../../.storybook/generatedIncludes';

import { analytics } from '../globalArgTypes';

const options = getTitle({
  title: 'Cta',
});

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default getArgTypes({
  ...options,
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: {
      description: 'The Text of the Cta',
      type: 'string',
      required: true,
    },
    analytics,
    link: {
      description: 'Toggles Link Mode',
      type: 'boolean',
    },
    skin: {
      description: 'The skin of the Cta',
      control: { type: 'select' },
      options: [
        '',
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
    width: {
      description: 'Adds helper classes for the width:',
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
    },
    grow: {
      // table: {
      //   defaultValue: { summary: false },
      // },
      control: { type: 'boolean' },
      description: "Will apply w-lg-auto when you don't specify a width.",
      type: {
        summary: null,
      },
    },
    href: {
      description: 'The link of the Cta',
      type: 'string',
    },
    target: {
      description: 'The link target',
      type: {
        summary: 'Bootstrap widths',
        detail: 'w-10, w-20, w-30, ... or w-lg-80, w-md-60, ...',
      },
      options: ['', '_self', '_blank', '_parent', '_top'],
      control: {
        type: 'select',
      },
    },
    button: {
      description: 'Toggles Button Mode',
      type: 'boolean',
    },
    alternativeHref: {
      description: 'An alternative link for the pricing details toggle',
      type: 'string',
    },
    type: {
      description: 'The type attribute of the Cta',
      control: { type: 'select' },
      options: ['', 'submit', 'reset', 'button'],
      type: 'string',
    },
    trigger: {
      description: 'A trigger for modals or other components',
      control: { type: 'select' },
      options: ['', 'modal'],
      type: 'string',
    },
    external: {
      description: 'Adds an external icon to the Cta',
      type: 'boolean',
    },
    icon: {
      description: 'Adds an icon to the Cta',
      control: {
        type: 'text',
      },
      type: {
        summary: 'Icon name',
        detail: 'arrow, mail, phone, ...',
      },
    },
    download: {
      description: 'Adds an download icon to the Cta',
      type: 'boolean',
    },
    reversed: {
      description: 'Reverses the order of the icon and the text. Does not work with download.',
      type: 'boolean',
    },
    active: {
      description: 'Sets the active State of the Cta',
      type: 'boolean',
    },
    classes: {
      description: 'Adds classes:',
      table: {
        disabled: false,
      },
      control: {
        type: 'text',
      },
      type: {
        summary: 'Examples',
        detail: 'space-4, parent-component-class, ...',
      },
    },
  },
});

export const PrimaryButtonCutoff = createStory(component, {
  text: 'Primary Button Cutoff',
  skin: 'primary is-cutoff',
  button: true,
});

export const SecondaryButtonCutoff = createStory(component, {
  text: 'Secondary Button Cutoff',
  href: 'javascript:void(0)',
  skin: 'secondary is-cutoff',
});

export const PrimaryButton = createStory(component, {
  text: 'Primary Button',
  href: 'javascript:void(0)',
  skin: 'primary',
  button: true,
});

export const PrimaryButtonDownload = createStory(component, {
  text: 'Primary Button',
  href: 'javascript:void(0)',
  skin: 'primary',
  button: true,
  download: true,
});

export const PrimaryButtonExternal = createStory(component, {
  text: 'Primary Button',
  href: 'javascript:void(0)',
  skin: 'primary',
  button: true,
  external: true,
});

export const SecondaryButton = createStory(component, {
  text: 'Secondary Button',
  href: 'javascript:void(0)',
  skin: 'secondary',
  button: true,
});

export const PrimaryLink = createStory(component, {
  text: 'Primary Link',
  href: 'javascript:void(0)',
  link: true,
});

// PrimaryLink.argTypes = {
//   width: {
//     table: { disable: true },
//   },
//   skin: {
//     table: { disable: true },
//   },
// };

export const PrimaryLinkActive = createStory(component, {
  text: 'Primary Link',
  href: 'javascript:void(0)',
  link: true,
  active: true,
});

PrimaryLinkActive.argTypes = {
  width: {
    table: { disable: true },
  },
  skin: {
    table: { disable: true },
  },
};

export const PrimaryLinkMonochrome = createStory(component, {
  text: 'Primary Link',
  href: 'javascript:void(0)',
  link: true,
  monochrome: true,
});

export const PrimaryLinkReversed = createStory(component, {
  text: 'Primary Link lorem ipsum dolor sit amet',
  href: 'javascript:void(0)',
  link: true,
  reversed: true,
});

