export default CloudinaryTools;
declare namespace CloudinaryTools {
    let basePath: string;
    function getPreset(presetName: any): any;
    function getSetup(presetName: any): {
        preset: any;
        transformationsString: string;
    };
    function getTransformationString(preset: any): string;
    function getCloudinaryBasePathLink(img: any, srcSet: any): string;
    function getCloudinaryLinkWithTransformation(img: any, presetName: any): string;
    function getCloudinaryLink({ img, presetName, animated }: {
        img: any;
        presetName: any;
        animated: any;
    }): string;
    function isGif(img: any): boolean | undefined;
    function isSvg(img: any): boolean;
}
