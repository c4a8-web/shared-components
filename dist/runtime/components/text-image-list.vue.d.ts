declare namespace _default {
    let tagName: string;
    namespace props {
        let textImages: ArrayConstructor;
        let classes: StringConstructor;
        let headline: StringConstructor;
        namespace level {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let headlineColor: StringConstructor;
        let headlineSticky: BooleanConstructor;
        namespace bgColor {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        let spacing: StringConstructor;
    }
    namespace methods {
        function isLeft(index: any): boolean;
    }
    namespace computed {
        function textImageListSize(): any;
    }
}
export default _default;
