import { createComponent } from '../../.storybook/templates';
import { includestablisthtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Tab List',
};

const Template = (args) => createComponent(args, component);

export const ThreeEntries = Template.bind({});

ThreeEntries.args = {
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

export const SixEntries = Template.bind({});

SixEntries.args = {
  list: [
    {
      title: 'Lorem',
      id: 'tab1',
      link: {
        href: '#tab1',
      },
    },
    {
      title: 'Lorem ipsum dolor',
      id: 'tab2',
      link: {
        href: '#tab2',
      },
    },
    {
      title: 'Sit amet',
      id: 'tab3',
      link: {
        href: '#tab3',
      },
    },
    {
      title: 'Dolor',
      id: 'tab4',
      link: {
        href: '#tab4',
      },
    },
    {
      title: 'Lorem ipsum dolor sit',
      id: 'tab5',
      link: {
        href: '#tab5',
      },
    },
    {
      title: 'Amet',
      id: 'tab6',
      link: {
        href: '#tab6',
      },
    },
  ],
};
