import './assets/front/dist/assets/vendor/leaflet/dist/leaflet.css';
import './assets/front/dist/assets/css/theme.min.css';
import './assets/front/dist/assets/vendor/slick-carousel/slick/slick.css';
import './assets/front/dist/assets/vendor/fontawesome/css/all.min.css';
import './assets/front/dist/assets/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import './assets/front/dist/assets/vendor/ion-range-slider/ion.rangeSlider.min.css';

import './assets/scss/index.scss';
import './assets/scss/themes/_gk.scss';

// const components = import.meta.glob('./components/**/*.{vue,js}', {
//   eager: true,
// });

// export default {
//   install(app) {
//     for (const path in components) {
//       const componentName = path
//         .split('/')
//         .pop()
//         .replace(/\.\w+$/, '');
//       app.component(componentName, components[path].default);
//     }
//   },
// };

// import { ClientOnly } from './components/nuxt-components.js';

import MarkdownFiles from './components/markdown-files.vue';
// import Accordion from './components/accordion.vue';
// import AdBlockInfo from './components/ad-block-info.vue';
import Arrow from './components/icons/arrow.vue';
// import ArrowCurl from './components/icons/arrow-curl.vue';
// import ArrowExternal from './components/icons/arrow-external.vue';
// import ArrowNarrow from './components/icons/arrow-narrow.vue';
// import AsideWrapper from './components/aside-wrapper.vue';
// import AuthorAvatar from './components/author-avatar.vue';
// import AuthorHeader from './components/author-header.vue';
// import Authors from './components/authors.vue';
// import Awards from './components/awards.vue';
// import BackToTop from './components/back-to-top.vue';
import Badge from './components/badge.vue';
// import Bin from './components/icons/bin.vue';
// import Blog from './components/blog.vue';
import BlogRecent from './components/blog-recent.vue';
import Card from './components/card.vue';
import Carousel from './components/carousel.vue';
// import Check from './components/icons/check.vue';
// import CheckCard from './components/check-card.vue';
// import CheckMark from './components/icons/check-mark.vue';
// import Close from './components/icons/close.vue';
// import ComputerShield from './components/icons/computer-shield.vue';
import Contact from './components/contact.vue';
import Content from './components/content.vue';
// import ContentScroller from './components/content-scroller.vue';
import Cta from './components/cta.vue';
import CtaList from './components/cta-list.vue';
// import Dropdown from './components/dropdown.vue';
// import EmailActionUnread from './components/icons/email-action-unread.vue';
// import Emergency from './components/icons/emergency.vue';
// import Event from './components/event.vue';
// import EventOverview from './components/event-overview.vue';
// import EventTeaser from './components/event-teaser.vue';
// import Expand from './components/icons/expand.vue';
// import FabButton from './components/fab-button.vue';
// import FabHint from './components/fab-hint.vue';
import Faq from './components/faq.vue';
import FeatureGrid from './components/feature-grid.vue';
import FeatureGridItem from './components/feature-grid-item.vue';
// import FeatureList from './components/feature-list.vue';
// import FilterBar from './components/filter-bar.vue';
// import FormAttachments from './components/form-attachments.vue';
import FormCheckbox from './components/form-checkbox.vue';
import FormCheckboxes from './components/form-checkboxes.vue';
import FormFields from './components/form-fields.vue';
import FormRadio from './components/form-radio.vue';
import FormRadios from './components/form-radios.vue';
import FormSelect from './components/form-select.vue';
import Formular from './components/formular.vue';
// import Globals from './components/globals.vue';
// import GoogleMap from './components/google-map.vue';
// import GoogleMapEntry from './components/google-map-entry.vue';
// import Grid from './components/grid.vue';
// import GridList from './components/grid-list.vue';
// import Hand from './components/icons/hand.vue';
import Headline from './components/headline.vue';
import HeadlineRow from './components/headline-row.vue';
import Hero from './components/hero.vue';
// import HeroTextImage from './components/hero-text-image.vue';
import Icon from './components/icon.vue';
// import IconBlocks from './components/icon-blocks.vue';
// import ImageBlock from './components/image-block.vue';
// import ImageCredits from './components/icons/image-credits.vue';
// import ImageList from './components/image-list.vue';
// import Img from './components/img.vue';
// import ImgFilter from './components/img-filter.vue';
// import Info from './components/icons/info.vue';
import IntroText from './components/intro-text.vue';
// import Test from './components/test.vue';
// import JobList from './components/job-list.vue';
// import JobListDetail from './components/job-list-detail.vue';
// import JobListEntry from './components/job-list-entry.vue';
// import LBlock from './components/shapes/l-block.vue';
// import LetterSwitcher from './components/letter-switcher.vue';
import LinkList from './components/link-list.vue';
// import List from './components/list.vue';
import ListContainer from './components/list-container.vue';
// import ListView from './components/icons/list-view.vue';
import LogoList from './components/logo-list.vue';
import Lottie from './components/lottie.vue';
// import Magnifier from './components/icons/magnifier.vue';
// import Mail from './components/icons/mail.vue';
// import Meerkat from './components/icons/meerkat.vue';
import Menu from './components/icons/menu.vue';
// import Minus from './components/icons/minus.vue';
// import Modal from './components/modal.vue';
// import ModalApplication from './components/modal-application.vue';
// import PeopleSquare from './components/people-square.vue';
// import PersonQuote from './components/person-quote.vue';
// import Phone from './components/icons/phone.vue';
// import PhoneCharger from './components/icons/phone-charger.vue';
// import PhoneMail from './components/icons/phone-mail.vue';
// import Pin from './components/icons/pin.vue';
// import Plus from './components/icons/plus.vue';
// import PlusMinus from './components/icons/plus-minus.vue';
// import PostTeaser from './components/post-teaser.vue';
// import PricingProduct from './components/pricing-product.vue';
import ProductBlocks from './components/product-blocks.vue';
import ProductStage from './components/product-stage.vue';
import Quote from './components/icons/quote.vue';
// import Quotes from './components/quotes.vue';
// import Rocket from './components/icons/rocket.vue';
// import SBlock from './components/shapes/s-block.vue';
// import Screenshot from './components/screenshot.vue';
// import ScrollArrow from './components/scroll-arrow.vue';
// import Search from './components/search.vue';
// import Services from './components/services.vue';
// import Shape from './components/shape.vue';
// import ShapeAnimation from './components/shape-animation.vue';
// import ShapeCircleWithinSquare from './components/shape-circle-within-square.vue';
// import ShapeFastForward from './components/shape-fast-forward.vue';
// import ShapeFourSquares from './components/shape-four-squares.vue';
// import ShapeFourTriangles from './components/shape-four-triangles.vue';
// import ShapeHalfSquare from './components/shape-half-square.vue';
// import ShapeMovingEye from './components/shape-moving-eye.vue';
// import ShapeSecurityEye from './components/shape-security-eye.vue';
// import ShapeSemiCircle from './components/shape-semi-circle.vue';
// import ShapeSquareCircle from './components/shape-square-circle.vue';
// import ShapeTrianglesToCenter from './components/shape-triangles-to-center.vue';
import SiteIcons from './components/site-icons.vue';
// import Slider from './components/slider.vue';
import SlotItems from './components/slot-items.vue';
// import Smile from './components/icons/smile.vue';
// import Socials from './components/socials.vue';
// import Square from './components/shapes/square.vue';
// import StepList from './components/step-list.vue';
// import StrategySplit from './components/icons/strategy-split.vue';
// import SuccessStory from './components/success-story.vue';
import SvgShape from './components/svg-shape.vue';
// import TabList from './components/tab-list.vue';
// import Tag from './components/tag.vue';
// import TagCloud from './components/tag-cloud.vue';
// import TBlock from './components/shapes/t-block.vue';
// import Teaser from './components/teaser.vue';
// import TestimonialList from './components/testimonial-list.vue';
// import TestimonialsDetail from './components/testimonials-detail.vue';
// import TestimonialsSlider from './components/testimonials-slider.vue';
// import TestimonialTeaser from './components/testimonial-teaser.vue';
// import TextAnimation from './components/text-animation.vue';
// import TextIconAnimation from './components/text-icon-animation.vue';
import TextImage from './components/text-image.vue';
import TextImageList from './components/text-image-list.vue';
// import TextTeaser from './components/text-teaser.vue';
// import TileView from './components/icons/tile-view.vue';
// import Timeline from './components/timeline.vue';
// import ToggleForm from './components/toggle-form.vue';
import VFooter from './components/v-footer.vue';
import VHeader from './components/v-header.vue';
// import VideoFrame from './components/video-frame.vue';
// import VideoInner from './components/video-inner.vue';
import VImg from './components/v-img.vue';
import World from './components/icons/world.vue';
import Wrapper from './components/wrapper.vue';
// import WrapperSlotItems from './components/wrapper-slot-items.vue';
// import XMark from './components/icons/x-mark.vue';

