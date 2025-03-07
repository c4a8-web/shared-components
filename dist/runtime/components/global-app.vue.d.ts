declare namespace _default {
    let tagName: string;
    function mounted(): void;
    namespace methods {
        function captureBodyMutation(): void;
        function handleBodyMutation(mutations: any): void;
        function triggerResizeEvent(): void;
    }
    namespace props {
        let classes: ArrayConstructor;
    }
    function data(): {
        lastBodyHeight: null;
    };
}
export default _default;
