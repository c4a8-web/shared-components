import { analytics } from './globalArgTypes';
import CtaComponent from '../components/cta.vue';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  component: CtaComponent,
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    text: {
      description: 'The Text of the Cta',
      type: 'string',
      required: true,
    },
    analytics,
    link: {
      description: 'Toggles Link Mode',
      type: 'boolean',
    },
    skin: {
      description: 'The skin of the Cta',
      control: { type: 'select' },
      options: [
        '',
        'primary',
        'secondary',
        'primary is-cutoff',
        'secondary is-cutoff',
        'primary is-cutoff is-light',
        'secondary is-cutoff is-light',
        'primary is-light',
        'secondary is-light',
      ],
    },
    width: {
      description: 'Adds helper classes for the width:',
      table: {
        disabled: false,
      },
      control: {
        type: 'text',
      },
      type: {
        summary: 'Bootstrap widths',
        detail: 'w-10, w-20, w-30, ... or w-lg-80, w-md-60, ...',
      },
    },
    grow: {
      // table: {
      //   defaultValue: { summary: false },
      // },
      control: { type: 'boolean' },
      description: "Will apply w-lg-auto when you don't specify a width.",
      type: {
        summary: null,
      },
    },
    href: {
      description: 'The link of the Cta',
      type: 'string',
    },
    target: {
      description: 'The link target',
      type: {
        summary: 'Bootstrap widths',
        detail: 'w-10, w-20, w-30, ... or w-lg-80, w-md-60, ...',
      },
      options: ['', '_self', '_blank', '_parent', '_top'],
      control: {
        type: 'select',
      },
    },
    button: {
      description: 'Toggles Button Mode',
      type: 'boolean',
    },
    alternativeHref: {
      description: 'An alternative link for the pricing details toggle',
      type: 'string',
    },
    type: {
      description: 'The type attribute of the Cta',
      control: { type: 'select' },
      options: ['', 'submit', 'reset', 'button'],
      type: 'string',
    },
    trigger: {
      description: 'A trigger for modals or other components',
      control: { type: 'select' },
      options: ['', 'modal'],
      type: 'string',
    },
    external: {
      description: 'Adds an external icon to the Cta',
      type: 'boolean',
    },
    icon: {
      description: 'Adds an icon to the Cta',
      control: {
        type: 'text',
      },
      type: {
        summary: 'Icon name',
        detail: 'arrow, mail, phone, ...',
      },
    },
    download: {
      description: 'Adds an download icon to the Cta',
      type: 'boolean',
    },
    reversed: {
      description: 'Reverses the order of the icon and the text. Does not work with download.',
      type: 'boolean',
    },
    active: {
      description: 'Sets the active State of the Cta',
      type: 'boolean',
    },
    hasBackground: {
      description: 'Sets a semi transparent background for the secondary skin',
      type: 'boolean',
    },
    small: {
      description: 'Reduces the padding and scales the icon down',
      type: 'boolean',
    },
    classes: {
      description: 'Adds classes:',
      table: {
        disabled: false,
      },
      control: {
        type: 'text',
      },
      type: {
        summary: 'Examples',
        detail: 'space-4, parent-component-class, ...',
      },
    },
  },
  title: 'Components/Cta',
};

const ctaBase = { href: 'javascript:void(0)' };

