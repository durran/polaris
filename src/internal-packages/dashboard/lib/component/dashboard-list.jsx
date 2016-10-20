const React = require('react');

/**
 * The dashboard list constant.
 */
const DASHBOARD_LIST = 'dashboard-list';

/**
 * The dashboard list component.
 */
class DashboardList extends React.Component {

  /**
   * Instantiate the dashboard list component.
   *
   * @param {Object} props - The properties.
   */
  constructor(props) {
    super(props);
    this.state = { active: global.t.toolbar.home };
  }

  /**
   * Subscribe to the actions.
   */
  componentDidMount() {
    this.unsubscribeGoto = global.actions.gotoView.listen(this.handleGotoView.bind(this));
  }

  /**
   * Unsubscribe from the actions.
   */
  componentWillUnmount() {
    this.unsubscribeGoto();
  }

  /**
   * Handle a tab change.
   */
  handleGotoView(tab) {
    this.setState({ active: tab });
  }

  /**
   * Determine if the component is visible.
   *
   * @returns {Boolean} If the component is visible.
   */
  isVisible() {
    return this.state.active === global.t.toolbar.dashboards;
  }

  /**
   * Get the style for the component.
   *
   * @returns {String} The component style.
   */
  style() {
    return this.isVisible() ? DASHBOARD_LIST : `${DASHBOARD_LIST} ${DASHBOARD_LIST}-is-hidden`;
  }

  /**
   * Render the dashboard list component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={DASHBOARD_LIST} className={this.style()}>
        {global.t.dashboard.list.empty}
      </div>
    );
  }
}

/**
 * The component display name.
 */
DashboardList.displayName = 'DashboardList';

module.exports = DashboardList;
