export default ToggleSwitch;
declare class ToggleSwitch {
    static rootSelector: string;
    static init(): void;
    constructor(root: any);
    root: any;
    targetSelector: string;
    target: any;
    duration: number;
    parsePricingData: any;
    getTargetSelectors(element: any): any[];
    handleChange(e: any): void;
    switchButtonHrefs(element: any, state: any): void;
    pricingData(): any;
    priceFormatter(): Intl.NumberFormat;
    switchAnimation(element: any, start: any, end: any): void;
    initPrices(): void;
    switchData(element: any, state: any, pricingSwitch: any): void;
    handlePriceSwitch(currentTarget: any, state: any): void;
    handleForms(currentTarget: any, element: any): void;
    bindEvents(): void;
}
