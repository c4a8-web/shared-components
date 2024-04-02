import { createComponent } from '../../.storybook/templates';
import { includesheadlinehtml as component } from '../../.storybook/generatedIncludes';

export default {
  title: 'Components/Headline',
};

const Template = (args) => createComponent(args, component);

export const h1 = Template.bind({});

h1.args = {
  level: 'h1',
  text: 'Headline Level 1',
};

export const h2 = Template.bind({});

h2.args = {
  level: 'h2',
  text: 'Headline Level 2',
};

export const h3 = Template.bind({});

h3.args = {
  level: 'h3',
  text: 'Headline Level 3',
};

export const h4 = Template.bind({});

h4.args = {
  level: 'h4',
  text: 'Headline Level 4',
};

export const h1WithH4Style = Template.bind({});

h1WithH4Style.args = {
  level: 'h1',
  text: 'Headline Level 1 with H4 Style',
  classes: 'h4-font-size',
};

export const h1WithFontSize3Style = Template.bind({});

h1WithFontSize3Style.args = {
  level: 'h1',
  text: 'Headline Level 1 with Font Size 3 Style',
  classes: 'font-size-3',
};

// export const h5 = Template.bind({});

// h5.args = {
//   level: 'h5',
//   text: 'Headline Level 5',
// };

// export const h6 = Template.bind({});

// h6.args = {
//   level: 'h6',
//   text: 'Headline Level 6',
// };
