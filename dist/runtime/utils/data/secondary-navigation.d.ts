export default secondaryNavigation;
declare namespace secondaryNavigation {
    let text: string;
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
