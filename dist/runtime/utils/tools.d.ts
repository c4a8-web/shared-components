export default Tools;
declare class Tools {
    static defaultLang: string;
    static urlSeperator: string;
    static priceFormatter: Intl.NumberFormat;
    static storagePrefix: string;
    static storybookPath: string;
    static decodeHTML: (input: any) => string;
    static intersection: (r1: any, r2: any) => number;
    static isInViewportPercent(element: any, percent: any): boolean;
    static getScrollTop(element: any): number | undefined;
    static scrollIntoView(element: any, smooth: any): void;
    static getLang(): string;
    static isNotDefaultLang(): boolean;
    static scrollToTop(): void;
    static getParentComponent(element: any): any;
    static getParent(element: any, selector: any): any;
    static append(element: any, html: any): any;
    static replace(element: any, newElement: any): void;
    static generateUrl(title: any, prefix: any, id: any): string | undefined;
    static toBase64(file: any): Promise<any>;
    static toSize(bytes: any): string;
    static camalCaseToSnakeCase(camalCase: any): any;
    static animateValue(element: any, start: any, end: any, duration: any, formatter?: Intl.NumberFormat): void;
    static debounce: (func: any, wait: any, immediate: any) => (...args: any[]) => void;
    static isOutsideOf(name: any, e: any): boolean;
    static getExtension(fileName: any): any;
    static validateVueProps(component: any): {
        props: {};
    };
    static isTrue(value: any): boolean;
    static capitalize(string: any): any;
    static sleep(milliseconds: any): Promise<any>;
    static randomRange(from: any, to: any): number;
    static uuid(): string;
    static getBreakpoint(): string;
    static isBelowBreakpoint(breakpoint: any): boolean;
    static isUpperBreakpoint(): boolean;
    static getYoutubeThumbnail(videoURL: any): string;
    static truncateWords(string: any, number: any): any;
    static stripHtml(string: any): any;
    static isGermanDate(date: any): boolean;
    static isStorybook(): boolean;
    static isTestingStorybook(): boolean;
    static getSiteAssetPath(path: any): any;
    static getAssetPath(path: any): string;
    static findRecursive(obj: any, matcher: any, callback: any): undefined;
    static storageSave(key: any, value: any, stringify?: boolean): void;
    static storageGet(key: any): string | null;
    static getJSON(data: any): any;
    static getElementBgColor(element: any): string | null | undefined;
    static isValidTimeFormat(timeStr: any): boolean;
    static standardizeTimeFormat(time: any): any;
    static convertToDate(dateStr: any): Date | null;
    static XMLtoJSON(xml: any): {
        '@attributes': {};
    };
    static hasFontSizeClass(classes: any): boolean;
    static red(hex: any): number;
    static green(hex: any): number;
    static blue(hex: any): number;
    static hexToRgb(hex: any): string;
    static getHash(): string;
    static getConfig(): {};
    static getEnvironment(): any;
    static getCurrentPath(): string;
    static getPageTitle(): string;
    static initSlickSlider(element: any, options: any): void;
}
