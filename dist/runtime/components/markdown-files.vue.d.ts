declare namespace _default {
    let tagName: string;
    namespace computed {
        function structuredList(): any;
    }
    namespace methods {
        function extractDate(path: any): any;
        function getDate(dateString: any): any;
        function isDate(dateString: any): boolean | null;
        function cleanDate(date: any): any;
    }
    namespace props {
        let list: ArrayConstructor;
        namespace hideData {
            export let type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        let sort: ObjectConstructor;
        let limit: NumberConstructor;
        let query: ObjectConstructor;
        let isRecent: BooleanConstructor;
    }
}
export default _default;
