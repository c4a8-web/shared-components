import { Liquid } from 'liquidjs';
// to force hot reload on includes add them here
import { AllIncludes } from './generatedIncludes';
import { hrefTo } from './tools';
// TODO implement an autoloader of the data folder
import ImgSrcSets from './data/imgSrcSets';
import Products from './data/products';
import Contact from './data/contact';
import Posts from './data/posts';
import Events from './data/events';
import CaseStudies from './data/casestudies';
import Authors from './data/authors';
import Lang from './data/lang';
import Options from './data/options';
import Testimonials from './data/testimonials';
import Cloudinary from './config/cloudinary';
import CloudinaryTag from '../assets/js/liquid/tags/cloudinaryTag';
import StreamlinelightTag from '../assets/js/liquid/tags/streamlinelightTag';
import SiteiconsTag from '../assets/js/liquid/tags/siteiconsTag';

const site = {
  cloudinary: Cloudinary,
  data: {
    imgSrcSets: ImgSrcSets,
    products: Products,
    contact: Contact,
    authors: Authors,
    lang: Lang,
    options: Options,
  },
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

const getTitle = ({ page, title, docs, context }) => {
  let type;

  if (page) {
    type = 'Pages';
  } else if (docs) {
    type = 'Docs';
  } else if (context) {
    type = 'Context';
  } else {
    type = 'Components';
  }

  const titleText = `${type}/${title}`;

  return {
    title: titleText,
    ...(page && { parameters: { root: true } }),
  };
};

const getAssetPath = (path) => {
  return process.env.NODE_ENV === 'production' ? `../shared-components/${path}` : `${path}`;
};

export { hrefTo, getTitle, getAssetPath, site };
