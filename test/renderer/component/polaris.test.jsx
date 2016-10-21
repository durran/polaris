/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const expect = chai.expect;
const React = require('react');
const mount = require('enzyme').mount;
const Application = require('../../../src/renderer/application');
const Polaris = require('../../../src/renderer/component/polaris');

chai.use(chaiEnzyme());

describe('<Polaris />', () => {
  before((done) => {
    new Application('en-us').start(() => {
      this.wrapper = mount(<Polaris />);
      this.component = wrapper.find('#polaris');
      console.log('here');
      done();
    });
  });

  it('includes the BEM class name', () => {
    expect(this.component.hasClass('polaris')).to.equal(true);
  });
});
