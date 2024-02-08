import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includesfilterbarhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Filter Bar',
});

export default getArgTypes({
  ...options,
  // argTypes: {
  //   newsTitle: {
  //     description: 'News Title of the Blog',
  //     type: 'string',
  //   },
  // },
});

export const FilterBar = createStory(component, {});
