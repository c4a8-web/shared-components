export default VideoFrame;
declare class VideoFrame extends BaseComponent {
    constructor(root: any);
    videoFrameSelector: any;
    parentSelector: any;
    videoFrame: any;
    parent: any;
    init(): void;
    bindEvents(): void;
    handleClick(): void;
    setPlayed(): void;
    openIframe(): void;
    embedSrc(): string;
}
import BaseComponent from './base-component.js.js';
