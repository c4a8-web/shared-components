declare namespace _default {
    let tagName: string;
    function data(): {
        entriesWithState: never[];
    };
    function beforeMount(): void;
    namespace computed {
        function style(): any;
        function classList(): string[];
        function headlineClasses(): any;
        function headlineLevel(): any;
    }
    namespace methods {
        function getDelay(entry: any): string;
        function handleClick(entry: any): void;
        function getElementByRef(entry: any): any;
        function afterLeave(entry: any): void;
        function enter(entry: any): void;
        function leave(entry: any): void;
    }
    namespace props {
        let headline: ObjectConstructor;
        let entries: ArrayConstructor;
        let index: NumberConstructor;
    }
}
export default _default;
