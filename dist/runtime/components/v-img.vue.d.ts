declare namespace _default {
    let tagName: string;
    function data(): {
        dimensions: {
            naturalHeight: null;
            naturalWidth: null;
        };
        dimStack: {};
        previousImg: null;
        srcset: string;
        noCloudinary: null;
        sizes: null;
    };
    let expose: string[];
    function setup(): {
        config: {};
    };
    namespace computed {
        function classList(): (string | (() => any[]))[];
        function classListComponent(): any[];
        function isLottie(): boolean;
        function jsonLottieData(): any;
        function jsonLottieSettingsData(): any;
        function isCloudinary(): boolean;
        function source(): any;
        function loading(): "lazy" | null;
        function crossOriginValue(): any;
        function hasPictureTag(): any;
        function pictureWrapperClassList(): any[];
        function imgSrcSetValue(): any;
        function imgSrcSetSources(): any;
        function imgSrcSetImg(): any;
    }
    namespace watch {
        function animated(): void;
    }
    function created(): void;
    function mounted(): void;
    namespace methods {
        function getSourceSetMedia(srcSet: any): any;
        function canGenerateSrcSet(): any;
        function getSetup(): {
            preset: any;
            transformationsString: string;
        };
        function getPreset(): any;
        function hasProtocol(): boolean;
        function getBaseAssetPath(): any;
        function getCloudinaryBasePathLink(srcSet: any): string;
        function getCloudinaryLink(): string;
        function getCloudinaryLinkWithTransformation(): string;
        function loadImage(link: any): void;
        function getTransformationString(preset: any): string;
        function buildSrcSet(preset: any, transformationsString: any): void;
        function isGif(): boolean | undefined;
        function isSvg(): boolean;
    }
    namespace props {
        export namespace imgSrcSets {
            export let type: (ObjectConstructor | StringConstructor)[];
            let _default: null;
            export { _default as default };
        }
        export let img: StringConstructor;
        export let alt: StringConstructor;
        export let cloudinary: BooleanConstructor;
        export let crossorigin: StringConstructor;
        export let lazy: BooleanConstructor;
        let _class: StringConstructor;
        export { _class as class };
        export let preset: StringConstructor;
        export let lottie: ObjectConstructor;
        export let lottieSettings: ObjectConstructor;
        export let animated: BooleanConstructor;
    }
}
export default _default;
