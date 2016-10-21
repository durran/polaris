/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const expect = chai.expect;
const React = require('react');
const mount = require('enzyme').mount;
const Application = require('../../../src/renderer/application');
const PolarisToolbar = require('../../../src/renderer/component/polaris-toolbar');

chai.use(chaiEnzyme());

describe('<PolarisToolbar />', () => {
  before((done) => {
    new Application('en-us').start(() => {
      this.wrapper = mount(<PolarisToolbar />);
      this.component = wrapper.find('#polaris-toolbar');
      this.tab = wrapper.find('#polaris-toolbar ol li.polaris-toolbar-tab-is-active');
      done();
    });
  });

  it('includes the BEM class name', () => {
    expect(this.component.hasClass('polaris-toolbar')).to.equal(true);
  });

  it('defaults to the home tab', () => {
    expect(this.wrapper.state('active')).to.equal('Home');
  });

  it('defaults the home tab to active', () => {
    expect(this.tab.text()).to.equal('Home');
  });
});
