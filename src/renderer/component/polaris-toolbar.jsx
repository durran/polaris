const React = require('react');
const Actions = require('../action');

/**
 * The style constant.
 */
const TOOLBAR = 'polaris-toolbar';

/**
 * The tab constant.
 */
const TAB = 'polaris-toolbar-tab';

/**
 * The Polaris toolbar component.
 */
class PolarisToolbar extends React.Component {

  /**
   * Instantiate the component.
   *
   * @param {Object} props - The properties.
   */
  constructor(props) {
    super(props);
    this.state = { active: global.t.polaris.toolbar.home };
  }

  /**
   * Subscribe to the actions.
   */
  componentDidMount() {
    this.unsubscribeGoto = Actions.gotoView.listen(this.handleGotoView.bind(this));
  }

  /**
   * Unsubscribe from the actions.
   */
  componentWillUnmount() {
    this.unsubscribeGoto();
  }

  /**
   * Go to the dashboards view.
   */
  gotoDashboards() {
    Actions.gotoView(global.t.polaris.toolbar.dashboards);
  }

  /**
   * Go to the home view.
   */
  gotoHome() {
    Actions.gotoView(global.t.polaris.toolbar.home);
  }

  /**
   * Go to the visualisations view.
   */
  gotoVisualisations() {
    Actions.gotoView(global.t.polaris.toolbar.visualisations);
  }

  /**
   * Handle a tab change.
   */
  handleGotoView(tab) {
    this.setState({ active: tab });
  }

  /**
   * Determine if a tab is active.
   *
   * @param {String} tab - The tab name.
   *
   * @returns {Boolean} If the tab is active.
   */
  isActive(tab) {
    return this.state.active === tab;
  }

  /**
   * Get the class name for the tab.
   *
   * @param {String} tab - The tab name.
   *
   * @returns {String} The tab class.
   */
  tabClass(tab) {
    return this.isActive(tab) ? `${TAB} ${TAB}-is-active` : TAB;
  }

  /**
   * Render the polaris toolbar component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    const text = global.t.polaris.toolbar;
    return (
      <div id={TOOLBAR} className={TOOLBAR}>
        <ol>
          <li onClick={this.gotoHome} className={this.tabClass(text.home)}>
            {text.home}
          </li>
          <li onClick={this.gotoDashboards} className={this.tabClass(text.dashboards)}>
            {text.dashboards}
          </li>
          <li onClick={this.gotoVisualisations} className={this.tabClass(text.visualisations)}>
            {text.visualisations}
          </li>
        </ol>
      </div>
    );
  }
}

/**
 * The component display name.
 */
PolarisToolbar.displayName = 'PolarisToolbar';

module.exports = PolarisToolbar;
