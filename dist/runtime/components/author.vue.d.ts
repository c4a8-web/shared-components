declare namespace _default {
    let tagName: string;
    function data(): {
        sortBy: {
            moment: number;
        };
    };
    function setup(): {
        locale: string;
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
    namespace computed {
        function postCount(): any;
        function introText(): any;
        function intro(): {
            body: {
                type: string;
                value: (() => any)[];
            };
        };
        function imageUrl(): any;
        function hasSocials(): any;
        function servicesData(): any;
        function showSocials(): any;
    }
    function mounted(): void;
    namespace props {
        namespace person {
            let type: ObjectConstructor;
        }
        namespace personData {
            let type_1: ObjectConstructor;
            export { type_1 as type };
        }
        namespace posts {
            let type_2: ArrayConstructor;
            export { type_2 as type };
        }
        namespace events {
            let type_3: ArrayConstructor;
            export { type_3 as type };
        }
        namespace dataAuthors {
            let type_4: ObjectConstructor;
            export { type_4 as type };
        }
    }
}
export default _default;
