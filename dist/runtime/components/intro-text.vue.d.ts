declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any;
    }
    function mounted(): void;
    namespace props {
        let copy: StringConstructor;
        let variant: StringConstructor;
        let headline: StringConstructor;
        let spacing: StringConstructor;
        namespace headlineClasses {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let copyClasses: StringConstructor;
    }
}
export default _default;
