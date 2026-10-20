export default secondaryNavigation;
declare namespace secondaryNavigation {
    let text: string;
    let name: string;
    let skin: string;
    namespace languages {
        namespace de {
            let title: string;
        }
        namespace en {
            let title_1: string;
            export { title_1 as title };
        }
        namespace es {
            let title_2: string;
            export { title_2 as title };
        }
        namespace sv {
            let title_3: string;
            export { title_3 as title };
        }
        namespace fi {
            let title_4: string;
            export { title_4 as title };
        }
        namespace da {
            let title_5: string;
            export { title_5 as title };
        }
        namespace ko {
            let title_6: string;
            export { title_6 as title };
        }
        namespace nl {
            let title_7: string;
            export { title_7 as title };
        }
        namespace it {
            let title_8: string;
            export { title_8 as title };
        }
        namespace is {
            let title_9: string;
            export { title_9 as title };
        }
        namespace no {
            let title_10: string;
            export { title_10 as title };
        }
        namespace ja {
            let title_11: string;
            export { title_11 as title };
        }
    }
    let children: {
        name: string;
        products: boolean;
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
    }[];
}
