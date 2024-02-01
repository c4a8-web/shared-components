import { createComponent, getTitle, getDecorators, getArgTypes, createStory } from '../../.storybook/templates';
// import { includesadblockinfohtml as component } from '../../.storybook/generatedIncludes';
import adBlockInfoTemplate from '!!raw-loader!./adBlockInfo.html';

const Template = (args) => createComponent(args, adBlockInfoTemplate);

const options = getTitle({
  title: 'Ad Block Info',
});

export default getArgTypes({
  ...options,
  argTypes: {
    text: {
      description: 'The Text of the Ad Block Info',
      type: 'string',
    },
    show: {
      description: 'Initializes the Modal with Ad Block Info',
      type: 'boolean',
    },
  },
});

// TODO figure out why create story does not work here

export const CustomText = Template.bind({});

CustomText.args = {
  show: true,
  text: '<h3>AdBlocker Info</h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};

// export const CustomText = createStory(adBlockInfoTemplate, {
//   adBlockInfo: {
//     text: 'Lorem Ipsum',
//     show: true,
//   },
// });

// export const DefaultText = createStory(adBlockInfoTemplate, {
//   adBlockInfo: {
//     show: true,
//   },
// });

// TODO find a way to just trigger this when adblock is enabled on
// export const DefaultText = Template.bind({});

// DefaultText.args = {
//   show: true,
// };
