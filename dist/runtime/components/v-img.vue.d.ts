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
    namespace computed {
        function classList(): (string | (() => any))[];
        function classListComponent(): any;
        function isLottie(): boolean;
        function jsonLottieData(): any;
        function jsonLottieSettingsData(): any;
        function isCloudinary(): any;
        function source(): any;
        function loading(): any;
        function crossOriginValue(): any;
        function hasPictureTag(): any;
        function pictureWrapperClassList(): any[];
        function imgSrcSetValue(): any;
        function imgSrcSetSources(): any;
        function imgSrcSetImg(): any;
    }
    namespace watch {
        function animated(newAnimated: any, oldAnimated: any): void;
    }
    function created(): void;
    namespace methods {
        function getSourceSetMedia(srcSet: any): any;
        function canGenerateSrcSet(): any;
        function getSetup(): any;
        function getPreset(): any;
        function hasProtocol(): any;
        function getBaseAssetPath(): any;
        function getCloudinaryBasePathLink(srcSet: any): any;
        function getCloudinaryLink(): any;
        function getCloudinaryLinkWithTransformation(): string;
        function loadImage(link: any): void;
        function getTransformationString(preset: any): string;
        function buildSrcSet(preset: any, transformationsString: any): void;
        function isGif(): any;
        function isSvg(): any;
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
