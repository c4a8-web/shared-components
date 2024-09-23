import CardComponent from '../../components/card';
import { BlogPost } from '../components/card.stories';
import EventTeaserComponent from '../../components/event-teaser';
import { EventTeaserWebcast } from '../components/eventTeaser.stories';

export default {
  title: 'Context/Teaser',
};

export const Card = (args) => ({
  components: { CardComponent },
  setup() {
    return { args };
  },
  template: '<CardComponent v-bind="args" />',
});

Card.args = {
  ...BlogPost?.args,
};

export const EventTeaser = (args) => ({
  components: { EventTeaserComponent },
  setup() {
    return { args };
  },
  template: '<EventTeaserComponent v-bind="args" />',
});

EventTeaser.args = {
  ...EventTeaserWebcast?.args,
};
