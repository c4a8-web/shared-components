import { createComponent } from '../../.storybook/templates';
import { includessearchhtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Search',
};

const Template = (args) => createComponent(args, component);

export const Default = Template.bind({});

Default.args = {
  endpoint: 'mock/search.json',
};

export const ScoreTest = Template.bind({});

ScoreTest.args = {
  endpoint: 'mock/searchScoreTest.json',
};
