declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any;
        function hasNoAnimation(): any;
        function classListTitle(): string[];
        function classListList(): string[];
        function hasActiveItem(): any;
        function isHidden(): any;
    }
    namespace watch {
        function hidden(oldValue: any, _: any): void;
    }
    function updated(): void;
    function mounted(): void;
    namespace methods {
        function bindEvents(): void;
        function handleUpdate(event: any): void;
        function isLowerBreakpoint(): boolean;
        function isExpandable(): any;
        function updateHeight(): void;
        function handleClick(event: any): void;
    }
    namespace props {
        let list: ObjectConstructor;
        let lang: StringConstructor;
        let classes: StringConstructor;
        namespace hidden {
            let _default: null;
            export { _default as default };
        }
        namespace noAnimation {
            let _default_1: null;
            export { _default_1 as default };
        }
    }
    function data(): {
        inTransition: boolean;
        isExpanded: boolean;
        parentOfParent: null;
    };
}
export default _default;
