export default Loading;
declare class Loading {
    constructor(root: any, callback: any);
    root: any;
    maxShapes: number;
    loadingClass: string;
    shapeClass: string;
    bounceClasses: {
        up: string;
        down: string;
    };
    types: string[];
    colors: string[];
    currentColors: {};
    maxRuns: number;
    scaleMin: number;
    scaleMax: number;
    rotationMin: number;
    rotationMax: number;
    animationInterval: number;
    intervals: any[];
    hasShapes: boolean;
    getRandomColor(runs: any): string;
    getRandomType(): string;
    getRandomTypeClass(): string;
    getRandomScale(): number;
    getRandomRotation(): number;
    getRandomOffset(): string;
    getRandomStyle(): {
        style: string;
        color: string;
    };
    createShapes(): void;
    startAnimation(element: any): void;
    init(callback: any): any;
    on(ignoreRoot: any): void;
    clear(): void;
    off(force: any, ignoreRoot: any): void;
}
