const path = require('path');
const Reflux = require('reflux');
const AppRegistry = require('hadron-app-registry');
const PackageManager = require('hadron-package-manager').PackageManager;

/**
 * Constant for the location of the internal packages.
 */
const INTERNAL_PACKAGES = path.join(__dirname, '..', '..', 'internal-packages');

/**
 * The core Polaris reflux store.
 */
const PolarisStore = Reflux.createStore({

  /**
   * Initialize the Polaris store. Sets up the application registry and
   * the package manager.
   */
  init: function() {
    this.registry = new AppRegistry();
    this.packageManager = new PackageManager(INTERNAL_PACKAGES);
  }
});

module.exports = PolarisStore;
