import { getTitle, getDefaultSettings } from '../../.storybook/templates';
import { includesbloghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog',
});

export default {
  ...getDefaultSettings({
    options,
    component,
    argTypes: {},
  }),
};

export const Blog = { args: {} };
