// to force hot reload on includes add them here
// import { hrefTo } from "./tools";
// TODO implement an autoloader of the data folder
// import Authors from "./data/authors";
// import Company from "./data/company";
import Header from './data/header';
// import ImgSrcSets from "./data/imgSrcSets";
// import Products from "./data/products";
// import Tags from "./data/tags";
// import Contact from "./data/contact";
import Checks from './data/checks';
import Posts from './data/posts';
// import Events from "./data/events";
// import CaseStudies from "./data/casestudies";
// import Lang from "./data/lang";
// import Options from "./data/options";
// import Testimonials from "./data/testimonials";

// const site = {
//   pagination: {
//     pagesAroundActive: 1,
//   },
//   // paginate: 11, // disabled because corp has pagination disabled
//   paginate_path: "/blog/page:num/",
//   maxBlogPosts: 100,
//   excerpt: "",
//   data: {
//     authors: Authors,
//     company: Company,
//     imgSrcSets: ImgSrcSets,
//     products: Products,
//     contact: Contact,
//     checks: Checks,
//     lang: Lang,
//     options: Options,
//     header: Header,
//   },
//   tags: Tags,
//   posts: Posts,
//   events: Events,
//   casestudies: CaseStudies,
//   testimonials: Testimonials,
//   blog_image_path: "blog/heads/",
//   url: "http://localhost:6006/?",
// };

// const page = {
//   scripts: {
//     slick: true,
//     video: true,
//     cubeportfolio: true,
//     rangeSlider: true,
//     "google-map": true,
//   },
//   url: "",
// };

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

// const createStory = (component, args) => {
//   const Template = createComponent(args, component);

//   // const story = Template.bind({});

//   // story.args = args;
//   // story.decorators = getDecorators();

//   return Template;
// };

// const render = ({ component, args }) => {
//   return createStory(component, { ...args });
// };

// const getDefaultSettings = ({ argTypes, component }) => {
//   const settings = {
//     ...getArgTypes({
//       argTypes,
//     }),
//     render: ({ ...args }) => {
//       return render({ component, args });
//     },
//   };

//   return settings;
// };

export {
  // getDefaultSettings,
  // hrefTo,
  getTitle,
  getParams,
  getAssetPath,
  getArgTypes,
  // createStory,
  // site,
  Header,
  Checks,
  Posts,
};
