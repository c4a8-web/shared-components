export default Analytics;
declare class Analytics {
    static rootSelector: string;
    static instances: any[];
    static isGALoaded(): boolean;
    static track(code: any, callback: any, url: any): void;
    static init(): void;
    constructor(root: any);
    root: any;
    code: any;
    parent: any;
    formInstance: import("./components/base-component.js").default;
    form: any;
    isInForm(): boolean;
    bindEvents(): void;
    handleClick(): void;
    handleSubmit(e: any): void;
    isFormValidated(e: any): any;
    track(url: any, callback: any): void;
}
