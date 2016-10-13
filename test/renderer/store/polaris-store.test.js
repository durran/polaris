const expect = require('chai').expect;
const AppRegistry = require('hadron-app-registry');
const PackageManager = require('hadron-package-manager').PackageManager;
const PolarisStore = require('../../../src/renderer/store/polaris-store');

describe('PolarisStore', () => {
  describe('#init', () => {
    it('sets up the app registry', () => {
      expect(PolarisStore.registry.components).to.be.a('object');
    });

    it('sets up the package manager', () => {
      expect(PolarisStore.packageManager.packagePaths).to.be.a('array');
    });
  });
});
