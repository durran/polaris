const React = require('react');

/**
 * The tab constant.
 */
const TAB = 'polaris-toolbar-tab';

/**
 * The Polaris toolbar tab component.
 */
class PolarisToolbarTab extends React.Component {

  /**
   * Determine if a tab is active.
   *
   * @param {String} tab - The tab name.
   *
   * @returns {Boolean} If the tab is active.
   */
  isActive(tab) {
    return this.props.active === tab;
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
    return (
      <li onClick={this.props.clickHandler} className={this.tabClass(this.props.label)}>
        {this.props.label}
      </li>
    );
  }
}

/**
 * The component display name.
 */
PolarisToolbarTab.displayName = 'PolarisToolbarTab';

module.exports = PolarisToolbarTab;
