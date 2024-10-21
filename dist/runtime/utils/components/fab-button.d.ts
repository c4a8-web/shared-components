export default FabButton;
declare class FabButton extends BaseComponent {
    iconSelector: string;
    linkSelector: string;
    modalSelector: string;
    closeSelector: string;
    icon: any;
    link: NodeListOf<Element>;
    modal: any;
    close: any;
    resetDelay: number;
    init(): void;
    hasTrigger(): any;
    bindEvents(): void;
    bindTriggerEvent(): void;
    handleTriggerClick(e: any): void;
    handleOutsideClick(e: any): void;
    handleSubmit(): void;
    handleClose(): void;
    handleClick(): void;
}
import BaseComponent from './base-component.js.js';
