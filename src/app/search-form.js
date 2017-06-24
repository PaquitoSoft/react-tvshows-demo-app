import React from 'react';
import { func } from 'prop-types';

function SearchForm({ onSubmit }) {
	let input;

	return (
		<form onSubmit={e => {
			e.preventDefault();
			if (input.value.length) {
				onSubmit(input.value);
			}
		}}>
			<input
				type="text"
				name="username"
				ref={node => input = node}
				size="40"
				autoFocus
				placeholder="Type a GitHub user account name"
			/>
			<button type="submit">List repos</button>
		</form>
	);
}

SearchForm.propTypes = {
	onSubmit: func.isRequired
};

export default SearchForm;
