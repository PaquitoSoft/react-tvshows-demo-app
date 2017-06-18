import React from 'react';
import { func } from 'prop-types';

function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit(e.target.querySelector('[name="username"]').value);
    }}>
      <input type="text" name="username" size="40" autoFocus placeholder="Type a GitHub user account name" />
      <button type="submit">List repos</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: func.isRequired
};

export default SearchForm;
