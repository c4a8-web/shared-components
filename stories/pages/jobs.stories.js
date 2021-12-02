import { createComponent, getTitle } from '../../.storybook/templates';
import { includesjoblistdetailhtml as jobListDetailTemplate } from '../../.storybook/generatedIncludes';
import { Detail } from '../components/jobListDetail.stories';

const options = getTitle({
  title: 'Jobs',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, jobListDetailTemplate);

const baseArgs = {
  ...Detail?.args,
};

export const Jobs = Template.bind({});

Jobs.args = {
  ...baseArgs,
};
