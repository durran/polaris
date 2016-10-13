/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const expect = chai.expect;
const React = require('react');
const mount = require('enzyme').mount;
const Polaris = require('../../../src/renderer/component/polaris');

chai.use(chaiEnzyme());

describe('<Polaris />', () => {
  const wrapper = mount(<Polaris />);
  const component = wrapper.find('#polaris');

  it('includes the BEM class name', () => {
    expect(component.hasClass('polaris')).to.equal(true);
  });
});
