import { createComponent } from '../../.storybook/templates';
import { includescardhtml as cardComponent } from '../../.storybook/generatedIncludes';
import { BlogPost } from '../components/card.stories';
import { includeseventteaserhtml as eventTeaserComponent } from '../../.storybook/generatedIncludes';
import { EventTeaserWebcast } from '../components/eventTeaser.stories';

export default {
  title: 'Context/Teaser',
};

const CardTemplate = (args) => createComponent(args, cardComponent);

export const Card = CardTemplate.bind({});

Card.args = {
  ...BlogPost?.args,
};

const EventTeaserTemplate = (args) => createComponent(args, eventTeaserComponent);

export const EventTeaser = EventTeaserTemplate.bind({});

EventTeaser.args = {
  ...EventTeaserWebcast?.args,
};
