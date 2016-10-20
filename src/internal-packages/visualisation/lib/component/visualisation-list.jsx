const React = require('react');

/**
 * The visualisation list constant.
 */
const VISUALISATION_LIST = 'visualisation-list';

/**
 * The visualisation list component.
 */
class VisualisationList extends React.Component {

  /**
   * Instantiate the visualisation list component.
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
    return this.state.active === global.t.toolbar.visualisations;
  }

  /**
   * Get the style for the component.
   *
   * @returns {String} The component style.
   */
  style() {
    return this.isVisible() ? VISUALISATION_LIST : `${VISUALISATION_LIST} ${VISUALISATION_LIST}-is-hidden`;
  }

  /**
   * Render the visualisation list component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={VISUALISATION_LIST} className={this.style()}>
        {global.t.visualisation.list.empty}
      </div>
    );
  }
}

/**
 * The component display name.
 */
VisualisationList.displayName = 'VisualisationList';

module.exports = VisualisationList;
