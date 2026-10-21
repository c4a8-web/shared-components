declare namespace _default {
    namespace components {
        export { MarkdownFiles };
    }
    let tagName: string;
    function data(): {
        hideData: string[];
        filesValue: never[];
        isMounted: boolean;
    };
    function setup(): {
        config: {};
        strategy: any;
    };
    namespace computed {
        function classList(): (string | (() => any))[];
        function showComponent(): true | (() => {
            limit: any;
            sort: any;
            reversed: any;
            where: {
                layout: {
                    IN: string[];
                };
                path?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                layout?: undefined;
                path?: undefined;
            };
            path: string;
            limitEvents: any;
        });
        function query(): {
            limit: any;
            sort: any;
            reversed: any;
            where: {
                layout: {
                    IN: string[];
                };
                path?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                path: {
                    LIKE: string[];
                };
                layout?: undefined;
            } | {
                layout?: undefined;
                path?: undefined;
            };
            path: string;
            limitEvents: any;
        };
        function getSpacing(): any;
        function hasBackground(): string;
        function blogRecentContainerClass(): string[];
        function hiddenContainer(): any;
        function skinClass(): string;
        function itemClass(): string;
        function postsArray(): any;
        function carouselOptions(): any;
        function headlineLevelValue(): any;
        function headlineClassesValue(): any;
        function sublineClassesValue(): string;
        function imgUrl(): any;
    }
    namespace watch {
        function filesValue(newValue: any): void;
    }
    function mounted(): void;
    namespace methods {
        function scheduleInit(): void;
        function init(): void;
        function event(post: any): boolean;
        function blogTitleUrl(post: any): any;
        function target(post: any): "_blank" | "_self";
        function postUrl(post: any): any;
        function excerpt(post: any): any;
        function updateFiles(files: any): boolean;
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
        let limitEvents: NumberConstructor;
        namespace limit {
            let type_2: NumberConstructor;
            export { type_2 as type };
            let _default_4: number;
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
        let reversed: BooleanConstructor;
        namespace tag {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_7: null;
            export { _default_7 as default };
        }
    }
}
export default _default;
