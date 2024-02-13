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
});

export const GridView = createStory(component, {
  items: site.posts,
  view: 'grid-view',
});
