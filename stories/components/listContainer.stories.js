import { createComponent, getTitle, getComponentInnerHtml } from '../../.storybook/templates';
import listContainerTemplate from '!!raw-loader!./list-container.html';
import { includesfaqhtml } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'List Container',
});

export default {
  ...options,
};

const FaqEntry1 = getComponentInnerHtml(
  {
    headline: {
      text: 'FAQs 5 Entries',
      level: 'h3',
    },
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
  includesfaqhtml
);

const FaqEntry2 = getComponentInnerHtml(
  {
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
  includesfaqhtml
);

const FaqEntry3 = getComponentInnerHtml(
  {
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
  includesfaqhtml
);

const FaqContent = FaqEntry1 + FaqEntry2 + FaqEntry3;

const Template = (args) => createComponent(args, listContainerTemplate);

export const Benefits = Template.bind({});

Benefits.args = {
  level: 'h3',
  headline: 'Wo das Glück im Namen steckt.',
  headlineColor: 'var(--color-white)',
  headlineSticky: true,
  bgColor: 'var(--color-career-background)',
  content: 'get content for benefits',
};

export const FaqList = Template.bind({});

FaqList.args = {
  headline: 'Lorem ipsum dolor sit amet, consectet',
  spacing: 'space-top-3 space-bottom-3',
  content: FaqContent,
};
