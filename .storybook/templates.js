import { Liquid } from 'liquidjs';
// to force hot reload on includes add them here
import { AllIncludes } from './generatedIncludes';
import { hrefTo } from './tools';
// TODO implement an autoloader of the data folder
import Authors from './data/authors';
import Company from './data/company';
import Header from './data/header';
import ImgSrcSets from './data/imgSrcSets';
import Products from './data/products';
import Tags from './data/tags';
import Contact from './data/contact';
import Checks from './data/checks';
import Posts from './data/posts';
import Events from './data/events';
import CaseStudies from './data/casestudies';
import Lang from './data/lang';
import Options from './data/options';
import Testimonials from './data/testimonials';
import Cloudinary from '../assets/js/cloudinary.js';
import CloudinaryTag from '../assets/js/liquid/tags/cloudinaryTag';
import StreamlinelightTag from '../assets/js/liquid/tags/streamlinelightTag';
import SiteiconsTag from '../assets/js/liquid/tags/siteiconsTag';

const site = {
  pagination: {
    pagesAroundActive: 1,
  },
  // paginate: 11, // disabled because corp has pagination disabled
  paginate_path: '/blog/page:num/',
  maxBlogPosts: 100,
  cloudinary: Cloudinary,
  excerpt: '',
  data: {
    authors: Authors,
    company: Company,
    imgSrcSets: ImgSrcSets,
    products: Products,
    contact: Contact,
    checks: Checks,
    lang: Lang,
    options: Options,
    header: Header,
  },
  tags: Tags,
  posts: Posts,
  events: Events,
  casestudies: CaseStudies,
  testimonials: Testimonials,
  blog_image_path: 'blog/heads/',
  url: 'http://localhost:6006/?',
};

const page = {
  scripts: {
    slick: true,
    video: true,
    cubeportfolio: true,
    rangeSlider: true,
    'google-map': true,
  },
  url: '',
};

const fixComponent = function (text) {
  let fixedText = text;

  const includesRegex = new RegExp(/{%(\s)*include([\S\s]*?)%}/, 'g');
  const matchAllIncludes = fixedText.match(includesRegex);

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

  const lastIndex = include.lastIndexOf(',');

  include = include.substr(0, lastIndex) + include.substr(lastIndex + 1);
  include = include.replace('{%,', '{%');

  return include;
};

const registerTags = function (engine) {
  const cloudinaryTag = new CloudinaryTag({ engine, site });
  const streamlinelightTag = new StreamlinelightTag({ engine: cloudinaryTag.engine, site });
  const siteiconsTag = new SiteiconsTag({ engine: streamlinelightTag.engine, site });

  return siteiconsTag.engine;
};

const rewriteInclude = function (engine) {
  const oldEval = engine._evalValue.bind(engine);

  engine._evalValue = function (str, ctx) {
    let newStr = str.replace('include.', '');

    return oldEval(newStr, ctx);
  };

  return engine;
};

export const createTemplate = function async(include, template, path = 'includes') {
  const globals = { site, page };
  const partialsPath = path;
  const includesPath = `${partialsPath}/`;

  let engine = new Liquid({
    partials: [partialsPath],
    dynamicPartials: false,
    globals,
    fs: {
      readFileSync(file) {
        const request = new XMLHttpRequest();
        if (
          (request.open('GET', `${includesPath}${file}`, !1),
          request.send(),
          request.status < 200 || 300 <= request.status)
        ) {
          throw new Error(request.statusText);
        }

        return fixComponent(request.responseText);
      },
      existsSync() {
        return true;
      },
      exists() {
        return true;
      },
      resolve(_, file) {
        return file;
      },
      dirname() {
        return;
      },
      sep() {
        return;
      },
    },
  });

  engine = registerTags(engine);

  // add map of jekyll filter
  engine.filters.impls.jsonify = engine.filters?.impls?.json;
  engine.filters.impls.push = engine.filters?.impls?.concat;
  // TODO figure out how to make where_exp compatible to where
  // engine.filters.impls.where_exp = engine.filters?.impls?.where;

  const wrapper = document.createElement('div');
  const tpl = engine.parse(fixComponent(template));

  engine = rewriteInclude(engine);

  const html = engine.renderSync(tpl, include);

  wrapper.innerHTML = html;

  return wrapper;
};

export const createComponent = function async(include, component) {
  return createTemplate(include, component);
};

export const getComponentInnerHtml = function async(include, component) {
  const template = createComponent(include, component);

  return template.innerHTML;
};

export const getComponentInnerHtmlList = function async(includes, component) {
  let html = '';

  includes.forEach((include) => {
    html += getComponentInnerHtml(include, component);
  });

  return html;
};

export const getDecorators = () => {
  return [
    (Story, context) => {
      const componentName = context?.componentId?.replace('components-', '');
      const argList = Object.keys(context?.args || {});

      const argListString = argList
        .map((arg) => {
          let value = context.args[arg];

          if (typeof value === 'string') {
            value = `"${value}"`;
          }

          return `${arg}=${value}`;
        })
        .join('\n  ');

      const customCode = `
{%
  include ${componentName}.html
  ${argListString}
%}`;

      context.parameters.docs.source.language = 'liquid';
      context.parameters.docs.source.code = customCode;

      return Story();
    },
  ];
};

const getParams = ({ page }) => {
  return {
    ...(page && { parameters: { root: true, page: true } }),
  };
};

// TODO: deprecate getTitle
const getTitle = ({ page, title, docs, context, helper }) => {
  let type;

  if (page) {
    type = 'Pages';
  } else if (docs) {
    type = 'Docs';
  } else if (context) {
    type = 'Context';
  } else if (helper) {
    type = 'Helper';
  } else {
    type = 'Components';
  }

  const titleText = `${type}/${title}`;

  return {
    title: titleText,
    ...(page && { parameters: { root: true, page: true } }),
  };
};

const getAssetPath = (path) => {
  return process.env.NODE_ENV === 'production' ? `../shared-components/${path}` : `${path}`;
};

const getArgTypes = (defaultExport) => {
  const requiredText = '<b>(*)</b>&nbsp;';
  const argTypes = defaultExport.argTypes;

  if (!argTypes) return defaultExport;

  Object.keys(argTypes).forEach((key) => {
    if (argTypes[key].required) {
      argTypes[key].description = `${requiredText} ${argTypes[key].description}`;
    }
  });

  return defaultExport;
};

const createStory = (component, args) => {
  const Template = createComponent(args, component);

  // const story = Template.bind({});

  // story.args = args;
  // story.decorators = getDecorators();

  return Template;
};

const render = ({ component, args }) => {
  return createStory(component, { ...args });
};

const getDefaultSettings = ({ argTypes, component }) => {
  const settings = {
    ...getArgTypes({
      argTypes,
    }),
    render: ({ ...args }) => {
      return render({ component, args });
    },
  };

  return settings;
};

export { getDefaultSettings, hrefTo, getTitle, getParams, getAssetPath, getArgTypes, createStory, site };
