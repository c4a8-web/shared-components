class AdBlockerBait {
  static rootSelector = '';
  static instances = [];

  constructor() {
    console.debug('If this Class can be loaded an AdBlocker is propably not active');
  }

  static init() {
    this.instances = [];

    this.instances.push(new this());
  }
}

export default AdBlockerBait;
