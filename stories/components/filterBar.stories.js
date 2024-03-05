import { createStory, getArgTypes, getTitle, site } from '../../.storybook/templates';
import { includesfilterbarhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Filter Bar',
});

export default getArgTypes({
  ...options,
  argTypes: {
    items: {
      description: 'The list of items to display',
      type: 'array',
    },
  },
});

export const FilterBar = createStory(component, {
  items: site.posts,
});
