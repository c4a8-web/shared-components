import { getDefaultSettings } from '../../.storybook/templates';
import { includessurveyhtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
  }),
  title: 'Components/Survey',
};

export const Survey = {
  args: {
    headline: {
      text: 'Lorem was sie erwartet',
      level: 'h3',
    },
    subline:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
    steps: [
      {
        question:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              radios: [
                {
                  id: 'not_2',
                  label: 'Not managed 2',
                },
                {
                  id: 'not_3',
                  label: 'Not managed 3 ',
                },
                {
                  id: 'not_4',
                  label: 'Not managed 4',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'step2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              radios: [
                {
                  id: 'not_2',
                  label: 'Not managed 2',
                },
                {
                  id: 'not_3',
                  label: 'Not managed 3 ',
                },
                {
                  id: 'not_4',
                  label: 'Not managed 4',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'step3: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              radios: [
                {
                  id: 'not_2',
                  label: 'Not managed 2',
                },
                {
                  id: 'not_4',
                  label: 'Not managed 4',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'step4: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              radios: [
                {
                  id: 'not_2',
                  label: 'Not managed 2',
                },
                {
                  id: 'not_3',
                  label: 'Not managed 3 ',
                },
                {
                  id: 'not_4',
                  label: 'Not managed 4',
                },
              ],
            },
          ],
        },
      },
      {
        question:
          'step5: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
        form: {
          fields: [
            {
              required: true,
              requiredMsg: 'Please select at least one answer.',
              radios: [
                {
                  id: 'not_2',
                  label: 'Not managed 2',
                },
                {
                  id: 'not_3',
                  label: 'Not managed 3 ',
                },
                {
                  id: 'not_4',
                  label: 'Not managed 4',
                },
              ],
            },
          ],
        },
      },
    ],
  },
};
