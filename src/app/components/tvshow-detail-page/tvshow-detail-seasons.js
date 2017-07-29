import React from 'react';

function TvShowDetailSeasons() {
	return (
		<section className="panel season">
			<h3><bdi>Current Season</bdi></h3>
			<div className="season card">
				<a href="/season-details.html">
					<img className="poster fade lazyautosizes lazyloaded" data-sizes="auto" data-src="https://image.tmdb.org/t/p/w130_and_h195_bestv2/8HPLQQqTPfy7Oiligw9FXcfig9w.jpg" data-srcset="https://image.tmdb.org/t/p/w130_and_h195_bestv2/8HPLQQqTPfy7Oiligw9FXcfig9w.jpg 1x, https://image.tmdb.org/t/p/w260_and_h390_bestv2/8HPLQQqTPfy7Oiligw9FXcfig9w.jpg 2x" alt="Doctor Who" sizes="130px" srcSet="https://image.tmdb.org/t/p/w130_and_h195_bestv2/8HPLQQqTPfy7Oiligw9FXcfig9w.jpg 1x, https://image.tmdb.org/t/p/w260_and_h390_bestv2/8HPLQQqTPfy7Oiligw9FXcfig9w.jpg 2x" src="https://image.tmdb.org/t/p/w130_and_h195_bestv2/8HPLQQqTPfy7Oiligw9FXcfig9w.jpg" />
				</a>
				<div className="content">
					<div>
						<h2><a href="/tv/57243-doctor-who/season/10?language=en">Series 10</a></h2>
						<h4>2017 | 12 Episodes</h4>
						<div className="season_overview" style={{'wordWrap': 'break-word'}} >
							<p>Doctor Who, Season 10 will see Peter Capaldi embark on his thrilling final chapter as the Twelfth Doctor as well as the introduction of brand new companion Pearl Mackie as Bill Potts and the return of Matt Lucas as Nardole. Fantastic adventures and terrifying monsters await the team of heroes as they journey through space and time. Expect laughter, danger and exhilarating escapades in this final season under the helm of lead writer and executive producer Steven Moffat.</p>
						</div>
					</div>  
				</div>
			</div>
			<p className="new_button"><a className="" href="/tv/57243-doctor-who/seasons?language=en">View All Seasons</a></p>
		</section>
	);
}

export default TvShowDetailSeasons;
