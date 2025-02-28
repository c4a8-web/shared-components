declare namespace _default {
    let name: string;
    namespace props {
        namespace list {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace overlap {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default: boolean;
            export { _default as default };
        }
        namespace settings {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            function _default_1(): never[];
            export { _default_1 as default };
        }
        namespace sticky {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function mergedTeasers(): any[];
    }
    namespace methods {
        function getTeaserProps(teaserData: any, event: any, variant: any, forloopIndex: any): any;
    }
}
export default _default;
