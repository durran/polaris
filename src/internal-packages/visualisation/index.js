// const PolarisStore = require('polaris').PolarisStore;

/**
 * The visualisation list component name.
 */
const VISUALISATION_LIST = 'Visualisation.List';

/**
 * Activate all the components in the package.
 */
const activate = () => {
  // PolarisStore.registry.registerComponent(VISUALISATION_LIST, VisualisationList);
}

/**
 * Deactivate all the components in the package.
 */
const deactivate = () => {
  // PolarisStore.registry.deregisterComponent(VISUALISATION_LIST);
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;
