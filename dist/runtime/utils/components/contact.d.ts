export default Contact;
declare class Contact extends BaseComponent {
    mailSelector: string;
    formSelector: string;
    boxSelector: string;
    mail: any;
    form: any;
    box: any;
    init(): void;
    bindEvents(): void;
    handleClick(e: any): void;
    reset(): void;
}
import BaseComponent from './base-component.js.js';
