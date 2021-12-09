import { createComponent, getTitle } from '../../.storybook/templates';
import { includesjoblistentryhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Job/List Entry',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ListEntry = Template.bind({});

ListEntry.args = {
  title: 'Lust auf ein IT Trainee-Programm mit umfassenden Microsoft Trainings?',
  city: 'Offenbach am Main',
};
