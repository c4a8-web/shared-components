import { createComponent, getTitle } from '../../.storybook/templates';
import { includestagcloudhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Tag Cloud',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TagCloud = Template.bind({});

TagCloud.args = {
  headline: {level: 'h1', text: 'Headline Level 1'},
  items: ['Intune', 'Azure Active Directory', 'MIP', 'Security', 'MIM', 'Azure', 'MDM', 'Windows 365', 'Teams', 'M.Defender', 'Autopilot', 'MS 365'],
  itemsize: ["15px", "20px", "35px", "16px", "24px"],
  random: Math.floor(Math.random() * 5),
};