require('babel-register')({ extensions: ['.jsx'], ignore: false });

const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const electron = require('electron');
const React = require('react');
const ReactDOM = require('react-dom');
const StyleManager = require('hadron-style-manager');
const Actions = require('hadron-package-manager').Action;
const I18n = require('hadron-i18n');
const Polaris = require('./component/polaris');
const PolarisStore = require('./store/polaris-store');
const PolarisActions = require('./action');

/**
 * The root div the application is contained in.
 */
const APPLICATION = 'application';

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
 * Initiate the i18n module, activate the package manager
 * and then render the polaris component.
 */
new I18n(electron.remote.app.getLocale()).load(LOCALES, (error, i18n) => {
  global.t = i18n.t;
  global.store = PolarisStore;
  global.actions = PolarisActions;
  Actions.packageActivationCompleted.listen(() => {
    const css = new StyleManager(LESS_CACHE, __dirname)
    css.use(document, ROOT_STYLESHEET);
    fs.readdir(PACKAGES, (err, files) => {
      _.each(files, (file, i) => {
        const styles = path.join(PACKAGES, file, 'styles', 'index.less');
        const locales = path.join(PACKAGES, file, 'locales');
        css.use(document, styles);
        i18n.load(locales, (e, i18n) => {
          if (i === files.length - 1) {
            ReactDOM.render(React.createElement(Polaris), document.getElementById(APPLICATION));
          }
        });
      });
    });
  });
  PolarisStore.packageManager.activate();
});
