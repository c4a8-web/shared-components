import { createComponent, getTitle } from '../../.storybook/templates';
import { includesblogrecenthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog Recent',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const BlogRecent = Template.bind({});

BlogRecent.args = {
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
};

export const BlogRecentSubline = Template.bind({});

BlogRecentSubline.args = {
  limit: 21,
  headline: 'lorem ipsum headline',
  subline: 'lorem ipsum subline lorem ipsum lorem ipsum lorem ipsum',
  slider: true,
};

export const BlogRecentHeadline = Template.bind({});

BlogRecentHeadline.args = {
  limit: 21,
  headline: 'lorem ipsum headline',
  level: 'h2',
  headlineClasses: 'text-white',
  slider: true,
  bgColor: 'var(--color-gigas)',
};

export const Events = Template.bind({});

Events.args = {
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
  events: true,
  cta: {
    text: 'Primary Button',
    href: 'https://www.youtube.com/watch?v=m2pa27Hv8K0',
    skin: 'primary',
    button: true,
    external: true,
  },
};

export const EventsReversed = Template.bind({});

EventsReversed.args = {
  reversed: true,
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
  events: true,
  cta: {
    text: 'Primary Button Internal',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    external: false,
  },
};

export const CaseStudies = Template.bind({});

CaseStudies.args = {
  limit: 21,
  limitCaseStudies: 5,
  headline: 'lorem ipsum headline',
  slider: true,
  caseStudies: true,
};

export const HideContainer = Template.bind({});

HideContainer.args = {
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: false,
  hideContainer: true,
};

export const Combined = Template.bind({});

Combined.args = {
  limit: 21,
  limitEvents: 2,
  headline: 'lorem ipsum headline',
  slider: true,
  combine: true,
};
