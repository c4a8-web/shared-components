import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includesbadgehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Badge',
});

export default {
  ...getArgTypes({
    ...options,
    argTypes: {
      text: {
        description: 'Badge Text',
        type: 'string',
        required: true,
      },
      icon: {
        description: 'Badge icon',
        type: 'string',
      },
      color: {
        description: 'Bagde Color',
        type: 'string',
      },
      textColor: {
        description: 'Badge Text Color',
        type: 'string',
      },
      uppercase: {
        description: 'Turns Text into Uppercase',
        type: 'boolean',
      },
      overlapping: {
        description: 'Allows Overlapping',
        type: 'boolean',
      },
      classes: {
        description: 'CSS Classes',
        type: 'string',
      },
    },
  }),
  render: ({ ...args }) => {
    return createStory(component, { ...args });
  },
};

export const WithIcon = {
  args: {
    text: 'Neuer Webcast',
    icon: 'computer-shield',
  },
};

export const WithoutIcon = {
  args: {
    text: 'Training',
    textColor: 'var(--color-black)',
    color: 'var(--color-sunglow)',
  },
};

export const Overlapping = {
  args: {
    text: 'Training',
    textColor: 'var(--color-black)',
    color: 'var(--color-sunglow)',
    overlapping: true,
  },
};

export const Uppercase = {
  args: {
    text: 'Training',
    textColor: 'var(--color-black)',
    color: 'var(--color-sunglow)',
    uppercase: true,
  },
};
