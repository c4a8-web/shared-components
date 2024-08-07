import { getDefaultSettings } from '../../.storybook/templates';
import { includeslottiehtml as component } from '../../.storybook/generatedIncludes';
import lottie1 from '../data/lottie1.json';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Lottie',
};

export const DimensionsAndBackground = {
  args: {
    width: 600,
    height: 600,
    data: lottie1,
    background: '#aaaaaa',
  },
};

export const NoDimensions = {
  args: {
    data: lottie1,
  },
};
