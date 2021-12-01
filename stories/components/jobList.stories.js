import { createComponent } from '../../.storybook/templates';
import { includesjoblisthtml as jobListTemplate } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Job/List',
};

const Template = (args) => createComponent(args, jobListTemplate, 'headline');

const baseArgs = {
  clientName: 'glueckkanja',
  headlineText: 'Offene Stellen',
  headlineLevel: 'h2',
  sublineText:
    'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in',
  detailUrl: '123',
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
  sublineText: null,
};

export const FilteredList = Template.bind({});

FilteredList.args = {
  ...baseArgs,
};
