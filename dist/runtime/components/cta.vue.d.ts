declare namespace _default {
    let tagName: string;
    namespace computed {
        function tag(): "a" | "button";
        function hasIcon(): any;
        function externalValue(): boolean;
        function downloadValue(): boolean;
        function classList(): any[];
        function innerSkin(): any;
        function innerWidth(): any;
        function baseClass(): any;
        function iconName(): any;
        function targetValue(): any;
        function sizeValue(): string;
    }
    namespace methods {
        function handleClick(e: any): void;
    }
    namespace props {
        namespace href {
            let _default: null;
            export { _default as default };
        }
        let button: BooleanConstructor;
        let text: StringConstructor;
        namespace analytics {
            let _default_1: null;
            export { _default_1 as default };
        }
        let link: BooleanConstructor;
        namespace external {
            let _default_2: null;
            export { _default_2 as default };
        }
        let skin: StringConstructor;
        let width: StringConstructor;
        let grow: BooleanConstructor;
        let type: StringConstructor;
        let target: StringConstructor;
        namespace alternativeHref {
            let _default_3: null;
            export { _default_3 as default };
        }
        let trigger: StringConstructor;
        let triggerId: StringConstructor;
        let icon: StringConstructor;
        namespace download {
            let _default_4: null;
            export { _default_4 as default };
        }
        namespace reversed {
            let _default_5: null;
            export { _default_5 as default };
        }
        namespace monochrome {
            let _default_6: null;
            export { _default_6 as default };
        }
        namespace small {
            let _default_7: null;
            export { _default_7 as default };
        }
        namespace active {
            let _default_8: null;
            export { _default_8 as default };
        }
        namespace classes {
            let _default_9: string;
            export { _default_9 as default };
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace loading {
            let _default_10: null;
            export { _default_10 as default };
        }
        namespace hasBackground {
            let _default_11: null;
            export { _default_11 as default };
        }
        namespace javascript {
            let _default_12: null;
            export { _default_12 as default };
            let type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace onSurface {
            let _default_13: null;
            export { _default_13 as default };
            let type_3: BooleanConstructor;
            export { type_3 as type };
        }
    }
}
export default _default;
