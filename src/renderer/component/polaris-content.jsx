const React = require('react');
const ZeroState = require('./zero-state');
const Actions = require('../action');

/**
 * The style constant.
 */
const CONTENT = 'polaris-content';

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
    this.state = { active: global.t.polaris.toolbar.home };
    this.visualisations = null;
    this.dashboards = null;
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
   * Handle a tab change.
   */
  handleGotoView(tab) {
    this.setState({ active: tab });
  }

  /**
   * Render the content.
   */
  renderContent() {
    return (
      <ZeroState />
    )
  }

  /**
   * Render the polaris content component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={CONTENT} className={CONTENT}>
        {this.renderContent()}
      </div>
    );
  }
}

/**
 * The component display name.
 */
PolarisContent.displayName = 'PolarisContent';

module.exports = PolarisContent;
