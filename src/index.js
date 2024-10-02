import './assets/front/dist/assets/vendor/leaflet/dist/leaflet.css';
import './assets/front/dist/assets/css/theme.min.css';
import './assets/front/dist/assets/vendor/slick-carousel/slick/slick.css';
import './assets/front/dist/assets/vendor/fontawesome/css/all.min.css';
import './assets/front/dist/assets/vendor/@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import './assets/front/dist/assets/vendor/ion-range-slider/ion.rangeSlider.min.css';
import './assets/front/dist/assets/css/theme.min.css';
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

// import Accordion from './components/accordion.js';
// import AdBlockInfo from './components/ad-block-info.js';
// import Arrow from './components/icons/arrow.js';
// import ArrowCurl from './components/icons/arrow-curl.js';
// import ArrowExternal from './components/icons/arrow-external.js';
// import ArrowNarrow from './components/icons/arrow-narrow.js';
// import AsideWrapper from './components/aside-wrapper.js';
// import AuthorAvatar from './components/author-avatar.js';
// import AuthorHeader from './components/author-header.js';
// import Authors from './components/authors.js';
// import Awards from './components/awards.js';
// import BackToTop from './components/back-to-top.js';
// import Badge from './components/badge.js';
// import Bin from './components/icons/bin.js';
// import Blog from './components/blog.js';
// import BlogRecent from './components/blog-recent.js';
// import Card from './components/card.js';
import Carousel from './components/carousel.vue';
// import Check from './components/icons/check.js';
// import CheckCard from './components/check-card.js';
// import CheckMark from './components/icons/check-mark.js';
// import Close from './components/icons/close.js';
// import ComputerShield from './components/icons/computer-shield.js';
import Contact from './components/contact.vue';
// import ContentScroller from './components/content-scroller.js';
import Cta from './components/cta.vue';
import CtaList from './components/cta-list.js';
// import Dropdown from './components/dropdown.js';
// import EmailActionUnread from './components/icons/email-action-unread.js';
// import Emergency from './components/icons/emergency.js';
// import Event from './components/event.js';
// import EventOverview from './components/event-overview.js';
// import EventTeaser from './components/event-teaser.js';
// import Expand from './components/icons/expand.js';
// import FabButton from './components/fab-button.js';
// import FabHint from './components/fab-hint.js';
// import Faq from './components/faq.js';
// import FeatureGrid from './components/feature-grid.js';
// import FeatureGridItem from './components/feature-grid-item.js';
// import FeatureList from './components/feature-list.js';
// import FilterBar from './components/filter-bar.js';
// import FormAttachments from './components/form-attachments.js';
// import FormCheckbox from './components/form-checkbox.js';
// import FormCheckboxes from './components/form-checkboxes.js';
// import FormFields from './components/form-fields.js';
// import FormRadio from './components/form-radio.js';
// import FormRadios from './components/form-radios.js';
// import FormSelect from './components/form-select.js';
// import Formular from './components/formular.js';
// import Globals from './components/globals.js';
// import GoogleMap from './components/google-map.js';
// import GoogleMapEntry from './components/google-map-entry.js';
// import Grid from './components/grid.js';
// import GridList from './components/grid-list.js';
// import Hand from './components/icons/hand.js';
import Headline from './components/headline.vue';
import HeadlineRow from './components/headline-row.vue';
import Hero from './components/hero.vue';
// import HeroTextImage from './components/hero-text-image.js';
import Icon from './components/icon.vue';
// import IconBlocks from './components/icon-blocks.js';
// import ImageBlock from './components/image-block.js';
// import ImageCredits from './components/icons/image-credits.js';
// import ImageList from './components/image-list.js';
// import Img from './components/img.js';
// import ImgFilter from './components/img-filter.js';
// import Info from './components/icons/info.js';
import IntroText from './components/intro-text.vue';
import Test from './components/test.vue';
// import JobList from './components/job-list.js';
// import JobListDetail from './components/job-list-detail.js';
// import JobListEntry from './components/job-list-entry.js';
// import LBlock from './components/shapes/l-block.js';
// import LetterSwitcher from './components/letter-switcher.js';
// import LinkList from './components/link-list.js';
// import List from './components/list.js';
// import ListContainer from './components/list-container.js';
// import ListView from './components/icons/list-view.js';
// import LogoList from './components/logo-list.js';
import Lottie from './components/lottie.vue';
// import Magnifier from './components/icons/magnifier.js';
// import Mail from './components/icons/mail.js';
// import Meerkat from './components/icons/meerkat.js';
// import Menu from './components/icons/menu.js';
// import Minus from './components/icons/minus.js';
// import Modal from './components/modal.js';
// import ModalApplication from './components/modal-application.js';
// import PeopleSquare from './components/people-square.js';
// import PersonQuote from './components/person-quote.js';
// import Phone from './components/icons/phone.js';
// import PhoneCharger from './components/icons/phone-charger.js';
// import PhoneMail from './components/icons/phone-mail.js';
// import Pin from './components/icons/pin.js';
// import Plus from './components/icons/plus.js';
// import PlusMinus from './components/icons/plus-minus.js';
// import PostTeaser from './components/post-teaser.js';
// import PricingProduct from './components/pricing-product.js';
import ProductBlocks from './components/product-blocks.vue';
// import ProductStage from './components/product-stage.js';
// import Quotes from './components/quotes.js';
// import Rocket from './components/icons/rocket.js';
// import SBlock from './components/shapes/s-block.js';
// import Screenshot from './components/screenshot.js';
// import ScrollArrow from './components/scroll-arrow.js';
// import Search from './components/search.js';
// import Services from './components/services.js';
// import Shape from './components/shape.js';
// import ShapeAnimation from './components/shape-animation.js';
// import ShapeCircleWithinSquare from './components/shape-circle-within-square.js';
// import ShapeFastForward from './components/shape-fast-forward.js';
// import ShapeFourSquares from './components/shape-four-squares.js';
// import ShapeFourTriangles from './components/shape-four-triangles.js';
// import ShapeHalfSquare from './components/shape-half-square.js';
// import ShapeMovingEye from './components/shape-moving-eye.js';
// import ShapeSecurityEye from './components/shape-security-eye.js';
// import ShapeSemiCircle from './components/shape-semi-circle.js';
// import ShapeSquareCircle from './components/shape-square-circle.js';
// import ShapeTrianglesToCenter from './components/shape-triangles-to-center.js';
import SiteIcons from './components/site-icons.vue';
// import Slider from './components/slider.js';
// import SlotItems from './components/slot-items.js';
// import Smile from './components/icons/smile.js';
// import Socials from './components/socials.js';
// import Square from './components/shapes/square.js';
// import StepList from './components/step-list.js';
// import StrategySplit from './components/icons/strategy-split.js';
// import SuccessStory from './components/success-story.js';
import SvgShape from './components/svg-shape.vue';
// import TabList from './components/tab-list.js';
// import Tag from './components/tag.js';
// import TagCloud from './components/tag-cloud.js';
// import TBlock from './components/shapes/t-block.js';
// import Teaser from './components/teaser.js';
// import TestimonialList from './components/testimonial-list.js';
// import TestimonialsDetail from './components/testimonials-detail.js';
// import TestimonialsSlider from './components/testimonials-slider.js';
// import TestimonialTeaser from './components/testimonial-teaser.js';
// import TextAnimation from './components/text-animation.js';
// import TextIconAnimation from './components/text-icon-animation.js';
import TextImage from './components/text-image.vue';
// import TextImageList from './components/text-image-list.js';
// import TextTeaser from './components/text-teaser.js';
// import TileView from './components/icons/tile-view.js';
// import Timeline from './components/timeline.js';
// import ToggleForm from './components/toggle-form.js';
import VFooter from './components/v-footer.vue';
import VHeader from './components/v-header.vue';
// import VideoFrame from './components/video-frame.js';
// import VideoInner from './components/video-inner.js';
import VImg from './components/v-img.vue';
import World from './components/icons/world.vue';
// import Wrapper from './components/wrapper.js';
// import WrapperSlotItems from './components/wrapper-slot-items.js';
// import XMark from './components/icons/x-mark.js';

