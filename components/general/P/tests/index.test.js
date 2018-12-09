import React from 'react';
import { mount, shallow } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import P from 'components/general/P';

// describe('<StyledComponent />', () => {
// it('should render a prop', () => {
// 	const id = 'testId';
// 	const wrapper = mount(<StyledComponent id={id} />);
// 	console.log(wrapper.debug());
// 	const renderedComponent = enzymeFind(wrapper, P);
// 	expect(renderedComponent.prop('id')).toEqual(id);
// });
// it('should render its text', () => {
// 	const children = 'Text';
// 	const wrapper = mount(<P>{children}</P>);
// 	const renderedComponent = enzymeFind(wrapper, P);
// 	expect(renderedComponent.contains(children)).toBe(true);
// });
// it('should render a text', () => {
// 	const wrapper = shallow(<P />);
// 	expect(wrapper.find('p').text()).toEqual('');
// });
// });

test('it works', () => {
	const tree = renderer.create(<P />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('it works', () => {
	const wrapper = shallow(<P />);
	// console.log(wrapper.debug());
	expect(wrapper).toMatchSnapshot();
});
