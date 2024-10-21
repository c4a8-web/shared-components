export default Back;
declare class Back extends BaseComponent {
    init(): void;
    bindEvents(): void;
    canGoBack(): boolean;
    handleClick(e: any): void;
}
import BaseComponent from './base-component.js.js';
