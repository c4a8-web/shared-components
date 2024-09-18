import VideoFrame from "../../components/video-frame";

export default {
  title: "Components/Video Frame",
  component: VideoFrame,
};

export const Default = {
  args: {
    thumb: "shared-components/teaser-dekra.png",
    alt: "Video Casestudy Uniper",
    id: "ThxpyUOz2R8",
  },
};

export const Container = {
  args: {
    thumb: "shared-components/teaser-dekra.png",
    alt: "Video Casestudy Uniper",
    id: "ThxpyUOz2R8",
    container: true,
  },
};

export const CornerImg = {
  args: {
    thumb: "shared-components/teaser-dekra.png",
    alt: "Video Casestudy Uniper",
    id: "ThxpyUOz2R8",
    container: true,
    corner: {
      img: "shared-components/teaser-dekra.png",
      cloudinary: true,
      alt: "Video Casestudy Uniper",
    },
  },
};

export const FullWidth = {
  args: {
    thumb: "thumbs/career-corporate-video.png",
    alt: "Video Casestudy Uniper",
    id: "ThxpyUOz2R8",
    fullWidth: true,
    headline: {
      text: "Himmelsstürmer gesucht: <br/> glueckkanja sucht Verstärkung",
      color: "--color-white",
      alignment: "text-center", // text-right, text-left
    },
  },
};
