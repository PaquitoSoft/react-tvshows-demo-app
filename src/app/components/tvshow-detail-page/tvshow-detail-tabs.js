import React from 'react';

function TvShowDetailTabs() {
	return (
		<div className="content_wrapper full_width bottom_border">
			<ul className="shortcut_bar">
				<li><a className="" href="/tv/57243-doctor-who/discuss?language=en" title="Discussions">Discussions</a></li>
				<li className=""><a className="" href="/tv/57243-doctor-who/reviews?language=en" title="Reviews">Reviews</a></li>
				<li className=""><a className="" href="/tv/57243-doctor-who/videos?language=en" title="Videos">Videos</a></li>
				<li className=""><a className="" href="/tv/57243-doctor-who/images/posters?language=en" title="Images">Images</a></li>
				<li className=""><a className="" href="/tv/57243-doctor-who/changes?language=en" title="Changes">Changes</a></li>
				<li><a className="no_click report" href="#" title="Report">Report</a></li>
				<li><a id="share" className="no_click" href="#" title="Share">Share</a></li>
			</ul>
		</div>
	);
}

export default TvShowDetailTabs;