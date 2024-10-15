import { getAssetPath } from '../../../.storybook/templates';
import ListContainer from '../../components/list-container.vue';

// TODO make sure you add the .html around the story as a decorator

export default {
  title: 'Components/List Container',
  component: ListContainer,
};

const defaultTextImageEntry = {
  animation: true,
  offset: true,
  spacing: 'space-top-lg-2',
  image: getAssetPath('svg/icons/flexibilitaet.svg'),
  alt: 'lorem ipsum dolor sit',
  copy: 'lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam non',
};

export const TextImage = (args) => ({
  components: { ListContainer },
  setup() {
    return { args };
  },
  template: `
    <list-container v-bind="args">
      <text-image :index="1" v-bind="args.textImageData1" />
      <text-image :index="2" v-bind="args.textImageData2" />
      <text-image :index="3" v-bind="args.textImageData3" />
      <text-image :index="4" v-bind="args.textImageData4" />
      <text-image :index="5" v-bind="args.textImageData5" />
    </list-container>
  `,
});

TextImage.args = {
  level: 'h3',
  headline: 'Lorem ipsum dolor sit amet, consectet',
  headlineColor: 'var(--color-white)',
  headlineSticky: true,
  bgColor: 'var(--color-career-background)',
  textImageData1: { ...defaultTextImageEntry, headlineText: 'lorem ipsum dolor sit 1' },
  textImageData2: { ...defaultTextImageEntry, left: true, headlineText: 'lorem ipsum dolor sit 2' },
  textImageData3: { ...defaultTextImageEntry, headlineText: 'lorem ipsum dolor sit 3' },
  textImageData4: { ...defaultTextImageEntry, left: true, headlineText: 'lorem ipsum dolor sit 4' },
  textImageData5: { ...defaultTextImageEntry, headlineText: 'lorem ipsum dolor sit 5' },
};

export const FaqList = (args) => ({
  components: { ListContainer },
  setup() {
    return { args };
  },
  template: `
    <list-container v-bind="args">
      <faq v-bind="args.faqData1" />
      <faq v-bind="args.faqData2" />
      <faq v-bind="args.faqData3" />
    </list-container>
  `,
});

FaqList.args = {
  headline: 'Lorem ipsum dolor sit amet, consectet',
  spacing: 'space-top-3 space-bottom-3',
  faqData1: {
    headline: { text: 'FAQs 5 Entries', level: 'h3' },
    entries: [
      {
        summary:
          'Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet Lorem ipsum dolor sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor sit amet',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
    ],
  },
  faqData2: {
    headline: {
      text: 'FAQs 3 Entries',
      level: 'h3',
    },
    entries: [
      {
        summary: 'sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor sit amet',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
    ],
  },
  faqData3: {
    headline: {
      text: 'FAQs 4 Entries',
      level: 'h3',
    },
    entries: [
      {
        summary: 'sit amet, consectet',
        text: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor sit amet',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
      {
        summary: 'Lorem ipsum dolor sit amet',
        text: '<p>Lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>',
      },
    ],
  },
};
