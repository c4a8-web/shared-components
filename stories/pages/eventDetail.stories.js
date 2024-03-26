import { createTemplate } from '../../.storybook/templates';
import eventDetailTemplate from '!!raw-loader!./event-detail.html';
import { EventDetail as EventDetailData } from '../components/eventDetail.stories';

export default {
  title: 'Pages/Event Detail',
};

const baseArgs = {
  ...EventDetailData?.args,
};

const Template = (args) => createTemplate(args, eventDetailTemplate);

export const EventDetail = Template.bind({});

EventDetail.args = {
  ...baseArgs,
};
