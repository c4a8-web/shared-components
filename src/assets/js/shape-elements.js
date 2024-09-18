import Tools from './tools.js';

class ShapeElements {
  constructor({ tagName, elements, begin }) {
    this.tagName = tagName;
    this.elements = elements;
    this.begin = begin;
    this.tagNameId = this.createTagNameId();
  }

  createStepNames(sequence) {
    this.elements.forEach((element) => {
      const name = element.name;

      sequence[name] = element;

      const keys = Object.keys(element);

      keys.forEach((key) => {
        if (key === 'name') return;

        const step = element[key];

        if (!step) return;

        step.id = this.getStepId(`${name.toLowerCase()}-${key}`);
      });
    });

    return sequence;
  }

  getSequence() {
    const sequence = this.createStepNames({});

    this.elements.forEach((element) => {
      const name = element.name;

      sequence[name] = element;

      const keys = Object.keys(element);

      keys.forEach((key) => {
        if (key === 'name') return;

        const step = element[key];

        if (!step) return;

        step.begin = this.getStepBegin(sequence, step);

        if (!step.start) return;

        step.begin = `${this.begin};${step.begin}`;
      });

      element.id = this.getStepId(`${name.toLowerCase()}-id`);
      element.href = `#${element.id}`;
    });

    return sequence;
  }

  getStepBegin(sequence, step) {
    const stepDelay = '' + step.delay;
    const delayTime = stepDelay.indexOf('s') !== -1 ? step.delay : `${step.delay}s`;
    const delay = `${delayTime}`;

    if (!step.waitFor) return delay;

    return `${this.getWaitForName(sequence, step.waitFor)}+${delay}`;
  }

  getWaitForName(sequence, waitFor) {
    const end = '.end';
    const waitForParts = waitFor.split('.');
    const elementName = waitForParts[0];
    const stepName = waitForParts[1];
    const resolvedWaitFor =
      sequence[elementName] && sequence[elementName][stepName] ? sequence[elementName][stepName].id : '';

    return `${resolvedWaitFor}${end}`;
  }

  getStepId(step) {
    return `${this.tagNameId}__${step}`;
  }

  createTagNameId() {
    return `${Tools.uuid()}-${this.tagName}`;
  }
}

export default ShapeElements;
