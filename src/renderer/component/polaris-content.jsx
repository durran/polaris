const React = require('react');

/**
 * The style constant.
 */
const CONTENT = 'polaris-content';

/**
 * The Polaris content component.
 */
class PolarisContent extends React.Component {

  /**
   * Render the polaris content component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={CONTENT} className={CONTENT}>
      </div>
    );
  }
}

/**
 * The component display name.
 */
PolarisContent.displayName = 'PolarisContent';

module.exports = PolarisContent;
