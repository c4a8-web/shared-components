declare namespace _default {
    let tagName: string;
    let computed: {};
    namespace methods {
        function getItemComponent(item: any): "a" | "span";
        function getDelay(index: any): string;
        function getIndex(index: any): any;
    }
    namespace props {
        let list: ArrayConstructor;
        let isOverlapping: BooleanConstructor;
        let isClone: BooleanConstructor;
    }
}
export default _default;
