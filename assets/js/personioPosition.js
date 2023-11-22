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
    // TODO also add the name so the headline of the section

    return this.position.jobDescriptions && this.position.jobDescriptions.jobDescription
      ? this.position.jobDescriptions.jobDescription.map((desc) => desc.value['#cdata-section']).join('\n')
      : null;
  }

  get id() {
    const value = this.getValue('id');

    return value.replace(/\n|\t|\s/g, '');
  }

  get title() {
    return this.getValue('name');
  }

  getTeamText(text) {
    let value = text;

    if (value.includes('/')) {
      const segments = value.split(' / ');
      const firstSegment = segments[0];
      const secondSegment = segments[1];
      const securityIdentifier = 'CSOC';
      const managedServicesIdentifier = 'Managed Services';

      if (firstSegment === managedServicesIdentifier && secondSegment !== securityIdentifier) {
        value = managedServicesIdentifier;
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
    // TODO implement order logic
  }

  getValue(property, key = 'text') {
    return this.position && this.position[property] ? this.position[property][`#${key}`] : null;
  }
}

export default PersonioPosition;
