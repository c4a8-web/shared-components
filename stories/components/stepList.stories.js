import { createComponent, getTitle } from '../../.storybook/templates';
import { includessteplisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Step List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const StepList = Template.bind({});

StepList.args = {
  headline: {
    text: 'Unser Bewerbungsprozess',
    level: 'h3',
  },
  subline:
    'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
  list: [
    {
      title: 'Lorem ipsum dolor',
      content:
        'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie',
    },
    {
      title: 'Sit amet, consectet',
      content:
        'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.',
    },
    {
      title: 'Lorem ipsum dolor sit',
      content:
        'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie',
    },
  ],
};
