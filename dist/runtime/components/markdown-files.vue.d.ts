declare namespace _default {
    let tagName: string;
    function setup(): {
        currentLocale: string;
    };
    namespace computed {
        function structuredList(): any;
    }
    namespace methods {
        function addPathPrefix(path: any, lang: any, strategy: any): any;
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
        namespace hideItems {
            let type_1: FunctionConstructor;
            export { type_1 as type };
            let _default_1: null;
            export { _default_1 as default };
        }
        namespace strategy {
            let type_2: StringConstructor;
            export { type_2 as type };
        }
    }
}
export default _default;
