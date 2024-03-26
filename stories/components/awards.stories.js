import { getDefaultSettings } from '../../.storybook/templates';
import { includesawardshtml as component } from '../../.storybook/generatedIncludes';

export default {
  ...getDefaultSettings({
    component,
    argTypes: {
      awards: {
        description: 'Award Object contains various Elements',
        type: 'object',
      },
      level: {
        description: 'Headline Level',
        type: 'string',
      },
      visualOnly: {
        description: 'Only Shows Visuals',
        type: 'boolean',
      },
      cols: {
        description: 'Amount of Columns',
        type: 'number',
      },
    },
  }),
  title: 'Components/Awards',
};

export const Awards = {
  args: {
    visualOnly: true,
    awards: {
      icon: 'svg/award-star.svg',
      alt: 'award alt',
      headline: 'Auszeichnungen und Preise',
      subline:
        'Holen Sie den maximalen Nutzen aus der Cloud für Ihr Unternehmen und profitieren Sie von dem fundierten Wissen und der langjährigen Erfahrung unserer glueckkanja Experten.',
      text: 'Mit unseren mehrfachen Microsoft Gold Kompetenzen, unserer Auszeichnung als Microsoft Security 20/20 Award Finalist für Security Advisory und mehrfachen Microsoft Partner of the Year Auszeichnungen können wir alle Microsoft Cloud Technologien mit weit überdurchschnittlicher Expertise und Erfahrung anbieten. Daher sind wir der ideale Partner für den Betrieb und die Überwachung Ihrer Microsoft 365 und Azure basierten Infrastruktur.',
      images: [
        {
          image: 'logos/msft-misa-mxdr.png',
          alt: 'Advanced Specialization Threat Protection',
        },
        {
          image: 'logos/msft-advanced-specialization-security.png',
          alt: 'MISA Member',
        },
        {
          image: 'logos/div-cyberwehr.png',
          alt: 'star',
        },
        {
          image: 'logos/isg-2021CyberSecurityRisingStar.png',
          alt: 'star',
        },
      ],
    },
  },
};

export const FourColumns = {
  args: {
    cols: 4,
    visualOnly: true,
    awards: {
      icon: 'svg/award-star.svg',
      alt: 'award alt',
      headline: 'Auszeichnungen und Preise',
      headlineClasses: 'h3-font-size',
      subline:
        'Holen Sie den maximalen Nutzen aus der Cloud für Ihr Unternehmen und profitieren Sie von dem fundierten Wissen und der langjährigen Erfahrung unserer glueckkanja Experten.',
      text: 'Mit unseren mehrfachen Microsoft Gold Kompetenzen, unserer Auszeichnung als Microsoft Security 20/20 Award Finalist für Security Advisory und mehrfachen Microsoft Partner of the Year Auszeichnungen können wir alle Microsoft Cloud Technologien mit weit überdurchschnittlicher Expertise und Erfahrung anbieten. Daher sind wir der ideale Partner für den Betrieb und die Überwachung Ihrer Microsoft 365 und Azure basierten Infrastruktur.',
      images: [
        {
          image: 'logos/msft-misa-mxdr.png',
          alt: 'Advanced Specialization Threat Protection',
        },
        {
          image: 'logos/msft-advanced-specialization-security.png',
          alt: 'MISA Member',
        },
        {
          image: 'logos/div-cyberwehr.png',
          alt: 'star',
        },
        {
          image: 'logos/isg-2021CyberSecurityRisingStar.png',
          alt: 'star',
        },
      ],
    },
  },
};