export {
  // ClientOnly,
  MarkdownFiles,

  // Accordion,
  // AdBlockInfo,
  Arrow,
  // ArrowCurl,
  // ArrowExternal,
  // ArrowNarrow,
  // AsideWrapper,
  // AuthorAvatar,
  // AuthorHeader,
  // Authors,
  // Awards,
  // BackToTop,
  Badge,
  // Bin,
  // Blog,
  BlogRecent,
  Card,
  Carousel,
  // Check,
  // CheckCard,
  // CheckMark,
  // Close,
  // ComputerShield,
  Contact,
  Content,
  // ContentScroller,
  Cta,
  CtaList,
  // Dropdown,
  // EmailActionUnread,
  // Emergency,
  // Event,
  // EventOverview,
  // EventTeaser,
  // Expand,
  // FabButton,
  // FabHint,
  Faq,
  FeatureGrid,
  FeatureGridItem,
  // FeatureList,
  // FilterBar,
  // FormAttachments,
  FormCheckbox,
  FormCheckboxes,
  FormFields,
  FormRadio,
  FormRadios,
  FormSelect,
  Formular,
  // Globals,
  // GoogleMap,
  // GoogleMapEntry,
  // Grid,
  // GridList,
  // Hand,
  Headline,
  HeadlineRow,
  Hero,
  // HeroTextImage,
  Icon,
  // IconBlocks,
  // ImageBlock,
  // ImageCredits,
  // ImageList,
  // Img,
  // ImgFilter,
  // Info,
  // Test,
  IntroText,
  // JobList,
  // JobListDetail,
  // JobListEntry,
  // LBlock,
  // LetterSwitcher,
  LinkList,
  // List,
  ListContainer,
  // ListView,
  LogoList,
  Lottie,
  // Magnifier,
  // Mail,
  // Meerkat,
  Menu,
  // Minus,
  // Modal,
  // ModalApplication,
  // PeopleSquare,
  // PersonQuote,
  // Phone,
  // PhoneCharger,
  // PhoneMail,
  // Pin,
  // Plus,
  // PlusMinus,
  // PostTeaser,
  // PricingProduct,
  ProductBlocks,
  ProductStage,
  Quote,
  // Quotes,
  // Rocket,
  // SBlock,
  // Screenshot,
  // ScrollArrow,
  // Search,
  // Services,
  // Shape,
  // ShapeAnimation,
  // ShapeCircleWithinSquare,
  // ShapeFastForward,
  // ShapeFourSquares,
  // ShapeFourTriangles,
  // ShapeHalfSquare,
  // ShapeMovingEye,
  // ShapeSecurityEye,
  // ShapeSemiCircle,
  // ShapeSquareCircle,
  // ShapeTrianglesToCenter,
  SiteIcons,
  // Slider,
  SlotItems,
  // Smile,
  // Socials,
  // Square,
  // StepList,
  // StrategySplit,
  // SuccessStory,
  SvgShape,
  // TabList,
  // Tag,
  // TagCloud,
  // TBlock,
  // Teaser,
  // TestimonialList,
  // TestimonialsDetail,
  // TestimonialsSlider,
  // TestimonialTeaser,
  // TextAnimation,
  // TextIconAnimation,
  TextImage,
  TextImageList,
  // TextTeaser,
  // TileView,
  // Timeline,
  // ToggleForm,
  VFooter,
  VHeader,
  // VideoFrame,
  // VideoInner,
  VImg,
  World,
  Wrapper,
  // WrapperSlotItems,
  // XMark,
};

