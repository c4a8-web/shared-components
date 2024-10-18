declare namespace _default {
    let tagName: string;
    let components: {
        'footer-slider': {
            tagName: string;
            template: string;
            props: {
                items: ArrayConstructor;
                bgColor: StringConstructor;
            };
        };
    };
    function data(): {
        bgColorRgbaValue: null;
    };
    namespace computed {
        function classList(): any;
        function isCorporate(): any;
        function style(): any;
        function dataValue(): any;
        function links(): any;
        function locations(): any;
    }
    function mounted(): void;
    namespace methods {
        function bgColorRgba(): any;
    }
    namespace props {
        let data: ObjectConstructor;
        namespace noMargin {
            let _default: null;
            export { _default as default };
        }
        let lang: StringConstructor;
    }
}
export default _default;
