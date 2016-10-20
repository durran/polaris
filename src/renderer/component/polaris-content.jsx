const React = require('react');
const ZeroState = require('./zero-state');

/**
 * The style constant.
 */
const CONTENT = 'polaris-content';

/**
 * The visualisation list component name.
 */
const VISUALISATION_LIST = 'Visualisation.VisualisationList';

/**
 * The dashboard list component name.
 */
const DASHBOARD_LIST = 'Dashboard.DashboardList';

/**
 * The Polaris content component.
 */
class PolarisContent extends React.Component {

  /**
   * Instantiate the content component.
   *
   * @param {Object} props - The properties.
   */
  constructor(props) {
    super(props);
    this.state = { active: global.t.toolbar.home };
    this.visualisationList = global.store.registry.getComponent(VISUALISATION_LIST);
    this.dashboardList = global.store.registry.getComponent(DASHBOARD_LIST);
  }

  /**
   * Render the polaris content component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={CONTENT} className={CONTENT}>
        <ZeroState />
        <this.visualisationList />
        <this.dashboardList />
      </div>
    );
  }
}

/**
 * The component display name.
 */
PolarisContent.displayName = 'PolarisContent';

module.exports = PolarisContent;
