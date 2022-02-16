import { createTemplate, hrefTo, getTitle } from '../../.storybook/templates';
import careerTemplate from '!!raw-loader!./career.html';
import { List } from '../components/jobList.stories';
import { JobApplication } from '../components/textImage.stories';

const options = getTitle({
  title: 'Career',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createTemplate(args, careerTemplate);

const baseArgs = {
  ...List?.args,
  ...JobApplication?.args,
  detailUrl: {
    default: hrefTo('Pages/Jobs', ''),
    en: hrefTo('Pages/Jobs', ''),
  },
  maxItems: 4,
  expandText: 'Weitere Stellenanzeigen',
};

export const Career = Template.bind({});

Career.args = {
  ...baseArgs,
};
