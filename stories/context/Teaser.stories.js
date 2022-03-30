import { createComponent, getTitle } from '../../.storybook/templates';
import { includescardhtml as cardComponent } from '../../.storybook/generatedIncludes';
import { BlogPost } from '../components/card.stories';
import { includeseventteaserhtml as eventTeaserComponent } from '../../.storybook/generatedIncludes';
import { EventTeaserWebcast } from '../components/eventTeaser.stories';

const options = getTitle({
  title: 'Teaser',
  context: true,
});

export default {
  ...options,
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
