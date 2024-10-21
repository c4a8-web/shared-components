export default TestimonialList;
declare class TestimonialList extends BaseComponent {
    testimonialContainer: any;
    testimonials: any;
    viewPortPercentageAtScroll: number;
    viewPortPercentageAtLoad: number;
    handleScrollEvent(): void;
    hiddenTestimonials: any;
    currentlyInViewPort(): void;
    start(): void;
}
import BaseComponent from './base-component.js.js';
