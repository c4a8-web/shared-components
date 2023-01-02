import { createComponent, getTitle } from '../../.storybook/templates';
import { includesproductslidehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Product Slide',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ProductSlide = Template.bind({});

ProductSlide.args = {
  slider: true,
  headline: 'Lorem Ipsum',
  level: 'h2',
  products: [
    {
      infos: [
        {
          title: 'Tenant',
          subpoints: [
            {
              icon: 'plus',
              subpoint: 'Lorem Ipsum',
            },
            {
              icon: 'plus',
              subpoint: 'Lorem Ipsum',
            },
          ],
        },
        {
          title: 'Contact',
          subpoints: [
            {
              icon: 'minus',
              subpoint: 'Lorem Ipsum 2',
            },
          ],
        },
        {
          title: 'Other',
          subpoints: [
            {
              icon: 'plus',
              subpoint: 'Lorem Ipsum',
            },
          ],
        },
      ],
    },
    {
      infos: [
        {
          title: 'Tenant',
          subpoints: [
            {
              icon: 'plus',
              subpoint: 'Lorem Ipsum',
            },
            {
              icon: 'plus',
              subpoint: 'Lorem Ipsum',
            },
          ],
        },
        {
          title: 'Contact',
          subpoints: [
            {
              icon: 'minus',
              subpoint: 'Lorem Ipsum 2',
            },
          ],
        },
        {
          title: 'Other',
          subpoints: [
            {
              icon: 'plus',
              subpoint: 'Lorem Ipsum',
            },
          ],
        },
      ],
    },
  ],
};
