import { getDefaultSettings } from '../../.storybook/templates';
import { includescontentscrollerhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Content Scroller',
};

export const ContentScroller = {
  args: {
    headline: {
      text: 'Headline Level 1 with H4 Style',
    },
  },
};
