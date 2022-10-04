import { createComponent, getTitle } from '../../.storybook/templates';
import { includesheaderhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Header',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Header = Template.bind({});

Header.args = {};
