import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './layout/header';
import HomePage from './home-page/';
import TvShowDetailPage from './tvshow-detail-page/';

function App() {
	return (
		<BrowserRouter>
			<div className="page_wrap tv_wrap">
				<Header />

				<main id="main">
					<Route exact path="/" component={HomePage} />
					<Route path="/movie/:movieId" component={TvShowDetailPage} />
				</main>    
			</div>
		</BrowserRouter>
	);
}

export default App;