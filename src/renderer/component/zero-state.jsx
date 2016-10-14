const React = require('react');

/**
 * The class constant.
 */
const ZERO_STATE = 'zero-state';

/**
 * The Zero state component.
 */
class ZeroState extends React.Component {

  /**
   * Render the polaris zero state component.
   *
   * @returns {React.Component} The core component.
   */
  render() {
    return (
      <div id={ZERO_STATE} className={ZERO_STATE}>
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
