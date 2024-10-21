export default HeroTextImage;
declare class HeroTextImage extends BaseComponent {
    videoSelector: string;
    videoAnimatinoSelector: string;
    ctaSelector: string;
    videos: any;
    ctaList: any;
    classList: any;
    animationDelay: number;
    init(): void;
    isSecurity(): any;
    isCareer(): any;
    bindEvents(): void;
    isValidSelector(href: any): boolean;
    handleClick(e: any): void;
    playDelayed(): void;
}
import BaseComponent from './base-component.js.js';
