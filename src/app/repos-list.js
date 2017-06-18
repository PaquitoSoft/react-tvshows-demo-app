import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

function ReposList({ repos }) {
  const reposList = repos.map((repo, index) => {
    return (
      <li key={index}>
        <a href={repo.html_url} target="_blank">{repo.name}</a>
      </li>
    );
  });

  return (
    <ul>
      {reposList}
    </ul>
  );
}

ReposList.propTypes = {
  repos: arrayOf(shape({
    name: string.isRequired,
    html_url: string.isRequired
  }))
};

export default ReposList;
