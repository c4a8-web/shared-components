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
                };
                en: {
                    title: string;
                    subtitle: string;
                    url: string;
                };
                es: {
                    title: string;
                    subtitle: string;
                    url: string;
                };
            };
        }[];
    }[];
}
