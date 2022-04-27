import { createTemplate, getTitle } from '../../.storybook/templates';
import homeGkgabTemplate from '!!raw-loader!./home-gkgab.html';
import { Right } from '../components/textImage.stories';

const options = getTitle({
  title: 'Home Gkgab',
  page: true,
});

export default {
  ...options,
};

const Template = (args) => createTemplate(args, homeGkgabTemplate);

const baseArgs = {
  firstTeaser: {
    ...Right?.args,
  },
};

export const HomeGkgab = Template.bind({});

HomeGkgab.args = {
  ...baseArgs,
};
