import BaseComponent from './base-component.js';

class Contact extends BaseComponent {
  static rootSelector = '.contact.is-collapsed';

  constructor(root, options) {
    super(root, options);

    this.init();
  }

  init() {
    console.log('init');
  }
}

export default Contact;
