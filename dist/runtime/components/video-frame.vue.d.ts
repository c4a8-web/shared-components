declare namespace _default {
    let tagName: string;
    namespace props {
        let thumb: StringConstructor;
        let alt: StringConstructor;
        let id: StringConstructor;
        namespace preset {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace container {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace corner {
            let type_2: (ObjectConstructor | BooleanConstructor)[];
            export { type_2 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace spacingTop {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace fullWidth {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace headline {
            let type_5: (ObjectConstructor | BooleanConstructor)[];
            export { type_5 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
        namespace sticky {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
        namespace cta {
            let type_7: BooleanConstructor;
            export { type_7 as type };
            let _default_7: boolean;
            export { _default_7 as default };
        }
    }
    function mounted(): void;
    namespace computed {
        function hasVideo(): any;
        function parentId(): any;
        function targetId(): any;
        function containerClass(): any;
        function rowClass(): any;
        function mainClass(): any;
        function playerClass(): string[];
        function cornerClass(): any;
        function headlineStyle(): any;
        function videoPlayerOptions(): any;
        function embedSrc(): any;
    }
    namespace methods {
        function handleClick(): void;
        function setPlayed(): void;
    }
    function data(): {
        isPlayed: boolean;
        options: {};
        openIframe: boolean;
    };
}
export default _default;
