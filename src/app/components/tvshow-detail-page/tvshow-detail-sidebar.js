import React from 'react';

function TvShowDetailSidebar() {
	return (
		<div>
			<section className="split_column season">
				<div>
					<div className="column no_bottom_pad">
						<section className="facts left_column">												
							<p><strong><bdi>Status</bdi></strong> Returning Series</p>
							<p><strong><bdi>Network</bdi></strong> <a href="/network/4">BBC One</a>, <a href="/network/493">BBC America</a>, <a href="/network/511">France 4</a></p>												
						</section>

						<section className="genres right_column">
							<h4><bdi>Genres</bdi></h4>
							<ul>
								<li><a className="rounded" href="/genre/10759-action-adventure?language=en">Action &amp; Adventure</a></li>
								<li><a className="rounded" href="/genre/18-drama?language=en">Drama</a></li>
								<li><a className="rounded" href="/genre/10765-sci-fi-fantasy?language=en">Sci-Fi &amp; Fantasy</a></li>
							</ul>
						</section>

						
					</div>
				</div>

				<div>
					<div className="column right_column">
						<section className="content_score">
							<h4 dir="auto">Content Score</h4>
							<div className="content_score">
								<div className="true" style={{width: '71%'}}>
									<p>71</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	);
}

export default TvShowDetailSidebar;