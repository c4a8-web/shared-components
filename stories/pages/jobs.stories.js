import { createComponent, getTitle } from '../../.storybook/templates';
import { includesjoblistdetailhtml as component } from '../../.storybook/generatedIncludes';
import { Detail } from '../components/jobListDetail.stories';

const options = getTitle({
  title: 'Jobs',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  ...Detail?.args,
  apiUrl: null,
};

export const Jobs = Template.bind({});

Jobs.args = {
  ...baseArgs,
};
