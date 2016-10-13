/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const expect = chai.expect;
const React = require('react');
const mount = require('enzyme').mount;
const PolarisToolbar = require('../../../src/renderer/component/polaris-toolbar');

chai.use(chaiEnzyme());

describe('<PolarisToolbar />', () => {
  const wrapper = mount(<PolarisToolbar />);
  const component = wrapper.find('#polaris-toolbar');
  const tab = wrapper.find('#polaris-toolbar ol li.polaris-toolbar-tab-is-active');

  it('includes the BEM class name', () => {
    expect(component.hasClass('polaris-toolbar')).to.equal(true);
  });

  it('defaults to the home tab', () => {
    expect(wrapper.state('active')).to.equal('Home');
  });

  it('defaults the home tab to active', () => {
    expect(tab.text()).to.equal('Home');
  });
});
