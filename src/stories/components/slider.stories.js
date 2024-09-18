import SliderComponent from "../../components/slider";

const sliderPlaceholders = `
  <div class="image-list vue">
    <div class="image-list__item is--desktop">
      <img src="img/unified-contacts-pro-desk.svg" />
    </div>
    <div class="image-list__item is--mobile">
      <img src="img/unified-contacts-pro-mob.svg" />
    </div>
  </div>
  <div class="image-list vue">
    <div class="image-list__item is--desktop">
      <img src="img/unified-contacts-free-desk.svg" />
    </div>
    <div class="image-list__item is--mobile">
      <img src="img/unified-contacts-free-mob.svg" />
    </div>
  </div>
`;

export default {
  title: "Components/Slider",
  component: SliderComponent,
};

export const Slider = {
  args: {
    content: sliderPlaceholders,
    headline: "Architecture Pro vs. Free",
    headlineLevel: "h3",
  },
};

export const NoBackground = {
  args: {
    content: sliderPlaceholders,
    headline: "Architecture Pro vs. Free",
    headlineLevel: "h3",
    hideBackground: true,
  },
};
