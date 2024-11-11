export function defaultOptions({ length, centerPadding }: {
    length: any;
    centerPadding: any;
}): {
    rows: number;
    slidesToShow: number;
    slidesToScroll: number;
    prevArrow: string;
    nextArrow: string;
    dots: boolean;
    centerMode: boolean;
    dotsClass: string;
    responsive: ({
        breakpoint: number;
        settings: {
            slidesToShow: number;
            slidesToScroll: number;
            centerMode?: undefined;
            infinite?: undefined;
            centerPadding?: undefined;
            dots?: undefined;
        };
    } | {
        breakpoint: number;
        settings: {
            centerMode: boolean;
            infinite: boolean;
            centerPadding: any;
            slidesToShow: number;
            slidesToScroll: number;
            dots: boolean;
        };
    })[];
};
declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any;
        function jsonOptions(): any;
        function getSpacing(): any;
        function headlineLevelValue(): any;
        function headlineClassesValue(): any;
        function centerPaddingValue(): any;
        function carouselOptions(): (() => any) | {
            rows: number;
            slidesToShow: number;
            slidesToScroll: number;
            prevArrow: string;
            nextArrow: string;
            dots: boolean;
            centerMode: boolean;
            dotsClass: string;
            responsive: ({
                breakpoint: number;
                settings: {
                    slidesToShow: number;
                    slidesToScroll: number;
                    centerMode?: undefined;
                    infinite?: undefined;
                    centerPadding?: undefined;
                    dots?: undefined;
                };
            } | {
                breakpoint: number;
                settings: {
                    centerMode: boolean;
                    infinite: boolean;
                    centerPadding: any;
                    slidesToShow: number;
                    slidesToScroll: number;
                    dots: boolean;
                };
            })[];
        } | null;
        function childrenLength(): number;
        function children(): any;
        function hideBackgroundValue(): boolean;
        function hideContainerValue(): boolean;
        function backgroundClass(): string;
        function backgroundColor(): any;
        function style(): {
            'background-color': () => any;
        } | undefined;
    }
    function mounted(): void;
    function data(): {
        defaultBgColor: string;
    };
    namespace props {
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        let spacing: StringConstructor;
        let subline: StringConstructor;
        namespace hideContainer {
            let _default: boolean;
            export { _default as default };
        }
        namespace hideBackground {
            let _default_1: boolean;
            export { _default_1 as default };
        }
        let bgColor: StringConstructor;
        let centerPadding: NumberConstructor;
        let options: ObjectConstructor;
    }
}
export default _default;
