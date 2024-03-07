import { getTitle, createStory, getArgTypes, site } from '../../.storybook/templates';
import { includesgridlisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Grid List',
});

export default getArgTypes({
  ...options,
  argTypes: {},
});

export const ListView = createStory(component, {
  items: site.posts,
  view: 'list-view',
  authors: {
    'Author Name': {
      display_name: 'Author Name',
      avatar: 'people/people-author-name.png',
      permalink: '/authors/author-name/',
      twitter: 'glueckkanjagab',
      linkedin: '../company/glueckkanja-gab',
    },
  },
});

export const TileView = createStory(component, {
  items: site.posts,
  view: 'tile-view',
  authors: {
    display_name: 'Author Name',
    avatar: 'people/people-author-name.png',
    permalink: '/authors/author-name/',
    twitter: 'glueckkanjagab',
    linkedin: '../company/glueckkanja-gab',
  },
});
