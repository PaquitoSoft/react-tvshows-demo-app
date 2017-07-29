import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="normal">
			<div className="content">
				<div className="sub_media">
					<div className="left">
						<ul className="primary">
							<li className="logo">
								<Link to="/">
									<img width="91" height="81" src="/images/logo/91x81.png" srcSet="/images/logo/91x81.png 1x, /images/logo/182x162.png 2x, /images/logo/273x243.png 3x" />
								</Link>
							</li>
							<li>
								<Link to="/discover?language=en">Popular</Link>
							</li>
							<li>
								<Link to="/movie?language=en">Top Rated</Link>
							</li>
							<li>
								<Link to="/tv?language=en">Upcoming</Link>
							</li>
							<li>
								<Link to="/person?language=en">Now Playing</Link>
							</li>
						</ul>
					</div>

				</div>
			</div>

			<div className="search_bar">
				<section className="search">
					<div className="sub_media">
						<form id="search_form" action="/search?language=en" method="get" acceptCharset="utf-8">
							<input type="hidden" name="language" value="en-US" />
							<span tabIndex="-1" role="presentation" className="k-widget k-autocomplete k-header k-state-default">
								<input dir="auto" id="search_v4" name="query" type="text" tabIndex="2" autoCorrect="off" autoComplete="off" spellCheck="false" placeholder="Search for a movie, tv show, person..." value="" data-role="autocomplete" className="k-input" role="textbox" aria-haspopup="true" aria-disabled="false" aria-readonly="false" aria-owns="search_v4_listbox" aria-autocomplete="list" style={{width: '100%'}} />
								<span unselectable="on" className="k-icon k-clear-value k-i-close" title="clear" role="button" tabIndex="-1"></span><span className="k-icon k-i-loading" style={{display: 'none'}}></span></span>
							<input type="submit" />
						</form>
					</div>
				</section>
			</div>

			<div className="k-list-container k-popup k-group k-reset" id="search_v4-list" data-role="popup" style={{display: 'none', position: 'absolute'}}>
				<div className="k-group-header" style={{display: 'none'}}></div>
				<div className="k-list-scroller" unselectable="on">
					<ul unselectable="on" className="k-list k-reset" tabIndex="-1" aria-hidden="true" id="search_v4_listbox" aria-live="polite" data-role="staticlist" role="listbox">                        
					</ul>
				</div>
				<div className="k-nodata" style={{display: 'none'}}>
					<div></div>
				</div></div>
		</header>
	);
}

export default Header;
