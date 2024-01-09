import { createComponent, getTitle } from '../../.storybook/templates';
import { includestablisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Tab List',
});

export default {
  ...options,
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
      title: 'ES',
      id: 'tab1',
      link: {
        href: '#tab1',
      },
    },
    {
      title: 'Defender for Cloud',
      id: 'tab2',
      link: {
        href: '#tab2',
      },
    },
    {
      title: 'Sentinel',
      id: 'tab3',
      link: {
        href: '#tab3',
      },
    },
    {
      title: 'ES',
      id: 'tab4',
      link: {
        href: '#tab4',
      },
    },
    {
      title: 'Defender for Cloud',
      id: 'tab5',
      link: {
        href: '#tab5',
      },
    },
    {
      title: 'Sentinel',
      id: 'tab6',
      link: {
        href: '#tab6',
      },
    },
  ],
};
