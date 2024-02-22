import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includesauthorshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Authors',
});

export default getArgTypes({
  ...options,
  argTypes: {
    authors: {
      description: 'List of Authors',
      type: 'array',
    },
    noLink: {
      description: "Authors won't act as Link",
      type: 'boolean',
    },
    dataLang: {},
    dataAuthors: {},
    lang: {
      description: 'Sets the language',
      type: 'string',
    },
  },
});

export const WithLink = createStory(component, {
  authors: ['Author Name', 'Second Name'],
});

export const WithoutLink = createStory(component, {
  authors: ['Author Name', 'Second Author'],
  noLink: true,
});

export const SingleName = createStory(component, {
  authors: 'Author',
  noLink: true,
});
