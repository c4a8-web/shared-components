export default AdBlockerBait;
declare class AdBlockerBait {
    static rootSelector: string;
    static instances: any[];
    static init(): void;
    bait(): void;
}
