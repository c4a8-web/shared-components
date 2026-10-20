const NativeNames = {
  da: 'Dansk',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fi: 'Suomi',
  fr: 'Français',
  is: 'Íslenska',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  no: 'Norsk',
  pl: 'Polski',
  pt: 'Português',
  sv: 'Svenska',
};

class Languages {
  static capitalize(value) {
    if (!value) return value;

    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  static getDisplayName(code, locale) {
    if (!code) return null;

    try {
      const name = new Intl.DisplayNames([locale || code], { type: 'language' }).of(code);

      return name && name.toLowerCase() !== code.toLowerCase() ? this.capitalize(name) : null;
    } catch (error) {
      return null;
    }
  }

  static getNativeName(code) {
    if (!code) return null;

    return NativeNames[code.toLowerCase()] || this.getDisplayName(code, code) || code.toUpperCase();
  }

  static getOptions(codes, locale) {
    if (!Array.isArray(codes)) return [];

    return codes.map((code) => ({
      code,
      label: code.toUpperCase(),
      native: this.getNativeName(code),
      translated: this.getDisplayName(code, locale),
    }));
  }
}

export default Languages;
