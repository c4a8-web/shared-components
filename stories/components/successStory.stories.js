import { createComponent, getTitle } from '../../.storybook/templates';
import { includessuccessstoryhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Success Story',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const SuccessStory = Template.bind({});

SuccessStory.args = {
  successStory: {
    bgColor: '#5cbbff',
    headline: 'Leuchtturmprojekte',
    subline:
      'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja-gab Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
    videos: [
      {
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        id: 'hV97zDTlDko',
        headline: 'Franz Haniel verlässt sich auf glueckkanja-gab',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja-gab migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
      },
      {
        ctaText: 'Button',
        ctaHref: '',
        type: 'button',
        target: '_blank',
        thumb: 'thumbs/video-thumb-uniper.jpg',
        alt: 'Video Casestudy Uniper',
        id: 'ThxpyUOz2R8',
        headline: 'Uniper setzt auf M365 und CSOC',
        logo: 'c_lpad,h_100,w_180/logos/cust-uniper.png',
        logoAlt: 'alt logo',
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja-gab veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.',
      },
    ],
  },
};
