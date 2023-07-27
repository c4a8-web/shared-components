// comment out dev version for debugging
// import './lib/vue/vue.global.js';
import './lib/vue/vue.global.prod.js';

// Base Components
import Accordion from './vue/accordion.js';
import AdBlockInfo from './vue/ad-block-info.js';
import AsideWrapper from './vue/aside-wrapper.js';
import Authors from './vue/authors.js';
import BlogRecent from './vue/blog-recent.js';
import Card from './vue/card.js';
import CheckCard from './vue/check-card.js';
import Cta from './vue/cta.js';
import Faq from './vue/faq.js';
import FormAttachments from './vue/form-attachments.js';
import FormCheckbox from './vue/form-checkbox.js';
import FormCheckboxes from './vue/form-checkboxes.js';
import FormFields from './vue/form-fields.js';
import FormRadio from './vue/form-radio.js';
import FormRadios from './vue/form-radios.js';
import FormSelect from './vue/form-select.js';
import Form from './vue/form.js';
import Footer from './vue/footer.js';
import GoogleMap from './vue/google-map.js';
import GoogleMapEntry from './vue/google-map-entry.js';
import Header from './vue/header.js';
import Headline from './vue/headline.js';
import Icon from './vue/icon.js';
import ImageList from './vue/image-list.js';
import VImg from './vue/img.js';
import JobListDetail from './vue/job-list-detail.js';
import JobListEntry from './vue/job-list-entry.js';
import JobList from './vue/job-list.js';
import LetterSwitcher from './vue/letter-switcher.js';
import LinkList from './vue/link-list.js';
import ListContainer from './vue/list-container.js';
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
import Slider from './vue/slider.js';
import VideoInner from './vue/video-inner.js';
import SlotItems from './vue/slot-items.js';
import TestimonialList from './vue/testimonial-list.js';
import Timeline from './vue/timeline.js';
import Wrapper from './vue/wrapper.js';
import WrapperSlotItems from './vue/wrapper-slot-items.js';

// Icons
import ArrowCurl from './vue/icons/arrow-curl.js';
import ArrowExternal from './vue/icons/arrow-external.js';
import ArrowNarrow from './vue/icons/arrow-narrow.js';
import Arrow from './vue/icons/arrow.js';
import CheckMark from './vue/icons/check-mark.js';
import Close from './vue/icons/close.js';
import ComputerShield from './vue/icons/computer-shield.js';
import EmailActionUnread from './vue/icons/email-action-unread.js';
import Expand from './vue/icons/expand.js';
import Magnifier from './vue/icons/magnifier.js';
import Menu from './vue/icons/menu.js';
import Minus from './vue/icons/minus.js';
import Pin from './vue/icons/pin.js';
import Phone from './vue/icons/phone.js';
import PhoneCharger from './vue/icons/phone-charger.js';
import PhoneMail from './vue/icons/phone-mail.js';
import PlusMinus from './vue/icons/plus-minus.js';
import Plus from './vue/icons/plus.js';
import Quotes from './vue/icons/quotes.js';
import Rocket from './vue/icons/rocket.js';
import Smile from './vue/icons/smile.js';
import XMark from './vue/icons/x-mark.js';

// Shapes
import LBlock from './vue/shapes/l-block.js';
import SBlock from './vue/shapes/s-block.js';
import Square from './vue/shapes/square.js';
import TBlock from './vue/shapes/t-block.js';

let root = document.querySelector('#app');
let app;

const isSafari = () => {
  const userAgent = navigator.userAgent;
  const isSafari = userAgent.includes('Safari');
  const isChrome = userAgent.includes('Chrome') || userAgent.includes('CriOS');
  const isEdge = userAgent.includes('Edg');

  return isSafari && !isChrome && !isEdge;
};

const addApp = () => {
  if (!root) return;

  window.vueH = Vue.h;

  app = Vue.createApp({
    mounted() {
      const customEvent = new CustomEvent('VUE_IS_MOUNTED', {});

      document.dispatchEvent(customEvent);

      if (isSafari()) {
        document.body.classList.add('safari');
      }
    },
  });

  const components = [
    Accordion,
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
    FormRadio,
    FormRadios,
    FormSelect,
    Form,
    Footer,
    GoogleMap,
    GoogleMapEntry,
    Header,
    Headline,
    Icon,
    ImageList,
    VImg,
    JobListDetail,
    JobListEntry,
    JobList,
    LetterSwitcher,
    LinkList,
    ListContainer,
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
    Slider,
    ArrowCurl,
    ArrowExternal,
    ArrowNarrow,
    Arrow,
    Close,
    ComputerShield,
    EmailActionUnread,
    Expand,
    Menu,
    Pin,
    PlusMinus,
    Magnifier,
    Minus,
    Phone,
    PhoneCharger,
    PhoneMail,
    Quotes,
    Rocket,
    Smile,
    SBlock,
    TBlock,
    SlotItems,
    TestimonialList,
    Timeline,
    LBlock,
    Square,
    PersonQuote,
    VideoInner,
    XMark,
    Wrapper,
    WrapperSlotItems,
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
