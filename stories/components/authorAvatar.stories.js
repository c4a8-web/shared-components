import { getDefaultSettings } from '../../.storybook/templates';
import { includesauthoravatarhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
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
  title: 'Components/Author Avatar',
};

export const Default = {
  args: {
    author: {
      display_name: 'Lorem Ipsum',
    },
    imgUrl: '/people/people-michael-breither.jpg',
  },
};
