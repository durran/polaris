const path = require('path');
const yaml = require('node-yaml');

/**
 * The location of the locales in the application.
 */
const LOCALES = path.join(__dirname, 'locales');

/**
 * Provides basic i18n functionality.
 */
class I18n {

  /**
   * Instantiate the i18n object.
   */
  constructor() {
    this.translations = {};
  }

  /**
   * Get the translations for the provided language.
   *
   * @param {String} language - The official language abbreviation.
   *
   * @returns {Object} The translations.
   */
  get(language) {
    return this.translations[language];
  }

  /**
   * Load a particular language from the locales.
   *
   * @param {String} language - The official language abbreviation.
   * @param {Function} done - The done callback.
   */
  load(language, done) {
    const file = path.join(LOCALES, `${language}.yml`);
    yaml.read(file, (error, data) => {
      if (error) {
        return done(error);
      }
      this.translations[language] = data;
      done();
    })
  }
}

module.exports = I18n;
