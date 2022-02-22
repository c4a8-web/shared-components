import { createComponent, getTitle } from '../../.storybook/templates';
import { includesblogrecenthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog Recent',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const BlogRecent = Template.bind({});

BlogRecent.args = {
  // tag=page.tags
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
};

export const Events = Template.bind({});

Events.args = {
  // tag=page.tags
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
  events: true,
};
