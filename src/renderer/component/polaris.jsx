const React = require('react');
const PolarisToolbar = require('./polaris-toolbar');
const PolarisContent = require('./polaris-content');

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
   * @todo:
   *   - Show home dashboard if exists.
   *   - Show dashboard list if dashboards exist.
   *   - Show visualisation list if visualisations exist.
   *   - Show zero state with shortcut to create visualisation.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={POLARIS} className={POLARIS}>
        <PolarisToolbar />
        <PolarisContent />
      </div>
    );
  }
}

/**
 * The component display name.
 */
Polaris.displayName = 'Polaris';

module.exports = Polaris;
