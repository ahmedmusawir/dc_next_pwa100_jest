import React from 'react';
import { mount, shallow } from 'enzyme';
import Para from 'components/general/Para';

// describe('<Para />', () => {
// 	it('should render a prop', () => {
// 		const id = 'testId';
// 		const wrapper = shallow(<Para id={id} />);
// 		// const wrapper = shallow(<Para id={id} />);
// 		console.log(wrapper.childAt(1));
// 		console.log(wrapper.prop('id'));
// 		// expect(wrapper.prop('id')).toEqual('testId');
// 		// expect(wrapper.prop('id')).toEqual(id);
// 	});
// 	// it('should render its text', () => {
// 	// 	const children = 'Text';
// 	// 	const wrapper = mount(<P>{children}</P>);
// 	// 	const renderedComponent = enzymeFind(wrapper, P);
// 	// 	expect(renderedComponent.contains(children)).toBe(true);
// 	// });
// 	// it('should render a text', () => {
// 	// 	const wrapper = shallow(<P />);
// 	// 	expect(wrapper.find('p').text()).toEqual('');
// 	// });
// });

test('should render a p tag', () => {
	const id = 'testId';
	// const wrapper = mount(<Para />);
	const wrapper = shallow(<Para />);
	const appComp = wrapper.find("[id='testId']");
	expect(appComp.length).toBe(1);
});
