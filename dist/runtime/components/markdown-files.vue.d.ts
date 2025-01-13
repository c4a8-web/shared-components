declare namespace _default {
    let tagName: string;
    namespace computed {
        function structuredList(): any;
    }
    namespace methods {
        function extractDate(path: any): any;
        function cleanDate(date: any): any;
    }
    namespace props {
        let list: ArrayConstructor;
        namespace hideData {
            export let type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
    }
}
export default _default;