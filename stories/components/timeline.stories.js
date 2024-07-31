import { createComponent } from '../../.storybook/templates';
import timelineTemplate from '!!raw-loader!./timeline.html';

export default {
  title: 'Components/Timeline',
};

const Template = (args) => createComponent(args, timelineTemplate);

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

export const Simple = Template.bind({});

Simple.args = {
  simple: true,
  headline: {
    text: 'Lorem was sie erwartet',
    level: 'h3',
  },
  entries: [
    {
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
    {
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
    {
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
    {
      title: 'Title 4',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
  ],
};

export const SimpleWithSubline = Template.bind({});

SimpleWithSubline.args = {
  simple: true,
  headline: {
    text: 'Lorem was sie erwartet',
    level: 'h3',
  },
  subline: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
  entries: [
    {
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
    {
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
    {
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet, consectet',
    },
  ],
};
