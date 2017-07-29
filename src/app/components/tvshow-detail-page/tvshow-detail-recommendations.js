import React from 'react';

function TvShowRecommendation() {
	return (
		<div className="item mini backdrop mini_card">
			<div className="image_content">
				<a href="/tv/655?language=en" title="Star Trek: The Next Generation" alt="Star Trek: The Next Generation">
					<img className="backdrop fade lazyautosizes lazyloaded" data-sizes="auto" data-src="https://image.tmdb.org/t/p/w250_and_h141_bestv2/8do6gZErem4wfdPwALiT8agtJfb.jpg" data-srcset="https://image.tmdb.org/t/p/w250_and_h141_bestv2/8do6gZErem4wfdPwALiT8agtJfb.jpg 1x, https://image.tmdb.org/t/p/w500_and_h281_bestv2/8do6gZErem4wfdPwALiT8agtJfb.jpg 2x" alt="Star Trek: The Next Generation" sizes="250px" srcSet="https://image.tmdb.org/t/p/w250_and_h141_bestv2/8do6gZErem4wfdPwALiT8agtJfb.jpg 1x, https://image.tmdb.org/t/p/w500_and_h281_bestv2/8do6gZErem4wfdPwALiT8agtJfb.jpg 2x" src="https://image.tmdb.org/t/p/w250_and_h141_bestv2/8do6gZErem4wfdPwALiT8agtJfb.jpg" />
					<div className="meta">
						<span className="release_date"><span className="glyphicons glyphicons-calendar x1"></span>  1987-09-28</span>
						<span></span>
					</div>
				</a>
			</div>
			<p className="tv flex">
				<a className="title" href="/tv/655?language=en" title="Star Trek: The Next Generation" alt="Star Trek: The Next Generation"><bdi>Star Trek: The Next Generation</bdi></a>
				<span className="vote_average">8.1 <span id="rating_52538d0219c2957940260c3a" className="glyphicons glyphicons-star x1 right rating"></span></span>
			</p>
		</div>
	);
}

function TvShowDetailRecommendations() {
	return (
		<section id="recommendation_waypoint" className="panel recommendations scroller">
			<h3 dir="auto">Recommendations</h3>
			<div className="scroller">
				<TvShowRecommendation />
				<TvShowRecommendation />
				<TvShowRecommendation />											
			</div>
		</section>
	);
}

export default TvShowDetailRecommendations;