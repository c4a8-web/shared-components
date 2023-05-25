import Events from './events.js';

const handleAdBlockerError = function (error) {
  console.error('This issue is propably caused by an AdBlocker', error);

  const customEvent = new CustomEvent(Events.AD_BLOCK_INFO, {});

  document.dispatchEvent(customEvent);
  console.group();
  console.log(document);
  console.log(customEvent);
  console.groupEnd();
};

class AdBlockerBait {
  static rootSelector = '';
  static instances = [];

  constructor() {
    console.debug('If this Class can be loaded an AdBlocker is propably not active');
    this.bait();
  }
  bait() {
    fetch('https://www.google-analytics.com/collect')
      .then((response) => {
        if (response.status === 200) {
          console.log('No adblock probably');
        } else {
          console.log('Probably adblock');
          handleAdBlockerError(response);
        }
      })
      .catch((error) => {
        console.log('error fetching resources:', error);
        handleAdBlockerError(error);
      });
  }

  static init() {
    this.instances = [];

    this.instances.push(new this());
  }
}

export default AdBlockerBait;
