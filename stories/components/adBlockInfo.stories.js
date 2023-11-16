import { createComponent, getTitle, getDecorators, getArgTypes, createStory } from '../../.storybook/templates';
import { includesadblockinfohtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Ad Block Info',
});

export default getArgTypes({
  ...options,
  argTypes: {
    text: {
      description: 'The Text of the Ad Block Info',
      type: 'string',
    },
    show: {
      description: 'Initializes the Modal with Ad Block Info',
      type: 'boolean',
    },
  },
});

export const CustomText = createStory(component, {
  adBlockInfo: {
    text: 'Lorem Ipsum',
    show: true,
  },
});

export const DefaultText = createStory(component, {
  adBlockInfo: {
    show: true,
  },
});

// TODO find a way to just trigger this when adblock is enabled on
// export const DefaultText = Template.bind({});

// DefaultText.args = {
//   show: true,
// };
