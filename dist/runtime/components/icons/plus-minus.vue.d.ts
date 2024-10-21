declare namespace _default {
    let tagName: string;
    namespace computed {
        function effectiveKeySplines(): string;
        function style(): any;
    }
    function updated(): void;
    function mounted(): void;
    namespace methods {
        function animate(mode: any, start: any): void;
    }
    namespace props {
        let settings: ObjectConstructor;
        let color: StringConstructor;
        let closed: BooleanConstructor;
    }
    function data(): {
        duration: string;
        begin: string;
        keyTimes: string;
    };
}
export default _default;
