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
  // tag=page.tags
  limit: 21,
  headline: 'lorem ipsum headline',
  slider: true,
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
    text: 'Primary Button',
    href: 'https://www.youtube.com/watch?v=zidlD8YZNL8',
    skin: 'primary',
    button: true,
    external: true,
  },
};

export const Combined = Template.bind({});

Combined.args = {
  // tag=page.tags
  limit: 21,
  limitEvents: 2,
  headline: 'lorem ipsum headline',
  slider: true,
  combine: true,
};
