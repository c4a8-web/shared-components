import { createComponent, getTitle } from '../../.storybook/templates';
import { includeslinklisthtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Link List',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const LinkList = Template.bind({});

LinkList.args = {
  list: {
    name: 'modern-workplace',
    languages: {
      de: {
        title: 'Modern Workplace DE',
      },
      en: {
        title: 'Modern Workplace EN',
      },
    },
    children: [
      {
        name: 'clear-spend-go-card',
        languages: {
          de: {
            title: 'clear lorem ipsum',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'clear dolor sit',
            url: 'javascript:void(0);',
          },
        },
      },
      {
        name: 'consulting-services',
        languages: {
          de: {
            title: 'Consulting Services DE',
            url: '/de/modern-workplace/consulting-services/',
            active: true,
          },
          en: {
            title: 'Consulting Services EN',
            url: '/en/modern-workplace/consulting-services/',
          },
        },
      },
      {
        name: 'lorem2',
        languages: {
          de: {
            title: 'lorem ipsum 2',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'dolor sit 2',
            url: 'javascript:void(0);',
          },
        },
      },
      {
        name: 'lorem3',
        languages: {
          de: {
            title: 'lorem ipsum 3',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'dolor sit 3',
            url: 'javascript:void(0);',
          },
        },
      },
    ],
  },
};

export const NoTitle = Template.bind({});

NoTitle.args = {
  list: {
    children: [
      {
        name: 'clear-spend-go-card',
        languages: {
          de: {
            title: 'clear lorem ipsum',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'clear dolor sit',
            url: 'javascript:void(0);',
          },
        },
      },
      {
        name: 'consulting-services',
        languages: {
          de: {
            title: 'Consulting Services DE',
            url: '/de/modern-workplace/consulting-services/',
          },
          en: {
            title: 'Consulting Services EN',
            url: '/en/modern-workplace/consulting-services/',
          },
        },
      },
      {
        name: 'lorem2',
        languages: {
          de: {
            title: 'lorem ipsum 2',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'dolor sit 2',
            url: 'javascript:void(0);',
          },
        },
      },
      {
        name: 'lorem3',
        languages: {
          de: {
            title: 'lorem ipsum 3',
            url: 'javascript:void(0);',
          },
          en: {
            title: 'dolor sit 3',
            url: 'javascript:void(0);',
          },
        },
      },
    ],
  },
};
