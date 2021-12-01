import { createComponent } from '../../.storybook/templates';
import { includesjoblistdetailhtml as jobListDetailTemplate } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Job/Detail',
};

const Template = (args) => createComponent(args, jobListDetailTemplate);

const baseArgs = {
  clientName: 'glueckkanja',
  jobId: '123',
  title: 'Lust bei uns zu arbeiten ?',
};

export const Detail = Template.bind({});

Detail.args = {
  ...baseArgs,
};
