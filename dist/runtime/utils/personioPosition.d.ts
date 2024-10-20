export default PersonioPosition;
declare class PersonioPosition {
    constructor(position: any);
    position: any;
    translationData: any;
    get description(): any;
    hasStartingHtmlTag(text: any): boolean;
    getEnhanchedDescription(index: any, name: any, text: any): string;
    get id(): any;
    get title(): any;
    removeGenderNotations(text: any): any;
    get tags(): any;
    getTeamText(text: any): string | undefined;
    get team(): string;
    get data(): {
        id: any;
        title: any;
        description: any;
        team: string;
        position_type: any;
        tags: any;
        order: number | null;
    };
    get positionType(): any;
    get order(): number | null;
    trimNewlines(text: any): any;
    getValue(property: any, key?: string): any;
}
