import { createComponent, getTitle } from '../../.storybook/templates';
import { includessuccessstoryhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Success Story',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Videos = Template.bind({});

Videos.args = {
  successStory: {
    bgColor: '#5cbbff',
    headline: 'Leuchtturmprojekte',
    subline:
      'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
    videos: [
      {
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        id: 'hV97zDTlDko',
        headline: 'Franz Haniel verlässt sich auf glueckkanja',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
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
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.',
      },
    ],
  },
};

export const NoVideo = Template.bind({});

NoVideo.args = {
  successStory: {
    bgColor: '#5cbbff',
    headline: 'Leuchtturmprojekte',
    subline:
      'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
    videos: [
      {
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        headline: 'Franz Haniel verlässt sich auf glueckkanja',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
      },
      {
        ctaText: 'Button',
        ctaHref: '',
        type: 'button',
        target: '_blank',
        thumb: 'thumbs/video-thumb-uniper.jpg',
        alt: 'Video Casestudy Uniper',
        headline: 'Uniper setzt auf M365 und CSOC',
        logo: 'c_lpad,h_100,w_180/logos/cust-uniper.png',
        logoAlt: 'alt logo',
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.',
      },
    ],
  },
};

export const Slider = Template.bind({});

Slider.args = {
  successStory: {
    bgColor: '#5cbbff',
    headline: 'Leuchtturmprojekte',
    headlineClasses: 'h3-font-size',
    subline:
      'In Zusammenarbeit mit Microsoft sind verschiedene Video Casestudies im Rahmen unseres ’100% Cloud’ Blueprints entstanden. Erfahren Sie mehr über die glueckkanja Erfolgsgeschichten aus der Energiewirtschaft, Logistik und Bildung.',
    videos: [
      {
        thumb: 'thumbs/video-thumb-haniel.jpg',
        alt: 'Video Casestudy Franz Haniel',
        id: 'hV97zDTlDko',
        headline: 'Franz Haniel verlässt sich auf glueckkanja',
        logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
        logoAlt: 'Franz Haniel',
        text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
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
        text: 'Mit der Einführung von Microsoft 365 und anderen Services des preisgekrönten Partners glueckkanja veränderte Uniper seine Arbeitsplatzkultur und optimierte die Zusammenarbeit und Sicherheit im gesamten Unternehmen.',
      },
      {
        thumb: 'thumbs/video-thumb-fuchs.jpg',
        alt: 'Video Casestudy FUCHS PETROLUB',
        id: 'U2ExmypuUvs',
        headline: 'Modernes und sicheres Arbeiten in der Microsoft Cloud',
        logo: '/c_lpad,h_70,w_180/logos/cust-fuchs.svg',
        logoAlt: 'alt logo',
        text: 'glueckkanja hat den führenden Schmierstoffhersteller FUCHS PETROLUB SE dabei unterstützt, seinen Mitarbeitern einen modernen und sicheren Abeitsplatz mit Azure Virtual Desktop zur Verfügung zu stellen. Somit kann auch in Krisenzeiten aus dem Home Office aus ein reibungsloser Geschäftsbetrieb aufrecht erhalten und sicher gestellt werden.',
      },
      {
        thumb: 'thumbs/video-thumb-wvd-webcast.jpg',
        alt: 'Video Casestudy Uniper',
        id: 'j1-grXIZt8M',
        headline: 'Sicherer Remote-Zugriff auf alle Anwendungen mit Azure Virtual Desktop',
        text: 'Mit Azure Virtual Desktop leitet Microsoft ein neues Zeitalter für Virtualisierungs-Services ein. Mit diesem Cloud-Service können virtuelle Desktop-Umgebungen und Anwendungen auf Microsoft Azure innerhalb kürzester Zeit eingerichtet und auf jedem beliebigen Gerät bereitgestellt werden. Aktuelle Sicherheits- und Compliance-Richtlinien werden dabei eingehalten.',
      },
    ],
  },
};
