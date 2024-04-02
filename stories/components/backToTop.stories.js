import { getDefaultSettings } from '../../.storybook/templates';
import component from '!!raw-loader!./backToTop.html';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Back To Top',
};

export const BackToTop = { args: {} };
