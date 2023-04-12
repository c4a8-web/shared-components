import { createComponent, getTitle } from '../../.storybook/templates';
import { includesvideoframehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Video Frame',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
};

export const Container = Template.bind({});

Container.args = {
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
  container: true,
};

export const CornerImg = Template.bind({});

CornerImg.args = {
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
  container: true,
  corner: {
    img: 'shared-components/teaser-dekra.png',
    cloudinary: true,
    alt: 'Video Casestudy Uniper',
  },
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  thumb: 'shared-components/teaser-dekra.png',
  alt: 'Video Casestudy Uniper',
  id: 'ThxpyUOz2R8',
  fullWidth: true,
  headline: {
    text: 'Himmelsstürmer gesucht: <br/> glueckkanja-gab sucht Verstärkung',
    color: 'var(--color-white)',
    alignment: 'text-center', // text-right, text-left
  },
};
