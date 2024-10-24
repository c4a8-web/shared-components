declare namespace _default {
    namespace components {
        export { MarkdownFiles };
    }
    let tagName: string;
    namespace computed {
        function classList(): any;
        function query(): {
            path: string;
            limit: number;
            sort: {
                date: number;
            }[];
        };
        function getSpacing(): any;
        function hasBackground(): any;
        function blogRecentContainerClass(): any;
        function hiddenContainer(): any;
        function skinClass(): any;
        function itemClass(): string;
        function postsArray(): any;
        function carouselOptions(): any;
        function headlineLevelValue(): any;
        function headlineClassesValue(): any;
        function sublineClassesValue(): string;
        function imgUrl(): string;
    }
    function mounted(): void;
    namespace methods {
        function event(post: any): boolean;
        function blogTitleUrl(post: any): any;
        function target(post: any): "_blank" | "_self";
    }
    namespace props {
        namespace bgColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let dataAuthors: ObjectConstructor;
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        let subline: StringConstructor;
        let sublineClasses: StringConstructor;
        let spacing: StringConstructor;
        namespace posts {
            let type_1: (ArrayConstructor | StringConstructor)[];
            export { type_1 as type };
            let _default_1: never[];
            export { _default_1 as default };
        }
        namespace cta {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace hideContainer {
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace limit {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace slider {
            let _default_5: null;
            export { _default_5 as default };
        }
        let sliderOptions: ObjectConstructor;
        namespace sticky {
            let _default_6: null;
            export { _default_6 as default };
        }
        let events: BooleanConstructor;
        let combine: BooleanConstructor;
        let caseStudies: BooleanConstructor;
    }
    function data(): {
        hideData: string[];
        hasEvents: boolean;
        hasCaseStudies: boolean;
    };
}
export default _default;
