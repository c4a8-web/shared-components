import Events from './events.js';

const handleAdBlockerError = function (error) {
  console.error('This issue is probably caused by an AdBlocker', error);

  const customEvent = new CustomEvent(Events.AD_BLOCK_INFO, {});

  document.dispatchEvent(customEvent);
};

class AdBlockerBait {
  static rootSelector = '';
  static instances = [];

  constructor() {
    this.bait();
  }

  bait() {
    fetch('https://www.google-analytics.com/collect')
      .then((response) => {
        if (response.status === 200) {
          console.info('AdBlocker is probably not active');
        } else {
          handleAdBlockerError(response);
        }
      })
      .catch((error) => {
        handleAdBlockerError(error);
      });
  }

  static init() {
    this.instances = [];

    this.instances.push(new this());
  }
}

export default AdBlockerBait;
