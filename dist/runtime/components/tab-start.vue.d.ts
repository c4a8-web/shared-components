declare namespace _default {
    let tagName: string;
    namespace props {
        let id: StringConstructor;
        let open: BooleanConstructor;
        let headlineText: StringConstructor;
        namespace headlineLevel {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let headlineClasses: StringConstructor;
    }
    namespace computed {
        function classList(): any;
        function headlineClassList(): any;
    }
}
export default _default;
