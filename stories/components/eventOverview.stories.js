import { createComponent, getTitle } from '../../.storybook/templates';
import { includeseventoverviewhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Event Overview',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const EventOverview = Template.bind({});

EventOverview.args = {};
