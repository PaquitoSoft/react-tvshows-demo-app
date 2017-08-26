import React from 'react';

import { getTvShowDetails } from 'api/tmdb';

import './tvshow-detail-page.css';

import TvShowMainInfo from './tvshow-main-info';
import TvShowDetailTabs from './tvshow-detail-tabs';
import TvShowDetailSeasons from './tvshow-detail-seasons';
import TvShowDetailSidebar from './tvshow-detail-sidebar';
import TvShowDetailRecommendations from './tvshow-detail-recommendations';

class TvShowDetailPage extends React.Component {

	constructor() {
		super();

		this.state = {
			movie: null
		};
	}

	componentWillMount() {
		getTvShowDetails(this.props.match.params.movieId)
			.then(movie => this.setState({ movie }))
			.catch(err => {
				console.error(err);
			});
	}

	render() {
		const { movie } = this.state;
		console.log(movie);
		if (!movie) return null;

		return (
			<section className="inner_content tv_content backdrop poster">
				
				<div className="header large border first">
					<TvShowMainInfo movie={movie} />
				</div>

				<div id="media_v4" className="media tv_v4 header_large">
					<TvShowDetailTabs />

					<div className="column_wrapper">
						<div>
							<div className="white_column">
								<div>
									<TvShowDetailSeasons movie={movie} />
									<TvShowDetailRecommendations movie={movie} />
								</div>
							</div>
						</div>

						<div className="grey_column">
							<TvShowDetailSidebar movie={movie} />
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default TvShowDetailPage;
