import { getTitle, site, getDefaultSettings } from '../../.storybook/templates';
import { includesfilterbarhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Filter Bar',
});

export default {
  ...getDefaultSettings({
    options,
    component,
    argTypes: {
      items: {
        description: 'The list of items to display',
        type: 'array',
      },
    },
  }),
};

export const FilterBar = {
  args: {
    items: site.posts,
  },
};
