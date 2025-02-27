declare namespace _default {
    namespace props {
        let id: StringConstructor;
        let json: ObjectConstructor;
        let headline: StringConstructor;
        let content: StringConstructor;
        let moment: StringConstructor;
        let time: StringConstructor;
        let shapes: ArrayConstructor;
        let author: ArrayConstructor;
        let image: ObjectConstructor;
        let badge: ObjectConstructor;
        let price: StringConstructor;
        let cta: ObjectConstructor;
        namespace variant {
            export let type: NumberConstructor;
            let _default: number;
            export { _default as default };
        }
        let webcast: BooleanConstructor;
        let teaser: BooleanConstructor;
        let url: StringConstructor;
        let index: NumberConstructor;
        let textShadow: BooleanConstructor;
        let bgColorRgb: StringConstructor;
        namespace lang {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
    namespace computed {
        function authorNames(): any;
        function imgSrcSets(): any;
        function computedStyles(): any;
        function eventTeaserImageFullWidth(): any;
        function ctaHref(): any;
    }
    function mounted(): void;
    namespace methods {
        function getShapeSettings(index: any, webcast: any): {
            peak: string;
            height: string;
            width: string;
            obliquity: undefined;
        };
        function clickHandler(event: any): void;
        function shapePeak(index: any): "right" | "left";
        function shapeHeight(index: any): 10 | 12;
        function shapeWidth(index: any): 237 | 80;
    }
}
export default _default;
