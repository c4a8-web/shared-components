declare namespace _default {
    let tagName: string;
    namespace computed {
        function modalErrorValue(): any;
        function classList(): string[];
        function dialogClassList(): string[];
        function settings(): any;
        function isCenterSlim(): () => any;
        function modal(): any;
        function centerValue(): any;
        function slimValue(): any;
        function loadingValue(): any;
        function notificationValue(): boolean;
        function size(): "small" | null;
        function hasCircleAndHover(): boolean;
        function circle(): () => boolean;
        function hover(): () => boolean;
        function bodyClasses(): any;
    }
    function mounted(): void;
    function unmounted(): void;
    namespace methods {
        function isModalOpen(): boolean;
        function setModalMode(mode: any): void;
        function handleClose(): void;
        function bindEvents(): void;
        function handleMutation(): void;
        function handleLoading(e: any): void;
        function openModal(): void;
    }
    function data(): {
        observer: null;
        loading: boolean;
        blabla: string;
    };
    namespace props {
        let application: BooleanConstructor;
        let form: ObjectConstructor;
        let success: ObjectConstructor;
        let clientName: StringConstructor;
        let apiUrl: StringConstructor;
        let jobId: StringConstructor;
        let modalId: StringConstructor;
        namespace slim {
            let _default: null;
            export { _default as default };
        }
        namespace show {
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace center {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace notification {
            let _default_3: null;
            export { _default_3 as default };
        }
        let apiKey: StringConstructor;
        let mockApplyUrl: StringConstructor;
        let mockDocumentsUrl: StringConstructor;
        let modalError: ObjectConstructor;
        let content: StringConstructor;
    }
}
export default _default;
