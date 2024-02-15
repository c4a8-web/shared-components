import { createStory, getArgTypes, getTitle } from '../../.storybook/templates';
import { includesblogrecenthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Blog Recent',
});

export default getArgTypes({
  ...options,
  argTypes: {
    limit: {
      description: 'Amount of visible Words in a Post Preview',
      type: 'number',
    },
    headline: {
      description: 'Headline of the Component',
      type: 'string',
    },
    subline: {
      description: 'Subline of the Component',
      type: 'string',
    },
    level: {
      description: 'Headline Level',
      type: 'string',
    },
    headlineClasses: {
      description: 'Headline Classes',
      type: 'string',
    },
    sublineClasses: {
      description: 'Subline Classes',
      type: 'string',
    },
    spacing: {
      description: 'Component Spacing',
      type: 'string',
    },
    slider: {
      description: 'Enables Slider',
      type: 'boolean',
    },
    bgColor: {
      description: 'Sets Background Color',
      type: 'string',
    },
    cta: {
      description: 'Cta Object',
      type: 'object',
    },
    caseStudies: {
      description: 'Filters for Casestudies',
      type: 'boolean',
    },
    events: {
      description: 'Filters for Events',
      type: 'boolean',
    },
    combine: {
      description: 'Combines different types of Blogs',
      type: 'boolean',
    },
    limitCaseStudies: {
      description: 'Limits the Amount of Casestudies in Blog Recent',
      type: 'number',
    },
    limitEvents: {
      description: 'Limits the Amount of Events in Blog Recent',
      type: 'number',
    },
    hideContainer: {
      description: 'Places Blogs in a grid form',
      type: 'boolean',
    },
    sticky: {
      description: 'Enables Sticky Feature for Component',
      type: 'boolean',
    },
    tag: {
      description: 'Filters for certain Tags',
      type: 'string',
    },
  },
});

export const BlogRecent = createStory(component, {
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
});

export const BlogRecentSubline = createStory(component, {
  limit: 21,
  headline: 'lorem ipsum headline',
  subline: 'lorem ipsum subline lorem ipsum lorem ipsum lorem ipsum',
  slider: true,
});

export const BlogRecentHeadline = createStory(component, {
  limit: 21,
  headline: 'lorem ipsum headline',
  level: 'h2',
  headlineClasses: 'text-white',
  slider: true,
  bgColor: 'var(--color-gigas)',
});

export const Events = createStory(component, {
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
});

export const EventsReversed = createStory(component, {
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
});

export const CaseStudies = createStory(component, {
  limit: 21,
  limitCaseStudies: 5,
  headline: 'lorem ipsum headline',
  slider: true,
  caseStudies: true,
});

export const HideContainer = createStory(component, {
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: false,
  hideContainer: true,
});

export const Combined = createStory(component, {
  limit: 21,
  limitEvents: 2,
  headline: 'lorem ipsum headline',
  slider: true,
  combine: true,
});
