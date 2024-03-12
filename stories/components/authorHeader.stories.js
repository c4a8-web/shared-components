import { getTitle, createStory, getArgTypes } from '../../.storybook/templates';
import { includesauthorheaderhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Author Header',
});

export default getArgTypes({
  ...options,
  author: {
    description: 'Author Object',
    type: 'object',
  },
  classes: {
    description: 'Option to add Additional Css Classes',
    type: 'string',
  },
  imgUrl: {
    description: 'Author Image',
    type: 'string',
  },
});

export const AuthorHeader = createStory(component, {
  author: {
    display_name: 'Lorem Ipsum',
  },
  imgUrl: '/people/people-michael-breither.jpg',
  postCount: 999,
});
