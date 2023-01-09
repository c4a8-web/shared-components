// comment out dev version for debugging
// import './lib/vue/vue.global.js';
import './lib/vue/vue.global.prod.js';

import AdBlockInfo from './vue/ad-block-info.js';
import AsideWrapper from './vue/aside-wrapper.js';
import Authors from './vue/authors.js';
import BlogRecent from './vue/blog-recent.js';
import Card from './vue/card.js';
import CheckCard from './vue/check-card.js';
import CheckMark from './vue/icons/check-mark.js';
import Cta from './vue/cta.js';
import Faq from './vue/faq.js';
import FormAttachments from './vue/form-attachments.js';
import FormCheckbox from './vue/form-checkbox.js';
import FormCheckboxes from './vue/form-checkboxes.js';
import FormFields from './vue/form-fields.js';
import FormSelect from './vue/form-select.js';
import Form from './vue/form.js';
import Header from './vue/header.js';
import Headline from './vue/headline.js';
import Icon from './vue/icon.js';
import VImg from './vue/img.js';
import JobListDetail from './vue/job-list-detail.js';
import JobListEntry from './vue/job-list-entry.js';
import JobList from './vue/job-list.js';
import LetterSwitcher from './vue/letter-switcher.js';
import LinkList from './vue/link-list.js';
import Modal from './vue/modal.js';
import PersonQuote from './vue/person-quote.js';
import ScrollArrow from './vue/scroll-arrow.js';
import Search from './vue/search.js';
import ShapeAnimation from './vue/shape-animation.js';
import ShapeCircleWithinSquare from './vue/shape-circle-within-square.js';
import ShapeFastFordward from './vue/shape-fast-forward.js';
import ShapeFourSquares from './vue/shape-four-squares.js';
import ShapeFourTriangles from './vue/shape-four-triangles.js';
import ShapeHalfSquare from './vue/shape-half-square.js';
import ShapeMovingEye from './vue/shape-moving-eye.js';
import ShapeSecurityEye from './vue/shape-security-eye.js';
import ShapeSemiCircle from './vue/shape-semi-circle.js';
import ShapeSquareCircle from './vue/shape-square-circle.js';
import ShapeTrianglesToCenter from './vue/shape-triangles-to-center.js';
import Shape from './vue/shape.js';
import ArrowExternal from './vue/icons/arrow-external.js';
import ArrowNarrow from './vue/icons/arrow-narrow.js';
import Arrow from './vue/icons/arrow.js';
import Plus from './vue/icons/plus.js';
import Minus from './vue/icons/minus.js';
import Close from './vue/icons/close.js';
import ComputerShield from './vue/icons/computer-shield.js';
import Expand from './vue/icons/expand.js';
import Menu from './vue/icons/menu.js';
import PhoneMail from './vue/icons/phone-mail.js';
import Quotes from './vue/icons/quotes.js';
import Rocket from './vue/icons/rocket.js';
import Smile from './vue/icons/smile.js';
import SBlock from './vue/shapes/s-block.js';
import TBlock from './vue/shapes/t-block.js';
import TestimonialList from './vue/testimonial-list.js';
import Timeline from './vue/timeline.js';
import LBlock from './vue/shapes/l-block.js';
import Square from './vue/shapes/square.js';
import XMark from './vue/icons/x-mark.js';
import VideoInner from './vue/video-inner.js';
import Wrapper from './vue/wrapper.js';

let root = document.querySelector('#app');
let app;

const addApp = () => {
  if (!root) return;

  app = Vue.createApp({
    mounted() {
      const customEvent = new CustomEvent('VUE_IS_MOUNTED', {});

      document.dispatchEvent(customEvent);
    },
  });

  const components = [
    AdBlockInfo,
    AsideWrapper,
    Authors,
    BlogRecent,
    Card,
    Cta,
    CheckCard,
    CheckMark,
    Faq,
    FormAttachments,
    FormCheckbox,
    FormCheckboxes,
    FormFields,
    FormSelect,
    Form,
    Header,
    Headline,
    Icon,
    VImg,
    JobListDetail,
    JobListEntry,
    JobList,
    LetterSwitcher,
    LinkList,
    Minus,
    Modal,
    Plus,
    ScrollArrow,
    Search,
    ShapeAnimation,
    ShapeCircleWithinSquare,
    ShapeFastFordward,
    ShapeFourSquares,
    ShapeFourTriangles,
    ShapeHalfSquare,
    ShapeMovingEye,
    ShapeSecurityEye,
    ShapeSemiCircle,
    ShapeSquareCircle,
    ShapeTrianglesToCenter,
    Shape,
    ArrowExternal,
    ArrowNarrow,
    Arrow,
    Close,
    ComputerShield,
    Expand,
    Menu,
    PhoneMail,
    Quotes,
    Rocket,
    Smile,
    SBlock,
    TBlock,
    TestimonialList,
    Timeline,
    LBlock,
    Square,
    PersonQuote,
    VideoInner,
    XMark,
    Wrapper,
  ];

  components.forEach((component) => {
    app.component(component.tagName, component);
  });

  // TODO figure out how to get all of them
  const illegalTags = root.querySelectorAll('style');

  illegalTags.forEach((element) => {
    document.body.appendChild(element);
  });

  app.mount(root);

  window.vApp = app;
};

const VueSetup = () => {
  if (!root) root = document.querySelector('.shared-components');
  if (root?.dataset.vApp !== undefined) return;

  addApp();
};

document.addEventListener('VUE_FORCE_UPDATE', () => {
  root = document.querySelector('.shared-components');

  addApp();
});

export default VueSetup;
