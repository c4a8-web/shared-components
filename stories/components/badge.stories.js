import { createComponent, getTitle } from '../../.storybook/templates';
import { includesbadgehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Badge',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Badge = Template.bind({});

Badge.args = {
  text: 'Neuer Webcast',
};
