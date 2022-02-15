import { createTemplate, getTitle } from '../../.storybook/templates';
import eventsTemplate from '!!raw-loader!./events.html';
import { EventList } from '../components/eventList.stories';

const options = getTitle({
  title: 'Events',
  page: true,
});

export default {
  ...options,
};

const baseArgs = {
  ...EventList?.args,
};

const Template = (args) => createTemplate(args, eventsTemplate);

export const Events = Template.bind({});

Events.args = {
  ...baseArgs,
};
