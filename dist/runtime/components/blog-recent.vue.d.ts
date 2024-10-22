declare namespace _default {
    namespace components {
        export { MarkdownFiles };
    }
    let tagName: string;
    namespace computed {
        function classList(): any;
        function getSpacing(): any;
        function hasBackground(): any;
        function blogRecentContainerClass(): any;
        function hiddenContainer(): any;
        function skinClass(): any;
        function itemClass(): any;
        function postsArray(): any;
        function caseStudies(): any;
        function carouselOptions(): string;
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
        let bgColor: StringConstructor;
        let dataAuthors: ObjectConstructor;
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        let subline: StringConstructor;
        let sublineClasses: StringConstructor;
        let spacing: StringConstructor;
        namespace posts {
            export let type: (ArrayConstructor | StringConstructor)[];
            let _default: never[];
            export { _default as default };
        }
        namespace cta {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace hideContainer {
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace limit {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace slider {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace sticky {
            let _default_5: null;
            export { _default_5 as default };
        }
    }
    function data(): {
        hideData: string[];
    };
}
export default _default;
