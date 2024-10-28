declare namespace _default {
    let tagName: string;
    namespace props {
        let products: ObjectConstructor;
        let headline: StringConstructor;
        let description: StringConstructor;
        namespace bgColor {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let toggleSwitch: ObjectConstructor;
        let visibleTab: StringConstructor;
        namespace lang {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function pricingDetailTargetSelector(): any;
        function langData(): any;
        function vatInfo(): any;
        function list(): any;
        function selectedPlan(): any;
    }
}
export default _default;
