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

  it('includes the BEM class name', () => {
    expect(component.hasClass('polaris-toolbar')).to.equal(true);
  });

  it.skip('defaults to the home tab', () => {
  });
});
