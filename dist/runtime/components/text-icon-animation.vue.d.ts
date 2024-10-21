declare namespace _default {
    let tagName: string;
    namespace props {
        let animation: ObjectConstructor;
        let icon: StringConstructor;
        let fixed: BooleanConstructor;
        let cta: ObjectConstructor;
        let classes: StringConstructor;
    }
    function data(): {
        textAnimationStep: number;
        isEnded: boolean;
        isSecondLast: boolean;
    };
    namespace computed {
        function animationData(): any;
        function sequence(): any;
        function classList(): any;
        function isFixed(): any;
        function iconClassList(): any;
    }
    namespace methods {
        function handleTextAnimationState(state: any): void;
        function handleTextAnimationEnded(event: any): void;
    }
}
export default _default;
