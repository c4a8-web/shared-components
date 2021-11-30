import { createComponent } from '../../.storybook/templates';
import { includesjoblisthtml as jobListTemplate } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Job/List',
};

const Template = (args) => createComponent(args, jobListTemplate);

const baseArgs = {
  clientName: 'glueckkanja',
  headline: {
    level: 'h2',
    text: 'Offene Stellen',
  },
};

export const List = Template.bind({});

List.args = {
  ...baseArgs,
};

export const ListLimit = Template.bind({});

ListLimit.args = {
  ...baseArgs,
  maxItems: 4,
  expandText: 'Weitere Stellenanzeigen',
};

export const FilteredList = Template.bind({});

FilteredList.args = {
  ...baseArgs,
};
