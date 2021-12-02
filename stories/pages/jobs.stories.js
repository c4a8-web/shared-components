import { createComponent, hrefTo, getTitle } from '../../.storybook/templates';
import { includesjoblistdetailhtml as jobListDetailTemplate } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Jobs',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, jobListDetailTemplate);

const baseArgs = {
  clientName: 'glueckkanja',
  title: '',
};

export const Jobs = Template.bind({});

Jobs.args = {
  ...baseArgs,
};
