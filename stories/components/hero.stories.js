import { getDefaultSettings, getParams } from '../../.storybook/templates';
import { includesherohtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getParams({ page: true }),
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Hero',
};

export const Careers = {
  args: {
    hero: {
      bgColor: 'var(--color-blue-dark)',
      isLight: true,
    },
  },
};
