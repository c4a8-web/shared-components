import { createComponent, getTitle } from '../../.storybook/templates';
import { includesbadgehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Badge',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const WithIcon = Template.bind({});

WithIcon.args = {
  text: 'Neuer Webcast',
  icon: '',
};

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
  text: 'Training',
  textColor: 'var(--color-black)',
  color: 'var(--color-sunglow)',
};

export const Overlapping = Template.bind({});

Overlapping.args = {
  text: 'Training',
  textColor: 'var(--color-black)',
  color: 'var(--color-sunglow)',
  overlapping: true,
};
