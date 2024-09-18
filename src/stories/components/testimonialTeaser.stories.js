import TestimonialTeaser from "../../components/testimonial-teaser";

export default {
  title: "Components/Testimonial Teaser",
  component: TestimonialTeaser,
};

export const TwoLines = {
  args: {
    href: "javascript:void(0)",
    name: "Matti Puolitaival",
    title: "Senior Consultant Azure",
    img: {
      img: "people/testimonials/matti-puolitaival.png",
      alt: "lorem ipsum",
    },
  },
};

export const OneLine = {
  args: {
    href: "javascript:void(0)",
    name: "Matti",
    title: "Senior Consultant Azure",
    img: {
      img: "people/testimonials/matti-puolitaival.png",
      alt: "lorem ipsum",
    },
  },
};

export const titleMaxLength = {
  args: {
    titleTruncate: 40,
    aspectRatio: "4x3",
    href: "javascript:void(0)",
    name: "Matti",
    title:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua",
    img: {
      img: "people/testimonials/matti-puolitaival.png",
      alt: "lorem ipsum",
    },
  },
};

export const FourByThree = {
  args: {
    aspectRatio: "4x3",
    href: "javascript:void(0)",
    name: "Matti",
    title: "Senior Consultant Azure",
    img: {
      img: "people/testimonials/matti-puolitaival.png",
      alt: "lorem ipsum",
    },
  },
};

export const CornerImg = {
  args: {
    href: "javascript:void(0)",
    name: "Matti Puolitaival",
    title: "Senior Consultant Azure",
    bgColor: "var(--color-blue-dark)",
    bgColorHover: "var(--color-black)",
    cornerImg: {
      img: "people/testimonials/matti-puolitaival.png",
      alt: "map",
      cloudinary: true,
      position: "right",
    },
    img: {
      img: "people/testimonials/matti-puolitaival.png",
      alt: "lorem ipsum",
    },
  },
};
