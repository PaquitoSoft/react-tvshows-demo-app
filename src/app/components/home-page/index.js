import React from 'react';

import { getPopularTvShows } from '../../api/tmdb';

import MovieSummary from './movie-summary';
import Pagination from './pagination';

import './home-page.css';

class HomePage extends React.Component {

	constructor() {
		super();
		this.state = {
			movies: [],
			totalPages: 0,
			totalResults: 0,
			currentPage: 1
		};
	}

	componentWillMount() {
		getPopularTvShows(this.state.currentPage)
			.then(resultsData => {
				this.setState({
					movies: resultsData.results,
					totalPages: resultsData.total_pages,
					totalResults: resultsData.total_results
				});
			});
	}

	buildMoviesSummariesList(movies = []) {
		return movies.map(movie => <MovieSummary key={movie.id} movie={movie} />);
	}

	render() {
		return (
			<div className="media">
				<h2 className="title">Popular TV Shows</h2>

				<div className="results">
					{this.buildMoviesSummariesList(this.state.movies)}
					
					<Pagination 
						totalPages={this.state.totalPages}
						totalResults={this.state.totalResults}
						currentPage={this.state.currentPage}
						urlPath='/'
					/>
				</div>
			</div>
		); 
	}

}

export default HomePage;