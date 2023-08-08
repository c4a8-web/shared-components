import { createComponent, getTitle } from '../../.storybook/templates';
import { includesfeaturelisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Feature List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const FeatureList = Template.bind({});

FeatureList.args = {
  items: [
    {
      icon: 'close',
      iconSize: 'medium',
      bullet: '<span> Lorem Ipsum 1 </span>',
    },
    {
      icon: 'close',
      iconSize: 'medium',
      bullet: '<span> Lorem Ipsum 2 </span>',
    },
    {
      icon: 'plus',
      iconSize: 'medium',
      bullet: '<span> Lorem Ipsum 3 </span>',
    },
    {
      icon: 'minus',
      iconSize: 'medium',
      bullet: '<span> Lorem Ipsum 4 </span>',
    },
  ],
};
