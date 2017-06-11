import React from 'react';
import {
	Grid,
	Cell
} from 'react-mdl';

import './home-page.css';

import MovieSummary from './tvshow-summary/tvshow-summary';


class HomePage extends React.Component {

	render() {
		return (
			<div className="home-page">
				<h2>Home page</h2>
				<Grid>
					<Cell col={4}>
						<MovieSummary />
					</Cell>
					<Cell col={4}>
						<MovieSummary />
					</Cell>
					<Cell col={4}>
						<MovieSummary />
					</Cell>
				</Grid>
			</div>
		);
	}

}

export default HomePage;
