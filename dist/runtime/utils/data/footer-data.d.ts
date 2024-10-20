export default FooterData;
declare namespace FooterData {
    let bgColor: string;
    let mail: string;
    let offices: string[];
    let copyright: string;
    let logos: {
        img: string;
        alt: string;
        url: string;
        class: string;
    }[];
    let partners: {
        img: string;
        alt: string;
    }[];
    let brandLogos: {
        title: string;
        img: string;
        alt: string;
        url: string;
        classes: string;
        target: string;
    }[];
    let highlights: ({
        img: string;
        alt: string;
        url?: undefined;
        target?: undefined;
        classes?: undefined;
    } | {
        img: string;
        alt: string;
        url: string;
        target: string;
        classes: string;
    } | {
        img: string;
        alt: string;
        url: string;
        target: string;
        classes?: undefined;
    })[];
    let socials: {
        icon: string;
        url: string;
        title: string;
    }[];
    let links: {
        title: string;
        url: string;
        target: string;
    }[];
    let linksEn: {
        title: string;
        url: string;
        target: string;
    }[];
}
