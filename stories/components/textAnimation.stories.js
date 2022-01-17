import { createComponent, getTitle } from '../../.storybook/templates';
import { includestextanimationhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Text Animation',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TextAnimation = Template.bind({});

TextAnimation.args = {
  sequence: [
    {
      text: 'Hey',
      textSize: 'h1-font-size',
    },
    {
      text: 'Wo bin ich denn hier gelandet?',
      textSize: 'h2-font-size',
    },
    {
      text: 'Da, wo eine neue Welt entsteht',
      textSize: 'h2-font-size',
    },
    {
      text: 'Hey',
      textSize: 'h2-font-size',
      subline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerit non proident.',
      sublineSize: 'font-size-2',
    },
  ],
};
