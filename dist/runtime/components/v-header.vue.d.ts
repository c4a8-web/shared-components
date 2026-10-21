declare namespace _default {
    let tagName: string;
    function setup(): {
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
        switchLocalePath: any;
        availableLocales: import("vue").ComputedRef<any>;
    };
    namespace computed {
        function classList(): string[];
        function secondaryNavigationClassList(): any[];
        function secondaryNavigation(): {
            children: {
                children: {
                    name: string;
                    img: string;
                    target: string;
                    languages: {
                        de: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        en: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        es: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        sv: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        fi: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        da: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        ko: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        nl: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        it: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        is: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        no: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                        ja: {
                            title: string;
                            subtitle: string;
                            url: string;
                            alt: string;
                        };
                    };
                }[];
                name: string;
                products: boolean;
            }[];
            text: string;
            name: string;
            skin: string;
            languages: {
                de: {
                    title: string;
                };
                en: {
                    title: string;
                };
                es: {
                    title: string;
                };
                sv: {
                    title: string;
                };
                fi: {
                    title: string;
                };
                da: {
                    title: string;
                };
                ko: {
                    title: string;
                };
                nl: {
                    title: string;
                };
                it: {
                    title: string;
                };
                is: {
                    title: string;
                };
                no: {
                    title: string;
                };
                ja: {
                    title: string;
                };
            };
        } | null;
        function collapseRatio(): number | null;
        function headerLogoStyle(): string | undefined;
        function headerContainerClassList(): (string | (() => "container" | "container-xxl"))[];
        function containerClass(): "container" | "container-xxl";
        function homeObj(): any;
        function logoAlt(): any;
        function lowerLang(): any;
        function languageNote(): any;
        function searchValue(): boolean;
        function metaList(): any;
        function spacerBgColor(): string;
        function clonedNavigation(): any;
        function isLight(): boolean;
        function hasLangSwitch(): boolean;
        function languageOptions(): {
            code: any;
            label: any;
            native: any;
            translated: any;
        }[];
        function hasContact(): any;
        function hasMeta(): any;
        function headerState(): any;
        function onSurfaceCta(): any;
    }
    function created(): void;
    namespace watch {
        function secondaryNavigationDimensions(newVal: any): void;
        function isScrolled(newVal: any): void;
        function hover(newVal: any): void;
        function closed(newVal: any): void;
        function blendMode(newVal: any): void;
        function inUpdate(newVal: any): void;
    }
    function mounted(): void;
    function updated(): void;
    namespace methods {
        function initMegaMenu(): void;
        function getSecondaryNavigationDimensions(): void;
        function closeSecondaryNavigation(): void;
        function toggleSecondaryNavigation(): any;
        function shrinkWidthSecondaryNavigation(): void;
        function shrinkSecondaryNavigation(secondaryNavigation: any): void;
        function expandWidthSecondaryNavigation(secondaryNavigation: any): void;
        function expandSecondaryNavigation(): void;
        function handleSecondaryNavigationTransitionEnd(event: any): void;
        function setLogoNaturalWidth(): void;
        function calculateLogoOffsetPosition(): void;
        function getLogoOffsetSpace(): number;
        function evaluateLogoCollapse(): void;
        function saveHeaderLayoutCache(): void;
        function getSecondaryNavigationButtonDimensions(): {
            width: any;
            height: any;
        };
        function setActiveNavigation(): void;
        function setLinkWidth(): void;
        function showFlyoutBlock(children: any): boolean;
        function isLowerBreakpoint(): any;
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
        function toggleLanguageList(): void;
        function handleLanguageOver(): void;
        function handleLanguageOut(event: any): void;
        function resetAllFlyouts(): void;
        function getFlyoutRef(refName: any): any;
        function getLinkRef(refName: any): any;
        function getRef(name: any, refName: any): any;
        function getHref(item: any): any;
        function getTarget(item: any): any;
        function getNextLanguage(): string | undefined;
        function handleLanguageSwitch(nextLang: any): Promise<void>;
        function loadContentAlternates(): any;
        function getActiveUrlByLang(lang: any, update: any): any;
        function getTranslatedUrl(currentPath: any, lang: any): any;
        function getFolderSwitchSegment(currentPath: any): any;
        function getFolderSwitchUrl(lang: any, currentPath: any, segment: any): any;
        function isBlogTagsUrl(currentPath: any): boolean;
        function getBlogTagsUrl(lang: any, currentPath: any): string;
        function getHrefLang(lang: any): string | undefined;
        function getParentLink(key: any): any;
        function setActiveLinks(): void;
        function updateProductListHeight(): void;
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
        namespace showSecondaryNavigation {
            let _default_5: boolean;
            export { _default_5 as default };
            export let type: BooleanConstructor;
        }
        let theme: StringConstructor;
        let onSurface: BooleanConstructor;
        namespace collapse {
            let _default_6: null;
            export { _default_6 as default };
        }
    }
    function data(): {
        hoverHeader: boolean;
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
        logoNaturalWidth: any;
        logoOffsetPosition: any;
        logoCollapsed: any;
        headerCondensed: any;
        logoCollapseReady: boolean;
        secondaryNavigationInTransition: boolean;
        secondaryNavigationIsExpanded: boolean;
        secondaryNavigationDimensions: null;
        secondaryNavigationTimeout: null;
        secondaryNaivgationTransitionDelay: number;
        secondaryNavigationTransitionState: null;
        secondaryNavigationTransitionStates: {
            SHRINKING_HEIGHT: number;
            SHRINKING_WIDTH: number;
        };
        initEvents: string[];
        renderMegaMenu: boolean;
        languageListExpanded: boolean;
    };
}
export default _default;
