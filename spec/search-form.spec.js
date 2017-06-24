import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../src/app/search-form';

const noop = () => false;

describe('SearchForm', () => {

	test('Should render the form', () => {
		const component = shallow(<SearchForm onSubmit={noop} />);
		// console.log(component);
		expect(component.find('form').length).toBe(1);
		expect(component.contains(<button type="submit">List repos</button>)).toBe(true);
	});

	

});
