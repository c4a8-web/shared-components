import { createComponent, getTitle } from '../../.storybook/templates';
import { includesintrotexthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Intro Text',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const IntroText = Template.bind({});

IntroText.args = {
  introText: "Lorem Ipsum Test Lorem Ipsum Test Lorem Ipsum Test",
  headline: "Test",
  copy: "Lorem Ipsum Test Lorem Ipsum Test Lorem Ipsum Test Lorem Ipsum Test Lorem Ipsum Test Lorem Ipsum Test"
  //spacing: 2
}
