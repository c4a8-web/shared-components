import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includestaghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Tag',
});

export default getArgTypes({
  ...options,
  argTypes: {
    tag: {
      description: 'The text on the Tag',
      type: 'string',
      required: true,
    },
    filter: {
      description: 'The text to filter on',
      type: 'string',
    },
    count: {
      description: 'The count of the Tag',
      type: 'number',
    },
  },
});

export const WithCount = createStory(component, {
  tag: 'Microsoft',
  count: 10,
});

export const WithoutCount = createStory(component, {
  tag: 'Modern Workplace',
  filter: 'Modern Workplace',
});

export const WithSpacing = createStory(component, {
  tag: 'Modern Workplace',
  spacing: 3,
});

export const Small = createStory(component, {
  tag: 'Azure',
  variant: 'small',
});

export const Icon = createStory(component, {
  tag: 'Azure',
  variant: 'icon',
});
