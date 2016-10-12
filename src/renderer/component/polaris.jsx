const React = require('react');

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
      <div data-test-id={POLARIS} className={POLARIS}></div>
    );
  }
}

Polaris.displayName = 'Polaris';

module.exports = Polaris;
