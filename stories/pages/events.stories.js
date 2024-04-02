import { createTemplate, getParams } from '../../.storybook/templates';
import eventsTemplate from '!!raw-loader!./events.html';
import { EventList } from '../components/eventList.stories';

export default {
  ...getParams({ page: true }),
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
