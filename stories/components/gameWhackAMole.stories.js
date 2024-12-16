import { getDefaultSettings } from '../../.storybook/templates';
import { includesgamewhackamolehtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
  }),
  title: 'Components/Game Whack A Mole',
};

export const GameWhackAMole = {
  args: {
    headline: {
      text: 'Cool-Down-Art',
      level: 'h2',
    },
    subline: 'Wie Sie mit kleinen Kunstwerken große Krisen meistern!',
    maxTime: 10,
  },
};
