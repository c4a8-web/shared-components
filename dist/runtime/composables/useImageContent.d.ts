export default function useImageContent(): ({ img, cloudinary, alt }?: {
    cloudinary?: boolean | undefined;
    alt?: string | undefined;
}) => {
    img: any;
    cloudinary: boolean;
    alt: string;
};
