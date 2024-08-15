import { getDefaultSettings } from '../../.storybook/templates';
import component from '!!raw-loader!./fabHint.html';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Fab Hint',
};

export const FabHint = {
  args: {},
};
