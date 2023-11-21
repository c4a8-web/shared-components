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
    return this.position.jobDescriptions.jobDescription.map((desc) => desc.value['#cdata-section']).join('\n');
  }

  get id() {
    return this.getValue('id');
  }

  get title() {
    return this.getValue('name');
  }

  get team() {
    return `${this.getValue('department')} / ${this.positionType}`;
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
    let value = this.getValue('recruitingCategory');

    switch (value) {
      case 'Festangestellte':
      case 'Festanstellung':
        value = window.i18n?.translate('positionTypePermantently');
        break;
      case 'Praktikum/Werkstudium':
        value = window.i18n?.translate('positionTypeInternship');
        break;
      case 'Ausbildung / Trainee':
        value = window.i18n?.translate('positionTypeTraining');
        break;
      case 'Werkstudierende':
        value = window.i18n?.translate('positionTypeStudent');
        break;
      case 'Freelancing':
      case 'Befristet':
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
