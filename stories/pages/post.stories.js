import { createTemplate, site, getParams } from '../../.storybook/templates';
import postTemplate from '!!raw-loader!./post.html';

export default {
  ...getParams({ page: true }),
  title: 'Pages/Post',
};

const Template = (args) => createTemplate(args, postTemplate);

export const Post = Template.bind({});

Post.args = {
  page: {
    author: ['Carolin Kanja'],
  },
  site,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>`,
};
