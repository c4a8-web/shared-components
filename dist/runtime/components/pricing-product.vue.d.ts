declare namespace _default {
    namespace props {
        let product: ObjectConstructor;
        let index: NumberConstructor;
        let hasAnimation: BooleanConstructor;
        namespace targetSelectorClass {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace visibleTab {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        let pageTitle: StringConstructor;
        let defaultPlan: StringConstructor;
    }
    namespace computed {
        function title(): any;
        function description(): any;
        function price(): any;
        function additionalUsersFee(): any;
        function buttons(): any;
        function includedTargetSelectorClass(): any;
        function computedTargetSelectorClass(): any;
        function visibleTabExpression(): any;
        function filterExpression(): (item: any) => any;
        function filteredButtons(): any;
        function visibleTabButtons(): any;
        function buttonClasses(): string[];
        function pricingProductClasses(): string[];
        function pricingProductPriceColumns(): string[];
    }
}
export default _default;
