const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const StyleManager = require('hadron-style-manager');
const Actions = require('hadron-package-manager').Action;
const I18n = require('hadron-i18n');
const PolarisStore = require('./store/polaris-store');
const PolarisActions = require('./action');

/**
 * The locales directory.
 */
const LOCALES = path.join(__dirname, 'locales');

/**
 * The directory to store the compiled less.
 */
const LESS_CACHE = path.join(__dirname, '.compiled-less');

/**
 * The root application stylesheet.
 */
const ROOT_STYLESHEET = path.join(__dirname, 'styles', 'index.less');

/**
 * The internal packages path.
 */
const PACKAGES = path.join(__dirname, '..', 'internal-packages');

/**
 * Wraps the entire polaris app in the renderer process.
 */
class Application {

  /**
   * Instantiate the application with a locale.
   *
   * @param {String} locale - The locale.
   */
  constructor(locale) {
    this.i18n = new I18n(locale);
    global.t = this.i18n.t;
  }

  /**
   * Start the application. Sets global variables t, store, and actions for
   * the application, starts the package manager.
   *
   * @param {Function} done - The callback to execute when finished.
   */
  start(done) {
    this.i18n.load(LOCALES, (error) => {
      if (error) {
        return done(error);
      }
      global.store = PolarisStore;
      global.actions = PolarisActions;
      this.activatePackages(done);
    });
  }

  /**
   * Activate all the packages in the application.
   *
   * @param {Function} done - The function to execute when finished.
   */
  activatePackages(done) {
    Actions.packageActivationCompleted.listen(() => {
      const css = new StyleManager(LESS_CACHE, __dirname)
      css.use(document, ROOT_STYLESHEET);
      fs.readdir(PACKAGES, (error, files) => {
        if (error) {
          return done(error);
        }
        _.each(files, (file, i) => {
          const styles = path.join(PACKAGES, file, 'styles', 'index.less');
          const locales = path.join(PACKAGES, file, 'locales');
          css.use(document, styles);
          this.i18n.load(locales, (e) => {
            if (i === files.length - 1) {
              done();
            }
          });
        });
      });
    });
    PolarisStore.packageManager.activate();
  }
}

module.exports = Application;
