declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): string[];
        function widthValue(): any;
        function heightValue(): any;
        function backgroundValue(): any;
        function loopValue(): any;
        function autoplayValue(): any;
        function nameValue(): any;
        function rendererValue(): any;
        function options(): any;
    }
    function data(): {
        style: {};
    };
    function mounted(): void;
    namespace methods {
        function initStyle(): void;
        function getSize(size: any): any;
    }
    namespace props {
        let data: ObjectConstructor;
        namespace name {
            let type: StringConstructor;
        }
        namespace width {
            let type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
        }
        namespace height {
            let type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
        }
        namespace background {
            let type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace loop {
            let type_4: (BooleanConstructor | NumberConstructor)[];
            export { type_4 as type };
        }
        namespace autoplay {
            let type_5: BooleanConstructor;
            export { type_5 as type };
        }
        namespace renderer {
            let type_6: StringConstructor;
            export { type_6 as type };
        }
    }
}
export default _default;
