import ModalComponent from "../../components/modal";

export default {
  title: "Components/Modal",
  component: ModalComponent,
};

export const Default = {
  args: {
    show: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
};

export const Slim = {
  args: {
    show: true,
    slim: true,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
};
