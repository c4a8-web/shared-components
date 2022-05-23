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
  headline: "Consultings Technology",
  subline: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und",
  items: ['Intune', 'Azure Active Directory', 'MIP', 'Security', 'MIM', 'Azure', 'MDM', 'Windows 365', 'Teams', 'M.Defender', 'Autopilot', 'MS 365'],
};
