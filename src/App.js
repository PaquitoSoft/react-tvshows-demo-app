import React, { Component } from 'react';
import {
	Layout,
	Header,
	Textfield,
	Content,
	Grid,
	Cell
} from 'react-mdl';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// import logo from './logo.svg';
import './App.css';

import HomePage from './components/home-page/home-page';

class App extends Component {
	render() {
		return (
			<div style={{height: '300px', position: 'relative'}}>
				<Layout fixedHeader>
					<Header title="Tv Shows Demo App">
						<Textfield
							id="search-term"
							label="Serch"
							value=""
							onChange={() => ({})}
							expandable
							expandableIcon="search"
						/>
					</Header>

					<Content>
						<div className="page-content">
							<HomePage />
						</div>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
