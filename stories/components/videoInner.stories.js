import { createComponent, getTitle } from '../../.storybook/templates';
import { includesvideoinnerhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Video Inner',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const VideoInner = Template.bind({});

VideoInner.args = {
  video: {
    thumb: 'thumbs/video-thumb-haniel.jpg',
    alt: 'Video Casestudy Franz Haniel',
    id: 'hV97zDTlDko',
    headline: 'Franz Haniel verlässt sich auf glueckkanja-gab',
    logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
    logoAlt: 'Franz Haniel',
    text: 'Mit Hilfe von glueckkanja-gab migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
  },
};

// export const VideoNoContent = Template.bind({});

// VideoNoContent.args = {
//   video: {
//     thumb: 'thumbs/video-thumb-haniel.jpg',
//     alt: 'Video Casestudy Franz Haniel',
//     id: 'hV97zDTlDko',
//     logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
//     logoAlt: 'Franz Haniel',
//   },
// };
