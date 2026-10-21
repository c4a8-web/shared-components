declare namespace _default {
    let name: string;
    function setup(): {
        isAtEnd: import("vue").Ref<boolean, boolean>;
        endPoint: import("vue").Ref<null, null>;
        State: {
            ACTIVE: string;
            READY: string;
            ERROR: string;
            VALID: string;
            SUCCESS: string;
            HAS_ERROR: string;
            HOVERING: string;
            DRAGGING: string;
            HIDDEN: string;
            INVISIBLE: string;
            EXPANDED: string;
            EXPANDABLE: string;
            OFF_SCREEN: string;
            COLLAPSED: string;
            IS_COLLAPSING: string;
            SHOW: string;
            FADE: string;
            INITIALIZED: string;
            LOADING: string;
            HIDE_LOADING: string;
            HAS_LOADING: string;
            END: string;
            IS_SCROLLED: string;
            MODAL_OPEN: string;
            HAS_BACKGROUND: string;
            IS_FULL: string;
            STICKY: string;
            IN_TRANSITION: string;
            IS_STARTING: string;
            ON_SURFACE: string;
        };
        store: import("pinia").Store<"app", {
            loading: boolean;
            hero: {};
            page: {
                isLoaded: boolean;
            };
            header: {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
        }, {
            getLoading: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            getHero: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => {};
            getPage: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => {
                isLoaded: boolean;
            };
            getHeader: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => {
                isScrolled: boolean;
                isLight: boolean;
                isHovering: boolean;
                isProduct: boolean;
                isExpanded: boolean;
                isBlending: boolean;
                isUpdating: boolean;
                navigation: null;
                meta: null;
                contact: null;
                button: null;
                search: boolean;
                theme: null;
                showSecondaryNavigation: boolean;
            };
            isHeaderScrolled: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            isHeaderLight: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            isHeaderHovering: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            isHeaderProduct: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            isHeaderExpanded: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            isHeaderBlending: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            isHeaderUpdating: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            getHeaderNavigation: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => null;
            getHeaderMeta: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => null;
            getHeaderContact: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => null;
            getHeaderButton: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => null;
            getHeaderSearch: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            getHeaderTheme: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => null;
            getHeaderSecondaryNavigation: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
            getPageIsLoaded: (state: {
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            } & import("pinia").PiniaCustomStateProperties<{
                loading: boolean;
                hero: {};
                page: {
                    isLoaded: boolean;
                };
                header: {
                    isScrolled: boolean;
                    isLight: boolean;
                    isHovering: boolean;
                    isProduct: boolean;
                    isExpanded: boolean;
                    isBlending: boolean;
                    isUpdating: boolean;
                    navigation: null;
                    meta: null;
                    contact: null;
                    button: null;
                    search: boolean;
                    theme: null;
                    showSecondaryNavigation: boolean;
                };
            }>) => boolean;
        }, {
            setLoading(loading: any): void;
            setHero(hero: any): void;
            setPage(page: any): void;
            setHeader(header: any): void;
            setHeaderScrolled(isScrolled: any): void;
            setHeaderLight(isLight: any): void;
            setHeaderHovering(isHovering: any): void;
            setHeaderProduct(isProduct: any): void;
            setHeaderExpanded(isExpanded: any): void;
            setHeaderBlending(isBlending: any): void;
            setHeaderUpdating(isUpdating: any): void;
            setHeaderNavigation(navigation: any): void;
            setHeaderMeta(meta: any): void;
            setHeaderContact(contact: any): void;
            setHeaderButton(button: any): void;
            setHeaderSearch(search: any): void;
            setHeaderTheme(theme: any): void;
            setHeaderSecondaryNavigation(showSecondaryNavigation: any): void;
            resetHeader(): void;
            setPageIsLoaded(isLoaded: any): void;
        }>;
    };
    function data(): {
        hasBack: boolean;
        stickyPosition: number;
        hsStickyBlockOptions: null;
        percentageInViewport: number;
        stickyOffsetTop: number;
        stickyUnstuckOffsetTop: number;
        isLoading: boolean;
        loadingDelay: number;
    };
    namespace props {
        namespace detailColor {
            let type: StringConstructor;
        }
        namespace detailShapeColor {
            let type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace noContent {
            let type_2: BooleanConstructor;
            export { type_2 as type };
        }
    }
    namespace computed {
        function hasShape(): any;
    }
    namespace methods {
        function showBackButton(): void;
        function getDOMElement(selector: any): any;
        function setStickyPosition(): void;
        function isInViewport(): any;
        function setShapePosition(): void;
        function handleStickyShapeEnd(): void;
        function getStickyBlock(): any;
        function getRelativePosition(): number;
        function resetShape(): void;
        function isSticky(): boolean;
        function setStickyUnstuckOffsetTop(): void;
        function handleScroll(): void;
        function handleResize(): void;
    }
    function mounted(): void;
    function beforeUnmount(): void;
}
export default _default;
