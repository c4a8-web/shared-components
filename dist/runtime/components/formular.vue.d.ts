declare namespace _default {
    let tagName: string;
    function data(): {
        originalAction: string;
        formAction: string;
        formInstance: null;
        novalidateValue: null;
        errors: never[];
    };
    namespace computed {
        function classList(): any;
        function novalidate(): any;
        function hasAnimationValue(): any;
        function rowClassList(): any;
        function wrapperClassList(): any;
        function headlineClassList(): any;
        function sublineClassList(): any;
        function formClassList(): string[];
        function positionValue(): any;
        function method(): any;
        function preparedBlocks(): any[];
    }
    function created(): void;
    function mounted(): void;
    namespace methods {
        function hasError(field: any): any;
        function getOptions(field: any): any;
        function getBlockClassList(block: any): string[];
        function getFieldClassList(field: any): string[];
        function getId(field: any): any;
        function updateAction(newAction: any): void;
        function handleSubmit(e: any): any;
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
    }
}
export default _default;
