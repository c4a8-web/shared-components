import { createComponent, hrefTo, getTitle } from '../../.storybook/templates';
import { includesjoblisthtml as component } from '../../.storybook/generatedIncludes';
import { List } from '../components/jobList.stories';

const options = getTitle({
  title: 'Job List',
  page: true,
});

export default {
  ...options,
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
