import { createComponent, getTitle } from '../../.storybook/templates';
import adBlockInfoTemplate from '!!raw-loader!./adBlockInfo.html';

const options = getTitle({
  title: 'Ad Block Info',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, adBlockInfoTemplate);

export const CustomText = Template.bind({});

// TODO find a way to just trigger this when adblock is enabled on

CustomText.args = {
  show: true,
  text: '<h3>AdBlocker Info</h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
};

export const DefaultText = Template.bind({});

DefaultText.args = {
  show: true,
};
