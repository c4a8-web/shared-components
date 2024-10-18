declare namespace _default {
    namespace props {
        let tagName: string;
        namespace align {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace peak {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
        namespace color {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace obliquity {
            let type_3: NumberConstructor;
            export { type_3 as type };
            let _default_3: number;
            export { _default_3 as default };
        }
        namespace classes {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_4: string;
            export { _default_4 as default };
        }
        namespace height {
            let type_5: NumberConstructor;
            export { type_5 as type };
            let _default_5: number;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function svgShapeAlign(): any;
        function svgShapePeak(): any;
        function svgShapeColor(): any;
        function svgShapeObliquity(): any;
        function svgShapeClasses(): any;
        function svgShapeHeight(): any;
        function basePoints(): any;
        function peakPointY(): any;
        function peakPointX(): any;
        function points(): string;
        function translateStyle(): any;
    }
}
export default _default;
