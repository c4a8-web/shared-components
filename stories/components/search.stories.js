import { createComponent, getTitle } from '../../.storybook/templates';
import { includessearchhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Search',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const Search = Template.bind({});

Search.args = {
  endpoint: 'mock/search.json',
};
