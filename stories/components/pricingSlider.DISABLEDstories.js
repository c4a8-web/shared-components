import { getDefaultSettings } from '../../.storybook/templates';
import { includespricingsliderhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    argTypes: {},
    component,
  }),
  title: 'Components/Pricing Slider',
};

export const Default = {
  args: {
    slider: {
      range: {
        min: 50,
        max: 20000,
        step: 25,
        from: 1000,
        unit: 'Users',
        resultPer: 'mo',
      },
    },
  },
};
