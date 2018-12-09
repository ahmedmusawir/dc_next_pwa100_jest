import React from 'react';
import { mount, shallow } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import {
	ContentTxt,
	HomeSectionHeading,
	HomeSectionText
} from 'components/general';

describe('<ContentTxt />', () => {
	it('should render two text elements', () => {
		const wrapper = shallow(<ContentTxt />);
		expect(wrapper.find(HomeSectionHeading)).toHaveLength(1);
		expect(wrapper.find(HomeSectionText)).toHaveLength(1);
	});
});

// describe('<ContentTxt />', () => {
// 	it('should render two text elements', () => {
// 		const wrapper = mount(<ContentTxt />);
// 		expect(wrapper.find(HomeSectionHeading)).toHaveLength(1);
// 	});
// });
