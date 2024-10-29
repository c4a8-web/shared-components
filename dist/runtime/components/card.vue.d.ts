declare namespace _default {
    let tagName: string;
    function data(): {
        wordsToTruncate: number;
        activeView: null;
        imgSrcSets: null;
    };
    namespace computed {
        function blogView(): any;
        function combinedTitle(): any;
        function noLink(): any;
        function indexValue(): any;
        function style(): any;
        function hasAnimationValue(): any;
        function utilityAnimationStep(): "1" | null;
        function rowValue(): any;
        function variant(): "card--long" | "card--products" | "card--event" | "card--row" | "card--default";
        function classList(): any[];
        function productValue(): any;
        function truncatedExcerpt(): string;
        function strippedExcerpt(): any;
        function cardDate(): any;
        function hasExtension(): any;
        function hasBlogTitlePic(): boolean;
        function hasNoLink(): boolean;
        function ctaValue(): any;
        function cardFooterData(): any;
    }
    function created(): null | undefined;
    namespace methods {
        function isTags(target: any): boolean;
        function formatDate(date: any): any;
        function authorList(author: any): any;
        function subPointsList(subpoints: any): any;
        function headlineClassValue(index: any): "" | "mt-5";
        function handleClick(e: any): void;
        function isIncluded(include: any): "check-mark" | "x-mark";
    }
    namespace props {
        let blogTitlePic: StringConstructor;
        let url: StringConstructor;
        let title: StringConstructor;
        let target: StringConstructor;
        let excerpt: StringConstructor;
        namespace author {
            let type: (ArrayConstructor | StringConstructor)[];
        }
        let date: StringConstructor;
        let footer: StringConstructor;
        namespace tag {
            let _default: null;
            export { _default as default };
        }
        namespace large {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace long {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace product {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace subPoints {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace event {
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace webCast {
            let _default_6: null;
            export { _default_6 as default };
        }
        let youtubeUrl: StringConstructor;
        let dataAuthors: ObjectConstructor;
        let scope: StringConstructor;
        namespace cta {
            let _default_7: null;
            export { _default_7 as default };
        }
        namespace hasAnimation {
            let _default_8: null;
            export { _default_8 as default };
        }
        let index: NumberConstructor;
        let externalLanguage: StringConstructor;
        let spacing: StringConstructor;
        namespace store {
            let _default_9: null;
            export { _default_9 as default };
        }
        namespace row {
            let _default_10: null;
            export { _default_10 as default };
        }
        let tags: ArrayConstructor;
    }
}
export default _default;
