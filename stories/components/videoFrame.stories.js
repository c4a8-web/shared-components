import { createComponent, getTitle } from '../../.storybook/templates';
import { includesvideoframehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Video Frame',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const VideoFrame = Template.bind({});

VideoFrame.args = {
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
};

export const VideoFrameWrapped = Template.bind({});

VideoFrameWrapped.args = {
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
  wrap: true,
};
