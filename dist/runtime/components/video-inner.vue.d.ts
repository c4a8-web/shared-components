declare namespace _default {
    let tagName: string;
    namespace computed {
        function videoClass(): any;
        function videoPlayerClass(): any;
        function videoContentClass(): any;
        function videoTextClasses(): string[];
        function isCompact(): any;
        function variantClasses(): any;
        function isVariantRow(): any;
        function videoParsed(): any;
        function onClickVideoContent(): "this.querySelector('a').click()" | null;
        function onClick(): "this.querySelector('a').click()" | null;
        function videoId(): string;
        function videoFrameId(): string;
        function headlineClasses(): string;
        function dataOptionsLightBox(): string;
        function options(): {
            videoId: any;
            parentSelector: string;
            targetSelector: string;
            isAutoplay: boolean;
        };
        function dataOptionsRegular(): string;
        function dataSrc(): string;
        function embedSrc(): string;
        function dataCaption(): any;
    }
    function mounted(): void;
    namespace methods {
        function isReversed(): any;
        function handleButtonClick(): void;
        function handleLightboxClick(): void;
        function handleLightboxClose(): void;
        function handleClose(): void;
    }
    function data(): {
        isPlayed: boolean;
        elementClasses: {};
    };
    namespace props {
        let video: ObjectConstructor;
        let variant: StringConstructor;
        let spacing: StringConstructor;
        let overlapping: StringConstructor;
        namespace level {
            let _default: string;
            export { _default as default };
        }
        namespace noAnimation {
            export let type: BooleanConstructor;
            let _default_1: boolean;
            export { _default_1 as default };
        }
    }
}
export default _default;
