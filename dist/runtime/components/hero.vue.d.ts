declare namespace _default {
    let tagName: string;
    let components: {
        'hero-pattern': {
            tagName: string;
            template: string;
        };
    };
    function data(): {
        introHeight: null;
        style: null;
        isUpperBreakpoint: null;
    };
    function created(): void;
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function handleResize(): void;
        function setStyle(): void;
        function setIntroStyle(): void;
        function handleLetterSwitcherEnded(): void;
    }
    namespace computed {
        function classList(): any;
        function shape(): any;
        function overlineClassList(): string[];
        function contentClassList(): (string | (() => any))[];
        function cta(): any;
        function isLight(): any;
        function isLightOverline(): any;
        function background(): any;
        function bgColor(): any;
        function bgWidth(): any;
        function overline(): any;
        function overlineBgColor(): any;
        function overlineFull(): any;
        function subline(): any;
        function headlineText(): any;
        function headlineClasses(): any;
        function headlineClassList(): (string | (() => any))[];
        function textShadow(): any;
        function level(): any;
        function animation(): any;
        function letterSwitcher(): any;
        function icon(): any;
        function fullscreen(): boolean;
        function spacing(): any;
        function img(): any;
        function hasStickyScroller(): any;
        function lottieSettings(): any;
        function lottieFileData(): any;
        function showShape(): any;
        function shapeFullscreen(): boolean;
        function shapeOffsetY(): any;
        function shapeOffsetX(): any;
        function shapeStyle(): {
            '--hero-shape-offset-y': () => any;
            '--hero-shape-offset-x': () => any;
        };
        function shapeBottom(): any;
        function shapeTop(): any;
        function shapeMobileOrder(): any;
        function shapePosition(): "hero--shape-top" | "hero--shape-bottom" | "hero--shape-center" | null;
        function shapeInContentMobile(): boolean;
        function shapeInContentValue(): boolean;
        function shapeInContent(): boolean;
        function shapeClasses(): any;
        function variant(): any;
        function pattern(): any;
        function ctaList(): any;
        function showShapeContainer(): () => any;
        function isCentered(): boolean;
        function isSmall(): boolean;
        function imgSrcSets(): "heroStudy" | null;
        function badges(): any;
        function hasBack(): any;
        function heroJson(): any;
    }
    namespace props {
        let hero: ObjectConstructor;
        let lottieData: StringConstructor;
    }
}
export default _default;
