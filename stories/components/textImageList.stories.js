import { createComponent, getTitle, getAssetPath } from '../../.storybook/templates';
import textImageListTemplate from '!!raw-loader!./textImageList.html';

const options = getTitle({
  title: 'Text Image List',
  block: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, textImageListTemplate);

export const Default = Template.bind({});

Default.args = {
  headline: 'Lorem Ipsum',
  textImages: [
    {
      image: getAssetPath('svg/icons/icon-consulting-services.svg'),
      alt: 'Lorem Ipsum',
      headline: 'Expertise Lorem Ipsum',
      copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
    {
      image: getAssetPath('svg/icons/icon-products.svg'),
      alt: 'Lorem Ipsum',
      headline: 'Expertise Lorem Ipsum 2',
      copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
    },
    {
      image: getAssetPath('svg/icons/icon-consulting-services.svg'),
      alt: 'Lorem Ipsum',
      headline: 'Expertise Lorem Ipsum 3',
      copy: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
      spacing: 'space-bottom-2',
    },
  ],
};

export const StickyHeadline = Template.bind({});

StickyHeadline.args = {
  level: 'h3',
  headline: 'Wo das Glück im Namen steckt.',
  headlineColor: 'var(--color-white)',
  headlineSticky: true,
  bgColor: 'var(--color-career-background)',
  textImages: [
    {
      image: getAssetPath('svg/icons/flexibilitaet.svg'),
      alt: 'hohe flexibilität',
      headline: 'Hohe Flexibilität',
      copy: 'dank frei planbarer Arbeitszeiten, garantiertem Homeoffice und technischem Equipment nach deinem Wunsch!',
    },
    {
      image: getAssetPath('svg/icons/unifiedcontacts_feature_certificates.svg'),
      alt: 'nachhaltige mobilität',
      headline: 'Nachhaltige Mobilität',
      copy: 'mit E-Firmenwagen oder Poolfahrzeug und Bike-Leasing!',
    },
    {
      image: getAssetPath('svg/icons/unifiedcontacts_feature_contactcards.svg'),
      alt: 'erfüllende aufgabe',
      headline: 'Erfüllende Aufgabe',
      copy: 'mit aufregenden Projekten!',
    },
    {
      image: getAssetPath('svg/icons/unifiedcontacts_feature_contactsources.svg'),
      alt: 'top standorte',
      headline: 'Top Standorte',
      copy: 'mit hochmodernen Offices in Deutschland, Finnland & Australien!',
    },
    {
      image: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
      alt: 'attraktive vergütung',
      headline: 'Attraktive Vergütung',
      copy: 'plus Boni, Prämien und vielen Sonderleistungen wie Kostenübernahme für die Kinderbetreuung oder deinen privaten Internetanschluss!',
    },
    {
      image: getAssetPath('svg/icons/unifiedcontacts_feature_platforms.svg'),
      alt: 'wow events',
      headline: 'Wow-Events',
      copy: 'wie Mountainbike-Touren, jährliches Bootcamp, Grill&Chill und relaxtend Rooftop-Parties!',
    },
  ],
};
