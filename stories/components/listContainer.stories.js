import { createComponent, getTitle, getComponentInnerHtmlList, getAssetPath } from '../../.storybook/templates';
import listContainerTemplate from '!!raw-loader!./list-container.html';
import { includesfaqhtml, includestextimagehtml } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'List Container',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, listContainerTemplate);

const defaultTextImageEntry = {
  animation: true,
  offset: true,
  spacing: 'space-top-lg-2',
  image: getAssetPath('svg/icons/flexibilitaet.svg'),
  alt: 'lorem ipsum dolor sit',
  headline: 'lorem ipsum dolor sit 1',
  copy: 'lorem ipsum dolor sit amore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam non',
};

export const TextImage = Template.bind({});

TextImage.args = {
  level: 'h3',
  headline: 'Lorem ipsum dolor sit amet, consectet',
  headlineColor: 'var(--color-white)',
  headlineSticky: true,
  bgColor: 'var(--color-career-background)',
  content: getComponentInnerHtmlList(
    [
      {
        ...defaultTextImageEntry,
        index: 1,
      },
      {
        ...defaultTextImageEntry,
        left: true,
        headline: 'lorem ipsum dolor sit 2',
        index: 2,
      },
      {
        ...defaultTextImageEntry,
        headline: 'lorem ipsum dolor sit 3',
        index: 3,
      },
      {
        ...defaultTextImageEntry,
        left: true,
        headline: 'lorem ipsum dolor sit 4',
        index: 4,
      },
      {
        ...defaultTextImageEntry,
        headline: 'lorem ipsum dolor sit 5',
        index: 5,
      },
    ],
    includestextimagehtml
  ),
};

export const FaqList = Template.bind({});

FaqList.args = {
  headline: 'Lorem ipsum dolor sit amet, consectet',
  spacing: 'space-top-3 space-bottom-3',
  content: getComponentInnerHtmlList(
    [
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
    ],
    includesfaqhtml
  ),
};
