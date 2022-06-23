import { createComponent, getTitle } from '../../.storybook/templates';
import { includestagcloudhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Tag Cloud',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const ThreeRows = Template.bind({});

ThreeRows.args = {
  headline: 'Consultings Technology',
  subline: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und',
  items: [
    { title: 'Intune', link: '#' },
    { title: 'Azure Active Directory', link: '#' },
    { title: 'MIP', link: '#' },
    { title: 'Security', link: '#' },
    { title: 'MIM', link: '#' },
    { title: 'Azure', link: '#' },
    { title: 'Windows 365', link: '#' },
    { title: 'Teams', link: '#' },
    { title: 'TestCase3', link: '#' },
  ],
};

export const ManyRows = Template.bind({});

ManyRows.args = {
  headline: 'Consultings Technology',
  subline: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und',
  items: [
    { title: 'Intune Weight', link: '#' },
    { title: 'Azure Active Directory', link: '#' },
    { title: 'MIP', link: '#' },
    { title: 'Security', link: '#' },
    { title: 'MIM', link: '#' },
    { title: 'Azure', link: '#' },
    { title: 'MDM', link: '#' },
    { title: 'Windows 365', link: '#' },
    { title: 'Teams', link: '#' },
    { title: 'M.Defender', link: '#' },
    { title: 'Autopilot', link: '#' },
    { title: 'MS 365', link: '#' },
    { title: 'TestCase1', link: '#' },
    { title: 'Azure Active Directory', link: '#' },
    { title: 'MIP', link: '#' },
    { title: 'Security', link: '#' },
    { title: 'MIM', link: '#' },
    { title: 'TestCase2', link: '#' },
    //{title: 'MDM', link: '#'},
    { title: 'Windows 365', link: '#' },
    { title: 'Teams', link: '#' },
    { title: 'TestCase3', link: '#' },
    //{title: 'Autopilot', link: '#'},
    //{title: 'Azure', link: '#'}
    //{title: 'AbstractLongTestCase4', link: '#'}
  ],
};

export const LongWords = Template.bind({});

LongWords.args = {
  headline: 'Consultings Technology',
  subline: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und',
  items: [
    { title: 'Intune lorem ipsum', link: '#' },
    { title: 'Azure Active Directory', link: '#' },
    { title: 'Lorem ipsum dolor sit', link: '#' },
    { title: 'Security Security Security', link: '#' },
    { title: 'Lorem ipsum dolor', link: '#' },
    { title: 'Azure Azure Azure', link: '#' },
    { title: 'Windows 365 or Windows', link: '#' },
    { title: 'Teams or Slack', link: '#' },
    { title: 'TestCase3', link: '#' },
  ],
};
