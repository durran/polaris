const React = require('react');
const Actions = require('../action');

/**
 * The class constant.
 */
const ZERO_STATE = 'zero-state';

/**
 * The Zero state component.
 */
class ZeroState extends React.Component {

  /**
   * Instantiate the content component.
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
   * Determine if the component is visible.
   *
   * @returns {Boolean} If the component is visible.
   */
  isVisible() {
    return this.state.active === global.t.toolbar.home;
  }

  /**
   * Get the style for the component.
   *
   * @returns {String} The component style.
   */
  style() {
    return this.isVisible() ? ZERO_STATE : `${ZERO_STATE} ${ZERO_STATE}-is-hidden`;
  }

  /**
   * Render the polaris zero state component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={ZERO_STATE} className={this.style()}>
        Home
      </div>
    );
  }
}

/**
 * The component display name.
 */
ZeroState.displayName = 'ZeroState';

module.exports = ZeroState;
