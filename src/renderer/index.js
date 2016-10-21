require('babel-register')({ extensions: ['.jsx'], ignore: false });

const electron = require('electron');
const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./application');
const Polaris = require('./component/polaris');

/**
 * The root div the application is contained in.
 */
const APPLICATION = 'application';

/**
 * Instantiate the application with the OS locale and then render the
 * core component when finished.
 */
new Application(electron.remote.app.getLocale()).start(() => {
  ReactDOM.render(React.createElement(Polaris), document.getElementById(APPLICATION));
});
