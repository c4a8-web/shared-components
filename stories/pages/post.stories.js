import { getDefaultSettings, site, getParams } from '../../.storybook/templates';
import component from '!!raw-loader!./post.html';

export default {
  ...getDefaultSettings({
    component,
  }),
  ...getParams({ page: true }),
  title: 'Pages/Post',
};

const content =
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>';
const excerpt =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const Post = {
  args: {
    page: {
      title: 'Post Title',
      author: ['Carolin Kanja'],
      blogtitlepic: 'head-cloud-summit-2024',
      excerpt,
    },
    site,
    content,
  },
};

export const Slider = {
  args: {
    page: {
      title: 'Post with Slider',
      author: ['Carolin Kanja'],
      blogtitlepic: 'head-cloud-summit-2024',
      excerpt,
      blogTitleImages: [
        {
          img: 'blog/heads/head-cloud-summit-2024.png',
          cloudinary: true,
        },
        { img: 'blog/heads/head-rsa-conference-2024.jpg', cloudinary: true },
      ],
    },
    site,
    content,
  },
};
