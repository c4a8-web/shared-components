declare namespace _default {
    let tagName: string;
    namespace props {
        namespace quotes {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace spacing {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: string;
            export { _default as default };
        }
        namespace noFullscreen {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace overlapping {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function quotesSpacing(): any;
        function quotesNoFullscreen(): any;
        function quotesImagesCount(): any;
        function quotesImage(): any;
        function quotesSlidesToShow(): 1 | 1.05;
        function quotesColSize(): number;
        function slickOptions(): any;
    }
}
export default _default;