export {
  // Accordion,
  // AdBlockInfo,
  // Arrow,
  // ArrowCurl,
  // ArrowExternal,
  // ArrowNarrow,
  // AsideWrapper,
  // AuthorAvatar,
  // AuthorHeader,
  // Authors,
  // Awards,
  // BackToTop,
  // Badge,
  // Bin,
  // Blog,
  // BlogRecent,
  // Card,
  Carousel,
  // Check,
  // CheckCard,
  // CheckMark,
  // Close,
  // ComputerShield,
  Contact,
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
  // Faq,
  // FeatureGrid,
  // FeatureGridItem,
  // FeatureList,
  // FilterBar,
  // FormAttachments,
  // FormCheckbox,
  // FormCheckboxes,
  // FormFields,
  // FormRadio,
  // FormRadios,
  // FormSelect,
  // Formular,
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
  Test,
  IntroText,
  // JobList,
  // JobListDetail,
  // JobListEntry,
  // LBlock,
  // LetterSwitcher,
  // LinkList,
  // List,
  // ListContainer,
  // ListView,
  // LogoList,
  Lottie,
  // Magnifier,
  // Mail,
  // Meerkat,
  // Menu,
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
  // ProductStage,
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
  // SlotItems,
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
  // TextImageList,
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
  // Wrapper,
  // WrapperSlotItems,
  // XMark,
};

