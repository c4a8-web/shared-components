import { getDefaultSettings } from '../../.storybook/templates';
import component from '!!raw-loader!./fabHint.html';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {},
  }),
  title: 'Components/Fab Hint',
};

export const Default = {
  args: {
    text: 'Slider: © lorem; Kacheln: 1: © lorem; 2: © Author - example.com - 123456789; 3: © Author - example.com - 123456789; 4: © example.com; CTA Jobs: © Author - example.com - 123456789; Kacheln: 1: © <a href="https://www.example.com/">https://www.example.com/</a>; 2: © lorem; 3: © <a href="https://www.example.com/">https://www.example.com/</a>; CTA: © Author - example.com - 123456789',
  },
};

export const BackgroundColor = {
  args: {
    bgColor: 'var(--color-orange)',
    iconColor: 'var(--color-white)',
    icon: 'world',
    title: 'Lorem ipsum dolor',
    text: 'Slider: © lorem; Kacheln: 1: © lorem; 2: © Author - example.com - 123456789; 3: © Author - example.com - 123456789; 4: © example.com; CTA Jobs: © Author - example.com - 123456789; Kacheln: 1: © <a href="https://www.example.com/">https://www.example.com/</a>; 2: © lorem; 3: © <a href="https://www.example.com/">https://www.example.com/</a>; CTA: © Author - example.com - 123456789',
  },
};
