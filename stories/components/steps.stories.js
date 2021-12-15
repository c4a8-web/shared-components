import { createComponent, getTitle } from '../../.storybook/templates';
import { includesstepshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Steps',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Steps = Template.bind({});

Steps.args = {
  list: [
    {
      title: 'Über Uns',
    },
    {
      title: 'Unsere Werte',
    },
    {
      title: 'Lorem ipsum',
    },
  ],
};
