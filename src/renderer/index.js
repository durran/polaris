require('babel-register')({ extensions: ['.jsx'], ignore: false });

const React = require('react');
const ReactDOM = require('react-dom');
const Polaris = require('./component/polaris');
const PolarisStore = require('./store/polaris-store');

/**
 * The root div the application is contained in.
 */
const APPLICATION = 'application';

/**
 * Activate the package manager then render the polaris component.
 */
PolarisStore.packageManager.activate();
ReactDOM.render(React.createElement(Polaris), document.getElementById(APPLICATION));
