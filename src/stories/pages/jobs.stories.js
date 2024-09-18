import { createComponent, getParams } from '../../.storybook/templates';
import { includesjoblistdetailhtml as component } from '../../.storybook/generatedIncludes';
import { De } from '../components/jobListDetail.stories';

export default {
  ...getParams({ page: true }),
  title: 'Pages/Jobs',
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  ...De?.args,
  jobId: '1327578',
  apiUrl: 'mock/jobList.xml',
};

export const Jobs = Template.bind({});

Jobs.args = {
  ...baseArgs,
};
