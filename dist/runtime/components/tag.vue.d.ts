declare namespace _default {
    let tagName: string;
    function data(): {
        props: {};
    };
    namespace computed {
        function lowerLang(): any;
        function classList(): any;
        function url(): any;
        function href(): any;
        function hasIcon(): any;
    }
    namespace props {
        namespace tag {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace count {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default: null;
            export { _default as default };
        }
        namespace filter {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace lang {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace spacing {
            let type_4: NumberConstructor;
            export { type_4 as type };
            let _default_3: number;
            export { _default_3 as default };
        }
        namespace classes {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace variant {
            let type_6: StringConstructor;
            export { type_6 as type };
            let _default_5: null;
            export { _default_5 as default };
        }
    }
}
export default _default;
