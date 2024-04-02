import { getDefaultSettings } from '../../.storybook/templates';
import { includesauthorshtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
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
  }),
  title: 'Components/Authors',
};

export const WithLink = {
  args: {
    authors: ['Author Name', 'Second Name'],
  },
};

export const WithoutLink = {
  args: {
    authors: ['Author Name', 'Second Author'],
    noLink: true,
  },
};

export const SingleName = {
  args: {
    authors: 'Author',
    noLink: true,
  },
};
