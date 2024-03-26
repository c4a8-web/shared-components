import { createTemplate } from '../../.storybook/templates';
import eventsTemplate from '!!raw-loader!./events.html';
import { EventList } from '../components/eventList.stories';

export default {
  title: 'Pages/Events',
};

const baseArgs = {
  ...EventList?.args,
};

const Template = (args) => createTemplate(args, eventsTemplate);

export const Events = Template.bind({});

Events.args = {
  ...baseArgs,
};
