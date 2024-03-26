import { getTitle, getDefaultSettings } from '../../.storybook/templates';
import { includesauthoravatarhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Author Avatar',
});

export default {
  ...getDefaultSettings({
    options,
    component,
    author: {
      description: 'Author Object',
      type: 'object',
    },
    classes: {
      description: 'Option to add Additional Css Classes',
      type: 'string',
    },
    imgUrl: {
      description: 'Author Image',
      type: 'string',
    },
  }),
};

export const Default = {
  args: {
    author: {
      display_name: 'Lorem Ipsum',
    },
    imgUrl: '/people/people-michael-breither.jpg',
  },
};
