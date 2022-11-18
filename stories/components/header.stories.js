import { createComponent, getTitle } from '../../.storybook/templates';
import headerTemplate from '!!raw-loader!./header.html';

const options = getTitle({
  title: 'Header',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, headerTemplate);

export const Header = Template.bind({});

Header.args = {};

export const HeaderLight = Template.bind({});

HeaderLight.args = {
  light: true,
  bgColor: 'var(--color-blue-dark)',
};

export const HeaderEN = Template.bind({});

HeaderEN.args = {
  lang: 'en',
};