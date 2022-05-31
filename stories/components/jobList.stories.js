import { createComponent, hrefTo, getTitle } from '../../.storybook/templates';
import { includesjoblisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Job/List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  clientName: 'glueckkanja',
  headlineText: 'Offene Stellen',
  headlineLevel: 'h2',
  sublineText:
    'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in',
  detailUrl: {
    default: hrefTo('Components/Job/Detail', 'De'),
    en: hrefTo('Components/Job/Detail', 'En'),
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
  sublineText: null,
};

export const ListFilteredById = Template.bind({});

ListFilteredById.args = {
  ...baseArgs,
  headlineText: 'Einzelne Stellenausschreibung mit Id',
  jobId: 'fk0sjp7',
  apiUrl: 'mock/job.json',
};

export const ListFilteredByTags = Template.bind({});

ListFilteredByTags.args = {
  ...baseArgs,
  headlineText: 'Offene UX + Dev Stellen',
  tags: 'dev,ux',
  apiUrl: 'mock/jobList.json',
};

export const ListFilteredByTeam = Template.bind({});

ListFilteredByTeam.args = {
  ...baseArgs,
  headlineText: 'Offene Stellen in Team 1',
  team: 'team 1',
  apiUrl: 'mock/jobList.json',
};

export const ListFilteredByLang = Template.bind({});

ListFilteredByLang.args = {
  ...baseArgs,
  headlineText: 'English Jobs',
  lang: 'en',
  apiUrl: 'mock/jobListEn.json',
};
