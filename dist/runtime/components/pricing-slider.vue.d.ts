declare namespace _default {
    let tagName: string;
    namespace props {
        let slider: ObjectConstructor;
        let tooltip: StringConstructor;
        let modalId: StringConstructor;
        let products: ObjectConstructor;
    }
    function data(): {
        loading: boolean;
        options: {
            type: string;
            hide_min_max: boolean;
            foreground_target_el: null;
            secondary_target_el: null;
            secondary_val: {
                steps: null;
                values: null;
            };
            result_max_target_el: null;
            hide_from_to: boolean;
            result_min_target_el: string;
            extra_classes: string;
        };
    };
    function mounted(): any;
    namespace computed {
        function pricingSliderRange(): any;
        function hsIonRangeSliderOptions(): any;
    }
    namespace methods {
        function handleRangeSliderStart(slider: any): void;
        function handleRangeSliderChange(slider: any): void;
        function bindEvents(): void;
        function initRangeSlider(): void;
    }
}
export default _default;
