import { getTitle, site , getDefaultSettings} from '../../.storybook/templates';
import { includesgridlisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Grid List',
});

export default {
  ...getDefaultSettings({
  options,
component,
  argTypes: {},
}),
};

export const ListView = { args: {
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
} };

export const TileView = { args: {
  items: site.posts,
  view: 'tile-view',
  authors: {
    display_name: 'Author Name',
    avatar: 'people/people-author-name.png',
    permalink: '/authors/author-name/',
    twitter: 'glueckkanjagab',
    linkedin: '../company/glueckkanja-gab',
  },
} };
