import { Liquid } from 'liquidjs';
// to force hot reload on includes add them here
import { AllIncludes } from './generatedIncludes';
import { hrefTo } from './tools';

export const createComponent = function async(include, component, expand) {
  const globals = {
    sharedComponents: true,
  };

  // TODO maybe force the include method to render method to find parameters and pass them to the partials

  if (expand) {
    let newInclude = {};
    const filteredKeys = Object.keys(include).filter((key) => key.indexOf(expand) !== -1);

    if (filteredKeys.length) {
      filteredKeys.forEach((key) => {
        const cleanedKey = key.replace(expand, '').toLocaleLowerCase();

        newInclude[cleanedKey] = include[key];
      });
    } else {
      newInclude = include;
    }

    include[expand] = newInclude;
  }

  const engine = new Liquid({
    partials: ['includes'],
    dynamicPartials: false,
    globals,
  });

  // add map of jekyll filter
  engine.filters.impls.jsonify = engine.filters?.impls?.json;

  const wrapper = document.createElement('div');
  const tpl = engine.parse(component);
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
