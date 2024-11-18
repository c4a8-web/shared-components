declare namespace _default {
    let tagName: string;
    function data(): {
        iconHandStepTime: string;
        iconHandDuration: string;
        iconResetAndSetDuration: string;
        iconHandRepetition: string;
        iconHandPause: string;
    };
    namespace computed {
        function style(): any;
        function stroke(): any;
    }
    namespace props {
        let settings: ObjectConstructor;
        let color: StringConstructor;
    }
}
export default _default;
