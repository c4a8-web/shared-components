import { createComponent, hrefTo, getTitle } from '../../.storybook/templates';
import { includesjoblisthtml as jobListTemplate } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Career',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, jobListTemplate, 'headline');

const baseArgs = {
  clientName: 'glueckkanja',
  headlineText: 'Offene Stellen',
  headlineLevel: 'h2',
  sublineText:
    'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in',
  detailUrl: hrefTo('Pages/Jobs', ''),
};

export const Career = Template.bind({});

Career.args = {
  ...baseArgs,
};
