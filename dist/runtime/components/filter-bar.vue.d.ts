declare namespace _default {
    let tagName: string;
    namespace computed {
        function hasNoAspectRatio(): true | undefined;
        function flatSelections(): any;
        function storedItems(): never[];
        function normalizedItems(): any;
        function filteredItems(): any;
        function authors(): any;
        function topics(): any;
        function tags(): any;
        function dropdownCollection(): (() => any)[];
    }
    function setup(): {
        locale: any;
    };
    function created(): void;
    function mounted(): void;
    function beforeDestroy(): void;
    namespace methods {
        function selectTagFromHash(): void;
        function addTagToSelection(tag: any, index: any): void;
        function getMaxItems(items: any): any;
        function handleResize(): void;
        function extractPropertyCounts(property: any): any;
        function updatePropertyCount(accumulator: any, propertyValue: any): void;
        function handleView(view: any): void;
        function toggleIconClasses(view: any): string[];
        function isArrayEmpty(array: any): boolean;
        function isArrayEmptyRecursive(array: any): boolean;
        function handleCardTagClicked(event: any): void;
        function getTagByName(tagName: any): void;
        function handleDropdownChange(selection: any, index: any): void;
        function handleDropdownOpened(openedDropdown: any): void;
        function clearAllSelections(): void;
        function removeSelection(e: any, selection: any): void;
        function updateDropdownSelection(selection: any, index: any): void;
    }
    function data(): {
        activeView: any;
        views: string[];
        filterDropdowns: never[];
        selections: never[];
        itemStartPoint: number;
        hasClickedOnTag: boolean;
    };
    namespace props {
        let spacing: StringConstructor;
        let items: ArrayConstructor;
        let maxBlogPosts: NumberConstructor;
        let dataAuthors: ObjectConstructor;
        namespace defaultView {
            export let type: StringConstructor;
            let _default: string;
            export { _default as default };
        }
        namespace onlyView {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace hasHighlight {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace enabledDropdowns {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_2(): string[];
            export { _default_2 as default };
        }
    }
}
export default _default;