export default {
  install(app) {
    // app.component('ClientOnly', ClientOnly);
    app.component('MarkdownFiles', MarkdownFiles);

    // app.component('Accordion', Accordion);
    // app.component('AdBlockInfo', AdBlockInfo);
    app.component('Arrow', Arrow);
    // app.component('ArrowCurl', ArrowCurl);
    // app.component('ArrowExternal', ArrowExternal);
    // app.component('ArrowNarrow', ArrowNarrow);
    // app.component('AsideWrapper', AsideWrapper);
    // app.component('AuthorAvatar', AuthorAvatar);
    // app.component('AuthorHeader', AuthorHeader);
    // app.component('Authors', Authors);
    // app.component('Awards', Awards);
    // app.component('BackToTop', BackToTop);
    app.component('Badge', Badge);
    // app.component('Bin', Bin);
    // app.component('Blog', Blog);
    app.component('BlogRecent', BlogRecent);
    app.component('Card', Card);
    app.component('Carousel', Carousel);
    // app.component('Check', Check);
    // app.component('CheckCard', CheckCard);
    // app.component('CheckMark', CheckMark);
    // app.component('Close', Close);
    // app.component('ComputerShield', ComputerShield);
    app.component('Contact', Contact);
    app.component('Content', Content);
    // app.component('ContentScroller', ContentScroller);
    app.component('Cta', Cta);
    app.component('CtaList', CtaList);
    // app.component('Dropdown', Dropdown);
    // app.component('EmailActionUnread', EmailActionUnread);
    // app.component('Emergency', Emergency);
    // app.component('Event', Event);
    // app.component('EventOverview', EventOverview);
    // app.component('EventTeaser', EventTeaser);
    // app.component('Expand', Expand);
    // app.component('FabButton', FabButton);
    // app.component('FabHint', FabHint);
    app.component('Faq', Faq);
    app.component('FeatureGrid', FeatureGrid);
    app.component('FeatureGridItem', FeatureGridItem);
    // app.component('FeatureList', FeatureList);
    // app.component('FilterBar', FilterBar);
    // app.component('FormAttachments', FormAttachments);
    app.component('FormCheckbox', FormCheckbox);
    app.component('FormCheckboxes', FormCheckboxes);
    app.component('FormFields', FormFields);
    app.component('FormRadio', FormRadio);
    app.component('FormRadios', FormRadios);
    app.component('FormSelect', FormSelect);
    app.component('Formular', Formular);
    // app.component('Globals', Globals);
    // app.component('GoogleMap', GoogleMap);
    // app.component('GoogleMapEntry', GoogleMapEntry);
    // app.component('Grid', Grid);
    // app.component('GridList', GridList);
    // app.component('Hand', Hand);
    app.component('Headline', Headline);
    app.component('HeadlineRow', HeadlineRow);
    app.component('Hero', Hero);
    // app.component('HeroTextImage', HeroTextImage);
    app.component('Icon', Icon);
    // app.component('IconBlocks', IconBlocks);
    // app.component('ImageBlock', ImageBlock);
    // app.component('ImageCredits', ImageCredits);
    // app.component('ImageList', ImageList);
    // app.component('Img', Img);
    // app.component('ImgFilter', ImgFilter);
    // app.component('Info', Info);
    // app.component('Test', Test);
    app.component('IntroText', IntroText);
    // app.component('JobList', JobList);
    // app.component('JobListDetail', JobListDetail);
    // app.component('JobListEntry', JobListEntry);
    // app.component('LBlock', LBlock);
    // app.component('LetterSwitcher', LetterSwitcher);
    app.component('LinkList', LinkList);
    // app.component('List', List);
    app.component('ListContainer', ListContainer);
    // app.component('ListView', ListView);
    app.component('LogoList', LogoList);
    app.component('Lottie', Lottie);
    // app.component('Magnifier', Magnifier);
    // app.component('Mail', Mail);
    // app.component('Meerkat', Meerkat);
    app.component('Menu', Menu);
    // app.component('Minus', Minus);
    // app.component('Modal', Modal);
    // app.component('ModalApplication', ModalApplication);
    // app.component('PeopleSquare', PeopleSquare);
    // app.component('PersonQuote', PersonQuote);
    // app.component('Phone', Phone);
    // app.component('PhoneCharger', PhoneCharger);
    // app.component('PhoneMail', PhoneMail);
    // app.component('Pin', Pin);
    // app.component('Plus', Plus);
    // app.component('PlusMinus', PlusMinus);
    // app.component('PostTeaser', PostTeaser);
    // app.component('PricingProduct', PricingProduct);
    app.component('ProductBlocks', ProductBlocks);
    app.component('ProductStage', ProductStage);
    app.component('Quote', Quote);
    // app.component('Quotes', Quotes);
    // app.component('Rocket', Rocket);
    // app.component('SBlock', SBlock);
    // app.component('Screenshot', Screenshot);
    // app.component('ScrollArrow', ScrollArrow);
    // app.component('Search', Search);
    // app.component('Services', Services);
    // app.component('Shape', Shape);
    // app.component('ShapeAnimation', ShapeAnimation);
    // app.component('ShapeCircleWithinSquare', ShapeCircleWithinSquare);
    // app.component('ShapeFastForward', ShapeFastForward);
    // app.component('ShapeFourSquares', ShapeFourSquares);
    // app.component('ShapeFourTriangles', ShapeFourTriangles);
    // app.component('ShapeHalfSquare', ShapeHalfSquare);
    // app.component('ShapeMovingEye', ShapeMovingEye);
    // app.component('ShapeSecurityEye', ShapeSecurityEye);
    // app.component('ShapeSemiCircle', ShapeSemiCircle);
    // app.component('ShapeSquareCircle', ShapeSquareCircle);
    // app.component('ShapeTrianglesToCenter', ShapeTrianglesToCenter);
    app.component('SiteIcons', SiteIcons);
    // app.component('Slider', Slider);
    app.component('SlotItems', SlotItems);
    // app.component('Smile', Smile);
    // app.component('Socials', Socials);
    // app.component('Square', Square);
    // app.component('StepList', StepList);
    // app.component('StrategySplit', StrategySplit);
    // app.component('SuccessStory', SuccessStory);
    app.component('SvgShape', SvgShape);
    // app.component('TabList', TabList);
    // app.component('Tag', Tag);
    // app.component('TagCloud', TagCloud);
    // app.component('TBlock', TBlock);
    // app.component('Teaser', Teaser);
    // app.component('TestimonialList', TestimonialList);
    // app.component('TestimonialsDetail', TestimonialsDetail);
    // app.component('TestimonialsSlider', TestimonialsSlider);
    // app.component('TestimonialTeaser', TestimonialTeaser);
    // app.component('TextAnimation', TextAnimation);
    // app.component('TextIconAnimation', TextIconAnimation);
    app.component('TextImage', TextImage);
    app.component('TextImageList', TextImageList);
    // app.component('TextTeaser', TextTeaser);
    // app.component('TileView', TileView);
    // app.component('Timeline', Timeline);
    // app.component('ToggleForm', ToggleForm);
    app.component('VFooter', VFooter);
    app.component('VHeader', VHeader);
    // app.component('VideoFrame', VideoFrame);
    // app.component('VideoInner', VideoInner);
    app.component('VImg', VImg);
    app.component('World', World);
    app.component('Wrapper', Wrapper);
    // app.component('WrapperSlotItems', WrapperSlotItems);
    // app.component('XMark', XMark);
  },
};
