declare namespace _default {
    let tagName: string;
    function data(): {
        edited: boolean;
        userValue: null;
    };
    namespace computed {
        function classList(): any;
        function showInClasses(): any;
        function groupClass(): "" | "mb-3" | "mb-8";
        function errorId(): any;
        function readonly(): any;
        function required(): any;
        function placeholder(): any;
        function value(): any;
    }
    function mounted(): void;
    namespace methods {
        function getRequiredMsg(element: any): any;
        function handleChange(e: any): void;
        function handleChangeTextarea(e: any): void;
        function handleReset(): void;
        function handleFormFieldUpdate(e: any): void;
    }
    namespace props {
        let options: ArrayConstructor;
        let field: ObjectConstructor;
        namespace id {
            let _default: null;
            export { _default as default };
        }
        namespace replaceValue {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace hasAnimation {
            let _default_2: null;
            export { _default_2 as default };
        }
        let hasError: BooleanConstructor;
    }
}
export default _default;
