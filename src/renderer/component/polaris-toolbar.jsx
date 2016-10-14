const React = require('react');
const PolarisToolbarTab = require('./polaris-toolbar-tab');
const Actions = require('../action');

/**
 * The style constant.
 */
const TOOLBAR = 'polaris-toolbar';

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
   * Render the polaris toolbar component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    const text = global.t.polaris.toolbar;
    return (
      <div id={TOOLBAR} className={TOOLBAR}>
        <ul>
          <PolarisToolbarTab
            handler={this.gotoHome}
            label={text.home}
            active={this.state.active} />
          <PolarisToolbarTab
            handler={this.gotoDashboards}
            label={text.dashboards}
            active={this.state.active} />
          <PolarisToolbarTab
            handler={this.gotoVisualisations}
            label={text.visualisations}
            active={this.state.active} />
        </ul>
      </div>
    );
  }
}

/**
 * The component display name.
 */
PolarisToolbar.displayName = 'PolarisToolbar';

module.exports = PolarisToolbar;
