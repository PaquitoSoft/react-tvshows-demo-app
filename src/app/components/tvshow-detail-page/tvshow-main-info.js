import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { getPosterUrl } from 'plugins/url-builder';

function TvShowMainInfo({ movie }) {
	return (
		<div className="custom_bg lazyloaded">
			<div className="single_column">
				<section className="images inner">
					<div className="poster">
						<div className="image_content">
							<img 
								className="poster fade lazyautosizes lazyloaded" 
								alt={movie.name} 
								srcSet={`${getPosterUrl(movie.poster_path, 300)} 1x, ${getPosterUrl(movie.poster_path, 600)} 2x`} 
								src={getPosterUrl(movie.poster_path, 300)}
							/>
						</div>
					</div>

					<div className="header_poster_wrapper">
						<section className="header poster">
							<div className="title" dir="auto">
								<h2 className="tv_series 10">
									<Link to="#">{movie.name} <span className="release_date">({movie.first_air_date.split('-')[0]})</span></Link>
								</h2>
							</div>
							<ul className="auto actions">
								<li className="chart">
									<div className="consensus">
										<div className="outer_ring">
											<div className="user_score_chart" data-percent="60.0" data-track-color="#423d0f" data-bar-color="#d2d531">
												<div className="percent">
													<span className="user_score_value">{Math.trunc(movie.vote_average * 10)}%</span>
												</div>
											</div>
										</div>
									</div>
									<div className="text">User<br/>Score</div>
								</li>
								<li className="tooltip use_tooltip" title="Login to create and edit custom lists" data-role="tooltip">
									<a className="no_click" href="#"><span className="glyphicons glyphicons-list x1"></span></a>
								</li>
								<li className="use_tooltip tooltip" title="Login to add this movie to your favorite list" data-role="tooltip">
									<a id="favourite" className="no_click add_to_account_list favourite false" href="#"><span className="glyphicons glyphicons-heart x1"></span></a>
								</li>
								<li className="use_tooltip tooltip" title="Login to add this movie to your watchlist" data-role="tooltip">
									<a id="watchlist" className="no_click add_to_account_list watchlist false" href="#"><span className="glyphicons glyphicons-bookmark x1"></span></a>
								</li>
								<li className="tooltip rating use_tooltip" title="Login to rate this movie" data-role="tooltip">
									<a id="rate_it" className="no_click rating false" href="#"><span className="glyphicons glyphicons-star x1"></span></a>
								</li>
								<li className="video none">
									<a className="no_click play_trailer" href="#" data-id="bB8fh4QUy-A"><span className="glyphicons glyphicons-play"></span> Play Trailer</a>
								</li>
							</ul>
							<div className="pad">
								<h3 dir="auto">Overview</h3>
								<div className="overview" dir="auto">
									<p>{movie.overview}</p>
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</div>
	);
}

TvShowMainInfo.propTypes = {
	movie: shape({
		name: string,
		first_air_date: string,
		overview: string
	})
};

export default TvShowMainInfo;