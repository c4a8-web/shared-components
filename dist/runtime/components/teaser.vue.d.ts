declare namespace _default {
    let tagName: string;
    namespace props {
        let ctaText: StringConstructor;
        let ctaHref: StringConstructor;
        let type: StringConstructor;
        let link: StringConstructor;
        let target: StringConstructor;
        let ctaExternal: StringConstructor;
        let thumb: StringConstructor;
        let alt: StringConstructor;
        let id: StringConstructor;
        let headline: StringConstructor;
        let headlineClasses: StringConstructor;
        let overline: StringConstructor;
        let logo: StringConstructor;
        let logoAlt: StringConstructor;
        let text: StringConstructor;
        namespace textHtml {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default: boolean;
            export { _default as default };
        }
        namespace preset {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        let spacing: StringConstructor;
    }
    namespace computed {
        function classList(): any;
        function computedText(): any;
        function headlineClassesWithDefault(): any;
    }
    function mounted(): void;
    namespace methods {
        function handleClick(): void;
    }
}
export default _default;
