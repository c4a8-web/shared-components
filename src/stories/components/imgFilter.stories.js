import ImgFilterComponent from "../../components/img-filter";

export default {
  component: ImgFilterComponent,
  argTypes: {},
  title: "Components/Img Filter",
};

export const Default = {
  args: {
    img: getAssetPath("svg/icons/icon-hand.svg"),
    alt: "lorem ipsum dolor sit amet, consectetur adipis",
  },
};
