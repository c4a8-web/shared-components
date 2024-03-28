import { createTemplate, getParams } from '../../.storybook/templates';
import homeGkTemplate from '!!raw-loader!./home-gk.html';
import { Right } from '../components/textImage.stories';

export default {
  ...getParams({ page: true }),
  title: 'Pages/Home Gk',
};

const Template = (args) => createTemplate(args, homeGkTemplate);

const baseArgs = {
  firstTeaser: {
    ...Right?.args,
  },
};

export const HomeGk = Template.bind({});

HomeGk.args = {
  ...baseArgs,
};
