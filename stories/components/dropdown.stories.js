import { getTitle, createStory, getArgTypes } from '../../.storybook/templates';
import { includesdropdownhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Dropdown',
});

export default getArgTypes({
  ...options,
  argTypes: {},
});

export const Dropdown = createStory(component, {
  label: 'Dropdown',
  items: [
    {
      text: 'Azure',
      value: 'azure',
      count: 1,
    },
    {
      text: 'Azure',
      value: 'azure',
      count: 1,
    },
    {
      text: 'Azure',
      value: 'azure',
      count: 3,
    },
    {
      text: 'Maximilian Mustermann-Schulz',
      value: 'azure',
      count: 6,
    },
    {
      text: 'Maximilian Mustermann',
      value: 'azure',
      count: 263,
    },
  ],
});
