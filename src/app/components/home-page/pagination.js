import React from 'react';
import { number, string } from 'prop-types';

function Pagination({ totalPages, totalResults, currentPage, urlPath }) {
	const prevLink = (
		<a href={`${urlPath}?page=${currentPage - 1}`}>
			<span class="glyphicons glyphicons-circle-arrow-left x1"></span>
		</a>
	);

	return (
		<div className="pagination">
			<p className="left">Currently on page: {currentPage} of {totalPages} <span className="total_results grey">({totalResults.toLocaleString()} results)</span></p>
			<p className="right pagination">
				{currentPage > 1 && prevLink}
				<a href={`${urlPath}?page=${currentPage + 1}`}>
					<span className="glyphicons glyphicons-circle-arrow-right x1"></span>
				</a>
			</p>
		</div>
	);
}

Pagination.propTypes = {
	totalPages: number.isRequired,
	totalResults: number.isRequired,
	currentPage: number.isRequired,
	urlPath: string.isRequired
};

export default Pagination;
