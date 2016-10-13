const React = require('react');
const PolarisStore = require('../store/polaris-store');

/**
 * The polaris constant.
 */
const POLARIS = 'polaris';

/**
 * The core Polaris application component.
 */
class Polaris extends React.Component {

  /**
   * Render the polaris component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={POLARIS} className={POLARIS}></div>
    );
  }
}

/**
 * The component display name.
 */
Polaris.displayName = 'Polaris';

module.exports = Polaris;
