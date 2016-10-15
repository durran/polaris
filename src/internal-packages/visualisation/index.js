const VisualisationList = require('./lib/component/visualisation-list');

/**
 * The visualisation list component name.
 */
const VISUALISATION_LIST = 'Visualisation.VisualisationList';

/**
 * Activate all the components in the package.
 */
const activate = () => {
  global.store.registry.registerComponent(VISUALISATION_LIST, VisualisationList);
}

/**
 * Deactivate all the components in the package.
 */
const deactivate = () => {
  global.store.registry.deregisterComponent(VISUALISATION_LIST);
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;
