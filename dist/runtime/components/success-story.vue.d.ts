declare namespace _default {
    let tagName: string;
    namespace props {
        namespace successStory {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace level {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
        namespace sticky {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace spacing {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function successStorySlider(): any;
        function successStoryLevel(): any;
        function successStorySticky(): any;
        function successStorySpacing(): any;
        function successStoryHeadlineClass(): any;
        function slickOptions(): {
            rows: number;
            slidesToShow: number;
            slidesToScroll: number;
            prevArrow: string;
            nextArrow: string;
            dots: boolean;
            centerMode: boolean;
            dotsClass: string;
            responsive: {
                breakpoint: number;
                settings: {
                    centerMode: boolean;
                    infinite: boolean;
                    centerPadding: string;
                    slidesToShow: number;
                    slidesToScroll: number;
                };
            }[];
        };
    }
}
export default _default;
