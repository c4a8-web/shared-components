import { createComponent, hrefTo, getParams } from '../../.storybook/templates';
import { includesjoblisthtml as component } from '../../.storybook/generatedIncludes';
import { List } from '../components/jobList.stories';

export default {
  ...getParams({ page: true }),
  title: 'Pages/Job List',
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  ...List?.args,
  detailUrl: {
    default: hrefTo('Pages/Jobs', ''),
    en: hrefTo('Pages/Jobs', ''),
  },
};

export const JobList = Template.bind({});

JobList.args = {
  ...baseArgs,
};
