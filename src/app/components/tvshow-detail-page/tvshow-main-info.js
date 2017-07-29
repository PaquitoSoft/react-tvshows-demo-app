import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

function TvShowMainInfo({ movie }) {
	return (
		<div className="custom_bg lazyloaded">
			<div className="single_column">
				<section className="images inner">
					<div className="poster">
						<div className="image_content">
							<img 
								className="poster fade lazyautosizes lazyloaded" 
								data-sizes="auto" 
								data-src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg" data-srcset="https://image.tmdb.org/t/p/w300_and_h450_bestv2/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg 2x" alt="Doctor Who" sizes="300px" srcSet="https://image.tmdb.org/t/p/w300_and_h450_bestv2/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg 2x" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/cFcZYgPRFZdBkA7EsxHz5Cb8x5.jpg" 
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
									<p>The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street. But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it. He's saved us from alien menaces and evil from before time began – but just who is he?</p>
								</div>
								<h3 dir="auto" className="featured">Featured Crew</h3>
								<ol className="people no_image">
									<li className="profile">
										<p><a href="/person/57293-sydney-newman?language=en">Sydney Newman</a></p>
										<p className="character">Creator</p>
									</li>
									<li className="profile">
										<p><a href="/person/1213434-c-e-webber?language=en">C. E. Webber</a></p>
										<p className="character">Creator</p>
									</li>
									<li className="profile">
										<p><a href="/person/1213433-donald-wilson?language=en">Donald Wilson</a></p>
										<p className="character">Creator</p>
									</li>
									<li className="profile"></li>
									<li className="profile"></li>
									<li className="profile"></li>
								</ol>
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
		first_air_date: string
	})
};

export default TvShowMainInfo;