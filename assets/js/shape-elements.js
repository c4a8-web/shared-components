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
      sequence[element.name] = element;
      console.log('ShapeElements ~ this.elements.forEach ~ element', element);

      const keys = Object.keys(element);

      keys.forEach((key) => {
        if (key === 'name') return;

        const step = element[key];

        if (!step) return;

        step.id = this.getStepId(key);
      });
    });

    return sequence;
  }

  getSequence() {
    const sequence = this.createStepNames({});

    this.elements.forEach((element) => {
      sequence[element.name] = element;

      const keys = Object.keys(element);

      keys.forEach((key) => {
        if (key === 'name') return;

        const step = element[key];

        if (!step) return;

        step.begin = this.getStepBegin(sequence, step);

        if (!step.start) return;

        step.begin = `${this.begin};${step.begin}`;
      });

      element.id = this.getStepId('id');
      element.ref = `#${element.id}`;
    });

    console.log('ShapeElements ~ getSequence ~ sequence', sequence);
    return sequence;
  }

  getStepBegin(sequence, step) {
    const delay = `+${step.delay}`;

    if (!step.waitFor) return delay;

    return `${this.getWaitForName(sequence, step.waitFor)}${delay}`;
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
