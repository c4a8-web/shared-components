declare namespace _default {
    let tagName: string;
    namespace computed {
        function videoClass(): any[];
        function videoPlayerClass(): any[];
        function videoContentClass(): any[];
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
    function beforeDestroy(): void;
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
        let overlapping: (BooleanConstructor | StringConstructor)[];
        namespace level {
            let _default: string;
            export { _default as default };
        }
        namespace noAnimation {
            export let type: BooleanConstructor;
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace playlist {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace subtitles {
            let type_2: StringConstructor;
            export { type_2 as type };
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace lazy {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
    }
}
export default _default;
