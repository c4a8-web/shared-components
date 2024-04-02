import { getDefaultSettings } from '../../.storybook/templates';
import { includesbloghtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Blog',
};

export const Blog = { args: {} };
