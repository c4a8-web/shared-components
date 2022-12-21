import { createComponent, getTitle } from '../../.storybook/templates';
import { includestimelinehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Timeline',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
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

export const Expanded = Template.bind({});

Expanded.args = {
  expanded: true,
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
