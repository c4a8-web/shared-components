import { createComponent, hrefTo } from '../../.storybook/templates';
import { includesjoblisthtml as component } from '../../.storybook/generatedIncludes';

// TODO fix hrefTo

export default {
  title: 'Components/Job/List',
};

const Template = (args) => createComponent(args, component);

const baseArgs = {
  clientName: 'c4a8',
  headlineText: 'Offene Stellen',
  headlineLevel: 'h2',
  sublineText:
    'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in',
  detailUrl: {
    default: hrefTo('Components/Job/Detail', 'De'),
    en: hrefTo('Components/Job/Detail', 'En'),
  },
  lang: 'de',
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
  jobId: '1327578',
  apiUrl: 'mock/jobList.xml',
};

export const ListFilteredByTags = Template.bind({});

ListFilteredByTags.args = {
  ...baseArgs,
  headlineText: 'Offene Microsoft Azure + Trainee Stellen',
  tags: 'MicroSoft Azure,trainee',
  apiUrl: 'mock/jobList.xml',
};

export const ListFilteredByTeam = Template.bind({});

ListFilteredByTeam.args = {
  ...baseArgs,
  headlineText: 'Offene Stellen in Team 1',
  team: 'Projects & Account Management',
  apiUrl: 'mock/jobList.xml',
};

export const ListFilteredByLang = Template.bind({});

ListFilteredByLang.args = {
  ...baseArgs,
  headlineText: 'English Jobs',
  lang: 'en',
};
