declare namespace _default {
    let tagName: string;
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
    namespace methods {
        function getTeaserProps(teaserData: any, event: any, variant: any, index: any): {
            headline: any;
            content: any;
            moment: any;
            time: any;
            shapes: any;
            author: any;
            image: any;
            badge: any;
            price: any;
            cta: any;
            variant: any;
            webcast: any;
            teaser: any;
            url: any;
            textShadow: any;
            bgColorRgb: any;
            index: any;
        };
    }
}
export default _default;
