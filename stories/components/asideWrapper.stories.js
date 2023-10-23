import { createComponent, getTitle } from '../../.storybook/templates';
import { includesasidewrapperhtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Aside Wrapper',
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, component);

export const TextWithImage = Template.bind({});

TextWithImage.args = {
  content:
    'Zunächst wurde mit der Azure Foundation eine Sammlung von glueckkanja <strong>Best Practices für den Aufbau sicherer und skalierbarer Azure Landing Zones</strong> zusammengestellt. Dabei umfasst eine Landing Zone Elemente wie Netzwerke, Namensauflösung, Automatisierungsaufgaben, Fernzugriff, Protokollverarbeitung, Auditing, Plattformsicherheit, Datenschutz und Host Anti-Malware. Alle Komponenten der Azure Foundation werden als Infrastructure as Code (IaC) entwickelt und bereitgestellt, um eine schnelle Wertschöpfung, branchenübliche Produktentwicklung, Qualität und Sicherheit zu gewährleisten.',
  aside: "<img src='https://res.cloudinary.com/c4a8/image/upload/v1647945533/casestudies/casestudy-dekra.png' />",
};

export const ImageWithImage = Template.bind({});

ImageWithImage.args = {
  content: "<img src='https://res.cloudinary.com/c4a8/image/upload/v1647945533/casestudies/casestudy-dekra.png' />",
  aside: "<img src='https://res.cloudinary.com/c4a8/image/upload/v1647945533/casestudies/casestudy-dekra.png' />",
};

export const TextWithText = Template.bind({});

TextWithText.args = {
  content:
    'Zunächst wurde mit der Azure Foundation eine Sammlung von glueckkanja <strong>Best Practices für den Aufbau sicherer und skalierbarer Azure Landing Zones</strong> zusammengestellt. Dabei umfasst eine Landing Zone Elemente wie Netzwerke, Namensauflösung, Automatisierungsaufgaben, Fernzugriff, Protokollverarbeitung, Auditing, Plattformsicherheit, Datenschutz und Host Anti-Malware. Alle Komponenten der Azure Foundation werden als Infrastructure as Code (IaC) entwickelt und bereitgestellt, um eine schnelle Wertschöpfung, branchenübliche Produktentwicklung, Qualität und Sicherheit zu gewährleisten.',
  aside:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
};
