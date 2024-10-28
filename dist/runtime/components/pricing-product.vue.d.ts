declare namespace _default {
    let tagName: string;
    namespace props {
        let product: ObjectConstructor;
        let index: NumberConstructor;
        let hasAnimation: BooleanConstructor;
        let targetSelectorClass: StringConstructor;
        namespace visibleTab {
            export let type: StringConstructor;
            let _default: null;
            export { _default as default };
        }
        let pageTitle: StringConstructor;
        let selectedPlan: StringConstructor;
    }
    function mounted(): void;
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
