import SvgShape from '../../components/svg-shape.vue';

export default {
  title: 'Components/Svg Shape',
  component: SvgShape,
};

export const Yellow = {
  args: {
    color: 'var(--color-yellow)',
  },
};

export const Blue = {
  args: {
    color: 'var(--color-blue-medium)',
  },
};

export const PrimaryAccent = {
  args: {
    color: 'var(--color-primary-accent)',
    peak: 'left',
  },
};
