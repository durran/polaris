const DashboardList = require('./lib/component/dashboard-list');

/**
 * The dashboard list component name.
 */
const DASHBOARD_LIST = 'Dashboard.DashboardList';

/**
 * Activate all the components in the package.
 */
const activate = () => {
  global.store.registry.registerComponent(DASHBOARD_LIST, DashboardList);
}

/**
 * Deactivate all the components in the package.
 */
const deactivate = () => {
  global.store.registry.deregisterComponent(DASHBOARD_LIST);
}

module.exports.activate = activate;
module.exports.deactivate = deactivate;
