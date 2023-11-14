import { createComponent, getTitle } from '../../.storybook/templates';
import { includesbloghtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  newsTitle: 'Aktuelles',
};

export const WithBackground = Template.bind({});

WithBackground.args = {
  newsTitle: 'Aktuelles',
  bgColor: 'var(--color-macaroni-and-cheese)',
};
