declare namespace _default {
    let tagName: string;
    namespace computed {
        function style(): any;
    }
    function data(): {
        iconSmileStepTime: string;
        'step-1': never[];
        'step-2': never[];
        'step-3': never[];
    };
    namespace props {
        let settings: ObjectConstructor;
        let color: StringConstructor;
        let step: NumberConstructor;
    }
    namespace watch {
        function step(): void;
    }
    namespace methods {
        function setElementRef(element: any, index: any): void;
        function startStep(): void;
    }
}
export default _default;
