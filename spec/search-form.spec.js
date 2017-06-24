import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SearchForm from '../src/app/search-form';

const noop = () => false;

describe('SearchForm', () => {

	test('Should render the form', () => {
		const component = shallow(<SearchForm onSubmit={noop} />);
		expect(component.find('form').length).toBe(1);
		expect(component.contains(<button type="submit">List repos</button>)).toBe(true);
	});

	test('Should render the form (snapshot)', () => {
		const component = shallow(<SearchForm onSubmit={noop} />);
		const componentJson = shallowToJson(component);
		expect(componentJson).toMatchSnapshot();
	});

	test('Should not call onSubmit callback when form is submitted with no search term', () => {
		const onSubmit = jest.fn();
		const mockEvent = { preventDefault: noop };
		const component = mount(<SearchForm onSubmit={onSubmit} />);
		component.find('form').simulate('submit', mockEvent);
		expect(onSubmit.mock.calls.length).toBe(0);
	});

	test('Shoud call onSubmit callback when form is submitted with search term', () => {
		const onSubmit = jest.fn();
		const mockEvent = { preventDefault: noop };
		const testUsername = 'PaquitoSoft';
		const component = mount(<SearchForm onSubmit={onSubmit} />);

		component.find('input').node.value = testUsername;
		component.find('form').simulate('submit', mockEvent);

		expect(onSubmit.mock.calls.length).toBe(1);
		expect(onSubmit.mock.calls[0][0]).toEqual(testUsername);
	});

});
