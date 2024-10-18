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
    };
    function mounted(): void;
    namespace methods {
        function setStyle(): void;
        function setIntroStyle(): void;
        function handleLetterSwitcherEnded(): void;
    }
    namespace computed {
        function classList(): any[];
        function contentClassList(): (string | (() => any))[];
        function cta(): any;
        function isLight(): any;
        function isLightOverline(): any;
        function background(): any;
        function bgColor(): any;
        function bgWidth(): any;
        function overline(): any;
        function overlineBgColor(): any;
        function subline(): any;
        function headlineText(): any;
        function headlineClasses(): any;
        function headlineClassList(): (string | (() => any))[];
        function textShadow(): any;
        function level(): any;
        function animation(): any;
        function letterSwitcher(): any;
        function icon(): any;
        function fullscreen(): any;
        function spacing(): any;
        function img(): any;
        function hasStickyScroller(): any;
        function lottieSettings(): any;
        function lottieFileData(): any;
        function showShape(): any;
        function shape(): any;
        function shapeFullscreen(): any;
        function shapeBottom(): any;
        function shapeTop(): any;
        function shapePosition(): "hero--shape-top" | "hero--shape-bottom" | "hero--shape-center" | null;
        function shapeInContent(): any;
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
