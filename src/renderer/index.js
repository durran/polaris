require('babel-register')({ extensions: ['.jsx'], ignore: false });

const React = require('react');
const ReactDOM = require('react-dom');
const I18n = require('./i18n');
const Polaris = require('./component/polaris');
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
 * Initiate the i18n module, activate the package manager
 * and then render the polaris component.
 */
const i18n = new I18n();
i18n.load(EN_UK, () => {
  global.t = i18n.get(EN_UK);
  PolarisStore.packageManager.activate();
  ReactDOM.render(React.createElement(Polaris), document.getElementById(APPLICATION));
});
