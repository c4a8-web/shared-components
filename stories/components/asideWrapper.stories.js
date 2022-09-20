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
  text: "Zunächst wurde mit der Azure Foundation eine Sammlung von glueckkanja-gab <strong>Best Practices für den Aufbau sicherer und skalierbarer Azure Landing Zones</strong> zusammengestellt. Dabei umfasst eine Landing Zone Elemente wie Netzwerke, Namensauflösung, Automatisierungsaufgaben, Fernzugriff, Protokollverarbeitung, Auditing, Plattformsicherheit, Datenschutz und Host Anti-Malware. Alle Komponenten der Azure Foundation werden als Infrastructure as Code (IaC) entwickelt und bereitgestellt, um eine schnelle Wertschöpfung, branchenübliche Produktentwicklung, Qualität und Sicherheit zu gewährleisten.",
  image: 'https://res.cloudinary.com/c4a8/image/upload/v1647945533/casestudies/casestudy-dekra.png'
};
