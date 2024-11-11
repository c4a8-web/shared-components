declare namespace _default {
    let tagName: string;
    namespace computed {
        function strokeWidth(): number;
        function effectiveKeySplines(): string;
        function style(): any;
        function lineData(): {
            line1: {
                from: {
                    x1: string;
                    x2: string;
                    y1: string;
                    y2: string;
                };
                to: {
                    x1: string;
                    x2: string;
                    y1: string;
                    y2: string;
                };
            };
            line2: {
                from: {
                    x1: string;
                    x2: string;
                    y1: string;
                    y2: string;
                };
                to: {
                    x1: string;
                    x2: string;
                    y1: string;
                    y2: string;
                };
            };
            line3: {
                from: {
                    x1: string;
                    x2: string;
                    y1: string;
                    y2: string;
                };
                to: {
                    x1: string;
                    x2: string;
                    y1: string;
                    y2: string;
                };
            };
        };
    }
    function updated(): void;
    function mounted(): void;
    namespace methods {
        function animateLines(mode: any, start: any): void;
    }
    namespace props {
        let settings: ObjectConstructor;
        let color: StringConstructor;
        let closed: BooleanConstructor;
    }
    function data(): {
        duration: string;
        begin: string;
        keyTimes: string;
    };
}
export default _default;
