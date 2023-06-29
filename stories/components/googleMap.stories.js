import { createComponent, getTitle } from '../../.storybook/templates';
import { includesgooglemaphtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Google Map',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const GoogleMap = Template.bind({});

GoogleMap.args = {
  coordinates: [50.10343087097074, 8.760059035466721],
  contact: {
    phone: '+49 123456789',
    email: 'loremipsum@yahoo.com',
  }
};

