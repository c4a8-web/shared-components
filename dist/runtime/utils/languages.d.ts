export default Languages;
declare class Languages {
    static capitalize(value: any): any;
    static getDisplayName(code: any, locale: any): any;
    static getNativeName(code: any): any;
    static getOptions(codes: any, locale: any): {
        code: any;
        label: any;
        native: any;
        translated: any;
    }[];
}
