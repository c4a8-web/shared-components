export default Animate;
declare class Animate {
    static easing: {
        linear(timeFraction: any): any;
        easeInOutCubic(timeFraction: any): number;
    };
    start({ duration, timing, draw }: {
        duration: any;
        timing: any;
        draw: any;
    }): void;
    requestId: number | undefined;
    pause(): void;
}
