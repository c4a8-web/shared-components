import { createComponent, getTitle } from '../../.storybook/templates';
import { includesbloghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Blog = Template.bind({});

Blog.args = {
  newsTitle: 'Aktuelles',
};
