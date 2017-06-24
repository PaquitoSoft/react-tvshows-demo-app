import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from '../src/app/app';

describe('App', () => {

	test('onSearch should fetch reposotories and update state', () => {
		const component = mount(<App />);
		const instance = component.instance();
		fetchMock.mock(/github\.com\/users\//, {
			body: [
				{ name: 'backbone-cellar-express', html_url: '' },
				{ name: 'bootexpress-template', html_url: '' },
				{ name: 'complete-intro-to-react', html_url: '' }
			]
		});

		expect(component.state('repos').length).toEqual(0);
		return instance.onSearch('PaquitoSoft')
			.then(() => {
				expect(component.state('repos').length).toEqual(3);
			});
	});

});
