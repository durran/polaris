require('babel-register')({ extensions: ['.jsx'], ignore: false });

const path = require('path');
const React = require('react');
const ReactDOM = require('react-dom');
const StyleManager = require('hadron-style-manager');
const Actions = require('hadron-package-manager').Action;
const Polaris = require('./component/polaris');
const I18n = require('./i18n');
const PolarisStore = require('./store/polaris-store');

/**
 * The root div the application is contained in.
 */
const APPLICATION = 'application';

/**
 * The british english constant.
 */
const EN_UK = 'en-uk';

/**
 * The directory to store the compiled less.
 */
const LESS_CACHE = path.join(__dirname, '.compiled-less');

/**
 * The root application stylesheet.
 */
const ROOT_STYLESHEET = path.join(__dirname, 'styles', 'index.less');

/**
 * Initiate the i18n module, activate the package manager
 * and then render the polaris component.
 */
const i18n = new I18n();
i18n.load(EN_UK, () => {
  global.t = i18n.get(EN_UK);
  global.store = PolarisStore;
  Actions.packageActivationCompleted.listen(() => {
    new StyleManager(LESS_CACHE, __dirname).use(document, ROOT_STYLESHEET);
    ReactDOM.render(React.createElement(Polaris), document.getElementById(APPLICATION));
  });
  PolarisStore.packageManager.activate();
});
