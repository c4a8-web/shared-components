import { createComponent, getTitle } from '../../.storybook/templates';
import { includesauthoravatarhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Author Avatar',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  author: {
    display_name: 'Lorem Ipsum',
  },
  imgUrl: '/people/people-michael-breither.jpg',
};
