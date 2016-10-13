const expect = require('chai').expect;
const I18n = require('../../src/renderer/i18n');

describe('I18n', () => {
  describe('#load', () => {
    context('when a supported language is provided', () => {
      const i18n = new I18n();

      beforeEach((done) => {
        i18n.load('en-uk', done);
      });

      it('loads the translations', () => {
        expect(i18n.get('en-uk').polaris.toolbar.home).to.equal('Home');
      });
    });
  });
});
