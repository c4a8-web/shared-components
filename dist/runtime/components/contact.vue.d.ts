declare namespace _default {
    let tagName: string;
    namespace props {
        let contact: ObjectConstructor;
        let collapsed: BooleanConstructor;
        let ajax: BooleanConstructor;
        let spacing: StringConstructor;
        namespace quote {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        let bgColor: StringConstructor;
        let color: StringConstructor;
        let boxBgColor: StringConstructor;
        let boxColor: StringConstructor;
        let level: StringConstructor;
        let headline: StringConstructor;
        let subline: StringConstructor;
        let form: ObjectConstructor;
        let buttons: ArrayConstructor;
        let person: ObjectConstructor;
        let noTopSpacing: BooleanConstructor;
        let light: BooleanConstructor;
        let hasGreyBackground: BooleanConstructor;
        let svgShape: ObjectConstructor;
    }
    namespace computed {
        function classList(): any;
        function contactVariantClass(): any;
        function contactLight(): any;
        function contactBoxClass(): any;
        function contactFormClass(): any;
        function contactContainerClass(): any;
        function contactRowClass(): any;
        function styleObject(): any;
    }
}
export default _default;
