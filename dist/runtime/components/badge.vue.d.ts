declare namespace _default {
    let tagName: string;
    namespace props {
        let text: StringConstructor;
        let overlapping: BooleanConstructor;
        let icon: StringConstructor;
        namespace color {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace textColor {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        let uppercase: BooleanConstructor;
        let classes: StringConstructor;
    }
    namespace computed {
        function classList(): any;
        function style(): any;
    }
}
export default _default;
