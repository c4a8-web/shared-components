import { getDefaultSettings, getTitle } from '../../.storybook/templates';
import component from '!!raw-loader!./backToTop.html';

const options = getTitle({
  title: 'Back To Top',
});

export default {
  ...getDefaultSettings({
    options,
    component,
    argTypes: {},
  }),
};

export const BackToTop = { args: {} };
