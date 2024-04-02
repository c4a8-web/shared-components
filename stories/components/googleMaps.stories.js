import { getDefaultSettings } from '../../.storybook/templates';
import { includesgooglemapshtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {
      address: {
        description: 'Contains Information like (Name/Street/Postal Code/City)',
        type: 'object',
      },
      coords: {
        description: 'Coordinates split into Latitude and Longitude',
        type: 'object',
      },
      marker: {
        description: 'Coordinates split into Latitude and Longitude for the marker',
        type: 'object',
      },
      headline: {
        description: 'Headline for the Google Map Component',
        type: 'object',
      },
    },
  }),
  title: 'Components/Google Maps',
};

const baseArgs = {
  headline: {
    text: 'Hier sind wir',
    level: 'h3',
  },
  coords: {
    latitude: '50.10343087097074',
    longitude: '8.760059035466721',
  },
  marker: {
    latitude: '50.10343087097074',
    longitude: '8.760059035466721',
  },
  address: {
    name: 'glueckkanja AG',
    street: 'Kaiserstraße 39',
    postalCode: '63065',
    city: 'Offenbach am Main',
  },
};

export const GoogleMaps = {
  args: {
    ...baseArgs,
  },
};
