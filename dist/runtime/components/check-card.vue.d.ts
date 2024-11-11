declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any;
        function checkCardsContainerClass(): string[];
        function containerValue(): any;
        function headlineLevelValue(): any;
        function headlineClassesValue(): any;
        function sublineClassesValue(): any;
        function itemClass(): string;
        function hasProducts(): any;
        function carouselOptions(): any;
    }
    function mounted(): void;
    let methods: {};
    namespace props {
        let headline: StringConstructor;
        let headlineLevel: StringConstructor;
        let headlineClasses: StringConstructor;
        let subline: StringConstructor;
        let sublineClasses: StringConstructor;
        let spacing: StringConstructor;
        namespace checks {
            let _default: null;
            export { _default as default };
        }
        let classes: StringConstructor;
    }
}
export default _default;
