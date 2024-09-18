import ImgComponent from "../../components/img";
import lottie1 from "../data/lottie1.json";

export default {
  title: "Components/Img",
  component: ImgComponent,
  args: {
    alt: "Image Alt Text",
  },
};

export const Img = {
  args: {
    alt: "Image Alt Text",
    img: "img/image-placeholder-1.jpg",
  },
};

export const ImgCloudinary = {
  args: {
    alt: "Image Alt Text",
    img: "career/remote-working.jpg",
    cloudinary: true,
  },
};

export const ImgSrcSet = {
  args: {
    alt: "Image Alt Text",
    img: "career/remote-working.jpg",
    cloudinary: true,
    preset: "cardSmall",
    imgSrcSets: {
      cardSmall: [
        {
          src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_200/v1/sample.jpg",
          width: 200,
        },
        {
          src: "https://res.cloudinary.com/demo/image/upload/c_scale,w_400/v1/sample.jpg",
          width: 400,
        },
      ],
    },
  },
};

export const Lottie = {
  args: {
    alt: "Image Alt Text",
    lottie: lottie1,
    lottieSettings: {
      width: "200px",
    },
  },
};
