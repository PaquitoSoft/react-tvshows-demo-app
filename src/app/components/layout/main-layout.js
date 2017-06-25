import React from 'react';
import { element } from 'prop-types';

import Header from './header';

function MainLayout({ children }) {
	return (
		<div className="page_wrap tv_wrap">
			<Header />

			<main id="main">
				{children}
			</main>    
		</div>
	);
}

MainLayout.propTypes = {
	children: element.isRequired
};

export default MainLayout;