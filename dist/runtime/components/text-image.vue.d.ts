declare namespace _default {
    let tagName: string;
    namespace props {
        namespace spacing {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        let image: StringConstructor;
        let imageClasses: StringConstructor;
        let imagePreset: StringConstructor;
        let lottie: ObjectConstructor;
        let float: BooleanConstructor;
        let overline: StringConstructor;
        let headlineText: StringConstructor;
        let subline: StringConstructor;
        let left: BooleanConstructor;
        let alt: StringConstructor;
        let cloudinary: BooleanConstructor;
        let offset: BooleanConstructor;
        let white: BooleanConstructor;
        let copy: StringConstructor;
        let list: ArrayConstructor;
        let bgColor: StringConstructor;
        let copyClasses: StringConstructor;
        let copyLight: StringConstructor;
        let background: StringConstructor;
        let firstColWidth: NumberConstructor;
        let secondColWidth: NumberConstructor;
        namespace reduceSpacing {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        let cta: ObjectConstructor;
        let modal: ObjectConstructor;
        let href: StringConstructor;
        let badge: ObjectConstructor;
        let sticky: BooleanConstructor;
        let noAnimation: BooleanConstructor;
        let index: NumberConstructor;
        namespace noGutters {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace level {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default_3: string;
            export { _default_3 as default };
        }
        let headlineClasses: StringConstructor;
    }
    namespace computed {
        function textImageLightText(): any;
        function textImageFirstColWidthXl(): any;
        function textImageFirstColWidthComputed(): any;
        function textImageSecondColWidthXl(): any;
        function textImageSecondColWidthComputed(): any;
        function textImageHeadlineClassesComputed(): string;
        function textImageImgSrcSets(): any;
        function textImagePreset(): any;
        function textImageClass(): any[];
        function textImageStyle(): {
            'background-color': any;
            '--utility-animation-index': any;
            'background-image': string | undefined;
        };
        function textImageFirstColClasses(): any[];
        function textImageSecondColClasses(): (string | {
            'no-gutters': any;
            'pt-2 pt-lg-4'?: undefined;
            'fade-in-bottom'?: undefined;
            'text-white'?: undefined;
        } | {
            'pt-2 pt-lg-4': boolean;
            'no-gutters'?: undefined;
            'fade-in-bottom'?: undefined;
            'text-white'?: undefined;
        } | {
            'fade-in-bottom': boolean;
            'no-gutters'?: undefined;
            'pt-2 pt-lg-4'?: undefined;
            'text-white'?: undefined;
        } | {
            'text-white': any;
            'no-gutters'?: undefined;
            'pt-2 pt-lg-4'?: undefined;
            'fade-in-bottom'?: undefined;
        } | {
            [x: number]: any;
            'no-gutters'?: undefined;
            'pt-2 pt-lg-4'?: undefined;
            'fade-in-bottom'?: undefined;
            'text-white'?: undefined;
        })[];
        function textImageLightTextClass(): any;
    }
    function mounted(): void;
    namespace methods {
        function handleClick(): void;
    }
}
export default _default;
