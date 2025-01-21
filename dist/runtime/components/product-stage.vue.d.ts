declare namespace _default {
    let tagName: string;
    namespace props {
        let stage: ObjectConstructor;
        let products: ObjectConstructor;
        namespace light {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
    }
    namespace computed {
        function shapeClasses(): "position-absolute bottom-0 left-0 z-index-1 w-100" | "position-relative z-index-1";
        function cardWrapperClasses(): any;
        function bgColor(): any;
        function shape(): any;
        function cards(): any;
        function overlapping(): any;
    }
    namespace methods {
        function hasLink(card: any): boolean;
    }
}
export default _default;
