declare namespace _default {
    let emits: string[];
    let tagName: string;
    function data(): {
        originalAction: string;
        formAction: string;
        formInstance: null;
        novalidateValue: null;
        errors: never[];
        siteKey: null;
        loadingDelay: number;
        sleepDelay: number;
        loading: {};
        hasLoading: boolean;
        hasLoader: boolean;
        turnstileReady: boolean;
        isSubmitted: boolean;
    };
    function setup(): {
        config: {};
        formId: string;
    };
    namespace computed {
        function loaderClasses(): string[];
        function classList(): string[];
        function hasSuccessSlot(): boolean;
        function reCaptchaField(): any;
        function novalidate(): any;
        function hasAnimationValue(): boolean;
        function rowClassList(): string[];
        function wrapperClassList(): string[];
        function headlineClassList(): string[];
        function sublineClassList(): string[];
        function formClassList(): string[];
        function positionValue(): any;
        function method(): any;
        function preparedBlocks(): any[];
    }
    function mounted(): void;
    function beforeUnmount(): void;
    namespace methods {
        function startLoading(): void;
        function stopLoading(): void;
        function handleAjaxSuccess(): void;
        function animateHeight(element: any, startHeight: any): void;
        function handleAjaxError(error: any): void;
        function getTranslatedText(text: any): any;
        function hasError(field: any): any;
        function getOptions(field: any): any;
        function getBlockClassList(block: any): string[];
        function getFieldClassList(field: any): string[];
        function getFieldId(field: any): any;
        function getId(field: any): any;
        function getName(field: any): any;
        function updateAction(newAction: any): void;
        function handleSubmit(e: any): void;
        function handleFormFieldUpdate(e: any): void;
        function validateField(field: any): boolean;
        function addFieldValid(field: any): void;
        function removeFieldError(field: any): void;
        function addFieldError(field: any): void;
        function validate(): boolean;
    }
    namespace props {
        let form: ObjectConstructor;
        namespace light {
            let _default: null;
            export { _default as default };
        }
        namespace analytics {
            let _default_1: null;
            export { _default_1 as default };
        }
        let space: StringConstructor;
        namespace container {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace ajax {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace uncentered {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace replaceValue {
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace customValidation {
            let _default_6: null;
            export { _default_6 as default };
        }
        let options: ObjectConstructor;
        namespace hasUuid {
            let _default_7: null;
            export { _default_7 as default };
        }
        namespace hasAnimation {
            let _default_8: null;
            export { _default_8 as default };
        }
        namespace useTranslation {
            export let type: BooleanConstructor;
            let _default_9: boolean;
            export { _default_9 as default };
        }
        namespace hasRecaptcha {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_10: boolean;
            export { _default_10 as default };
        }
        namespace odoo {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_11: boolean;
            export { _default_11 as default };
        }
        namespace showLoader {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_12: boolean;
            export { _default_12 as default };
        }
    }
}
export default _default;
