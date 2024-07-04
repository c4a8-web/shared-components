import { createTemplate, getParams } from '../../.storybook/templates';
import azureTemplate from '!!raw-loader!./azure.html';
import { LottieFullscreen } from '../components/hero.stories';
import { HeaderLight } from '../components/header.stories';

export default {
  ...getParams({ page: true }),
  title: 'Pages/Azure',
};

const Template = (args) => createTemplate(args, azureTemplate);

const baseArgs = {
  // firstTeaser: {
  //   ...Right?.args,
  // },
  ...HeaderLight.args,
  ...LottieFullscreen.args,
  blendMode: false,
};

export const Azure = Template.bind({});

Azure.args = {
  ...baseArgs,
};
