import React from 'react';
import { shape, number, string } from 'prop-types';

import { getPosterUrl } from '../../plugins/url-builder';
/*
	poster_sizes:
	"w92",
	"w154",
	"w185",
	"w342",
	"w500",
	"w780",
	"original"
*/

function MovieSummary({ movie }) {
	console.log(movie);
	const movieUrl = `/movie/${movie.id}`;

	return (
		<div className="item poster card">
			<div className="image_content">
				<a href={movieUrl} id={`tv_${movie.id}`} className="result" title="Supernatural" alt="Supernatural">
					<img 
						className="poster fade lazyautosizes lazyloaded" 
						src={getPosterUrl(movie.poster_path, 184)} 
					/>
				</a>
			</div>
			<div className="info">
				<p className="flex">
					<a id={`tv_${movie.id}`} className="title result" href={movieUrl} title="Supernatural" alt="Supernatural">{movie.name}</a>
					<span className="vote_average">{movie.vote_average}<span id="rating_52570e0a19c295731c001733" className="glyphicons glyphicons-star x1 rating tv"></span></span>
				</p>
				<p className="meta flex">
					<span className="release_date"><span className="glyphicons glyphicons-calendar x1"></span>  {movie.first_air_date.split('-')[0]}</span>
					<span className="genres"></span>
				</p>
				<p className="overview">{movie.overview}</p>
				<p className="view_more">
					<a id={`tv_${movie.id}`} className="result" href={movieUrl} title="Supernatural" alt="Supernatural">More Info</a>
				</p>
			</div>
		</div>
	);
}

MovieSummary.propTypes = {
	movie: shape({
		id: number.isRequired,
		poster_path: string.isRequired,
		name: string.isRequired,
		first_air_date: string,
		// genres: arrayOf(string),
		overview: string.isRequired,
		vote_average: number.isRequired
	})
};

export default MovieSummary;