import { createComponent, getTitle } from '../../.storybook/templates';

import typographyHtml from '!!raw-loader!./typography.html';
import styles from '../../assets/scss/_exports.scss';

const options = getTitle({
  title: 'Typography',
  docs: true,
});

export default {
  ...options,
};

const Template = (args) => createComponent(args, typographyHtml);

const baseArgs = {};

export const Typography = Template.bind({});

const settings = {
  'Headline Sizes': null,
  'h1-font-size': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'light',
  },
  'h2-font-size': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'bold',
  },
  'h3-font-size': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'bold',
  },
  'h4-font-size': {
    breakpoints: ['sm', 'lg', ''],
  },
  'h5-font-size': {
    breakpoints: ['sm', 'lg', ''],
  },
  'h6-font-size': {
    breakpoints: ['sm', 'lg', ''],
  },
  'Copy Sizes': null,
  'font-size-1': {
    breakpoints: [''],
    variant: 'bold',
  },
  'font-size-2': {
    breakpoints: [''],
    variant: 'bold',
  },
  'font-size-3': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'bold',
  },
  'font-size-4': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'light',
  },
  'Extra Sizes': null,
  'font-size-5': {
    breakpoints: [''],
    variant: 'light',
  },
  'font-size-6': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'light',
  },
  'font-size-7': {
    breakpoints: ['sm', 'lg', ''],
    variant: 'light',
  },
};

const baseFontSize = 16;
const generatedTypes = [];
const formatter = new Intl.NumberFormat('en-EN', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const getTypeFaceLevel = (typeFace) => {
  const typeFaceSegments = typeFace.split('-');

  return typeFaceSegments[0] === 'font' ? 'font-size-' + typeFaceSegments[2] : typeFaceSegments[0];
};

const generateDocs = function (typeFace, breakpoints) {
  if (!breakpoints) return;

  let docs = '';
  let aboveBreakpointLabel = breakpoints.length > 1 ? 'Above (lg) Breakpoint' : 'All Breakpoints';
  let lastBreakpointInStyles = false;

  const typeFaceLevel = getTypeFaceLevel(typeFace);

  breakpoints.forEach(function (breakpoint) {
    const typeFaceKey = `${typeFace}${breakpoint ? '-' + breakpoint : ''}`;
    const typeFaceValue = styles[typeFaceKey];
    const typeFaceLineHeightKey = `${typeFaceLevel}-line-height`;
    const typeFaceLineHeightKeyBreakpoint = lastBreakpointInStyles
      ? `${typeFaceLineHeightKey}-${lastBreakpointInStyles}`
      : `${typeFaceLineHeightKey}-${breakpoint}`;

    let typeFaceLineHeight;

    if (styles[typeFaceLineHeightKeyBreakpoint]) {
      typeFaceLineHeight = styles[typeFaceLineHeightKeyBreakpoint];
      lastBreakpointInStyles = breakpoint;
    } else {
      typeFaceLineHeight = styles[typeFaceLineHeightKey];
    }

    if (!typeFaceValue) return;

    const pxValue = typeFaceValue.replace('rem', '') * baseFontSize;

    let pxValueLineHeight;

    if (typeFaceLineHeight && typeFaceLineHeight.indexOf('rem') !== -1) {
      pxValueLineHeight = typeFaceLineHeight.replace('rem', '') * baseFontSize;
    } else if (typeFaceLineHeight) {
      pxValueLineHeight = typeFaceLineHeight.replace('em', '') * pxValue;
    }

    const formattedValue = `<div class="typgraphy__tooltip-details">font-size: ${formatter.format(pxValue)}px`;
    const lineHeight = `${typeFaceLineHeight ? '<br/>line-height: ' + formatter.format(pxValueLineHeight) + 'px' : ''}`;
    const details = `${formattedValue}${lineHeight}`;

    docs += `${breakpoint ? 'Breakpoint (' + breakpoint + ')' : aboveBreakpointLabel}: ${details}</div>`;
  });

  if (docs === '') return null;

  return docs;
};

[].forEach.call(Object.keys(settings), (typeFace) => {
  const typeFaceSettings = settings[typeFace];

  if (!typeFaceSettings)
    return generatedTypes.push({
      headline: typeFace,
    });

  const docs = generateDocs(typeFace, typeFaceSettings?.breakpoints);

  const typeFaceDefault = {
    class: typeFace,
    docs,
  };

  generatedTypes.push(typeFaceDefault);

  if (typeFaceSettings.variant) {
    const typeFaceVariant = {
      ...typeFaceDefault,
    };

    typeFaceVariant[typeFaceSettings.variant] = true;
    generatedTypes.push(typeFaceVariant);
  }
});

Typography.args = {
  ...baseArgs,
  types: [...generatedTypes],
};
