import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includesbloghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog',
});

export default getArgTypes({
  ...options,
  argTypes: {
    newsTitle: {
      description: 'News Title of the Blog',
      type: 'string',
    },
  },
});

export const Blog = createStory(component, {
  newsTitle: 'Aktuelles',
});
