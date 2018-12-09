import * as React from 'react';
import { mount } from 'enzyme';
import TestComp from './index';

describe('Pages', () => {
	describe('TestComp', () => {
		it('should render without throwing an error', function() {
			const wrap = mount(<TestComp />);
			expect(wrap.find('div').text()).toBe('Hello Next.js');
		});
	});
});
