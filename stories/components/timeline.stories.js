import { createComponent, getTitle } from '../../.storybook/templates';
import { includestimelinehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Timeline',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Timeline = Template.bind({});

Timeline.args = {
  headline: {
    text: 'Lorem was sie erwartet',
    level: 'h3',
  },
  entries: [
    'Initial Security Audit & Recommendations',
    'Roadmap Workshops',
    'Implementation of Security Solutions',
    'Initial Baselining',
    'Blueprint Matching',
  ],
};
