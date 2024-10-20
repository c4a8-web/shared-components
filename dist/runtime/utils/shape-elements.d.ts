export default ShapeElements;
declare class ShapeElements {
    constructor({ tagName, elements, begin }: {
        tagName: any;
        elements: any;
        begin: any;
    });
    tagName: any;
    elements: any;
    begin: any;
    tagNameId: string;
    createStepNames(sequence: any): any;
    getSequence(): any;
    getStepBegin(sequence: any, step: any): string;
    getWaitForName(sequence: any, waitFor: any): string;
    getStepId(step: any): string;
    createTagNameId(): string;
}
