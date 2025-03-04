import VideoInnerComponent from '../components/video-inner.vue';

export default {
  title: 'Components/Video Inner',
  component: VideoInnerComponent,
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <div style="height: 20vh;" class="dummy-content"></div>
          <story />
          <div style="height: 100vh;" class="dummy-content"></div>
        </div>
      `,
    }),
  ],
};

export const VideoInner = {
  args: {
    video: {
      thumb: 'thumbs/video-thumb-haniel.jpg',
      alt: 'Video Casestudy Franz Haniel',
      id: 'hV97zDTlDko',
      headline: 'Franz Haniel verlässt sich auf glueckkanja',
      logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
      logoAlt: 'Franz Haniel',
      text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
    },
  },
};

export const VideoInnerPost = {
  args: {
    variant: 'post',
    video: {
      thumb: 'thumbs/video-thumb-haniel.jpg',
      alt: 'Video Casestudy Franz Haniel',
      id: 'hV97zDTlDko',
      headline: 'Franz Haniel verlässt sich auf glueckkanja',
      logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
      logoAlt: 'Franz Haniel',
      text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
    },
  },
};

export const VideoReversed = {
  args: {
    variant: 'reversed',
    video: {
      large: true,
      thumb: 'thumbs/video-thumb-haniel.jpg',
      alt: 'Video Casestudy Franz Haniel',
      id: 'hV97zDTlDko',
      headline: 'Franz Haniel verlässt sich auf glueckkanja',
      logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
      logoAlt: 'Franz Haniel',
      text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
    },
  },
};

export const VideoLightbox = {
  args: {
    video: {
      lightbox: true,
      large: true,
      thumb: 'thumbs/video-thumb-haniel.jpg',
      alt: 'Video Casestudy Franz Haniel',
      id: 'hV97zDTlDko',
      headline: 'Franz Haniel verlässt sich auf glueckkanja',
      logo: '/c_lpad,h_100,w_180/logos/cust-haniel.png',
      logoAlt: 'Franz Haniel',
      text: 'Mit Hilfe von glueckkanja migrierte Franz Haniel seine IT-Systeme in die Microsoft Azure Cloud, die durch die Microsoft Defender Suite gesichert ist. Das Unternehmen profitiert nun von einer modernen, hochsicheren IT-Infrastruktur, die von einem erfahrenen Partner gemanagt wird.',
    },
  },
};

export const VideoRowOverlapping = {
  args: {
    variant: 'row',
    overlapping: true,
    video: {
      headline: 'Wenn Sie wissen,worauf Angreifer aus sind, wissen Sie auch, was Sie am besten schützen müssen',
      thumb: 'thumbs/video-thumb-haniel.jpg',
      alt: 'Video Casestudy Franz Haniel',
      id: 'hV97zDTlDko',
    },
  },
};

export const VideoCompact = {
  args: {
    variant: 'compact',
    overlapping: true,
    video: {
      headline: '„Die Kollegen lieben mich wieder!“',
      text: 'Diane T.',
      thumb: 'thumbs/video-thumb-haniel.jpg',
      alt: 'Video Casestudy Franz Haniel',
      id: 'hV97zDTlDko',
    },
  },
};
