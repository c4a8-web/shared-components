import { Liquid } from 'liquidjs';
// to force hot reload on includes add them here
import { AllIncludes } from './generatedIncludes';
import { hrefTo } from './tools';

// TODO fix component needs to work for partials of partials as well

const fixComponent = function (text) {
  let fixedText = text;

  const includesRegex = new RegExp(/{%(\s)*include([\S\s]*?)%}/, 'g');
  const matchAllIncludes = fixedText.match(includesRegex);
  // console.log('fixComponent ~ matchAllIncludes', matchAllIncludes);

  if (matchAllIncludes) {
    for (let i = 0; i < matchAllIncludes.length; i++) {
      const includeText = matchAllIncludes[i];

      fixedText = fixedText.replace(includeText, fixInclude(includeText));
    }
  }

  return fixedText;
};

const fixInclude = function (includeText) {
  let include = includeText.replace(/\n/g, ',').replace(/=/g, ':');
  // console.log('fixInclude ~ includeText', includeText);

  const lastIndex = include.lastIndexOf(',');

  include = include.substr(0, lastIndex) + include.substr(lastIndex + 1);
  include = include.replace('{%,', '{%');

  return include;
};

export const createComponent = function async(include, component) {
  const globals = {};

  const engine = new Liquid({
    partials: ['includes'],
    dynamicPartials: false,
    globals,
  });

  // add map of jekyll filter
  engine.filters.impls.jsonify = engine.filters?.impls?.json;

  const wrapper = document.createElement('div');
  const tpl = engine.parse(fixComponent(component));
  const html = engine.renderSync(tpl, { include });

  wrapper.innerHTML = html;

  return wrapper;
};

const getTitle = ({ page, title }) => {
  const titleText = `${page ? 'Pages' : 'Components'}/${title}`;

  return {
    title: titleText,
    ...(page && { parameters: { root: true } }),
  };
};

export { hrefTo, getTitle };
