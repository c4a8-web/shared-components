class PersonioPosition {
  constructor(position) {
    this.position = position;

    const hasLanguageLoader = window.i18n?.loader;

    if (hasLanguageLoader) {
      hasLanguageLoader.then(() => {
        this.translationData = window.i18n?.getTranslationData([
          'positionTypePermantently',
          'positionTypeInternship',
          'positionTypeTraining',
          'positionTypeStudent',
        ]);
      });
    }
  }

  get description() {
    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription
      ? this.position.jobDescriptions.jobDescription
          .map((desc, index) => this.getEnhanchedDescription(index, desc.name, desc.value['#cdata-section']))
          .join('\n')
      : null;
  }

  hasStartingHtmlTag(text) {
    return /^\s*<[^>]+>/.test(text);
  }

  getEnhanchedDescription(index, name, text) {
    const sectionName = index > 0 && name && name['#text'] ? `<h4>${this.trimNewlines(name['#text'])}</h4>` : '';

    let newText = text.replace(/<\/?span[^>]*>/g, '');
    let paragraphCount = 0;

    const minTextLength = 5;
    const maxParagraphs = 2;

    if (index === 0) {
      newText = newText
        .replace(/(?<=<\/[^>]+>|^|<br>)([^<]+)(?=<[^>]+>|$|<br>)/g, (_, textToChange) => {
          if (textToChange.length > minTextLength && /^\s*$/.test(textToChange)) return textToChange;

          if (paragraphCount < maxParagraphs && textToChange.length > minTextLength && textToChange[0] !== ',') {
            paragraphCount++;

            return '<p>' + textToChange.trim() + '</p>';
          } else {
            return textToChange;
          }
        })
        .replace(/<\/p><br>/g, '<br></p>');
    } else if (!this.hasStartingHtmlTag(newText) && newText.length > minTextLength) {
      newText = '<p>' + newText + '</p>';
    }

    return `${sectionName}${newText}`.replace(/<\/p><br><p>/g, '</p><p>');
  }

  get id() {
    const value = this.getValue('id');

    return value.replace(/\s/g, '');
  }

  get title() {
    return this.removeGenderNotations(this.getValue('name'));
  }

  removeGenderNotations(text) {
    const pattern = /\(m\/w\/d\)|\(m\/f\/d\)|\(h\/m\/d\)/gi;

    return text.replace(pattern, '').trim();
  }

  get tags() {
    const value = this.getValue('keywords');

    return value ? value.split(',') : [];
  }

  getTeamText(text) {
    let value = text;

    if (value.includes('/')) {
      const segments = value.split(' / ');
      const firstSegment = segments[0];
      const secondSegment = segments[1];
      const securityIdentifier = 'CSOC';
      const managedServicesIdentifier = 'Managed Services';
      const productsIdentifier = 'Products';

      if (firstSegment === managedServicesIdentifier && secondSegment !== securityIdentifier) {
        value = managedServicesIdentifier;
      } else if (firstSegment === productsIdentifier) {
        value = `${productsIdentifier} ${secondSegment}`;
      } else {
        switch (secondSegment) {
          case 'Azure Architecture':
            value = 'Azure';
            break;
          case 'M365 Architecture':
            value = 'Workplace';
            break;
          case securityIdentifier:
            value = 'Security';
            break;
          default:
            value = secondSegment;
            break;
        }
      }
    }

    return value + ' Team';
  }

  get team() {
    const value = this.getTeamText(this.getValue('department'));

    return `${value}${this.positionType ? ' / ' + this.positionType : ''}`;
  }

  get data() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      team: this.team,
      position_type: this.positionType,
      tags: this.tags,
      order: this.order,
    };
  }

  get positionType() {
    let value = this.getValue('employmentType');

    switch (value) {
      case 'permanent':
        value = window.i18n?.translate('positionTypePermantently');
        break;
      case 'intern':
        value = window.i18n?.translate('positionTypeInternship');
        break;
      case 'trainee':
        value = window.i18n?.translate('positionTypeTraining');
        break;
      case 'working_student':
        value = window.i18n?.translate('positionTypeStudent');
        break;
      default:
      case 'freelance':
      case 'temporary':
        value = null;
        break;
    }

    return value;
  }

  get order() {
    const orderTag = this.tags.find((tag) => tag.includes('ORDER_'));

    if (!orderTag) return null;

    const orderNumber = orderTag.split('_')[1];
    const radix = 10;

    return parseInt(orderNumber, radix);
  }

  trimNewlines(text) {
    return text.replace(/\n|\t|    /g, '');
  }

  getValue(property, key = 'text') {
    return this.position && this.position[property] ? this.trimNewlines(this.position[property][`#${key}`]) : null;
  }
}

export default PersonioPosition;