export default {
  install(app) {
    // app.component('Accordion', Accordion);
    // app.component('AdBlockInfo', AdBlockInfo);
    // app.component('Arrow', Arrow);
    // app.component('ArrowCurl', ArrowCurl);
    // app.component('ArrowExternal', ArrowExternal);
    // app.component('ArrowNarrow', ArrowNarrow);
    // app.component('AsideWrapper', AsideWrapper);
    // app.component('AuthorAvatar', AuthorAvatar);
    // app.component('AuthorHeader', AuthorHeader);
    // app.component('Authors', Authors);
    // app.component('Awards', Awards);
    // app.component('BackToTop', BackToTop);
    // app.component('Badge', Badge);
    // app.component('Bin', Bin);
    // app.component('Blog', Blog);
    // app.component('BlogRecent', BlogRecent);
    // app.component('Card', Card);
    app.component('Carousel', Carousel);
    // app.component('Check', Check);
    // app.component('CheckCard', CheckCard);
    // app.component('CheckMark', CheckMark);
    // app.component('Close', Close);
    // app.component('ComputerShield', ComputerShield);
    app.component('Contact', Contact);
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
    // app.component('Faq', Faq);
    // app.component('FeatureGrid', FeatureGrid);
    // app.component('FeatureGridItem', FeatureGridItem);
    // app.component('FeatureList', FeatureList);
    // app.component('FilterBar', FilterBar);
    // app.component('FormAttachments', FormAttachments);
    // app.component('FormCheckbox', FormCheckbox);
    // app.component('FormCheckboxes', FormCheckboxes);
    // app.component('FormFields', FormFields);
    // app.component('FormRadio', FormRadio);
    // app.component('FormRadios', FormRadios);
    // app.component('FormSelect', FormSelect);
    // app.component('Formular', Formular);
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
    app.component('Test', Test);
    app.component('IntroText', IntroText);
    // app.component('JobList', JobList);
    // app.component('JobListDetail', JobListDetail);
    // app.component('JobListEntry', JobListEntry);
    // app.component('LBlock', LBlock);
    // app.component('LetterSwitcher', LetterSwitcher);
    // app.component('LinkList', LinkList);
    // app.component('List', List);
    // app.component('ListContainer', ListContainer);
    // app.component('ListView', ListView);
    // app.component('LogoList', LogoList);
    app.component('Lottie', Lottie);
    // app.component('Magnifier', Magnifier);
    // app.component('Mail', Mail);
    // app.component('Meerkat', Meerkat);
    // app.component('Menu', Menu);
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
    // app.component('ProductStage', ProductStage);
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
    // app.component('SlotItems', SlotItems);
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
    // app.component('TextImageList', TextImageList);
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
    // app.component('Wrapper', Wrapper);
    // app.component('WrapperSlotItems', WrapperSlotItems);
    // app.component('XMark', XMark);
  },
};
