import { getDefaultSettings } from '../../.storybook/templates';
import { includesvideosliderhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
  }),
  title: 'Components/Video Slider',
};

export const VideoSlider = {
  decorators: [
    (Story) => {
      const storyElement = Story();
      const container = document.createElement('div');
      container.appendChild(storyElement);

      const spacer1 = document.createElement('div');
      spacer1.style.height = '100vh';
      spacer1.classList.add('dummy-content');
      container.appendChild(spacer1);

      const anchor = document.createElement('div');
      anchor.id = 'anchor';
      anchor.innerText = 'Sprungmarke';
      container.appendChild(anchor);

      const spacer2 = document.createElement('div');
      spacer2.style.height = '100vh';
      spacer2.classList.add('dummy-content');
      container.appendChild(spacer2);

      return container;
    },
  ],
  args: {
    headline: {
      text: 'Unsere Workaholics-Cases',
      level: 'h2',
    },
    subline: 'Erfahren Sie jetzt, wem wir schon alles helfen konnten!',
    tabs: [
      {
        label: 'Cloud',
        video: {
          thumb: 'thumbs/video-thumb-haniel.jpg',
          alt: 'lorem ipsum',
          id: 'hV97zDTlDko',
          headline: '„Die Kollegen lieben mich wieder!“',
          text: 'Diane T.',
        },
      },
      {
        label: 'Managed Workplace',
        video: {
          thumb: 'thumbs/video-thumb-haniel.jpg',
          alt: 'lorem ipsum',
          id: 'hV97zDTlDko',
          headline: '„Die Kollegen lieben mich wieder!“',
          text: 'Diane T.',
        },
      },
      {
        label: 'KI',
        video: {
          thumb: 'thumbs/video-thumb-haniel.jpg',
          alt: 'lorem ipsum',
          id: 'hV97zDTlDko',
          headline: '„Die Kollegen lieben mich wieder!“',
          text: 'Diane T.',
        },
      },
      {
        label: 'Ransomeware',
        video: {
          thumb: 'thumbs/video-thumb-haniel.jpg',
          alt: 'lorem ipsum',
          id: 'hV97zDTlDko',
          headline: '„Die Kollegen lieben mich wieder!“',
          text: 'Diane T.',
        },
      },
    ],
    cta: {
      text: 'Primary Link',
      href: '#anchor',
      link: true,
    },
  },
};
