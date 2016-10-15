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
   * Render the visualisation list component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={VISUALISATION_LIST} className={VISUALISATION_LIST}>
      </div>
    );
  }
}

/**
 * The component display name.
 */
VisualisationList.displayName = 'VisualisationList';

module.exports = VisualisationList;
