export default PricingSlider;
declare class PricingSlider extends BaseComponent {
    selectedValue: number;
    products: any;
    range: any;
    priceFormatter: Intl.NumberFormat;
    selectedPlan: any;
    currentPrice: number;
    init(): void;
    bindEvents(): void;
    handleInfoClick(): void;
    /**
     *
     * @param {object} slider contains from value
     * @param {boolean} updateElements standard is true, maybe overidden for return value
     * @returns price if updateElements is false
     */
    handlePricingSlider({ from }: object): void;
    getRecommendedProduct(selectedValue: any): null | undefined;
    formatExtraUsers(extraUsers: any): string;
    prepare(slider: any): void;
    fixText(): void;
    updateElements(price: any, product: any, extra: any): void;
}
import BaseComponent from './base-component.js.js';
