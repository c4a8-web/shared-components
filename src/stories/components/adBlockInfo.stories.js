import AdBlockInfoTemplate from "../../components/ad-block-info";

export default {
  component: AdBlockInfoTemplate,
  argTypes: {
    text: {
      description: "The Text of the Ad Block Info",
      type: "string",
    },
    show: {
      description: "Initializes the Modal with Ad Block Info",
      type: "boolean",
    },
  },
  title: "Components/Ad Block Info",
  args: {
    show: true,
    text: "<h3>AdBlocker Info</h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
};
