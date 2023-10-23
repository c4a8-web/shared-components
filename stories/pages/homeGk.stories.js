import { createTemplate, getTitle } from '../../.storybook/templates';
import homeGkTemplate from '!!raw-loader!./home-gk.html';
import { Right } from '../components/textImage.stories';

const options = getTitle({
  title: 'Home Gk',
  page: true,
});

export default {
  ...options,
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
