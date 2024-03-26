import { createComponent } from '../../.storybook/templates';
import { includesjoblistentryhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Job/List Entry',
};

const Template = (args) => createComponent(args, component);

export const ListEntry = Template.bind({});

ListEntry.args = {
  title: 'Lust auf ein IT Trainee-Programm mit umfassenden Microsoft Trainings?',
  city: 'Offenbach am Main',
};
