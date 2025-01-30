declare namespace _default {
    let tagName: string;
    namespace computed {
        function navigation(): any;
    }
    namespace methods {
        function headerItemClasses(item: any): any;
        function headerLinkClasses(item: any, index: any): any;
        function getListClasses(item: any, index: any, classes: any): any[];
        function isLinkListHidden(item: any, index: any): any;
        function navHighlightClasses(item: any, index: any): any;
        function headerProductListClasses(item: any, index: any): any;
    }
    namespace props {
        let lowerLang: StringConstructor;
        let activeNavigation: ObjectConstructor;
        let handleMouseOver: FunctionConstructor;
        let handleClick: FunctionConstructor;
        let getHref: FunctionConstructor;
        let getTarget: FunctionConstructor;
        let linkLists: ObjectConstructor;
        let getId: FunctionConstructor;
        let inTransition: BooleanConstructor;
    }
}
export default _default;
