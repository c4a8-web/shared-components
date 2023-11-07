import { createComponent, getTitle } from '../../.storybook/templates';
import { includesgooglemaphtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Google Map',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const GoogleMap = Template.bind({});

GoogleMap.args = {
  location: {
    street: 'Kaiserstraße 39',
    city: '63065 Offenbach am Main',
    office: 'Hauptsitz',
    coordinates: [50.10343087097074, 8.760059035466721],
  },
  entries: [
    {
      icon: 'phone',
      headline: 'Rufen Sie uns an',
      subline: '+49 123456789',
    },
    {
      icon: 'email-action-unread',
      headline: 'Schreiben Sie uns',
      subline: 'loremipsum@yahoo.com',
    },
    {
      icon: 'pin',
      headline: 'Kommen Sie Vorbei',
      subline: 'Kaiserstraße 39 <br /> 63065 Offenbach am Main',
    },
    {
      icon: 'phone-charger',
      headline: 'Mit einem Elektrofahrzeug zu uns',
      subline: 'E-Tankstellen in unserer Tiefgarage',
    },
  ],
};
