import LottieComponent from "../../components/lottie";
import lottie1 from "../data/lottie1.json";

export default {
  component: LottieComponent,
  argTypes: {},
  title: "Components/Lottie",
};

export const DimensionsAndBackground = {
  args: {
    width: 600,
    height: 600,
    data: lottie1,
    background: "#aaaaaa",
  },
};

export const NoDimensions = {
  args: {
    data: lottie1,
  },
};
