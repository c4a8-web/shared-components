export default BaseComponent;
declare class BaseComponent {
    static rootSelector: string;
    static instances: any[];
    static namespacePrefix: string;
    static getInstancesKey(): string;
    static expose(instance: any): void;
    static getInstance(element: any): any;
    static initElement(element: any, options: any): BaseComponent;
    static init(element: any): void;
    constructor(root: any, options: any);
    root: any;
    options: any;
}
