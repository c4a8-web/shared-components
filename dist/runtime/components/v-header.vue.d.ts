declare namespace _default {
    let tagName: string;
    namespace computed {
        function classList(): any;
        function headerLogoStyle(): any;
        function headerContainerClassList(): (string | (() => any))[];
        function containerClass(): any;
        function homeObj(): any;
        function lowerLang(): any;
        function searchValue(): any;
        function metaList(): any;
        function spacerBgColor(): string;
        function clonedNavigation(): any;
        function isLight(): boolean;
        function hasLangSwitch(): boolean;
        function hasContact(): any;
        function hasMeta(): any;
    }
    function created(): void;
    function mounted(): void;
    function updated(): void;
    namespace methods {
        function calculateLogoOffsetPosition(): {
            leftSpace: number;
        } | undefined;
        function setActiveNavigation(): void;
        function setLinkWidth(): void;
        function showFlyoutBlock(children: any): any;
        function isLowerBreakpoint(): boolean;
        function bindEvents(): void;
        function handleResize(): void;
        function handleScroll(): void;
        function reset(): void;
        function handleCloseClick(): void;
        function resetFlyouts(): void;
        function handleClick(item: any, index: any): void;
        function closeAllSiblings(id: any): void;
        function closeAllChildren(): void;
        function getId(item: any, index: any): string;
        function handleHeaderMouseOver(): void;
        function handleHeaderMouseOut(): void;
        function setCtaClasses(): void;
        function handleMouseOver(item: any, index: any): void;
        function handleMouseOut(event: any): void;
        function handleLanguageOver(): void;
        function handleLanguageOut(event: any): void;
        function resetAllFlyouts(): void;
        function getFlyoutRef(refName: any): any;
        function getLinkRef(refName: any): any;
        function getRef(name: any, refName: any): any;
        function getHref(item: any): any;
        function getTarget(item: any): any;
        function getNextLanguage(): string | undefined;
        function handleLanguageSwitch(nextLang: any): void;
        function getActiveUrlByLang(lang: any, update: any): any;
        function getTranslatedUrl(currentPath: any, lang: any): any;
        function getFolderSwitchSegment(currentPath: any): any;
        function getFolderSwitchUrl(lang: any, currentPath: any, segment: any): any;
        function isBlogTagsUrl(currentPath: any): boolean;
        function getBlogTagsUrl(lang: any, currentPath: any): string;
        function getHrefLang(lang: any): string | null | undefined;
        function getParentLink(key: any): any;
        function setActiveLinks(): void;
        function headerItemClasses(item: any): string[];
        function isLinkListHidden(item: any, index: any): boolean;
        function headerLinkClasses(item: any, index: any): any[];
        function headerProductListClasses(item: any, index: any): any[];
        function getListClasses(item: any, index: any, classes: any): any[];
        function updateProductListHeight(): void;
        function navHighlightClasses(item: any, index: any): string[];
        function hasContactLink(item: any): any;
    }
    namespace props {
        let home: ObjectConstructor;
        let navigation: ObjectConstructor;
        let meta: ObjectConstructor;
        namespace light {
            let _default: null;
            export { _default as default };
        }
        namespace search {
            let _default_1: null;
            export { _default_1 as default };
        }
        let lang: StringConstructor;
        let contact: ObjectConstructor;
        let bgColor: StringConstructor;
        namespace product {
            let _default_2: null;
            export { _default_2 as default };
        }
        namespace button {
            let _default_3: null;
            export { _default_3 as default };
        }
        namespace blendMode {
            let _default_4: null;
            export { _default_4 as default };
        }
        let secondaryNavigation: ObjectConstructor;
    }
    function data(): {
        inUpdate: boolean;
        inTransition: boolean;
        defaultLang: string;
        closed: boolean;
        hover: boolean;
        headerHover: boolean;
        flyoutIndex: null;
        linkLists: {};
        scrollThreshold: number;
        isScrolled: boolean;
        ctaClassList: null;
        maxLinkListsInFlyout: number;
        activeNavigation: {};
        logoOffsetPosition: null;
    };
}
export default _default;
