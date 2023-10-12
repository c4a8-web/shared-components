import { createComponent, getTitle } from '../../.storybook/templates';
import stageTemplate from '!!raw-loader!./stage.html';

const options = getTitle({
  title: 'Stage',
  root: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, stageTemplate);

export const Text = Template.bind({});

Text.args = {
  variant: 'hero--text',
  headline: 'Wenn Sie wissen, worauf Angreifer aus sind, wissen Sie auch, was Sie am besten schützen müssen',
  headlineLevel: 'h5',
  light: true,
  overline: 'Preventive Service',
  bgColor: 'var(--color-gigas)',
  // spacing: 'space-bottom-1 space-bottom-lg-3',
  ctaList: [
    {
      ctaText: 'Jump on the Phone',
      ctaHref: 'javascript:void(0);',
      skin: 'primary',
      icon: 'phone',
    },
    {
      ctaText: 'Mail us',
      ctaHref: 'javascript:void(0);',
      skin: 'secondary',
      icon: 'mail',
    },
  ],
};

// hero:
//   variant: 'hero--text'
//   light: true
//   overline: 'Preventive Services'
//   headline: "Angriffsziele kennen, optimalen Schutz gewährleisten"
//   bgColor: "var(--color-gigas)"
//   spacing: "space-bottom-1 space-bottom-lg-3"
