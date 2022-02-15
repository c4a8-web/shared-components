import { createTemplate, getTitle } from '../../.storybook/templates';
import eventDetailTemplate from '!!raw-loader!./event-detail.html';
import { EventDetail as EventDetailData } from '../components/eventDetail.stories';

const options = getTitle({
  title: 'Event Detail',
  page: true,
});

export default {
  ...options,
};

const baseArgs = {
  ...EventDetailData?.args,
};

const Template = (args) => createTemplate(args, eventDetailTemplate);

export const EventDetail = Template.bind({});

EventDetail.args = {
  ...baseArgs,
};
