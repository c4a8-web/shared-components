import VideoFrame from '../components/video-frame';

export default {
  title: 'Components/Video Frame',
  component: VideoFrame,
};

export const Default = {
  args: {
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
  },
};

export const Container = {
  args: {
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
    container: true,
  },
};

export const CornerImg = {
  args: {
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
    container: true,
    corner: {
      img: 'shared-components/teaser-dekra.png',
      cloudinary: true,
      alt: 'Video Casestudy Uniper',
    },
  },
};

export const CornerImgOffset = {
  args: {
    thumb: 'shared-components/teaser-dekra.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
    container: true,
    corner: {
      img: 'it-workaholics/it-workaholics-ransomware-hero-bg.webp',
      cloudinary: true,
      alt: 'Lorem ipsum',
      topOverflow: true,
    },
  },
};

CornerImgOffset.decorators = [
  (story) => ({
    components: { story },
    template: `
        <div>
          <div style="height: 50vh;" class="dummy-content"></div>
          <story />
          <div style="height: 50vh;" class="dummy-content"></div>
        </div>
      `,
  }),
];

export const FullWidth = {
  args: {
    thumb: 'thumbs/career-corporate-video.png',
    alt: 'Video Casestudy Uniper',
    id: 'ThxpyUOz2R8',
    fullWidth: true,
    headline: {
      text: 'Himmelsstürmer gesucht: <br/> glueckkanja sucht Verstärkung',
      color: '--color-white',
      alignment: 'text-center', // text-right, text-left
    },
  },
};
