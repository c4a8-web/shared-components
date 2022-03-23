import { createTemplate, getTitle } from '../../.storybook/templates';
import backToTopTemplate from '!!raw-loader!./backToTop.html';

const options = getTitle({
  title: 'Back To Top',
});

export default {
  ...options,
};

const Template = (args) => createTemplate(args, backToTopTemplate);

export const BackToTop = Template.bind({});

BackToTop.args = {};
