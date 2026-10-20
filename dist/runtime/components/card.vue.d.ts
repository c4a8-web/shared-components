declare namespace _default {
    let tagName: string;
    function data(): {
        wordsToTruncate: number;
        activeView: null;
        imgSrcSets: null;
    };
    namespace computed {
        function datePublished(): any;
        function blogView(): any;
        function combinedTitle(): string;
        function noLink(): boolean;
        function indexValue(): any;
        function style(): string | null;
        function hasAnimationValue(): boolean;
        function utilityAnimationStep(): "1" | null;
        function rowValue(): boolean;
        function variant(): "card--long" | "card--products" | "card--event" | "card--row" | "card--default";
        function classList(): any[];
        function productValue(): any;
        function truncatedExcerpt(): any;
        function strippedExcerpt(): string | undefined;
        function cardDate(): any;
        function hasExtension(): any;
        function hasBlogTitlePic(): boolean;
        function hasNoLink(): boolean;
        function ctaValue(): any;
        function cardFooterData(): any;
    }
    function created(): void;
    function mounted(): void;
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
        let overline: StringConstructor;
        let underline: StringConstructor;
        let steps: ArrayConstructor;
        namespace color {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace accentColor {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        let blogtitlepic: StringConstructor;
        let url: StringConstructor;
        let title: StringConstructor;
        let target: StringConstructor;
        let excerpt: StringConstructor;
        namespace author {
            let type_2: (ArrayConstructor | StringConstructor)[];
            export { type_2 as type };
        }
        let date: StringConstructor;
        let footer: StringConstructor;
        namespace tag {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace large {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace long {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace product {
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace subPoints {
            let _default_6: null;
            export { _default_6 as default };
        }
        namespace event {
            let _default_7: null;
            export { _default_7 as default };
        }
        namespace webcast {
            let _default_8: null;
            export { _default_8 as default };
        }
        let youtubeUrl: StringConstructor;
        let dataAuthors: ObjectConstructor;
        let scope: StringConstructor;
        namespace cta {
            let _default_9: null;
            export { _default_9 as default };
        }
        namespace hasAnimation {
            let _default_10: null;
            export { _default_10 as default };
        }
        let index: NumberConstructor;
        let externalLanguage: StringConstructor;
        let spacing: StringConstructor;
        namespace store {
            let _default_11: null;
            export { _default_11 as default };
        }
        namespace row {
            let _default_12: null;
            export { _default_12 as default };
        }
        let tags: ArrayConstructor;
        namespace hasNoAspectRatio {
            let type_3: BooleanConstructor;
            export { type_3 as type };
        }
        let logo: ObjectConstructor;
        let img: StringConstructor;
        let cloudinary: BooleanConstructor;
        let alt: StringConstructor;
    }
}
export default _default;
