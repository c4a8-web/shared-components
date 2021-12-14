import { createComponent, getTitle } from '../../.storybook/templates';
import { includestablisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Tab List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TabList = Template.bind({});

TabList.args = {
  list: [
    {
      title: 'Über Uns',
      id: 'tab1',
      link: {
        href: '#tab1',
      },
    },
    {
      title: 'Unsere Werte',
      id: 'tab2',
      link: {
        href: '#tab2',
      },
    },
    {
      title: 'Lorem ipsum',
      id: 'tab3',
      link: {
        href: '#tab3',
      },
    },
  ],
};