const overviewRows = [
  {
    label: 'Primary / Secondary buttons',
    variants: [
      { ...ctaBase, text: 'Primary', skin: 'primary', button: true },
      { ...ctaBase, text: 'Secondary', skin: 'secondary', button: true },
      { ...ctaBase, text: 'Secondary monochrome', skin: 'secondary', button: true, monochrome: true },
    ],
  },
  {
    label: 'Cutoff buttons',
    variants: [
      { ...ctaBase, text: 'Primary cutoff', skin: 'primary is-cutoff', button: true },
      { ...ctaBase, text: 'Secondary cutoff', skin: 'secondary is-cutoff', button: true },
      { ...ctaBase, text: 'Secondary cutoff bg', skin: 'secondary is-cutoff', button: true, hasBackground: true },
    ],
  },
  {
    label: 'Buttons with icons',
    variants: [
      { ...ctaBase, text: 'Primary external', skin: 'primary', button: true, external: true },
      { ...ctaBase, text: 'Primary download', skin: 'primary', button: true, download: true },
      { ...ctaBase, text: 'Secondary external', skin: 'secondary', button: true, external: true },
    ],
  },
  {
    label: 'Small buttons',
    variants: [
      { ...ctaBase, text: 'Primary small', skin: 'primary', button: true, small: true },
      { ...ctaBase, text: 'Secondary small', skin: 'secondary', button: true, small: true },
      { ...ctaBase, text: 'Primary small external', skin: 'primary', button: true, small: true, external: true },
      {
        ...ctaBase,
        text: 'Primary small cutoff external',
        skin: 'primary is-cutoff',
        button: true,
        small: true,
        external: true,
      },
    ],
  },
  // {
  //   label: 'Links',
  //   variants: [
  //     { ...ctaBase, text: 'Primary link', link: true },
  //     { ...ctaBase, text: 'Link external', link: true, external: true },
  //     { ...ctaBase, text: 'Link reversed', link: true, reversed: true },
  //     { ...ctaBase, text: 'Link monochrome', link: true, monochrome: true },
  //   ],
  // },
];

const overviewSections = [
  { label: 'Default', onSurface: false },
  { label: 'On surface', onSurface: true },
];

export const Overview = {
  parameters: {
    controls: { disable: true },
  },
  render: () => ({
    components: { CtaComponent },
    setup() {
      const sections = overviewSections.map((section) => ({
        ...section,
        rows: overviewRows.map((row) => ({
          ...row,
          variants: row.variants.map((variant) => ({ ...variant, onSurface: section.onSurface })),
        })),
      }));

      return { sections };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 3rem;">
        <section
          v-for="section in sections"
          :key="section.label"
          :style="section.onSurface
            ? 'background: var(--color-primary); padding: 2rem; border-radius: 4px; color: var(--color-copy-on-primary); --color-headlines: var(--color-copy-on-primary);'
            : ''"
        >
          <h3 style="margin-bottom: 1.5rem;">{{ section.label }}</h3>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="row in section.rows" :key="row.label">
              <div style="font-size: 0.75rem; opacity: 0.8; margin-bottom: 0.5rem;">{{ row.label }}</div>
              <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 1rem;">
                <cta-component
                  v-for="(variant, index) in row.variants"
                  :key="index"
                  v-bind="variant"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
};

export const PrimaryButtonCutoff = {
  args: {
    text: 'Primary Button Cutoff',
    skin: 'primary is-cutoff',
    button: true,
  },
};

export const SecondaryButtonCutoff = {
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff',
  },
};

export const SecondaryButtonHasBackground = {
  args: {
    text: 'Secondary Button Cutoff',
    href: 'javascript:void(0)',
    skin: 'secondary is-cutoff',
    hasBackground: true,
  },
};

export const PrimaryButton = {
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
  },
};

export const PrimaryButtonDownload = {
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    download: true,
  },
};

export const PrimaryButtonExternal = {
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    external: true,
  },
};

export const SecondaryButton = {
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true,
  },
};

export const PrimaryButtonSmall = {
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    small: true,
    external: true,
  },
};

export const SecondaryButtonMonochrome = {
  args: {
    text: 'Secondary Button',
    href: 'javascript:void(0)',
    skin: 'secondary',
    button: true,
    monochrome: true,
  },
};

export const PrimaryLink = {
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
  },
};

// PrimaryLink.argTypes = {
//   width: {
//     table: { disable: true },
//   },
//   skin: {
//     table: { disable: true },
//   },
// };

export const PrimaryLinkActive = {
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    active: true,
  },
};

PrimaryLinkActive.argTypes = {
  width: {
    table: { disable: true },
  },
  skin: {
    table: { disable: true },
  },
};

export const PrimaryLinkMonochrome = {
  args: {
    text: 'Primary Link',
    href: 'javascript:void(0)',
    link: true,
    monochrome: true,
  },
};

export const PrimaryLinkReversed = {
  args: {
    text: 'Primary Link lorem ipsum dolor sit amet',
    href: 'javascript:void(0)',
    link: true,
    reversed: true,
  },
};

export const PrimaryButtonLoading = {
  args: {
    text: 'Primary Button',
    href: 'javascript:void(0)',
    skin: 'primary',
    button: true,
    loading: true,
  },
};
