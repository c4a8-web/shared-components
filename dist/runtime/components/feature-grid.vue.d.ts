declare namespace _default {
    let tagName: string;
    namespace props {
        namespace backgroundColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let description: StringConstructor;
        let headline: StringConstructor;
        namespace gridSize {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default_1: number;
            export { _default_1 as default };
        }
        let image: ObjectConstructor;
        let features: ArrayConstructor;
        let footer: StringConstructor;
        let centered: BooleanConstructor;
        let headlineClasses: StringConstructor;
        let spacing: StringConstructor;
    }
    function mounted(): void;
    namespace computed {
        function columnClass(): any;
        function featureGridHeadlineRowClasses(): any;
        function containerClasses(): any;
        function styleObject(): any;
    }
}
export default _default;
