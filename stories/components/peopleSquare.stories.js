import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import { includespeoplesquarehtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'People Square',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ThreeByThree = Template.bind({});

ThreeByThree.args = {
  grid: [
    {
      img: {
        src: getAssetPath('img/image-placeholder-1.jpg'),
      },
      start: 1,
      end: 2,
    },
    {
      number: 410,
      text: 'Kunden',
      shape: {
        src: getAssetPath('../svg/shapes/shape-career-3.svg'),
      },
    },
    {
      shape: {
        src: getAssetPath('./svg/shapes/shape-career-2.svg'),
      },
    },
    {
      img: {
        src: 'img/image-placeholder-2.jpg',
      },
    },
    {
      color: 'var(--color-primary-accent)',
      number: 140,
      text: 'Mitarbeiter',
    },
    {
      img: {
        src: 'img/image-placeholder-3.jpg',
      },
    },
    {
      shape: {
        src: 'svg/shapes/shape-career-4.svg',
      },
    },
    {
      img: {
        src: 'img/image-placeholder-4.jpg',
      },
    },
  ],
};

export const TwoByTwo = Template.bind({});

TwoByTwo.args = {
  absolute: true,
  width: 2,
  height: 2,
  grid: [
    {
      number: 410,
      text: 'Kunden',
      shape: {
        src: './svg/shapes/shape-career-3.svg',
      },
    },
    {
      img: {
        src: 'img/image-placeholder-2.jpg',
      },
    },
    {
      img: {
        src: 'img/image-placeholder-4.jpg',
      },
    },
    {
      color: 'var(--color-yellow)',
      number: 140,
      text: 'Mitarbeiter',
    },
  ],
};
