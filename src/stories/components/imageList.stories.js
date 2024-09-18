import { getAssetPath } from "../../../.storybook/templates";
import ImageListComponent from "../../components/image-list";

export default {
  component: ImageListComponent,
  title: "Helper/Image List",
};

export const ImageList = {
  args: {
    images: [
      {
        src: getAssetPath("img/unified-contacts-pro-desk.svg"),
        mobile: getAssetPath("img/unified-contacts-pro-mob.svg"),
        alt: "lorem ipsum",
      },
      {
        src: getAssetPath("img/unified-contacts-free-desk.svg"),
        mobile: getAssetPath("img/unified-contacts-free-mob.svg"),
        alt: "lorem ipsum",
      },
    ],
  },
};
