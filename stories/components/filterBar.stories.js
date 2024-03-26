import { site, getDefaultSettings } from '../../.storybook/templates';
import { includesfilterbarhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {
      items: {
        description: 'The list of items to display',
        type: 'array',
      },
    },
  }),
  title: 'Components/Filter Bar',
};

export const FilterBar = {
  args: {
    items: site.posts,
  },
};
